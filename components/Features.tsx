"use client";

import { motion } from "framer-motion";
import { Lightbulb, Zap, Target, LineChart, Settings, Globe, Coins } from "lucide-react";

export function Features() {
  const domains = [
    { title: "Product & Innovation Hub", icon: Lightbulb },
    { title: "Gen-AI Mastery", icon: Zap },
    { title: "Leadership Elevation", icon: Target },
    { title: "Tech & Data Insights", icon: LineChart },
    { title: "Operations Excellence", icon: Settings },
    { title: "Digital Enterprise", icon: Globe },
    { title: "Fintech Innovation Lab", icon: Coins },
  ];

  return (
    <section id="expertise" className="py-20 md:py-32 px-6 bg-black relative border-t border-white/5">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 tracking-widest text-silver uppercase"
            style={{ fontFamily: "var(--font-exo-2)" }}
          >
            OUR <span className="text-[#FEBD14]">DOMAIN EXPERTISE</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-text-secondary"
          >
            <span className="text-[#FEBD14]">Specialized Programs</span> Designed to Fuel Innovation
          </motion.p>
        </div>

        {/* 7-Card Grid Container */}
        <div className="flex flex-wrap justify-center gap-6 w-full">
          {domains.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <div className="bg-[#111] border border-[rgba(255,255,255,0.08)] rounded-[16px] p-[28px] transition-all duration-300 hover:-translate-y-[6px] hover:border-[#FEBD14] hover:shadow-[0_0_20px_rgba(254,189,20,0.08)] flex flex-col items-center text-center group h-full cursor-pointer">
                <item.icon 
                  className="text-[#FEBD14] w-[40px] h-[40px] mb-[16px] transition-transform duration-300 group-hover:scale-110" 
                  strokeWidth={1.5} 
                />
                <h3 className="text-[17px] font-semibold text-white group-hover:text-[#FEBD14] transition-colors">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
