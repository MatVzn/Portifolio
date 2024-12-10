'use client';

import type { Variants } from 'motion/react';
import { motion, useAnimation } from 'motion/react';
import { useState } from 'react';
import { useEffect } from 'react';

const pathVariant: Variants = {
  normal: { pathLength: 1, opacity: 1, pathOffset: 0 },
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1],
    pathOffset: [1, 0],
  },
};

const circleVariant: Variants = {
  normal: {
    pathLength: 1,
    pathOffset: 0,
    scale: 1,
  },
  animate: {
    pathLength: [0, 1],
    pathOffset: [1, 0],
    scale: [0.5, 1],
  },
};

interface UserIconProps {
    parentSelector: string
}

export function UserIcon({parentSelector}: UserIconProps) {
  const controls = useAnimation();

  useEffect(() => {
    const parent = document.querySelector(parentSelector);

    if (!parent) {
      console.error(`Parent element with selector "${parentSelector}" not found.`);
      return;
    }

    const handleMouseEnter = () => {
        controls.start('animate');
    };

    const handleMouseLeave = () => {
        controls.start('normal');
    };

    parent.addEventListener('mouseenter', handleMouseEnter);
    parent.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      parent.removeEventListener('mouseenter', handleMouseEnter);
      parent.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [parentSelector]);

  return (
    <div
      className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
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
          cx="12"
          cy="8"
          r="5"
          transition={{
            delay: 0.2,
            duration: 0.4,
          }}
          animate={controls}
          variants={circleVariant}
        />

        <motion.path
          d="M20 21a8 8 0 0 0-16 0"
          variants={pathVariant}
          transition={{
            delay: 0.4,
            duration: 0.6,
          }}
          animate={controls}
        />
      </svg>
    </div>
  );
};