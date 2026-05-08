"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Send, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Certification", href: "#certification" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Enroll", href: "#enroll" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[rgba(3,0,20,0.88)] backdrop-blur-xl border-b border-[rgba(168,85,247,0.12)] shadow-[0_4px_30px_rgba(168,85,247,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="section-container flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-14 h-14 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(168,85,247,0.4)] group-hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-shadow">
              <img
                src="/logo.png"
                alt="Psychedelia"
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#a855f7] to-[#7c3aed] flex items-center justify-center -z-10">
                <span className="font-black text-white text-xl">P</span>
              </div>
            </div>
            <span className="font-black tracking-tighter text-lg text-foreground transition-colors">
              PSYCHE<span className="text-gradient-primary">DELIA</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-gray-400 hover:text-foreground transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-[#a855f7] to-[#22d3ee] group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://t.me/Techriztm"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-telegram flex items-center gap-2 px-5 py-2.5 text-sm"
            >
              <Send className="w-4 h-4" />
              Join Community
            </a>
            <a href="#enroll" className="btn-neon px-5 py-2.5 text-sm">
              <span>Enroll Now</span>
            </a>
            <ThemeToggle />
          </div>

          <div className="lg:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              className="p-2 text-gray-300 hover:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[rgba(3,0,20,0.97)] backdrop-blur-xl border-t border-[rgba(168,85,247,0.12)] px-6 py-6 space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-gray-300 hover:text-white font-medium py-2 border-b border-white/5"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="https://t.me/Techriztm"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-telegram flex items-center justify-center gap-2 px-5 py-3 text-sm"
              >
                <Send className="w-4 h-4" />
                Join Community
              </a>
              <a
                href="#enroll"
                className="btn-neon text-center px-5 py-3 text-sm"
                onClick={() => setMobileOpen(false)}
              >
                <span>Enroll Now</span>
              </a>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}
