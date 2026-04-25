"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ease = [0.25, 1, 0.5, 1];

const LetterA = ({ delay }: { delay: number }) => (
  <motion.svg viewBox="0 0 60 100" className="h-10 md:h-16 lg:h-20 shrink-0" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="butt" strokeLinejoin="round">
    <motion.line x1="15" x2="45" initial={{ y1: 100, y2: 100, opacity: 0 }} animate={{ y1: 65, y2: 65, opacity: 1 }} transition={{ duration: 0.4, delay, ease }} />
    <motion.line x1="5" y1="100" x2="30" y2="0" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: delay + 0.2, ease }} />
    <motion.line x1="55" y1="100" x2="30" y2="0" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: delay + 0.2, ease }} />
  </motion.svg>
);

const LetterC = ({ delay }: { delay: number }) => (
  <motion.svg viewBox="0 0 60 100" className="h-10 md:h-16 lg:h-20 shrink-0" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="butt" strokeLinejoin="round">
    <motion.path d="M 55 80 A 25 40 0 1 1 55 20" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay, ease }} />
  </motion.svg>
);

const LetterR = ({ delay }: { delay: number }) => (
  <motion.svg viewBox="0 0 60 100" className="h-10 md:h-16 lg:h-20 shrink-0" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="butt" strokeLinejoin="round">
    <motion.line x1="10" y1="0" x2="10" y2="100" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3, delay, ease }} />
    <motion.path d="M 10 0 L 30 0 A 20 25 0 0 1 30 50 L 10 50" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: delay + 0.15, ease }} />
    <motion.line x1="25" y1="50" x2="50" y2="100" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3, delay: delay + 0.35, ease }} />
  </motion.svg>
);

const LetterE = ({ delay }: { delay: number }) => (
  <motion.svg viewBox="0 0 50 100" className="h-10 md:h-16 lg:h-20 shrink-0" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="butt" strokeLinejoin="round">
    <motion.line x1="10" y1="0" x2="10" y2="100" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3, delay, ease }} />
    <motion.line x1="10" y1="0" x2="45" y2="0" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.2, delay: delay + 0.15, ease }} />
    <motion.line x1="10" y1="50" x2="35" y2="50" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.2, delay: delay + 0.25, ease }} />
    <motion.line x1="10" y1="100" x2="45" y2="100" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.2, delay: delay + 0.35, ease }} />
  </motion.svg>
);

const LetterD = ({ delay }: { delay: number }) => (
  <motion.svg viewBox="0 0 60 100" className="h-10 md:h-16 lg:h-20 shrink-0" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="butt" strokeLinejoin="round">
    <motion.line x1="10" y1="0" x2="10" y2="100" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3, delay, ease }} />
    <motion.path d="M 10 0 L 30 0 A 25 50 0 0 1 30 100 L 10 100" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: delay + 0.15, ease }} />
  </motion.svg>
);

const LetterI = ({ delay }: { delay: number }) => (
  <motion.svg viewBox="0 0 20 100" className="h-10 md:h-16 lg:h-20 shrink-0" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="butt" strokeLinejoin="round">
    <motion.line x1="10" y1="100" x2="10" y2="0" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay, ease }} />
  </motion.svg>
);

const LetterN = ({ delay }: { delay: number }) => (
  <motion.svg viewBox="0 0 60 100" className="h-10 md:h-16 lg:h-20 shrink-0" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="butt" strokeLinejoin="round">
    <motion.line x1="10" y1="0" x2="10" y2="100" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3, delay, ease }} />
    <motion.line x1="10" y1="0" x2="50" y2="100" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3, delay: delay + 0.15, ease }} />
    <motion.line x1="50" y1="100" x2="50" y2="0" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3, delay: delay + 0.3, ease }} />
  </motion.svg>
);

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"drawing" | "crossfade">("drawing");

  useEffect(() => {
    // Phase 1: SVGs draw (0-1800ms)
    const t1 = setTimeout(() => setPhase("crossfade"), 1800);
    // Phase 2: Fade to exact font text (1800-2200ms)
    // Then trigger transition to Hero via layoutId
    const t2 = setTimeout(() => onComplete(), 2300);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative flex items-center justify-center">
        {/* SVG Drawing Container */}
        <motion.div
          className="flex gap-2 lg:gap-3 items-center text-silver"
          initial={{ opacity: 1 }}
          animate={{ opacity: phase === "crossfade" ? 0 : 1 }}
          transition={{ duration: 0.4 }}
        >
          <LetterA delay={0} />
          <LetterC delay={0.15} />
          <LetterC delay={0.3} />
          <LetterR delay={0.45} />
          <LetterE delay={0.6} />
          <LetterD delay={0.75} />
          <LetterI delay={0.9} />
          <LetterA delay={1.05} />
          <LetterN delay={1.2} />
        </motion.div>

        {/* Font Text - Perfectly synced with Hero layoutId */}
        <motion.h1
          layoutId="hero-title"
          className="absolute inset-0 flex items-center justify-center text-silver font-medium tracking-[0.25em] text-5xl md:text-6xl lg:text-7xl pointer-events-none uppercase"
          style={{ fontFamily: "var(--font-exo-2)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === "crossfade" ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        >
          ACCREDIAN
        </motion.h1>
      </div>
    </motion.div>
  );
}
