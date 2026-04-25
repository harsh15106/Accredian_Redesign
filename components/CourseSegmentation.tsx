"use client";

import { motion } from "framer-motion";

export function CourseSegmentation() {
  const cards = [
    {
      title: "Program Specific",
      desc: "Certificate, Executive, Post Graduate Certificate",
      img: "/PROGRAM_SPECIFIC.png"
    },
    {
      title: "Industry Specific",
      desc: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
      img: "/INDUSTRY_SPECIFIC.png"
    },
    {
      title: "Topic Specific",
      desc: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
      img: "/TOPIC_SPECIFIC.png"
    },
    {
      title: "Level Specific",
      desc: "Senior Leadership, Mid-Career Professionals, Freshers",
      img: "/LEVEL_SPECIFIC.png"
    }
  ];

  return (
    <section className="py-20 md:py-24 px-6 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-silver"
            style={{ fontFamily: "var(--font-exo-2)" }}
          >
            Tailored <span className="text-[#FEBD14]">Course Segmentation</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-text-secondary"
          >
            Explore <span className="text-[#FEBD14]">Custom-fit Courses</span> Designed to Address Every Professional Focus
          </motion.p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div className="bg-[#111] border border-[rgba(255,255,255,0.08)] rounded-[16px] overflow-hidden transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[0_0_25px_rgba(254,189,20,0.08)] group h-full flex flex-col">
                <div className="w-full h-[200px] relative overflow-hidden bg-black/50">
                  <img 
                    src={card.img} 
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-[20px] md:text-[22px] font-semibold text-[#FEBD14] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-[#aaa] leading-[1.5]">
                    {card.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
