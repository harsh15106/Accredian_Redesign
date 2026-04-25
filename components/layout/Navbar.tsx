"use client";
import {motion} from 'framer-motion'
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 120; // Offset for navbar height

      let current = "home";

      sections.forEach((section) => {
        const el = section as HTMLElement;
        const top = el.offsetTop;
        const height = el.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          current = el.id;
        }
      });

      setActiveSection(current);

      if (current === "home") {
        window.history.replaceState(null, "", "/");
      } else {
        window.history.replaceState(null, "", `/#${current}`);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainLinks = [
    { name: "Home", href: "/#home", id: "home" },
    { name: "Stats", href: "/#stats", id: "stats" },
    { name: "Clients", href: "/#clients", id: "clients" },
    { name: "Accredian Edge", href: "/#edge", id: "edge" },
  ];

  const dropdownLinks = [
    { name: "CAT", href: "/#cat", id: "cat" },
    { name: "How It Works", href: "/#how-it-works", id: "how-it-works" },
    { name: "Testimonials", href: "/#testimonials", id: "testimonials" },
    { name: "FAQ", href: "/#faq", id: "faq" },
  ];

  const allLinks = [...mainLinks, ...dropdownLinks];

  return (
    <nav className="fixed top-0 w-full z-40 bg-primary border-b border-silver/10 px-6 py-4 md:py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <motion.div 
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link
            href="/#home"
            className="flex items-center cursor-pointer"
          >
            <Image 
              src="/logos/accredian.png" 
              alt="Accredian Logo" 
              width={160} 
              height={40} 
              className="h-8 md:h-9 w-auto object-contain"
              priority
            />
          </Link>
        </motion.div>

        {/* Right Side */}
        <div className="flex items-center gap-6 xl:gap-8">

          {/* Desktop Nav */}
          <div
            className="hidden lg:flex items-center gap-6 xl:gap-8 text-base lg:text-lg font-medium"
            style={{ fontFamily: "var(--font-exo-2)" }}
          >
            {mainLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <motion.div 
                  key={link.name} 
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link
                    href={link.href}
                    className={`relative group pb-2 transition-all duration-300 cursor-pointer ${
                      isActive ? "text-[#FEBD14]" : "text-silver hover:text-white"
                    }`}
                  >
                    {link.name}

                    {/* Smooth Underline */}
                    <span
                      className={`
                        absolute left-0 bottom-[-6px] h-[2px] bg-[#FEBD14]
                        transition-all duration-300 ease-in-out
                        ${
                          isActive
                            ? "w-full opacity-100"
                            : "w-0 opacity-0 group-hover:w-full group-hover:opacity-60"
                        }
                      `}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Hamburger */}
          <div className="relative">
            <motion.button
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-silver hover:text-white transition-colors duration-300 p-1 flex items-center justify-center cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>

            {/* Dropdown */}
            {isMenuOpen && (
              <div className="absolute right-0 top-full mt-4 w-56 bg-[#0F0F0F] border border-silver/20 rounded-xl shadow-2xl py-2 flex flex-col z-50 overflow-hidden">

                {/* Mobile (all links) */}
                <div className="lg:hidden flex flex-col">
                  {allLinks.map((link) => {
                    const isActive = activeSection === link.id;

                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`px-6 py-3 text-base font-medium transition-all duration-300 hover:bg-white/5 ${
                          isActive ? "text-[#FEBD14] bg-white/5" : "text-silver"
                        }`}
                        style={{ fontFamily: "var(--font-exo-2)" }}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>

                {/* Desktop dropdown */}
                <div className="hidden lg:flex flex-col">
                  {dropdownLinks.map((link) => {
                    const isActive = activeSection === link.id;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`px-6 py-3 text-base font-medium transition-all duration-300 hover:bg-white/5 ${
                          isActive ? "text-[#FEBD14] bg-white/5" : "text-silver hover:text-white"
                        }`}
                        style={{ fontFamily: "var(--font-exo-2)" }}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}