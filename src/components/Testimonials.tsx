"use client";

import { motion } from "framer-motion";
import { Star, MessageSquareQuote } from "lucide-react";
import { useState } from "react";

// 8 placeholder testimonial screenshots — user will replace with real Telegram screenshots
const screenshots = [
  { id: 1, src: "/testimonial-1.png", name: "David A.", profit: "+240%" },
  { id: 2, src: "/testimonial-2.png", name: "Chioma N.", profit: "+180%" },
  { id: 3, src: "/testimonial-3.png", name: "Marcus T.", profit: "+310%" },
  { id: 4, src: "/testimonial-4.png", name: "Amara K.", profit: "+150%" },
  { id: 5, src: "/testimonial-5.png", name: "James O.", profit: "+200%" },
  { id: 6, src: "/testimonial-6.png", name: "Fatima B.", profit: "+275%" },
  { id: 7, src: "/testimonial-7.png", name: "Carlos R.", profit: "+190%" },
  { id: 8, src: "/testimonial-8.png", name: "Aisha D.", profit: "+220%" },
];

export default function Testimonials() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const orbitRadius = 280;

  return (
    <section id="testimonials" className="relative py-10 overflow-hidden bg-[var(--bg-2)]/50">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[var(--secondary)]/4 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[var(--primary)]/4 blur-[120px] rounded-full" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[var(--primary)]/8 border border-[var(--primary)]/30 text-[var(--primary)] text-xs font-bold tracking-widest uppercase mb-8"
          >
            <MessageSquareQuote className="w-3.5 h-3.5" />
            Student Results
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black tracking-tight mb-6"
          >
            REAL <span className="text-gradient-primary">RESULTS</span>
          </motion.h2>
          <p className="text-gray-400 font-light text-lg leading-relaxed max-w-xl mx-auto mb-6">
            Real screenshots from real students in the Psychedelia community.
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="flex gap-1.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-5 h-5 fill-[var(--amber)] text-[var(--amber)]" />
              ))}
            </div>
            <span className="font-bold text-white text-sm">4.9/5</span>
            <span className="text-gray-500 text-sm">from 200+ students</span>
          </div>
        </div>

        {/* Orbital Gallery */}
        <div
          className="relative mx-auto flex items-center justify-center"
          style={{ height: "700px", maxWidth: "700px" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            setHoveredId(null);
          }}
        >
          {/* Center glow */}
          <div className="absolute w-32 h-32 rounded-full bg-[var(--primary)]/15 blur-[60px]" />
          <div className="absolute w-20 h-20 rounded-full bg-[var(--accent)]/10 blur-[40px]" />

          {/* Center text */}
          <div className="absolute text-center z-0 pointer-events-none">
            <p className="text-gradient-primary font-black text-2xl tracking-tight">PSYCHEDELIA</p>
            <p className="text-gray-600 text-xs tracking-widest uppercase mt-1">Student Wins</p>
          </div>

          {/* Orbiting screenshots */}
          <div
            className="absolute w-full h-full"
            style={{
              animation: isPaused ? "none" : "swirl 30s linear infinite",
            }}
          >
            {screenshots.map((shot, index) => {
              const angle = (index / screenshots.length) * 360;
              const rad = (angle * Math.PI) / 180;
              const isHovered = hoveredId === shot.id;

              return (
                <div
                  key={shot.id}
                  className="absolute transition-all duration-500 ease-out"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: isHovered
                      ? `translate(-50%, -50%) scale(2.2)`
                      : `translate(-50%, -50%) translate(${Math.cos(rad) * orbitRadius}px, ${Math.sin(rad) * orbitRadius}px)`,
                    zIndex: isHovered ? 100 : 10,
                  }}
                  onMouseEnter={() => setHoveredId(shot.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Counter-rotate so images stay upright */}
                  <div
                    className="transition-all duration-500"
                    style={{
                      animation: isPaused ? "none" : "swirl 30s linear infinite reverse",
                    }}
                  >
                    <div
                      className={`
                        relative w-[120px] h-[160px] md:w-[140px] md:h-[185px] rounded-xl overflow-hidden cursor-pointer
                        border-2 transition-all duration-500
                        ${isHovered
                          ? "border-[var(--primary)] shadow-[0_0_40px_var(--primary-glow)]"
                          : "border-[var(--primary)]/20 shadow-[0_0_15px_var(--primary-glow)]"
                        }
                      `}
                    >
                      {/* Screenshot image */}
                      <img
                        src={shot.src}
                        alt={`${shot.name} testimonial`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          if (target.parentElement) {
                            target.parentElement.classList.add("testimonial-placeholder");
                          }
                        }}
                      />

                      {/* Placeholder gradient (shows if image fails) */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a30] via-[var(--surface)] to-[#0a0520] -z-10 flex flex-col items-center justify-center p-3">
                        <MessageSquareQuote className="w-6 h-6 text-[var(--primary)]/30 mb-2" />
                        <p className="text-[9px] text-gray-600 text-center font-mono">Screenshot</p>
                        <p className="text-[9px] text-gray-600 text-center font-mono">{shot.name}</p>
                      </div>

                      {/* Overlay on hover */}
                      <div className={`
                        absolute bottom-0 left-0 right-0 p-2.5 bg-gradient-to-t from-[var(--background)]/95 to-transparent
                        transition-opacity duration-300
                        ${isHovered ? "opacity-100" : "opacity-0"}
                      `}>
                        <p className="text-white text-xs font-bold">{shot.name}</p>
                        <p className="text-[var(--accent)] text-xs font-mono font-bold">{shot.profit}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile hint */}
        <p className="text-center text-gray-600 text-xs mt-8 lg:hidden">
          Tap on any screenshot to enlarge
        </p>
        <p className="text-center text-gray-600 text-xs mt-8 hidden lg:block">
          Hover over any screenshot to zoom in
        </p>
      </div>
    </section>
  );
}
