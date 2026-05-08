"use client";

import { Send, MessageCircle, TrendingUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative pt-10 pb-6 border-t border-[var(--primary)]/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[var(--primary)]/3 blur-[150px] rounded-full pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden shadow-[0_0_20px_var(--primary-glow)]">
                <img src="/logo.png" alt="Psychedelia" className="w-full h-full object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center -z-10">
                  <span className="font-black text-white text-xl">P</span>
                </div>
              </div>
              <span className="font-black tracking-tighter text-lg text-white">
                PSYCHE<span className="text-gradient-primary">DELIA</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 font-light">
              Elite trading mentorship by Techriz. Master the markets with proprietary strategies,
              live sessions, and a community of driven traders.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://t.me/Techriztm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-[var(--primary)]/8 border border-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] hover:bg-[var(--primary)]/15 hover:shadow-[0_0_15px_var(--primary-glow)] transition-all"
                aria-label="Message Techriz on Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="https://t.me/Techriztm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-[var(--accent)]/8 border border-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] hover:bg-[var(--accent)]/15 hover:shadow-[0_0_15px_var(--accent-glow)] transition-all"
                aria-label="DM Techriz on Telegram"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-7">Navigate</h4>
            <ul className="space-y-4">
              {[
                { label: "About Techriz", href: "#about" },
                { label: "Curriculum", href: "#curriculum" },
                { label: "Certification", href: "#certification" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Enroll Now", href: "#enroll" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-[#a855f7] transition-colors text-sm font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-7">Connect</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://t.me/Techriztm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-500 hover:text-[var(--primary)] transition-colors text-sm font-light"
                >
                  <Send className="w-3.5 h-3.5 flex-shrink-0" />
                  Join Community (Telegram)
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/Techriztm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-500 hover:text-[var(--accent)] transition-colors text-sm font-light"
                >
                  <MessageCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  DM Techriz (Telegram)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-500 hover:text-[var(--primary)] transition-colors text-sm font-light"
                >
                  <TrendingUp className="w-3.5 h-3.5 flex-shrink-0" />
                  Trading Community
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-10 border-t border-[var(--primary)]/8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs tracking-wide">
            Â© 2025 PSYCHEDELIA BY TECHRIZ. ALL RIGHTS RESERVED.
          </p>
          <p className="text-gray-700 text-xs">
            Trading involves risk. Past performance does not guarantee future results.
          </p>
        </div>
      </div>
    </footer>
  );
}

