"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const ease: any = [0.25, 1, 0.5, 1];

// ---------- LETTER COMPONENTS ----------

const LetterA = ({ delay }: { delay: number }) => (
  <motion.svg viewBox="0 0 60 100" className="h-10 md:h-16 lg:h-20 shrink-0" fill="none" stroke="currentColor" strokeWidth="8">
    <motion.line x1="15" x2="45" initial={{ y1: 100, y2: 100, opacity: 0 }} animate={{ y1: 65, y2: 65, opacity: 1 }} transition={{ duration: 0.4, delay, ease }} />
    <motion.line x1="5" y1="100" x2="30" y2="0" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: delay + 0.2, ease }} />
    <motion.line x1="55" y1="100" x2="30" y2="0" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: delay + 0.2, ease }} />
  </motion.svg>
);

const LetterC = ({ delay }: { delay: number }) => (
  <motion.svg viewBox="0 0 60 100" className="h-10 md:h-16 lg:h-20 shrink-0" fill="none" stroke="currentColor" strokeWidth="8">
    <motion.path d="M 55 80 A 25 40 0 1 1 55 20" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay, ease }} />
  </motion.svg>
);

const LetterR = ({ delay }: { delay: number }) => (
  <motion.svg viewBox="0 0 60 100" className="h-10 md:h-16 lg:h-20 shrink-0" fill="none" stroke="currentColor" strokeWidth="8">
    <motion.line x1="10" y1="0" x2="10" y2="100" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3, delay, ease }} />
    <motion.path d="M 10 0 L 30 0 A 20 25 0 0 1 30 50 L 10 50" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: delay + 0.15, ease }} />
    <motion.line x1="25" y1="50" x2="50" y2="100" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3, delay: delay + 0.35, ease }} />
  </motion.svg>
);

const LetterE = ({ delay }: { delay: number }) => (
  <motion.svg viewBox="0 0 50 100" className="h-10 md:h-16 lg:h-20 shrink-0" fill="none" stroke="currentColor" strokeWidth="8">
    <motion.line x1="10" y1="0" x2="10" y2="100" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3, delay, ease }} />
    <motion.line x1="10" y1="0" x2="45" y2="0" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.2, delay: delay + 0.15, ease }} />
    <motion.line x1="10" y1="50" x2="35" y2="50" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.2, delay: delay + 0.25, ease }} />
    <motion.line x1="10" y1="100" x2="45" y2="100" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.2, delay: delay + 0.35, ease }} />
  </motion.svg>
);

const LetterD = ({ delay }: { delay: number }) => (
  <motion.svg viewBox="0 0 60 100" className="h-10 md:h-16 lg:h-20 shrink-0" fill="none" stroke="currentColor" strokeWidth="8">
    <motion.line x1="10" y1="0" x2="10" y2="100" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3, delay, ease }} />
    <motion.path d="M 10 0 L 30 0 A 25 50 0 0 1 30 100 L 10 100" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: delay + 0.15, ease }} />
  </motion.svg>
);

const LetterI = ({ delay }: { delay: number }) => (
  <motion.svg viewBox="0 0 20 100" className="h-10 md:h-16 lg:h-20 shrink-0" fill="none" stroke="currentColor" strokeWidth="8">
    <motion.line x1="10" y1="100" x2="10" y2="0" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay, ease }} />
  </motion.svg>
);

const LetterN = ({ delay }: { delay: number }) => (
  <motion.svg viewBox="0 0 60 100" className="h-10 md:h-16 lg:h-20 shrink-0" fill="none" stroke="currentColor" strokeWidth="8">
    <motion.line x1="10" y1="0" x2="10" y2="100" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3, delay, ease }} />
    <motion.line x1="10" y1="0" x2="50" y2="100" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3, delay: delay + 0.15, ease }} />
    <motion.line x1="50" y1="100" x2="50" y2="0" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3, delay: delay + 0.3, ease }} />
  </motion.svg>
);

// ---------- MAIN COMPONENT ----------

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"drawing" | "crossfade" | "moving">("drawing");
  const textRef = useRef<HTMLHeadingElement>(null);
  const [targetY, setTargetY] = useState(0);

  useEffect(() => {
    const scrollY = window.scrollY;

    // Save original styles
    const html = document.documentElement;
    const body = document.body;

    const originalHtmlOverflow = html.style.overflow;
    const originalBodyOverflow = body.style.overflow;
    const originalBodyPosition = body.style.position;
    const originalBodyTop = body.style.top;
    const originalBodyWidth = body.style.width;

    // LOCK SCROLL
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";

    // Phase 1: SVG draws (0 → 1.8s)
    // Phase 2: Crossfade SVG → clean text (1.8s → 2.2s)
    // Phase 3: Text moves up + bg fades (2.2s → 3.0s)
    // Phase 4: Complete (3.0s)
    const t1 = setTimeout(() => setPhase("crossfade"), 1800);
    const t2 = setTimeout(() => {
      // Calculate where the hero title will be
      const heroTitle = document.getElementById("hero-title-target");
      if (heroTitle && textRef.current) {
        const heroRect = heroTitle.getBoundingClientRect();
        const loaderRect = textRef.current.getBoundingClientRect();
        // Pure vertical offset (straight up, no horizontal)
        setTargetY(heroRect.top - loaderRect.top);
      }
      setPhase("moving");
    }, 2200);
    const t3 = setTimeout(() => onComplete(), 3000);

    return () => {
      // RESTORE
      html.style.overflow = originalHtmlOverflow;
      body.style.overflow = originalBodyOverflow;
      body.style.position = originalBodyPosition;
      body.style.top = originalBodyTop;
      body.style.width = originalBodyWidth;

      window.scrollTo(0, scrollY);

      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
      {/* Background (fades out during "moving" phase) */}
      <motion.div
        className="absolute inset-0 bg-black"
        animate={{ opacity: phase === "moving" ? 0 : 1 }}
        transition={{ duration: 0.8 }}
      />

      <div className="relative flex items-center justify-center">
        {/* SVG Letters */}
        <motion.div
          className="flex gap-2 lg:gap-3 items-center text-silver"
          animate={{ opacity: phase === "drawing" ? 1 : 0 }}
          transition={{ duration: 0.3 }}
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

        {/* Clean text — appears at crossfade, then moves straight up to hero position */}
        {phase !== "drawing" && (
          <motion.h1
            ref={textRef}
            className="absolute text-silver font-medium tracking-[0.15em] lg:tracking-[0.25em] text-4xl sm:text-6xl md:text-7xl lg:text-9xl uppercase"
            style={{ fontFamily: "var(--font-exo-2)" }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: phase === "moving" ? 0 : 1,
              y: phase === "moving" ? targetY : 0,
            }}
            transition={{
              opacity: { duration: 0.4, delay: phase === "moving" ? 0.4 : 0 },
              y: { type: "spring", stiffness: 120, damping: 25 },
            }}
          >
            ACCREDIAN
          </motion.h1>
        )}
      </div>
    </div>
  );
}