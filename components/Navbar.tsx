"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      // Use a small offset (navbar height ~80px) so active section
      // switches as soon as the section top enters the viewport
      const scrollPosition = window.scrollY + 100;

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

      // Fix: always build URL cleanly from "/" — avoids double-# bug
      if (current === "home") {
        window.history.replaceState(null, "", "/");
      } else {
        window.history.replaceState(null, "", `/#${current}`);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount to set correct initial state
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
    { name: "CAT", href: "/#cat" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "FAQs", href: "/#faqs" },
    { name: "Testimonials", href: "/#testimonials" },
  ];

  const allLinks = [...mainLinks, ...dropdownLinks];

  return (
    <nav className="fixed top-0 w-full z-40 bg-primary border-b border-silver/10 px-6 py-4 md:py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/#home"
          className="text-2xl font-bold tracking-widest text-text-primary"
        >
          ACCREDIAN
        </Link>

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
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative group pb-2 transition-colors duration-300 ${
                    isActive ? "text-white" : "text-silver hover:text-white"
                  }`}
                >
                  {link.name}

                  {/* Smooth White Underline */}
                  <span
                    className={`
                      absolute left-0 bottom-[-6px] h-[2px] bg-white
                      transition-all duration-300 ease-in-out
                      ${
                        isActive
                          ? "w-full opacity-100"
                          : "w-0 opacity-0 group-hover:w-full group-hover:opacity-60"
                      }
                    `}
                  />
                </Link>
              );
            })}
          </div>

          {/* Hamburger */}
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-silver hover:text-white transition-colors duration-300 p-1 flex items-center justify-center"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

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
                          isActive ? "text-white bg-white/5" : "text-silver"
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
                  {dropdownLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="px-6 py-3 text-base font-medium text-silver hover:text-white hover:bg-white/5 transition-all duration-300"
                      style={{ fontFamily: "var(--font-exo-2)" }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}