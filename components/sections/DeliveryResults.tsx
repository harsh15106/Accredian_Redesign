"use client";

import { motion } from "framer-motion";
import { BookOpen, Zap, Settings } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Concept",
    description: "Foundational knowledge for deep subject understanding.",
    icon: <BookOpen className="w-6 h-6 text-[#FEBD14]" />,
  },
  {
    id: "02",
    title: "Application",
    description: "Practical implementation through real-world scenarios.",
    icon: <Zap className="w-6 h-6 text-[#FEBD14]" />,
  },
  {
    id: "03",
    title: "Tools",
    description: "Resources and techniques for effective skill mastery.",
    icon: <Settings className="w-6 h-6 text-[#FEBD14]" />,
  },
];

export function DeliveryResults() {
  return (
    <section className="bg-[#000000] py-24 md:py-32 px-6 relative border-t border-white/5" id="delivery">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 text-white uppercase tracking-widest"
            style={{ fontFamily: "var(--font-exo-2)" }}
          >
            How We <span className="text-[#FEBD14]">Deliver Results</span> That Matter?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#A0A0A0] text-lg md:text-xl"
          >
            A Structured Three-Step Approach to <span className="text-[#FEBD14] font-semibold">Skill Development</span>
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 justify-items-center">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative w-full max-w-[360px] group"
            >
              {/* Side Accent Bars (LEFT) */}
              <div className="absolute left-[-8px] top-1/2 -translate-y-1/2 w-[6px] h-24 bg-[#FEBD14] rounded-full z-0 shadow-[0_0_15px_rgba(254,189,20,0.3)]" />
              
              {/* Side Accent Bars (RIGHT) */}
              <div className="absolute right-[-8px] top-1/2 -translate-y-1/2 w-[6px] h-24 bg-[#FEBD14] rounded-full z-0 shadow-[0_0_15px_rgba(254,189,20,0.3)]" />

              {/* Card Body */}
              <div className="relative bg-[#0F0F0F] border border-white/10 rounded-[18px] p-10 pt-14 text-center hover:border-[#FEBD14]/30 hover:shadow-[0_0_30px_rgba(254,189,20,0.05)] transition-all duration-300 z-10 h-full cursor-pointer">
                {/* Step Number Badge */}
                <div className="absolute top-4 left-4 w-9 h-9 rounded-full border border-[#FEBD14] bg-transparent flex items-center justify-center text-[#FEBD14] text-xs font-bold">
                  {step.id}
                </div>

                {/* Icon Container (Top Center) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black border border-white/10 flex items-center justify-center shadow-lg group-hover:border-[#FEBD14]/50 group-hover:shadow-[0_0_20px_rgba(254,189,20,0.2)] transition-all duration-300">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 mt-2">
                  {step.title}
                </h3>
                <p className="text-[#B0B0B0] text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>

                {/* Subtle Hover Edge Highlight */}
                <div className="absolute inset-0 rounded-[18px] bg-gradient-to-t from-[#FEBD14]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
