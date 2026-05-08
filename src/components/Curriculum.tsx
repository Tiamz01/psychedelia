"use client";

import { motion } from "framer-motion";
import { BookOpen, TrendingUp, ShieldCheck, Zap, Brain, BarChart3 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const modules = [
  { title: "Market Structure", desc: "Decode price action, understand smart money concepts, and learn to read the market like the institutions do.", icon: <BarChart3 className="w-7 h-7" />, color: "from-[var(--primary)] to-[var(--secondary)]", glow: "var(--primary-glow)", number: "01" },
  { title: "Psychedelia Entries", desc: "Techriz's proprietary entry models — precision setups with defined risk and maximum reward potential.", icon: <Zap className="w-7 h-7" />, color: "from-[var(--secondary)] to-[var(--accent)]", glow: "var(--secondary-glow)", number: "02" },
  { title: "Risk Architecture", desc: "Protect your capital with military-grade risk management. Learn position sizing, stop placement, and portfolio defense.", icon: <ShieldCheck className="w-7 h-7" />, color: "from-[var(--accent)] to-[var(--primary)]", glow: "var(--accent-glow)", number: "03" },
  { title: "Trading Psychology", desc: "Master the mental game — emotional discipline, patience frameworks, and the mindset of consistently profitable traders.", icon: <Brain className="w-7 h-7" />, color: "from-[var(--amber)] to-[var(--primary)]", glow: "var(--accent-glow)", number: "04" },
  { title: "Live Sessions", desc: "Trade live with Techriz. Watch real entries in real time, ask questions, and learn execution under pressure.", icon: <BookOpen className="w-7 h-7" />, color: "from-[var(--primary)] to-[var(--secondary)]", glow: "var(--primary-glow)", number: "05" },
  { title: "Advanced Scaling", desc: "Graduate from small accounts to funded trading. Learn compounding, multi-asset strategies, and portfolio growth.", icon: <TrendingUp className="w-7 h-7" />, color: "from-[var(--accent)] to-[var(--secondary)]", glow: "var(--accent-glow)", number: "06" },
];

export default function Curriculum() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="curriculum" className="relative py-10 overflow-hidden bg-[var(--bg-2)]/30">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--primary)]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="text-center mb-10">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[var(--primary)]/8 border border-[var(--primary)]/30 text-[var(--primary)] text-xs font-bold tracking-widest uppercase mb-8">
            <BookOpen className="w-3.5 h-3.5" />
            6-Phase Journey
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            THE <span className="text-gradient-primary">CURRICULUM</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            A meticulously crafted journey designed to rewire your trading DNA — from market basics to advanced scaling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 relative z-10">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
              animate={{
                scale: hoveredIndex === index ? 1.05 : hoveredIndex !== null ? 0.97 : 1,
                opacity: hoveredIndex === index ? 1 : hoveredIndex !== null ? 0.5 : 1,
                zIndex: hoveredIndex === index ? 50 : 0,
              }}
              className="swirl-container group cursor-pointer rounded-2xl"
            >
              <div className="swirl-border" />
              <div className="swirl-inner p-8 md:p-9 flex flex-col h-full w-full min-h-[320px]">
                <div className="card-glow" />
                <div className="text-xs font-mono text-gradient tracking-widest mb-5 font-bold">MODULE {module.number}</div>
                <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 mb-7", module.color)} style={{ boxShadow: `0 0 30px ${module.glow}` }}>
                  <div className="text-white drop-shadow-lg">{module.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-gradient transition-all">{module.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light group-hover:text-gray-300 transition-colors flex-1">{module.desc}</p>
                <div className="mt-7 pt-5 border-t border-white/5">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--primary)] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Explore Module <TrendingUp className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
