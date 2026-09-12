"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "./Button";
import { CopyIcon, CheckIcon, XIcon } from "lucide-react";

const EMAIL = "matteovoleite@gmail.com";

type CopyState = "idle" | "copied" | "error";
type TooltipPhase = "closed" | "open" | "closing";

const ICON_TRANSITION = {
  type: "spring",
  stiffness: 500,
  damping: 20,
  mass: 0.6,
} as const;

// deslocamentos fixos (x, y) de cada partícula do burst — já com um
// baseline de -2px embutido pra centralizar o pontinho de 4px no meio
// do botão (ver initial/animate do CopyIcon abaixo)
const PARTICLES = [
  { x: 10 - 2, y: -10 - 2 },
  { x: -10 - 2, y: -10 - 2 },
  { x: 12 - 2, y: 3 - 2 },
  { x: -12 - 2, y: 3 - 2 },
  { x: 1 - 2, y: -13 - 2 },
  { x: 1 - 2, y: 11 - 2 },
];

export default function ContactButton() {
  const [phase, setPhase] = useState<TooltipPhase>("closed");
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const [burstKey, setBurstKey] = useState(0);

  const leaveTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resetTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleEnter() {
    if (leaveTimeout.current) clearTimeout(leaveTimeout.current);
    setPhase("open");
  }

  function handleLeave() {
    leaveTimeout.current = setTimeout(() => setPhase("closing"), 150);
  }

  function handleAnimationEnd() {
    if (phase === "closing") setPhase("closed");
  }

  function legacyCopy(text: string): boolean {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    let success = false;
    try {
      success = document.execCommand("copy");
    } catch {
      success = false;
    }
    document.body.removeChild(textarea);
    return success;
  }

  async function handleCopy(e: React.MouseEvent) {
    e.stopPropagation();
    let success = false;

    try {
      await navigator.clipboard.writeText(EMAIL);
      success = true;
    } catch {
      success = legacyCopy(EMAIL);
    }

    // remonta o burst mesmo se o usuário clicar copiar várias vezes seguidas
    if (success) setBurstKey((k) => k + 1);

    setCopyState(success ? "copied" : "error");

    if (resetTimeout.current) clearTimeout(resetTimeout.current);
    resetTimeout.current = setTimeout(() => setCopyState("idle"), 1500);
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Button
        size="lg"
        variant="default"
        className="pr-5 relative cursor-pointer gap-2 rounded-full border border-white text-base hover:bg-white hover:text-black"
        onClick={() => {
          window.location.href = `mailto:${EMAIL}`;
        }}
      >
        <span className="absolute left-4 inline-block size-2 animate-ping rounded-full bg-green-500 motion-reduce:animate-none" />
        <span className="mr-1 inline-block size-2 rounded-full bg-green-500" />
        Entre em contato
      </Button>

      {phase !== "closed" && (
        <div className="absolute top-full left-1/2 z-20 -translate-x-1/2 pt-2">
          <div
            role="tooltip"
            onAnimationEnd={handleAnimationEnd}
            className={
              "flex flex-col items-center gap-1 whitespace-nowrap rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-200 shadow-lg " +
              (phase === "open" ? "animate-jelly-in" : "animate-jelly-out")
            }
          >
            <div className="flex items-center gap-2">
              <span>{EMAIL}</span>

              <button
                type="button"
                onClick={handleCopy}
                aria-label="Copiar email"
                className="relative flex size-6 cursor-pointer items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
              >
                {/* burst de partículas — só existe no instante da cópia bem-sucedida */}
                <AnimatePresence>
                  {copyState === "copied" && (
                    <motion.span
                      key={burstKey}
                      className="pointer-events-none absolute inset-0"
                    >
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

                {/* troca animada entre copiar / check / erro */}
                <AnimatePresence mode="wait" initial={false}>
                  {copyState === "copied" && (
                    <motion.span
                      key="check"
                      className="flex"
                      initial={{ scale: 0.3, rotate: -90, opacity: 0 }}
                      animate={{ scale: 1, rotate: 0, opacity: 1 }}
                      exit={{ scale: 0.3, rotate: 90, opacity: 0 }}
                      transition={ICON_TRANSITION}
                    >
                      <CheckIcon size={14} className="text-green-500" />
                    </motion.span>
                  )}

                  {copyState === "error" && (
                    <motion.span
                      key="error"
                      className="flex"
                      initial={{ scale: 0.3, rotate: -90, opacity: 0 }}
                      animate={{ scale: 1, rotate: 0, opacity: 1 }}
                      exit={{ scale: 0.3, rotate: 90, opacity: 0 }}
                      transition={ICON_TRANSITION}
                    >
                      <XIcon size={14} className="text-red-500" />
                    </motion.span>
                  )}

                  {copyState === "idle" && (
                    <motion.span
                      key="copy"
                      className="flex"
                      initial={{ scale: 0.3, rotate: -90, opacity: 0 }}
                      animate={{ scale: 1, rotate: 0, opacity: 1 }}
                      exit={{ scale: 0.3, rotate: 90, opacity: 0 }}
                      transition={ICON_TRANSITION}
                    >
                      <CopyIcon size={14} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>

            {copyState === "error" && (
              <span className="text-xs text-red-400">
                Não foi possível copiar. Selecione o texto manualmente.
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}