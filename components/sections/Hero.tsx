"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { AnimatedBackground } from "@/components/animations/AnimatedBackground";
import { useState } from "react";
import { FormModal } from "@/components/ui/FormModal";

export function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const features = ["Tailored Solutions", "Industry Insights", "Expert Guidance"];

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden px-6 bg-black">
      {/* Background Particle Network & Glow Layer */}
      <AnimatedBackground />
      
      <div className="max-w-7xl w-full mx-auto z-10 relative flex flex-col items-center text-center">
        <div className="flex flex-col items-center space-y-8 md:space-y-12 w-full max-w-5xl">
          <motion.h1 
            className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-medium tracking-[0.15em] lg:tracking-[0.25em] text-silver uppercase"
            style={{ fontFamily: "var(--font-exo-2)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            ACCREDIAN
          </motion.h1>
          
          <div className="space-y-4 w-full flex flex-col items-center">
            <h2 className="font-semibold tracking-wide leading-tight">
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-text-secondary pb-2">
                NEXT-GEN <span className="text-[#FEBD14]">Expertise</span>
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-text-secondary">
                For Your <span className="text-[#FEBD14]">Enterprise</span>
              </span>
            </h2>

            <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-silver/80 leading-snug max-w-2xl">
              Cultivate high-performance teams through expert learning and industry-leading training solutions.
            </h3>
          </div>

          <ul className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12 w-full">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#16a34aff] shrink-0" strokeWidth={2} />
                <span className="text-base md:text-lg lg:text-xl font-medium text-text-secondary">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="pt-4 md:pt-8">
            <motion.button
              onClick={() => setIsOpen(true)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{ y: [0, -10, 0] }}
              whileHover={{ scale: 1.05, y: 0 }}
              whileTap={{ scale: 0.95 }}
              transition={{ 
                y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                type: "spring", 
                stiffness: 400, 
                damping: 17 
              }}
              className="bg-transparent border-2 border-[#FEBD14] text-[#FEBD14] px-10 py-4 md:px-14 md:py-5 rounded-2xl font-bold text-lg md:text-xl hover:bg-[#FEBD14] hover:text-black transition-all duration-300 cursor-pointer shadow-[0_0_20px_rgba(254,189,20,0.1)] hover:shadow-[0_0_30px_rgba(254,189,20,0.3)]"
            >
              Enquire Now
            </motion.button>
          </div>
        </div>
      </div>
      <FormModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}
