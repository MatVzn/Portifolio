'use client';

import type { Transition } from 'motion/react';
import { motion, useAnimation } from 'motion/react';
import { useEffect } from 'react';

const defaultTransition: Transition = {
  type: 'spring',
  stiffness: 160,
  damping: 17,
  mass: 1,
};

interface CopyIconProps {
    isHovered: boolean
}

export function CopyIcon({isHovered}: CopyIconProps) {
  const controls = useAnimation();
    
  useEffect(() => {
    isHovered
    ? controls.start('animate')
    : controls.start('normal')
  },[isHovered])

  return (
    <div
      className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.rect
          width="14"
          height="14"
          x="8"
          y="8"
          rx="2"
          ry="2"
          variants={{
            normal: { translateY: 0, translateX: 0 },
            animate: { translateY: -3, translateX: -3 },
          }}
          animate={controls}
          transition={defaultTransition}
        />
        <motion.path
          d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
          variants={{
            normal: { x: 0, y: 0 },
            animate: { x: 3, y: 3 },
          }}
          transition={defaultTransition}
          animate={controls}
        />
      </svg>
    </div>
  );
};