"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Send, MessageCircle, Zap, Clock } from "lucide-react";

export default function Enrollment() {
  return (
    <section id="enroll" className="relative py-10 overflow-hidden bg-[var(--bg-2)]/40">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[var(--primary)]/5 blur-[180px] rounded-full" />
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      <div className="section-container relative z-10">
        {/* Section heading */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[var(--primary)]/8 border border-[var(--primary)]/30 text-[var(--primary)] text-xs font-bold tracking-widest uppercase mb-8"
          >
            <Zap className="w-3.5 h-3.5" />
            Limited Spots Available
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black tracking-tight mb-6"
          >
            SECURE <span className="text-gradient-primary">YOUR SPOT</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Join the next cohort of elite traders. Limited slots to maintain mentorship quality.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left â€” Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-5">
              {[
                "Lifetime access to the full curriculum",
                "Weekly live trading sessions with Techriz",
                "Private Telegram community access",
                "One-on-one strategy reviews",
                "Proprietary Psychedelia entry models",
                "Certificate upon completion",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-4 text-gray-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#a855f7] flex-shrink-0" />
                  <span className="font-light text-[15px]">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Urgency banner */}
            <div className="glass-panel p-6 flex items-center gap-5 border-[var(--amber)]/20">
              <div className="w-14 h-14 rounded-xl bg-[var(--amber)]/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-[var(--amber)]" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-1">Next Cohort Starting Soon</p>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Spots are filling up fast. Join the waitlist to secure priority access.
                </p>
              </div>
            </div>

            {/* Telegram quick links */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://t.me/Techriztm"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-telegram gap-2.5 px-7 py-4 text-sm"
              >
                <Send className="w-4 h-4" />
                Join Community on Telegram
              </a>
              <a
                href="https://t.me/Techriztm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm rounded-full border border-[var(--accent)]/30 text-[var(--accent)] font-semibold hover:bg-[var(--accent)]/8 transition-all hover:shadow-[0_0_15px_var(--accent-glow)]"
              >
                <MessageCircle className="w-4 h-4" />
                Message Techriz
              </a>
            </div>
          </motion.div>

          {/* Right â€” Sign up form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-panel p-10 md:p-12 relative overflow-hidden border-[var(--primary)]/20">
              {/* Premium badge */}
              <div className="absolute top-0 right-0 px-5 py-2 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-xs font-bold uppercase tracking-widest rounded-bl-xl">
                Premium Access
              </div>

              {/* Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[var(--primary)]/10 blur-[80px] rounded-full pointer-events-none" />

              <h3 className="text-2xl font-black mb-2 mt-2">Mentorship Program</h3>
              <p className="text-gray-500 text-sm mb-10">Sign up for the Psychedelia mentorship by Techriz</p>

              <form className="space-y-6">
                <div>
                  <label htmlFor="enrollment-name" className="block text-sm font-medium text-gray-400 mb-2.5">Full Name</label>
                  <input
                    type="text"
                    id="enrollment-name"
                    className="w-full bg-white/5 border border-[var(--primary)]/15 rounded-xl px-5 py-4 focus:border-[var(--primary)] outline-none transition-colors text-white placeholder-gray-600"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="enrollment-email" className="block text-sm font-medium text-gray-400 mb-2.5">Email Address</label>
                  <input
                    type="email"
                    id="enrollment-email"
                    className="w-full bg-white/5 border border-[var(--primary)]/15 rounded-xl px-5 py-4 focus:border-[var(--primary)] outline-none transition-colors text-white placeholder-gray-600"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="enrollment-telegram" className="block text-sm font-medium text-gray-400 mb-2.5">Telegram Username</label>
                  <input
                    type="text"
                    id="enrollment-telegram"
                    className="w-full bg-white/5 border border-[var(--primary)]/15 rounded-xl px-5 py-4 focus:border-[var(--primary)] outline-none transition-colors text-white placeholder-gray-600"
                    placeholder="@yourusername"
                  />
                </div>
                <div>
                  <label htmlFor="enrollment-experience" className="block text-sm font-medium text-gray-400 mb-2.5">Trading Experience</label>
                  <select
                    id="enrollment-experience"
                    className="w-full bg-white/5 border border-[var(--primary)]/15 rounded-xl px-5 py-4 focus:border-[var(--primary)] outline-none transition-colors text-gray-400 appearance-none cursor-pointer"
                  >
                    <option value="">Select your level</option>
                    <option value="beginner">Complete Beginner</option>
                    <option value="intermediate">Some Experience (1-2 years)</option>
                    <option value="advanced">Experienced (3+ years)</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    className="w-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:from-[var(--secondary)] hover:to-[var(--primary)] text-white font-bold py-4.5 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_0_30px_var(--primary-glow)] text-sm tracking-wide uppercase"
                  >
                    Complete Enrollment <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </form>

              <p className="mt-8 text-center text-xs text-gray-600 leading-relaxed">
                By enrolling, you agree to our Terms of Service. Questions?{" "}
                <a
                  href="https://t.me/Techriztm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--primary)] hover:underline"
                >
                  DM Techriz on Telegram
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

