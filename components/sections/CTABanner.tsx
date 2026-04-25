"use client";

import { motion } from "framer-motion";
import { Headphones } from "lucide-react";
import { useState } from "react";
import { FormModal } from "@/components/ui/FormModal";

export function CTABanner() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-black py-12 md:py-20 px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto relative group overflow-hidden rounded-[20px] bg-gradient-to-r from-[#111111] to-[#1A1A1A] border border-white/5 p-8 md:p-12 shadow-2xl"
      >
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Left Side: Icon + Text */}
          <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-6 md:gap-8">
            <div className="w-16 h-16 rounded-full bg-black border border-[#FEBD14]/20 flex items-center justify-center text-[#FEBD14] transition-colors duration-300">
              <Headphones size={32} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-wide">
                Want to Learn More About Our Training Solutions?
              </h2>
              <p className="text-[#A0A0A0] text-lg font-medium tracking-tight">
                Get Expert Guidance for Your Team’s Success!
              </p>
            </div>
          </div>

          {/* Right Side: CTA Button */}
          <motion.button
            onClick={() => setIsOpen(true)}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="bg-[#FEBD14] text-black px-10 py-4 rounded-full font-bold text-lg border border-transparent hover:bg-white transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            Contact Us &rarr;
          </motion.button>
        </div>
      </motion.div>
      <FormModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}
