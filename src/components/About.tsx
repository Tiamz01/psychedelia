"use client";

import { motion } from "framer-motion";
import { User, TrendingUp, Users, Award, Send, MessageCircle } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-10 overflow-hidden bg-[var(--bg-2)]/40">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[var(--primary)]/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--accent)]/5 blur-[120px] rounded-full" />
      </div>

      <div className="section-container relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/8 text-xs font-bold tracking-widest uppercase text-[var(--primary)] mb-8">
            <User className="w-3.5 h-3.5" />
            Meet Your Mentor
          </div>
          <h2 className="text-4xl md:text-7xl font-black tracking-tight mb-6">
            THE <span className="text-gradient-primary">TECHRIZ</span> METHOD
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Built by a trader who lives the charts — refined through years of real market warfare.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
            <div className="glass-panel p-10 md:p-12 relative overflow-hidden group">
              <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-[var(--primary)]/10 via-transparent to-[var(--accent)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="flex items-center gap-6 mb-10">
                <div className="relative flex-shrink-0">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-[0_0_30px_var(--primary-glow)] border-2 border-[var(--primary)]/30">
                    <img src="/techriz.png" alt="Techriz - Psychedelia Founder" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center -z-10">
                      <span className="text-4xl font-black text-white">T</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[var(--accent)] rounded-full border-2 border-[var(--surface)] shadow-[0_0_10px_var(--accent-glow)]" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-1">Techriz</h3>
                  <p className="text-[var(--primary)] font-semibold text-sm tracking-wide mb-1">@Techriztm</p>
                  <p className="text-gray-500 text-xs">Founder · Lead Mentor</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 font-light text-[15px]">
                Techriz is the founder and head mentor behind <span className="text-[var(--primary)] font-semibold">Psychedelia</span> — an elite trading mentorship program designed to transform beginners into confident, profitable traders. With years of hands-on market experience across forex, crypto, and synthetic indices, Techriz has built a track record that speaks for itself.
              </p>
              <p className="text-gray-400 leading-relaxed mb-10 font-light text-[15px]">
                The Psychedelia method isn&apos;t about theory — it&apos;s about <span className="text-[var(--accent)] font-medium">real entries, real risk management, and real results</span>. Students learn directly from live sessions, get personalized strategy reviews, and become part of a private community of driven traders.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://t.me/TechrizSignals" target="_blank" rel="noopener noreferrer" className="btn-telegram gap-2.5 px-6 py-3.5 text-sm">
                  <Send className="w-4 h-4" />
                  Join Waitlist Channel
                </a>
                <a href="https://t.me/Techriztm" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm rounded-full border border-[var(--accent)]/30 text-[var(--accent)] font-semibold hover:bg-[var(--accent)]/8 transition-all hover:shadow-[0_0_15px_var(--accent-glow)]">
                  <MessageCircle className="w-4 h-4" />
                  DM Techriz
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="space-y-8">
            <div className="grid grid-cols-2 gap-5">
              {[
                { icon: <TrendingUp className="w-6 h-6" />, value: "500+", label: "Students Trained", color: "var(--primary)" },
                { icon: <Award className="w-6 h-6" />, value: "87%", label: "Success Rate", color: "var(--secondary)" },
                { icon: <Users className="w-6 h-6" />, value: "24/7", label: "Community Access", color: "var(--accent)" },
                { icon: <TrendingUp className="w-6 h-6" />, value: "3+", label: "Years Trading", color: "var(--amber)" },
              ].map((stat, i) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1 }} className="glass-panel p-6 text-center group hover:border-[rgba(168,85,247,0.3)] transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" style={{ backgroundColor: `color-mix(in srgb, ${stat.color}, transparent 85%)`, color: stat.color }}>
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-500 font-medium tracking-wider uppercase">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="glass-panel p-8 text-left">
              <h4 className="text-sm font-bold tracking-widest uppercase text-[var(--primary)] mb-6">What You&apos;ll Master</h4>
              <ul className="space-y-4">
                {["Market structure & smart money concepts", "Risk management that protects your capital", "Live trading sessions with Techriz", "Proprietary Psychedelia entry models", "Trading psychology & emotional discipline", "Access to exclusive Telegram community"].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-300 text-sm leading-relaxed text-left">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
