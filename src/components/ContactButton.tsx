"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  type Variants,
  type Transition,
} from "motion/react";
import { CopyIcon, CheckIcon } from "lucide-react";
import { buttonVariants } from "./ui/Button";
import { cn } from "cn";

const EMAIL = "matteovoleite@gmail.com";
const LABEL = "Entre em contato";
const EMAIL_CHARS = EMAIL.split("");
const LABEL_CHARS = LABEL.split("");
const MAX_CHARS = Math.max(EMAIL_CHARS.length, LABEL_CHARS.length);

const MORPH_DURATION = 0.75;
const EASE = [0.33, 0, 0.2, 1] as const;

const MORPH: Transition = { duration: MORPH_DURATION, ease: EASE };
const INSTANT: Transition = { duration: 0 };

const CHAR_DELAY = 0.05;
const CHAR_STAGGER = (MORPH_DURATION * 0.7) / MAX_CHARS;

const ICON_SPACE = 32;
const DOT_SPACE = 20;

const PADDING_RIGHT_CLOSED = 20;
const PADDING_RIGHT_OPEN = 16;

const ICON_TRANSITION: Transition = {
  type: "spring",
  stiffness: 500,
  damping: 20,
  mass: 0.6,
};

const CHAR_TRANSITION: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 28,
  mass: 0.6,
};

const PARTICLES = [
  { x: 8, y: -12 },
  { x: -12, y: -12 },
  { x: 10, y: 1 },
  { x: -14, y: 1 },
  { x: -1, y: -15 },
  { x: -1, y: 9 },
];

function nbsp(char: string) {
  return char === " " ? "\u00A0" : char;
}

export default function ContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const [copied, setCopied] = useState(false);
  const [burstKey, setBurstKey] = useState(0);

  const width = useMotionValue(0);
  const paddingRight = useMotionValue(PADDING_RIGHT_CLOSED);

  const shellRef = useRef<HTMLDivElement>(null);
  const labelRulerRef = useRef<HTMLSpanElement>(null);
  const emailRulerRef = useRef<HTMLSpanElement>(null);

  const hovering = useRef(false);
  const animating = useRef(false);
  const openState = useRef(false);
  const morphTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resetTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const prefersReducedMotion = useReducedMotion();

  const measureTarget = useCallback((): number | null => {
    const shell = shellRef.current;
    const labelRuler = labelRulerRef.current;
    const emailRuler = emailRulerRef.current;
    if (!shell || !labelRuler || !emailRuler) return null;

    const style = getComputedStyle(shell);
    const extra =
      parseFloat(style.paddingLeft) +
      parseFloat(style.borderLeftWidth) +
      parseFloat(style.borderRightWidth);

    const inner = openState.current
      ? emailRuler.getBoundingClientRect().width + ICON_SPACE + PADDING_RIGHT_OPEN
      : labelRuler.getBoundingClientRect().width + DOT_SPACE + PADDING_RIGHT_CLOSED;

    return Math.ceil(inner + extra);
  }, []);

  useLayoutEffect(() => {
    let cancelled = false;

    const applyMeasure = () => {
      if (cancelled) return;
      const target = measureTarget();
      if (target === null) return;
      width.set(target);
      setReady(true);
    };

    if (document.fonts?.status === "loaded") {
      applyMeasure();
    } else {
      document.fonts?.ready.then(applyMeasure);
    }

    const observer = new ResizeObserver(() => {
      if (animating.current) return;
      const next = measureTarget();
      if (next !== null) width.set(next);
    });

    if (labelRulerRef.current) observer.observe(labelRulerRef.current);
    if (emailRulerRef.current) observer.observe(emailRulerRef.current);

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [measureTarget, width]);

  useLayoutEffect(() => {
    if (!ready) return;

    const target = measureTarget();
    if (target === null) return;

    const transition = prefersReducedMotion ? INSTANT : MORPH;

    const widthControls = animate(width, target, transition);
    const paddingControls = animate(
      paddingRight,
      isOpen ? PADDING_RIGHT_OPEN : PADDING_RIGHT_CLOSED,
      transition
    );

    return () => {
      widthControls.stop();
      paddingControls.stop();
    };
  }, [isOpen, ready, measureTarget, width, paddingRight, prefersReducedMotion]);

  useEffect(
    () => () => {
      if (morphTimeout.current) clearTimeout(morphTimeout.current);
      if (resetTimeout.current) clearTimeout(resetTimeout.current);
    },
    []
  );

  function sync() {
    if (animating.current || hovering.current === openState.current) return;

    animating.current = true;
    openState.current = !openState.current;
    setIsOpen(openState.current);

    morphTimeout.current = setTimeout(
      () => {
        animating.current = false;
        sync();
      },
      prefersReducedMotion ? 0 : MORPH_DURATION * 1000
    );
  }

  function setHover(value: boolean) {
    hovering.current = value;
    sync();
  }

  async function handleCopy() {
    if (!isOpen) return;

    try {
      await navigator.clipboard.writeText(EMAIL);
      setBurstKey((k) => k + 1);
      setCopied(true);

      if (resetTimeout.current) clearTimeout(resetTimeout.current);
      resetTimeout.current = setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (isOpen && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      handleCopy();
    }
  }

  const charsContainer: Variants = {
    closed: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : CHAR_STAGGER,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: prefersReducedMotion ? 0 : CHAR_DELAY,
        staggerChildren: prefersReducedMotion ? 0 : CHAR_STAGGER,
      },
    },
  };

  const emailChar: Variants = {
    closed: {
      opacity: 0,
      y: 10,
      filter: "blur(5px)",
      transition: prefersReducedMotion ? INSTANT : CHAR_TRANSITION,
    },
    open: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: prefersReducedMotion ? INSTANT : CHAR_TRANSITION,
    },
  };

  const labelChar: Variants = {
    closed: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: prefersReducedMotion ? INSTANT : CHAR_TRANSITION,
    },
    open: {
      opacity: 0,
      y: -10,
      filter: "blur(5px)",
      transition: prefersReducedMotion ? INSTANT : CHAR_TRANSITION,
    },
  };

  const state = isOpen ? "open" : "closed";

  return (
    <motion.div
      ref={shellRef}
      tabIndex={0}
      role="button"
      aria-expanded={isOpen}
      aria-label={isOpen ? `Copiar email ${EMAIL}` : LABEL}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      onClick={handleCopy}
      onKeyDown={handleKeyDown}
      style={ready ? { width, paddingRight } : { paddingRight: PADDING_RIGHT_CLOSED }}
      className={cn(
        buttonVariants({ variant: "default", size: "lg" }),
        "relative grid justify-start overflow-hidden border-0 bg-transparent text-white outline-none transition-none hover:bg-transparent",
        !ready && "w-fit",
        isOpen ? "cursor-pointer select-none" : "cursor-default"
      )}
    >
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 border transition-[border-radius,background-color,border-color] duration-700 ease-in-out",
          isOpen
            ? "rounded-[10px] border-zinc-700 bg-zinc-900 shadow-lg"
            : "rounded-[22px] border-white"
        )}
      />

      <span
        aria-hidden
        className="pointer-events-none invisible absolute left-0 top-0 flex whitespace-nowrap"
      >
        <span ref={labelRulerRef} className="flex text-base font-medium">
          {LABEL_CHARS.map((char, i) => (
            <span key={`label-ruler-${i}`} className="inline-block">
              {nbsp(char)}
            </span>
          ))}
        </span>
        <span ref={emailRulerRef} className="flex text-sm font-normal">
          {EMAIL_CHARS.map((char, i) => (
            <span key={`email-ruler-${i}`} className="inline-block">
              {char}
            </span>
          ))}
        </span>
      </span>

      <motion.div
        aria-hidden={isOpen}
        variants={charsContainer}
        initial={false}
        animate={state}
        className="pointer-events-none relative z-10 flex w-max items-center whitespace-nowrap text-base font-medium [grid-area:1/1]"
      >
        <motion.span variants={labelChar} className="relative mr-3 flex size-2 shrink-0">
          <span className="absolute inline-flex size-2 animate-ping rounded-full bg-green-500 motion-reduce:animate-none" />
          <span className="relative inline-flex size-2 rounded-full bg-green-500" />
        </motion.span>

        {LABEL_CHARS.map((char, i) => (
          <motion.span key={`label-${i}`} variants={labelChar} className="inline-block">
            {nbsp(char)}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        aria-hidden={!isOpen}
        variants={charsContainer}
        initial={false}
        animate={state}
        className={cn(
          "pointer-events-none relative z-10 flex w-max items-center whitespace-nowrap text-sm font-normal text-zinc-200 [grid-area:1/1]",
          !ready && "w-0 overflow-hidden"
        )}
      >
        {EMAIL_CHARS.map((char, i) => (
          <motion.span key={`email-${i}`} variants={emailChar} className="inline-block">
            {char}
          </motion.span>
        ))}

        <motion.span
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: isOpen ? ICON_SPACE : 0, opacity: isOpen ? 1 : 0 }}
          transition={prefersReducedMotion ? INSTANT : MORPH}
          className="relative flex h-6 shrink-0 items-center justify-end overflow-hidden text-zinc-400"
        >
          <span className="relative flex size-6 shrink-0 items-center justify-center">
            <AnimatePresence>
              {copied && (
                <motion.span key={burstKey} className="pointer-events-none absolute inset-0">
                  {PARTICLES.map((p, i) => (
                    <motion.span
                      key={i}
                      className="absolute left-1/2 top-1/2 block size-1 rounded-full bg-green-400"
                      initial={{ x: -2, y: -2, opacity: 1, scale: 1 }}
                      animate={{ x: p.x, y: p.y, opacity: 0, scale: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  ))}
                </motion.span>
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={copied ? "copied" : "idle"}
                initial={{ scale: 0.3, rotate: -90, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                exit={{ scale: 0.3, rotate: 90, opacity: 0 }}
                transition={ICON_TRANSITION}
                className="flex"
              >
                {copied ? (
                  <CheckIcon size={14} className="text-green-500" />
                ) : (
                  <CopyIcon size={14} />
                )}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.span>
      </motion.div>
    </motion.div>
  );
}