"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); 
    }, 3500); 

    return () => clearTimeout(timer);
  }, [onComplete]);

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const wordVariants = {
    hidden: { scale: 1, textShadow: "0px 0px 0px rgba(255,255,255,0)" },
    visible: {
      scale: 0.8,
      textShadow: "0px 0px 20px rgba(217, 217, 217, 0.8)",
      transition: {
        delay: 2.2,
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const text = "ACCREDIAN";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary"
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, y: -50, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          <motion.div 
            variants={wordVariants} 
            className="flex"
            initial="hidden"
            animate="visible"
          >
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5 + index * 0.15, duration: 0.5 }}
                className="text-4xl md:text-6xl font-bold tracking-widest text-text-primary"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
