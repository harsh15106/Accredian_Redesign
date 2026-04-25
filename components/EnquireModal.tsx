"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface EnquireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EnquireModal({ isOpen, onClose }: EnquireModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6">
          
          {/* Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-4xl bg-[#0a0a0a] text-white border border-white/10 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-[0_20px_60px_rgba(0,0,0,0.6)] z-10 max-h-[90vh] overflow-y-auto md:overflow-y-visible"
          >
            {/* LEFT SIDE: Image */}
            <div 
              className="relative w-full md:w-[40%] h-48 md:h-auto bg-cover bg-center shrink-0"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}
            >
              {/* Image Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/60 to-[#0a0a0a]/90" />
            </div>

            {/* RIGHT SIDE: Form */}
            <div className="w-full md:w-[60%] p-6 sm:p-8 relative bg-transparent">
              
              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors z-20"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              {/* Header */}
              <h2 className="text-2xl font-medium text-white mb-6">
                Enquire Now
              </h2>

              {/* Form Fields */}
              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                
                <input 
                  type="text" 
                  placeholder="Enter Name" 
                  className="w-full border-b border-white/15 outline-none bg-transparent py-2 text-white placeholder:text-gray-500 focus:border-[#FEBD14] transition-colors"
                  required
                />
                
                <input 
                  type="email" 
                  placeholder="Enter Email" 
                  className="w-full border-b border-white/15 outline-none bg-transparent py-2 text-white placeholder:text-gray-500 focus:border-[#FEBD14] transition-colors"
                  required
                />

                {/* Phone Input with +91 block */}
                <div className="flex items-center w-full border-b border-white/15 focus-within:border-[#FEBD14] transition-colors">
                  <div className="flex items-center gap-2 pr-3 py-2 border-r border-white/15">
                    <span className="text-xl leading-none">🇮🇳</span>
                    <span className="text-white font-medium">+91</span>
                  </div>
                  <input 
                    type="tel" 
                    placeholder="Enter Phone Number" 
                    className="w-full outline-none bg-transparent py-2 pl-3 text-white placeholder:text-gray-500"
                    required
                  />
                </div>

                <input 
                  type="text" 
                  placeholder="Enter Company Name" 
                  className="w-full border-b border-white/15 outline-none bg-transparent py-2 text-white placeholder:text-gray-500 focus:border-[#FEBD14] transition-colors"
                />

                <select 
                  className="w-full border-b border-white/15 outline-none bg-transparent py-2 text-white placeholder:text-gray-500 focus:border-[#FEBD14] transition-colors appearance-none cursor-pointer"
                  defaultValue=""
                  required
                >
                  <option value="" disabled className="bg-[#111] text-gray-500">Select Domain</option>
                  <option value="data-science" className="bg-[#111] text-white">Data Science & AI</option>
                  <option value="product-management" className="bg-[#111] text-white">Product Management</option>
                  <option value="software-engineering" className="bg-[#111] text-white">Software Engineering</option>
                  <option value="other" className="bg-[#111] text-white">Other</option>
                </select>

                <input 
                  type="number" 
                  placeholder="Enter No. of candidates" 
                  className="w-full border-b border-white/15 outline-none bg-transparent py-2 text-white placeholder:text-gray-500 focus:border-[#FEBD14] transition-colors"
                  min="1"
                  required
                />

                <select 
                  className="w-full border-b border-white/15 outline-none bg-transparent py-2 text-white placeholder:text-gray-500 focus:border-[#FEBD14] transition-colors appearance-none cursor-pointer"
                  defaultValue=""
                  required
                >
                  <option value="" disabled className="bg-[#111] text-gray-500">Select Mode of Delivery</option>
                  <option value="online" className="bg-[#111] text-white">Online</option>
                  <option value="offline" className="bg-[#111] text-white">Offline / In-person</option>
                  <option value="hybrid" className="bg-[#111] text-white">Hybrid</option>
                </select>

                <input 
                  type="text" 
                  placeholder="Location (Eg: Gurgaon, Delhi, India)" 
                  className="w-full border-b border-white/15 outline-none bg-transparent py-2 text-white placeholder:text-gray-500 focus:border-[#FEBD14] transition-colors"
                  required
                />

                {/* Submit Button */}
                <button 
                  type="submit"
                  className="w-full bg-[#FEBD14] text-black font-medium rounded-lg py-3 mt-4 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:shadow-[0_10px_30px_rgba(254,189,20,0.25)]"
                >
                  Submit Enquiry
                </button>

              </form>

            </div>
          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}
