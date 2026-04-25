"use client";

import { motion } from "framer-motion";
import { Lightbulb, Laptop, Wrench } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    id: 1,
    title: "Concept",
    description: "Foundational knowledge for deep subject understanding.",
    icon: <Lightbulb className="w-8 h-8" />,
    color: "#3B82F6", // Blue
    glow: "rgba(59, 130, 246, 0.2)",
    glowStrong: "rgba(59, 130, 246, 0.4)",
    offset: "lg:-translate-x-12 lg:translate-y-4 lg:rotate-[-3deg]",
    zIndex: 10,
  },
  {
    id: 2,
    title: "Application",
    description: "Practical implementation through real-world scenarios.",
    icon: <Laptop className="w-8 h-8" />,
    color: "#A855F7", // Purple
    glow: "rgba(168, 85, 247, 0.2)",
    glowStrong: "rgba(168, 85, 247, 0.4)",
    offset: "lg:z-30 lg:scale-105 lg:-translate-y-2",
    zIndex: 30,
  },
  {
    id: 3,
    title: "Tools",
    description: "Resources and techniques for effective skill mastery.",
    icon: <Wrench className="w-8 h-8" />,
    color: "#14B8A6", // Cyan/Teal
    glow: "rgba(20, 184, 166, 0.2)",
    glowStrong: "rgba(20, 184, 166, 0.4)",
    offset: "lg:translate-x-12 lg:translate-y-4 lg:rotate-[3deg]",
    zIndex: 10,
  },
];

export function CATFramework() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="cat" className="relative bg-[#000000] py-24 md:py-32 overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading Section */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white uppercase tracking-widest"
          >
            The <span className="text-[#FEBD14]">CAT Framework</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#9CA3AF] text-lg md:text-xl max-w-2xl mx-auto"
          >
            Our Proven Approach to <span className="text-[#FEBD14]">Learning Excellence</span>
          </motion.p>
        </div>

        {/* 3D Stacked Cards Container */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0 min-h-[450px]">
          {steps.map((step, index) => {
            const isHovered = hoveredId === step.id;
            const isAnyHovered = hoveredId !== null;

            return (
              <motion.div
                key={step.id}
                onMouseEnter={() => setHoveredId(step.id)}
                onMouseLeave={() => setHoveredId(null)}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                style={{ zIndex: isHovered ? 50 : step.zIndex }}
                className={`
                  relative w-full max-w-[320px] p-10 rounded-[22px] 
                  bg-gradient-to-b from-[#111111] to-[#1A1A1A]
                  border transition-all duration-500 ease-out
                  flex flex-col items-center text-center
                  ${step.offset}
                  ${isAnyHovered && !isHovered ? "lg:scale-95 lg:opacity-40 lg:blur-[1px]" : "opacity-100"}
                `}
                animate={{
                  y: isHovered ? -12 : 0,
                  scale: isHovered ? 1.05 : 1,
                  borderColor: isHovered ? `${step.color}88` : "rgba(255,255,255,0.08)",
                  boxShadow: isHovered 
                    ? `0 25px 50px -12px ${step.glowStrong}, inset 0 1px 1px rgba(255,255,255,0.1)` 
                    : `0 10px 25px -15px ${step.glow}, inset 0 1px 0px rgba(255,255,255,0.05)`,
                }}
              >
                {/* Top Edge Highlight (Micro Detail) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

                {/* Inner Highlight Overlay */}
                <div className="absolute inset-0 rounded-[22px] bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03)_0%,transparent_50%)] pointer-events-none" />

                {/* Icon Container */}
                <div 
                  style={{ 
                    borderColor: step.color,
                    boxShadow: isHovered ? `0 0 20px ${step.glowStrong}` : `0 0 12px ${step.glow}`
                  }}
                  className="w-16 h-16 rounded-full border-2 flex items-center justify-center bg-[#0A0A0A] mb-8 transition-all duration-500 relative z-10"
                >
                  <div 
                    style={{ color: step.color }} 
                    className={`${isHovered ? "scale-110" : "scale-100"} transition-transform duration-500`}
                  >
                    {step.icon}
                  </div>
                </div>

                {/* Card Content */}
                <h3 className="text-xl font-bold text-white uppercase tracking-widest mb-4 relative z-10">
                  {step.title}
                </h3>
                <p className="text-[#9CA3AF] text-sm md:text-base leading-relaxed relative z-10 transition-opacity duration-300" 
                   style={{ opacity: isAnyHovered && !isHovered ? 0.6 : 0.9 }}>
                  {step.description}
                </p>

                {/* Perspective Ambient Glow */}
                <motion.div 
                  className="absolute inset-0 rounded-[22px] pointer-events-none z-0"
                  animate={{
                    opacity: isHovered ? 1 : 0.3
                  }}
                  style={{ 
                    background: `radial-gradient(circle at 50% 0%, ${step.color}11 0%, transparent 80%)`
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
