"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { FormModal } from "@/components/ui/FormModal";


const faqData = {
  "About the Course": [
    {
      question: "What types of corporate training programs does Accredian offer?",
      answer: "Accredian provides industry-specific, customizable training programs tailored to meet your organization's unique needs, covering domains like leadership, tech, data, and fintech."
    },
    {
      question: "What domain specializations are available?",
      answer: "We offer expertise in various domains, including Leadership Development, Tech & Data, Fintech, Digital Business, Product Innovation, Operations Management, and Generative AI."
    }
  ],
  "About the Delivery": [
    {
      question: "Can the courses be customized for specific industries or teams?",
      answer: "Absolutely! Our programs are fully customizable, including content, format, timing, and industry-specific focus, to align with your organization’s goals."
    },
    {
      question: "Who are the instructors for these programs?",
      answer: "Our courses are delivered by industry leaders, experienced mentors, and domain experts with real-world insights."
    },
    {
      question: "What formats are the programs delivered in?",
      answer: "Programs can be delivered in various formats, including online, offline, hybrid, and on-demand, based on your team's preferences and requirements."
    }
  ],
  "Miscellaneous": [
    {
      question: "What is the ideal team size for corporate training?",
      answer: "Our programs are flexible and can cater to teams of any size, from small groups to large organizational cohorts."
    },
    {
      question: "How do we get started with Accredian?",
      answer: "Get started with Accredian by contacting us or requesting a quote on our website. Our team will guide you through the process—from skill gap analysis to a custom program tailored to your needs."
    }
  ]
};

type Category = keyof typeof faqData;

export function FAQSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<Category>("About the Course");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = Object.keys(faqData) as Category[];

  return (
    <section id="faq" className="bg-black py-24 md:py-32 px-6 relative border-t border-white/5">
      <FormModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-widest"
          >
            Frequently Asked <span className="text-[#FEBD14]">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Everything you need to know about our programs and delivery.
          </motion.p>
        </div>

        {/* Tabs Row (Pills with Glass Effect) */}
        <div className="relative flex flex-wrap justify-center gap-3 md:gap-4 mb-12 p-2 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md max-w-fit mx-auto overflow-x-auto md:overflow-x-visible no-scrollbar">
          {categories.map((category) => {
            const isActive = activeTab === category;
            return (
              <motion.button
                key={category}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={() => {
                  setActiveTab(category);
                  setOpenIndex(null);
                }}
                className={`relative px-6 md:px-8 py-3 rounded-full text-sm font-bold transition-all duration-500 z-10 whitespace-nowrap cursor-pointer ${
                  isActive ? "text-black" : "text-gray-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-[#FEBD14] to-[#f5c542] rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-20">{category}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Content Panel (Accordion) */}
        <div 
          className="bg-[#0F0F0F] rounded-3xl border border-white/5 overflow-hidden shadow-2xl mb-12 transition-all duration-500"
        >
          <div className="p-2 md:p-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col"
              >
                {faqData[activeTab].map((faq, index) => (
                  <div 
                    key={index}
                    className={`border-b border-white/5 last:border-0 transition-all duration-300 ${
                      openIndex === index ? "bg-white/[0.01]" : ""
                    }`}
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full py-6 px-6 md:px-8 flex items-center justify-between text-left group cursor-pointer"
                    >
                      <span className={`text-base md:text-lg font-medium transition-colors duration-300 ${
                        openIndex === index ? "text-[#FEBD14]" : "text-white group-hover:text-[#FEBD14]/80"
                      }`}>
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex-shrink-0 ml-4 p-1.5 rounded-full transition-colors duration-300 ${
                          openIndex === index ? "bg-[#FEBD14] text-black" : "bg-white/5 text-gray-500 group-hover:text-white"
                        }`}
                      >
                        <ChevronDown size={18} />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 md:px-8 pb-8 text-gray-400 leading-relaxed text-sm md:text-base">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* CTA Button (Connected to Enquire Logic) */}
        <div className="flex justify-center">
          <motion.button
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={() => setIsOpen(true)}
            className="bg-[#FEBD14] text-black px-10 py-4 rounded-full font-bold transition-all duration-300 border border-transparent hover:bg-white cursor-pointer"
          >
            Enquire Now
          </motion.button>
        </div>
      </div>
    </section>
  );
}
