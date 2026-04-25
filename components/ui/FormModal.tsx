"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Globe, Users, BookOpen, MapPin, Building2, Phone, Mail, User } from "lucide-react";
import toast from "react-hot-toast";
import Image from "next/image";

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FormModal({ isOpen, onClose }: FormModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    domain: "",
    candidates: "",
    mode: "",
    location: "",
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleEsc);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleEsc);
      };
    }
  }, [isOpen, onClose]);

  // Real-time Validation & Formatting
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === "name" || name === "location") {
      formattedValue = value.replace(/[^a-zA-Z\s]/g, "");
    } else if (name === "email") {
      formattedValue = value.toLowerCase();
    } else if (name === "phone" || name === "candidates") {
      formattedValue = value.replace(/\D/g, "");
      if (name === "phone") formattedValue = formattedValue.slice(0, 10);
    }

    setFormData((prev) => ({ ...prev, [name]: formattedValue }));
  };

  const isFormValid = useMemo(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (
      formData.name.trim() !== "" &&
      emailRegex.test(formData.email) &&
      formData.phone.length === 10 &&
      formData.company.trim() !== "" &&
      formData.domain !== "" &&
      formData.candidates !== "" &&
      Number(formData.candidates) > 0 &&
      formData.mode !== "" &&
      formData.location.trim() !== ""
    );
  }, [formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Final checks for toasts (re-validating on frontend for clean UX)
    if (Object.values(formData).some((v) => v.trim() === "")) {
      toast.error("Please fill all required fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Enter a valid email");
      return;
    }

    if (formData.phone.length !== 10) {
      toast.error("Enter a valid 10-digit phone number");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success(data.message || "Request submitted successfully");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          domain: "",
          candidates: "",
          mode: "",
          location: "",
        });
        onClose();
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Overlay Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Full Screen Content */}
          <div className="relative w-full h-full flex flex-col md:flex-row overflow-hidden shadow-2xl">
            {/* LEFT SIDE: Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="hidden md:block md:w-1/2 h-full relative"
            >
              <Image
                src="/lead_capture_background.png"
                alt="Lead Capture"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex flex-col justify-end p-12 space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider">
                  Partner with <span className="text-[#D4AF37]">Accredian</span>
                </h2>
                <p className="text-gray-300 text-lg max-w-md">
                  Empower your enterprise with world-class training solutions tailored for your team's success.
                </p>
              </div>
            </motion.div>

            {/* RIGHT SIDE: Form */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full md:w-1/2 h-full bg-[#0c0c0c] border-l border-white/5 relative flex flex-col"
            >
              {/* Close Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                onClick={onClose}
                className="absolute top-8 right-8 p-3 text-gray-400 hover:text-white transition-all cursor-pointer z-50 rounded-full hover:bg-white/5"
                aria-label="Close modal"
              >
                <X size={32} />
              </motion.button>

              <div className="flex-1 overflow-hidden px-8 md:px-16 lg:px-24 py-12 flex flex-col justify-center">
                <div className="max-w-md mx-auto w-full space-y-6">
                  <div className="space-y-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Enterprise Inquiry</h3>
                    <p className="text-gray-500 text-xs md:text-sm">Please provide your details below to schedule a consultation.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                    {/* Full Name */}
                    <div className="relative group">
                      <div className="absolute left-0 bottom-3 text-gray-500 group-focus-within:text-[#D4AF37] transition-colors">
                        <User size={16} />
                      </div>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="w-full bg-transparent border-b border-white/10 py-2 pl-7 text-white outline-none focus:border-[#D4AF37] transition-all placeholder:text-gray-600 text-base"
                      />
                    </div>

                    {/* Email */}
                    <div className="relative group">
                      <div className="absolute left-0 bottom-3 text-gray-500 group-focus-within:text-[#D4AF37] transition-colors">
                        <Mail size={16} />
                      </div>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Work Email"
                        className="w-full bg-transparent border-b border-white/10 py-2 pl-7 text-white outline-none focus:border-[#D4AF37] transition-all placeholder:text-gray-600 text-base"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      {/* Phone */}
                      <div className="relative group">
                        <div className="absolute left-0 bottom-3 text-gray-500 group-focus-within:text-[#D4AF37] transition-colors">
                          <Phone size={16} />
                        </div>
                        <div className="flex items-center border-b border-white/10 group-focus-within:border-[#D4AF37] transition-all">
                          <span className="pl-7 py-2 text-white text-base font-medium">+91</span>
                          <input
                            required
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="00000 00000"
                            className="w-full bg-transparent py-2 pl-2 text-white outline-none placeholder:text-gray-600 text-base"
                          />
                        </div>
                      </div>

                      {/* Company */}
                      <div className="relative group">
                        <div className="absolute left-0 bottom-3 text-gray-500 group-focus-within:text-[#D4AF37] transition-colors">
                          <Building2 size={16} />
                        </div>
                        <input
                          required
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Company Name"
                          className="w-full bg-transparent border-b border-white/10 py-2 pl-7 text-white outline-none focus:border-[#D4AF37] transition-all placeholder:text-gray-600 text-base"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      {/* Domain Dropdown */}
                      <div className="relative group">
                        <div className="absolute left-0 bottom-3 text-gray-500 group-focus-within:text-[#D4AF37] transition-colors">
                          <BookOpen size={16} />
                        </div>
                        <select
                          required
                          name="domain"
                          value={formData.domain}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-white/10 py-2 pl-7 text-white outline-none focus:border-[#D4AF37] transition-all appearance-none cursor-pointer text-base"
                        >
                          <option value="" disabled className="bg-[#111]">Select Domain</option>
                          <option value="PM" className="bg-[#111]">Product Management</option>
                          <option value="CFO" className="bg-[#111]">CFO</option>
                          <option value="DS" className="bg-[#111]">Data Science</option>
                          <option value="AI" className="bg-[#111]">Artificial Intelligence</option>
                          <option value="HR" className="bg-[#111]">Human Resource</option>
                          <option value="SL" className="bg-[#111]">Strategy & Leadership</option>
                          <option value="GM" className="bg-[#111]">General Management</option>
                          <option value="DT" className="bg-[#111]">Digital Transformation</option>
                          <option value="BM" className="bg-[#111]">Business Management</option>
                          <option value="Finance" className="bg-[#111]">Finance</option>
                          <option value="Project-mgmt" className="bg-[#111]">Project Management</option>
                          <option value="SM" className="bg-[#111]">Senior Management</option>
                        </select>
                      </div>

                      {/* Number of Candidates */}
                      <div className="relative group">
                        <div className="absolute left-0 bottom-3 text-gray-500 group-focus-within:text-[#D4AF37] transition-colors">
                          <Users size={16} />
                        </div>
                        <input
                          required
                          type="text"
                          name="candidates"
                          value={formData.candidates}
                          onChange={handleChange}
                          placeholder="No. of Candidates"
                          className="w-full bg-transparent border-b border-white/10 py-2 pl-7 text-white outline-none focus:border-[#D4AF37] transition-all placeholder:text-gray-600 text-base"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      {/* Mode of Delivery */}
                      <div className="relative group">
                        <div className="absolute left-0 bottom-3 text-gray-500 group-focus-within:text-[#D4AF37] transition-colors">
                          <Globe size={16} />
                        </div>
                        <select
                          required
                          name="mode"
                          value={formData.mode}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-white/10 py-2 pl-7 text-white outline-none focus:border-[#D4AF37] transition-all appearance-none cursor-pointer text-base"
                        >
                          <option value="" disabled className="bg-[#111]">Mode of Delivery</option>
                          <option value="online" className="bg-[#111]">Online</option>
                          <option value="offline" className="bg-[#111]">Offline</option>
                        </select>
                      </div>

                      {/* Location */}
                      <div className="relative group">
                        <div className="absolute left-0 bottom-3 text-gray-500 group-focus-within:text-[#D4AF37] transition-colors">
                          <MapPin size={16} />
                        </div>
                        <input
                          required
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="Location (e.g. Delhi)"
                          className="w-full bg-transparent border-b border-white/10 py-2 pl-7 text-white outline-none focus:border-[#D4AF37] transition-all placeholder:text-gray-600 text-base"
                        />
                      </div>
                    </div>

                    <motion.button
                      whileTap={isFormValid ? { scale: 0.95 } : {}}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      disabled={isSubmitting || !isFormValid}
                      type="submit"
                      className="w-full bg-[#D4AF37] text-black font-bold py-4 rounded-xl mt-4 md:mt-6 transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed text-base md:text-lg shadow-xl"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                    </motion.button>
                  </form>

                  <p className="text-center text-gray-600 text-[10px] uppercase tracking-[0.2em] font-medium pt-2">
                    Trusted by 500+ global enterprises
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
