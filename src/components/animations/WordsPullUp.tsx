import React from 'react';
import { motion } from 'motion/react';

interface WordsPullUpProps {
  text: string;
  className?: string;
  delay?: number;
}

export const WordsPullUp: React.FC<WordsPullUpProps> = ({ text, className = "", delay = 0 }) => {
  const words = text.split(" ");

  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.2em] last:mr-0">
          <motion.span
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.33, 1, 0.68, 1],
              delay: delay + i * 0.05
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

interface MultiStyleSegment {
  text: string;
  className?: string;
}

export const WordsPullUpMultiStyle: React.FC<{ segments: MultiStyleSegment[], className?: string }> = ({ segments, className = "" }) => {
  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {segments.map((segment, segmentIndex) => {
        const words = segment.text.split(" ");
        return words.map((word, i) => (
          <span key={`${segmentIndex}-${i}`} className={`inline-block overflow-hidden mr-[0.2em] last:mr-0 ${segment.className || ""}`}>
            <motion.span
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.33, 1, 0.68, 1],
                delay: (segmentIndex * 0.2) + (i * 0.05)
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
          </span>
        ));
      })}
    </span>
  );
};
