"use client";

import { motion } from "framer-motion";
import ThreeCanvas from "./ThreeCanvas";
import DataNebula from "./DataNebula";
import { Send, ChevronDown, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center overflow-hidden pt-24 pb-12">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <ThreeCanvas className="w-full h-full">
          <DataNebula />
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#a855f7" />
          <pointLight position={[-10, -5, -10]} intensity={0.8} color="#22d3ee" />
        </ThreeCanvas>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--background)] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)]/60 via-transparent to-[var(--background)]/60 pointer-events-none" />
      </div>

      {/* Scan-line */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, #a855f7, #22d3ee, transparent)", animation: "scan-line 8s linear infinite" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left — Text */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/8 text-xs font-bold tracking-widest uppercase text-[var(--primary)] mb-10"
            >
              <TrendingUp className="w-3.5 h-3.5" />
              By Techriz · Elite Trading Mentorship
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
                <span className="text-gradient block mb-2">ASCEND THE</span>
                <span className="text-gradient-primary block mb-2">MARKET</span>
                <span className="text-gradient block">MATRIX</span>
              </h1>

              <p className="text-base md:text-lg text-gray-400 max-w-xl mb-12 font-light leading-relaxed mx-auto lg:mx-0">
                Techriz&apos;s <span className="text-[var(--primary)] font-semibold">Psychedelia</span>{" "}
                mentorship program — master high-octane trading strategies, join an elite community, and rewire your trading DNA for consistent profits.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center mb-14">
                <motion.a href="#enroll" whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} className="btn-neon px-10 py-4 text-base">
                  <span>Start Your Journey</span>
                </motion.a>
                <motion.a href="https://t.me/Techriztm" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} className="btn-telegram gap-2.5 px-10 py-4 text-base">
                  <Send className="w-5 h-5" />
                  Message Techriz
                </motion.a>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-10 md:gap-14">
                {[
                  { value: "500+", label: "Students Mentored" },
                  { value: "87%", label: "Success Rate" },
                  { value: "3+", label: "Years Experience" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className="text-3xl font-black text-gradient-primary mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-500 font-medium tracking-widest uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Techriz Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-[#a855f7]/8 blur-[100px] pointer-events-none" />
            <div className="absolute w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full bg-[#22d3ee]/6 blur-[80px] pointer-events-none translate-x-10 translate-y-10" />

            <motion.div animate={{ y: [0, -16, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="relative z-10">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#a855f7] via-[#7c3aed] to-[#22d3ee] opacity-30 blur-xl animate-pulse" />

              <div className="relative w-[300px] h-[360px] md:w-[380px] md:h-[450px] rounded-3xl overflow-hidden border-2 border-[rgba(168,85,247,0.4)] shadow-[0_0_60px_rgba(168,85,247,0.3)]">
                <img src="/techriz.png" alt="Techriz - Psychedelia Founder" className="w-full h-full object-cover object-top" />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[var(--background)] to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-panel px-5 py-3 flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold text-sm">Techriz</p>
                      <p className="text-[#a855f7] text-xs font-medium">Lead Mentor</p>
                    </div>
                    <div className="w-3 h-3 rounded-full bg-[#22d3ee] shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating chart — top right */}
            <motion.div animate={{ y: [0, -12, 0], rotate: [2, -1, 2] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute top-4 right-0 md:-right-4 z-20">
              <div className="glass-panel p-3 w-[140px] md:w-[160px] border-[rgba(34,211,238,0.2)] shadow-[0_0_20px_rgba(34,211,238,0.12)]">
                <div className="w-full h-[70px] md:h-[80px] rounded-lg overflow-hidden bg-gradient-to-br from-[#120835] to-[#1a1030] mb-2">
                  <img src="/chart-1.png" alt="Trading chart" className="w-full h-full object-cover opacity-90" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-gray-500 font-mono">BTC/USD</span>
                  <span className="text-[10px] text-[#22d3ee] font-bold">+12.4%</span>
                </div>
              </div>
            </motion.div>

            {/* Floating chart — bottom left */}
            <motion.div animate={{ y: [0, 10, 0], rotate: [-3, 1, -3] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-8 -left-4 md:-left-8 z-20">
              <div className="glass-panel p-3 w-[140px] md:w-[160px] border-[rgba(168,85,247,0.2)] shadow-[0_0_20px_rgba(168,85,247,0.12)]">
                <div className="w-full h-[70px] md:h-[80px] rounded-lg overflow-hidden bg-gradient-to-br from-[#120835] to-[#1a1030] mb-2">
                  <img src="/chart-2.png" alt="Trading chart" className="w-full h-full object-cover opacity-90" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-gray-500 font-mono">EUR/USD</span>
                  <span className="text-[10px] text-[#a855f7] font-bold">+8.7%</span>
                </div>
              </div>
            </motion.div>

            {/* Profit badge */}
            <motion.div animate={{ y: [0, -8, 0], x: [0, 5, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="absolute top-1/2 -right-6 md:-right-12 z-20">
              <div className="glass-panel px-4 py-2.5 border-[rgba(34,211,238,0.25)] shadow-[0_0_15px_rgba(34,211,238,0.08)]">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#22d3ee]" />
                  <span className="text-sm font-bold text-white">+240%</span>
                </div>
                <p className="text-[9px] text-gray-500 mt-0.5">This Month</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <ChevronDown className="w-6 h-6 text-[#a855f7] opacity-60" />
      </motion.div>
    </section>
  );
}
