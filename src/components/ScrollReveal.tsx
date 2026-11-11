import React from 'react';
import { motion } from 'motion/react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  margin?: string;
}

/**
 * ScrollReveal: Subtle luxury scroll-triggered fade-in animation component.
 * Uses hardware-accelerated transforms (translateY) and opacity with a refined cubic-bezier curve.
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.55,
  yOffset = 20,
  margin = '-60px',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Custom smooth ease-out curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
