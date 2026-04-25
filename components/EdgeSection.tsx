"use client";

import { motion } from "framer-motion";
import { Settings, Users, Layers, Zap, Box, TrendingUp, RefreshCw } from "lucide-react";

export function EdgeSection() {
  const content = [
    { title: "Tailored Solutions", desc: "Customized strategies to precisely meet your unique enterprise requirements.", icon: Settings },
    { title: "Expert Guidance", desc: "Leverage our seasoned professionals for industry-leading insights.", icon: Users },
    { title: "Innovative Framework", desc: "Built on modern architectures ensuring scalable and robust performance.", icon: Layers },
    { title: "Advanced Technology", desc: "Harness the power of next-generation tools and artificial intelligence.", icon: Zap },
    { title: "Diverse Offerings", desc: "A comprehensive suite of services addressing end-to-end business needs.", icon: Box },
    { title: "Proven Impact", desc: "Demonstrated success driving measurable growth and operational efficiency.", icon: TrendingUp },
    { title: "Flexible Delivery", desc: "Agile methodologies that adapt seamlessly to your deployment schedules.", icon: RefreshCw },
  ];

  return (
    <section id="edge" className="relative w-full py-24 bg-black border-t border-white/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="mb-8 lg:mb-12 text-center space-y-3">
          <h2 
            className="text-3xl md:text-4xl font-bold tracking-widest text-silver uppercase" 
            style={{ fontFamily: "var(--font-exo-2)" }}
          >
            The <span className="text-[#FEBD14]">Accredian Edge</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary">
            Our multi-layered approach to enterprise excellence
          </p>
        </div>

        {/* DESKTOP: Horizontal Diagram Timeline */}
        <div className="hidden lg:block relative w-full h-[600px] mt-6">
          
          {/* Center Horizontal Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 z-0" />

          {/* Timeline Nodes & Content */}
          <div className="relative w-full h-full flex justify-between items-center px-4 xl:px-12">
            {content.map((item, idx) => {
              const isTextTop = idx % 2 === 0;

              return (
                <div key={idx} className="relative flex justify-center items-center w-[12%] z-10">
                  
                  {/* The Node */}
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-[#FEBD14] shadow-[0_0_10px_rgba(254,189,20,0.6)] z-20"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                  />

                  {/* Vertical Container (exactly 500px tall, vertically centered on node) */}
                  <div className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center h-[500px]">
                    
                    {/* TOP HALF */}
                    <div className="h-[250px] flex flex-col justify-end items-center">
                      
                      {/* Content Above Line */}
                      <motion.div 
                        className={`flex flex-col items-center text-center w-[160px] xl:w-[200px] ${isTextTop ? "pb-4" : "pb-10 xl:pb-14"}`}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 + 0.4 }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        {isTextTop ? (
                          <>
                            <h3 className="text-sm font-medium text-white mb-2">{item.title}</h3>
                            <p className="text-[11px] xl:text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                          </>
                        ) : (
                          <div className="text-[#FEBD14]">
                            <item.icon size={44} strokeWidth={1} />
                          </div>
                        )}
                      </motion.div>

                      {/* Upward Line + Arrow (Only if text is top) */}
                      {isTextTop && (
                        <motion.div 
                          className="flex flex-col items-center origin-bottom"
                          initial={{ scaleY: 0, opacity: 0 }}
                          whileInView={{ scaleY: 1, opacity: 1 }}
                          transition={{ duration: 0.4, delay: idx * 0.1 + 0.2 }}
                          viewport={{ once: true, margin: "-100px" }}
                        >
                          {/* Arrow Pointing UP */}
                          <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-b-[6px] border-transparent border-b-[#FEBD14]" />
                          {/* Vertical Line */}
                          <div className="w-[1px] h-[60px] xl:h-[80px] bg-white/10" />
                        </motion.div>
                      )}
                    </div>

                    {/* BOTTOM HALF */}
                    <div className="h-[250px] flex flex-col justify-start items-center">
                      
                      {/* Downward Line + Arrow (Only if text is bottom) */}
                      {!isTextTop && (
                        <motion.div 
                          className="flex flex-col items-center origin-top"
                          initial={{ scaleY: 0, opacity: 0 }}
                          whileInView={{ scaleY: 1, opacity: 1 }}
                          transition={{ duration: 0.4, delay: idx * 0.1 + 0.2 }}
                          viewport={{ once: true, margin: "-100px" }}
                        >
                          {/* Vertical Line */}
                          <div className="w-[1px] h-[60px] xl:h-[80px] bg-white/10" />
                          {/* Arrow Pointing DOWN */}
                          <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-transparent border-t-[#FEBD14]" />
                        </motion.div>
                      )}

                      {/* Content Below Line */}
                      <motion.div 
                        className={`flex flex-col items-center text-center w-[160px] xl:w-[200px] ${!isTextTop ? "pt-4" : "pt-10 xl:pt-14"}`}
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 + 0.4 }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        {!isTextTop ? (
                          <>
                            <h3 className="text-sm font-medium text-white mb-2">{item.title}</h3>
                            <p className="text-[11px] xl:text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                          </>
                        ) : (
                          <div className="text-[#FEBD14]">
                            <item.icon size={44} strokeWidth={1} />
                          </div>
                        )}
                      </motion.div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE & TABLET: Vertical Stack */}
        <div className="flex lg:hidden w-full max-w-lg mx-auto mt-12 px-2 sm:px-8">
          <div className="relative flex flex-col space-y-12 w-full">
            
            {/* Left Vertical Line */}
            <div className="absolute top-0 bottom-0 left-[15px] sm:left-[25px] w-[1px] bg-white/10 z-0" />

            {content.map((item, idx) => (
              <div key={idx} className="relative flex items-center w-full z-10">
                
                {/* Node */}
                <motion.div 
                  className="w-3 h-3 rounded-full bg-[#FEBD14] shadow-[0_0_10px_rgba(254,189,20,0.6)] ml-[9px] sm:ml-[19px] shrink-0 z-20"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                />

                {/* Horizontal Connector (pointing right) */}
                <motion.div 
                  className="flex items-center origin-left shrink-0 z-10"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="h-[1px] w-[20px] sm:w-[30px] bg-white/10" />
                  <div className="w-0 h-0 border-t-[4px] border-b-[4px] border-l-[6px] border-transparent border-l-[#FEBD14]" />
                </motion.div>

                {/* Content (Icon + Text) */}
                <motion.div 
                  className="flex items-center gap-4 ml-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="text-[#FEBD14] shrink-0">
                    <item.icon size={36} strokeWidth={1} />
                  </div>
                  <div className="flex flex-col text-left">
                    <h3 className="text-sm font-medium text-white mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
