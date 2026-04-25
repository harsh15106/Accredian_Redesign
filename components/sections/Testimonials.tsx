"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    company: "ADP",
    quote: "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
    logo: "/logos/ADP.png",
  },
  {
    id: 2,
    company: "BAYER",
    quote: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
    logo: "/logos/BAYER.png",
  },
  {
    id: 3,
    company: "RELIANCE",
    quote: "Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees.",
    logo: "/logos/Reliance.png",
  }
];

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    if (containerRef.current) {
      const { scrollWidth, offsetWidth } = containerRef.current;
      setConstraints({ left: -(scrollWidth - offsetWidth), right: 0 });
    }
  }, []);

  return (
    <section id="testimonials" className="bg-[#000000] py-24 md:py-32 px-6 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase tracking-[0.2em]"
            style={{ fontFamily: "var(--font-exo-2)" }}
          >
            TESTIMONIALS FROM <span className="bg-gradient-to-r from-[#FEBD14] to-[#f5c542] bg-clip-text text-transparent">OUR PARTNERS</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl font-medium"
          >
            Real stories of transformation from industry leaders.
          </motion.p>
        </div>

        {/* Carousel Viewport */}
        <div className="max-w-6xl mx-auto overflow-hidden px-1">
          <motion.div
            ref={containerRef}
            drag="x"
            dragConstraints={constraints}
            dragElastic={0.1}
            whileTap={{ cursor: "grabbing" }}
            className="flex gap-6 md:gap-8 cursor-grab"
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="w-full flex-shrink-0 md:basis-[calc(50%-1rem)] lg:basis-[calc(50%-1rem)]"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="h-full bg-gradient-to-br from-[#111111] to-[#080808] border border-white/10 rounded-[24px] p-8 md:p-12 relative group transition-all duration-300 backdrop-blur-sm shadow-2xl overflow-hidden flex flex-col">
      {/* Quotation Mark Decoration */}
      <div className="absolute top-6 right-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500">
        <Quote size={80} className="text-[#FEBD14]" />
      </div>

      <div className="relative z-10 flex flex-col h-full flex-grow">
        {/* Company Logo Badge */}
        <div className="mb-10 flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-[#FEBD14]/15 flex items-center justify-center p-3 shadow-inner group-hover:border-[#FEBD14]/30 transition-colors duration-300">
            <img 
              src={testimonial.logo} 
              alt={testimonial.company} 
              className="max-w-full max-h-full object-contain filter grayscale invert brightness-200"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = `<span class="text-[#FEBD14] font-bold text-xs">${testimonial.company}</span>`;
              }}
            />
          </div>
          <span className="text-[#FEBD14]/40 text-[10px] font-black tracking-[0.3em] uppercase">Corporate Partner</span>
        </div>

        {/* Quote Text */}
        <p className="text-[#F3F4F6] text-lg md:text-xl leading-relaxed mb-8 flex-grow font-medium italic">
          "{testimonial.quote}"
        </p>

        {/* Card Footer */}
        <div className="pt-6 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#FEBD14]" />
            <span className="text-[#9CA3AF] text-[11px] font-bold tracking-[0.2em] uppercase">{testimonial.company}</span>
          </div>
        </div>
      </div>

      {/* Hover Ambient Glow */}
      <div className="absolute inset-0 rounded-[24px] bg-gradient-to-tr from-[#FEBD14]/[0.02] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
}
