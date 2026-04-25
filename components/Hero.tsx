import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { AnimatedBackground } from "./AnimatedBackground";
import { EnquireModal } from "./EnquireModal";

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const features = ["Tailored Solutions", "Industry Insights", "Expert Guidance"];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 lg:px-12 bg-black">
      {/* Background Particle Network & Glow Layer */}
      <AnimatedBackground />
      
      <div className="max-w-7xl w-full mx-auto z-10 relative flex flex-col items-center justify-center text-center pt-28 lg:pt-0 pb-12 space-y-6 md:space-y-8">
        
        {/* 1. Main Heading matched to LoadingScreen layoutId */}
        <motion.h1 
          layoutId="hero-title"
          className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-[0.25em] text-silver uppercase"
          style={{ fontFamily: "var(--font-exo-2)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          ACCREDIAN
        </motion.h1>
        
        {/* 2. Subheading */}
        <h2 className="font-semibold tracking-wide leading-tight">
          <span className="block text-2xl md:text-3xl text-text-secondary pb-1 md:pb-2">
            NEXT-GEN <span className="text-[#FEBD14]">Expertise</span>
          </span>
          <span className="block text-2xl md:text-3xl text-text-secondary">
            For Your <span className="text-[#FEBD14]">Enterprise</span>
          </span>
        </h2>

        {/* 3. Supporting Text */}
        <h3 className="text-lg md:text-xl font-medium text-silver leading-snug max-w-2xl mx-auto">
          Cultivate high-performance teams through expert learning.
        </h3>

        {/* 4. Feature Points (Inline) */}
        <ul className="flex items-center justify-center gap-6 md:gap-10 flex-wrap">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 md:gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#16a34aff] shrink-0" strokeWidth={2} />
              <span className="text-base md:text-lg font-medium text-text-secondary">{feature}</span>
            </li>
          ))}
        </ul>

        {/* 5. CTA Button */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="w-full sm:w-auto bg-[#FEBD14] text-black text-base md:text-lg font-bold px-8 py-3.5 rounded-lg transition-all duration-300 ease-out hover:-translate-y-[2px] hover:cursor-pointer hover:scale-[1.03] active:scale-[0.97] shadow-md hover:shadow-lg hover:shadow-yellow-500/20"
        >
          Enquire Now
        </button>
        
      </div>

      {/* Pop-up Modal */}
      <EnquireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
