import React, { useState, useEffect, useRef } from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

// Hook to check prefers-reduced-motion
export function usePrefersReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(mediaQuery.matches);

    const listener = (event: MediaQueryListEvent) => {
      setPrefersReduced(event.matches);
    };

    mediaQuery.addEventListener('change', listener);
    return () => {
      mediaQuery.removeEventListener('change', listener);
    };
  }, []);

  return prefersReduced;
}

// Visual variants based on Linear/Vercel styling
export const revealVariants = {
  fadeUp: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.97 },
    visible: { opacity: 1, scale: 1 },
  },
  blurReveal: {
    hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  },
};

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  variant?: 'fadeUp' | 'fadeIn' | 'scaleIn' | 'blurReveal';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.7,
  threshold = 0.1,
  className = '',
  once = true,
  ...props
}) => {
  const prefersReduced = usePrefersReducedMotion();

  // If user prefers reduced motion, suppress moving transitions
  if (prefersReduced) {
    return (
      <div className={className} {...(props as any)}>
        {children}
      </div>
    );
  }

  const selectedVariant = revealVariants[variant];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={selectedVariant}
      transition={{
        duration,
        ease: [0.16, 1, 0.3, 1], // Cubic-bezier from prompt
        delay,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Reusable stagger container component
interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  staggerConfig?: {
    staggerChildren?: number;
    delayChildren?: number;
  };
  className?: string;
  once?: boolean;
  threshold?: number;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerConfig,
  className = '',
  once = true,
  threshold = 0.1,
  ...props
}) => {
  const prefersReduced = usePrefersReducedMotion();

  if (prefersReduced) {
    return (
      <div className={className} {...(props as any)}>
        {children}
      </div>
    );
  }

  const { staggerChildren = 0.1, delayChildren = 0 } = staggerConfig || {};

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

interface StaggerChildProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  variant?: 'fadeUp' | 'fadeIn' | 'scaleIn' | 'blurReveal';
  className?: string;
  duration?: number;
}

export const StaggerChild: React.FC<StaggerChildProps> = ({
  children,
  variant = 'fadeUp',
  className = '',
  duration = 0.7,
  ...props
}) => {
  const prefersReduced = usePrefersReducedMotion();

  if (prefersReduced) {
    return (
      <div className={className} {...(props as any)}>
        {children}
      </div>
    );
  }

  const selectedVariant = revealVariants[variant];

  return (
    <motion.div
      variants={selectedVariant}
      transition={{
        duration,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * Premium Spotlight/Glow effect wrapper for cards
 * Tracks mouse cursor to render a subtle dark-mode radial gradient overlay
 */
interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string; // e.g. "rgba(13, 148, 136, 0.15)" (teal color)
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  glowColor = 'rgba(20, 184, 166, 0.12)', // Subtle teal glow
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      className={`relative overflow-hidden group transition-all duration-300 ${className}`}
      {...props}
    >
      {/* Dynamic Ambient Glow overlay */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, ${glowColor}, transparent 80%)`,
        }}
      />
      
      {/* Extra subtle border light */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 border border-brand-teal/20"
        style={{
          background: `radial-gradient(120px circle at ${coords.x}px ${coords.y}px, rgba(20, 184, 166, 0.4), transparent 80%)`,
          mixBlendMode: 'overlay',
        }}
      />

      <div className="relative z-20 h-full w-full">
        {children}
      </div>
    </div>
  );
};
