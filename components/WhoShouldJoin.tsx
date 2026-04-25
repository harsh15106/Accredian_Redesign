"use client";

import { motion } from "framer-motion";
import { Terminal, Briefcase, Rocket, Crown } from "lucide-react";

export function WhoShouldJoin() {
  const roles = [
    {
      title: "Tech Professionals",
      desc: "Software Engineers, Data Scientists, and IT Specialists seeking to upskill.",
      icon: Terminal,
      col: "col-start-1",
      row: "row-start-1",
      lineX: "15%",
      lineY: "20%"
    },
    {
      title: "Non-Tech Professionals",
      desc: "Managers, Marketers, and Leaders wanting to leverage data and AI.",
      icon: Briefcase,
      col: "col-start-3",
      row: "row-start-1",
      lineX: "85%",
      lineY: "20%"
    },
    {
      title: "Emerging Professionals",
      desc: "Recent graduates and junior staff looking to accelerate their careers.",
      icon: Rocket,
      col: "col-start-1",
      row: "row-start-3",
      lineX: "15%",
      lineY: "80%"
    },
    {
      title: "Senior Professionals",
      desc: "Executives and Directors aiming for strategic enterprise transformation.",
      icon: Crown,
      col: "col-start-3",
      row: "row-start-3",
      lineX: "85%",
      lineY: "80%"
    }
  ];

  const Orb = () => (
    <motion.div 
      animate={{ 
        scale: [1, 1.05, 1], 
        boxShadow: [
          "0 0 40px rgba(254,189,20,0.2)", 
          "0 0 80px rgba(254,189,20,0.4)", 
          "0 0 40px rgba(254,189,20,0.2)"
        ] 
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-[#FEBD14] to-[#b3850b] flex items-center justify-center z-20 shadow-[0_0_60px_rgba(254,189,20,0.25)] relative"
    >
      <div className="absolute inset-2 border border-black/20 rounded-full border-dashed animate-[spin_10s_linear_infinite]" />
      <span className="text-black font-bold text-center leading-tight px-4 text-lg md:text-xl z-10">
        Who<br/>Should<br/>Join?
      </span>
    </motion.div>
  );

  return (
    <section id="who-should-join" className="py-20 md:py-32 px-6 bg-black relative overflow-hidden border-t border-white/5">
      
      {/* Background Particles/Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FEBD14]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        
        <div className="text-center mb-16 lg:hidden">
          <h2 className="text-3xl font-bold text-white mb-4">
            Who Should <span className="text-[#FEBD14]">Join</span>
          </h2>
          <p className="text-gray-400">Discover if our specialized programs align with your career trajectory.</p>
        </div>

        {/* DESKTOP LAYOUT (3x3 Grid) */}
        <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] grid-rows-[auto_auto_auto] gap-x-12 gap-y-16 relative place-items-center w-full min-h-[500px]">
          
          {/* SVG Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {roles.map((role, idx) => (
              <motion.line 
                key={idx}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.3 }}
                transition={{ 
                  pathLength: { duration: 1.5, ease: "easeOut", delay: idx * 0.2 },
                  opacity: { duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: idx * 0.2 }
                }}
                x1="50%" y1="50%" 
                x2={role.lineX} y2={role.lineY} 
                stroke="#FEBD14" 
                strokeWidth="2" 
                strokeDasharray="4 4"
              />
            ))}
          </svg>

          {/* Center Orb */}
          <div className="col-start-2 row-start-2 z-20">
            <Orb />
          </div>

          {/* Corner Cards */}
          {roles.map((role, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
              className={`${role.col} ${role.row} z-10 w-full max-w-[320px]`}
            >
              <div className="bg-[#111] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#FEBD14] hover:shadow-[0_0_30px_rgba(254,189,20,0.15)] flex flex-col items-center text-center cursor-pointer group">
                <div className="p-3 bg-white/5 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <role.icon className="text-[#FEBD14] w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{role.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{role.desc}</p>
              </div>
            </motion.div>
          ))}

        </div>

        {/* MOBILE & TABLET LAYOUT */}
        <div className="flex lg:hidden flex-col items-center gap-12 w-full z-10 relative">
          
          <Orb />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {roles.map((role, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="w-full"
              >
                <div className="bg-[#111] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#FEBD14] hover:shadow-[0_0_30px_rgba(254,189,20,0.15)] flex flex-col items-center text-center cursor-pointer group h-full">
                  <div className="p-3 bg-white/5 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <role.icon className="text-[#FEBD14] w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{role.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{role.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
