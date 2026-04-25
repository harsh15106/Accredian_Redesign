"use client";
import { motion } from 'framer-motion'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FormModal } from "@/components/ui/FormModal";

const SocialIcons = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/accredianlearn",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://x.com/accredianedu",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/accredianedu/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/accredian_edu",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.01 3.71.054 1.14.054 2.1.236 2.9.547a5.054 5.054 0 011.82 1.184c.512.512.89 1.116 1.187 1.82.31.8.492 1.76.546 2.9.044.926.055 1.28.055 3.71s-.01 2.784-.054 3.71c-.054 1.14-.236 2.1-.547 2.9a5.196 5.196 0 01-1.184 1.82c-.512.512-1.116.89-1.82 1.187-.8.31-1.76.492-2.9.546-.926.044-1.28.055-3.71.055s-2.784-.01-3.71-.054c-1.14-.054-2.1-.236-2.9-.547a5.196 5.196 0 01-1.82-1.184 5.196 5.196 0 01-1.187-1.82c-.31-.8-.492-1.76-.546-2.9-.044-.926-.055-1.28-.055-3.71s.01-2.784.054-3.71c.054-1.14.236-2.1.547-2.9a5.196 5.196 0 011.184-1.82 5.196 5.196 0 011.82-1.187c.8-.31 1.76-.492 2.9-.546.926-.044 1.28-.055 3.71-.055zM12 7.056a4.944 4.944 0 100 9.888 4.944 4.944 0 000-9.888zM12 15.35a3.296 3.296 0 110-6.592 3.296 3.296 0 010 6.592zm5.39-9.666a1.188 1.188 0 11-2.376 0 1.188 1.188 0 012.376 0z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" />
      </svg>
    ),
  },
];

export function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className="bg-black border-t border-white/5 w-full pt-12 pb-8 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col">

        {/* SECTION 1: TOP ROW (Branding + Socials + Advisor) */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 mb-10">
          {/* LEFT: Branding Block */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex flex-col items-center lg:items-start mb-4">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/logos/accredian.png" 
                  alt="Accredian Logo" 
                  width={200} 
                  height={50} 
                  className="h-10 md:h-12 w-auto object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Social Icons (Repositioned below tagline) */}
            <div className="flex items-center gap-5 mt-2">
              {SocialIcons.map((social, idx) => (
                <Link
                  key={idx}
                  href={social.href}
                  className="text-silver/60 hover:text-[#FEBD14] transition-colors duration-300 cursor-pointer"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT: Advisor CTA */}
          <div className="flex flex-col items-center lg:items-end">
            <motion.button 
              onClick={() => setIsOpen(true)}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="bg-[#FEBD14] text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 cursor-pointer whitespace-nowrap mb-2"
            >
              Enquire Now
            </motion.button>
            <p className="text-[#A0A0A0] text-sm font-medium tracking-wide">
              Speak with our Advisor
            </p>
          </div>
        </div>

        {/* Divider 1 */}
        <div className="w-full h-[1px] bg-white/5 mb-10" />

        {/* SECTION 2: MAIN CONTENT*/}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
          <div className="space-y-6">
            <h3 className="text-white text-xl font-bold tracking-wider">Accredian</h3>
            <ul className="flex flex-col gap-4">
              {[
                { name: "About", href: "https://accredian.com/About" },
                { name: "Blog", href: "https://blog.accredian.com/" },
                { name: "Why Accredian", href: "https://accredian.com/whyaccredian" }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-[#A0A0A0] hover:text-[#FEBD14] transition-all duration-300 cursor-pointer text-base"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT COLUMN: Contact Us */}
          <div className="space-y-6">
            <h3 className="text-white text-xl font-bold tracking-wider">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex flex-col gap-1">
                <span className="text-silver/50 uppercase text-[10px] font-bold tracking-widest">Email</span>
                <Link
                  href="mailto:enterprise@accredian.com"
                  className="text-[#FEBD14] text-lg font-medium hover:underline transition-all duration-300"
                >
                  enterprise@accredian.com
                </Link>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-silver/50 uppercase text-[10px] font-bold tracking-widest">Address</span>
                <p className="text-[#A0A0A0] text-base leading-relaxed max-w-sm">
                  123, Cyber Hub, Gurgaon, Haryana,<br />
                  India - 122002
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: BOTTOM (Copyright) */}
        <div className="pt-8 border-t border-white/5">
          <p className="text-center text-[#555] text-[11px] md:text-xs uppercase tracking-[0.2em] leading-loose max-w-3xl mx-auto">
            &copy; {new Date().getFullYear()} Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
          </p>
        </div>

      </div>
      <FormModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </footer>
  );
}
