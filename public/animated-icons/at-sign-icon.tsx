'use client';

import type { Variants } from 'motion/react';
import { motion, useAnimation } from 'motion/react';
import { useEffect, useRef } from 'react';

const circleVariants: Variants = {
  normal: {
    opacity: 1,
    pathLength: 1,
    pathOffset: 0,
    transition: {
      duration: 0.4,
      opacity: { duration: 0.1 },
    },
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    pathOffset: [1, 0],
    transition: {
      duration: 0.3,
      opacity: { duration: 0.1 },
    },
  },
};

const pathVariants: Variants = {
  normal: {
    opacity: 1,
    pathLength: 1,
    transition: {
      delay: 0.4,
      duration: 0.6,
      opacity: { duration: 0.6, delay: 0.4 },
    },
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    transition: {
      delay: 0.4,
      duration: 0.6,
      opacity: { duration: 0.6, delay: 0.4 },
    },
  },
};

interface AtSignIconProps {
  parentSelector: string;
}

export function AtSignIcon({ parentSelector }: AtSignIconProps) {
  const controls = useAnimation();
  const isAnimating = useRef(false); // Controle de estado da animação

  useEffect(() => {
    const parent = document.querySelector(parentSelector);

    if (!parent) {
      console.error(`Parent element with selector "${parentSelector}" not found.`);
      return;
    }

    const handleMouseEnter = () => {
      if (isAnimating.current) return; // Bloqueia reinício enquanto animação está ativa
      isAnimating.current = true;
      controls.start('animate').then(() => {
        isAnimating.current = false; // Libera após a animação concluir
      });
    };

    parent.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      parent.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [parentSelector, controls]);

  return (
    <div
      className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
      onMouseEnter={() => {
        if (!isAnimating.current) {
          isAnimating.current = true;
          controls.start('animate').then(() => {
            isAnimating.current = false;
          });
        }
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.circle
          variants={circleVariants}
          animate={controls}
          cx="12"
          cy="12"
          r="4"
        />
        <motion.path
          variants={pathVariants}
          animate={controls}
          d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"
        />
      </svg>
    </div>
  );
}