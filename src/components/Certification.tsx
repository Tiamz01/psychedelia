"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { Award, Shield, Fingerprint, Search, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Certification() {
  const [email, setEmail] = useState("");
  const [showCert, setShowCert] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-200, 200], [15, -15]);
  const rotateY = useTransform(x, [-200, 200], [-15, 15]);

  function handleMouseMove(event: React.MouseEvent) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - (rect.left + rect.width / 2));
    y.set(event.clientY - (rect.top + rect.height / 2));
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  function handleSearch() {
    if (!email.trim()) return;
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setShowCert(true);
    }, 1500);
  }

  return (
    <section id="certification" className="relative py-10 overflow-hidden bg-[var(--bg-2)]/40">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--primary)]/4 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[var(--accent)]/4 blur-[120px] rounded-full" />
      </div>

      <div className="section-container relative z-10">
        <div className="text-center mb-10">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[var(--primary)]/8 border border-[var(--primary)]/30 text-[var(--primary)] text-xs font-bold tracking-widest uppercase mb-8">
            <Award className="w-3.5 h-3.5" />
            Verify Your Achievement
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-7xl font-black mb-6 tracking-tight">
            GET YOUR <span className="text-gradient-primary">CERTIFICATE</span>
          </motion.h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg font-light leading-relaxed">
            Completed the Psychedelia mentorship? Enter your email to retrieve your official trading credential.
          </p>
        </div>

        {/* Email search */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl mx-auto mb-16">
          <div className="glass-panel p-3 flex items-center gap-3 border-[var(--primary)]/25">
            <div className="flex-shrink-0 pl-3"><Search className="w-5 h-5 text-gray-500" /></div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your enrolled email address..." className="flex-1 bg-transparent text-white placeholder-gray-600 outline-none py-3 text-sm" onKeyDown={(e) => e.key === "Enter" && handleSearch()} />
            <button onClick={handleSearch} disabled={isSearching} className="btn-neon px-6 py-3 text-sm flex-shrink-0 disabled:opacity-50">
              <span className="flex items-center gap-2">
                {isSearching ? (<><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Searching...</>) : (<>Get Certificate <ArrowRight className="w-4 h-4" /></>)}
              </span>
            </button>
          </div>
          <p className="text-center text-gray-600 text-xs mt-4">Use the email you registered with during enrollment</p>
        </motion.div>

        {/* Success message */}
        {showCert && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="max-w-xl mx-auto mb-10">
            <div className="flex items-center justify-center gap-3 px-5 py-3 rounded-xl bg-[var(--accent)]/6 border border-[var(--accent)]/20">
              <CheckCircle2 className="w-5 h-5 text-[var(--accent)]" />
              <span className="text-sm text-[var(--accent)] font-medium">Certificate found for <span className="font-bold">{email}</span></span>
            </div>
          </motion.div>
        )}

        {/* 3D Tilt Certificate Card — always visible */}
        <div className="flex justify-center">
          <div className="perspective-1000 w-full max-w-lg" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <motion.div style={{ rotateX, rotateY }} className="relative aspect-[1.6/1] w-full rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] p-[2px]">
                <div className="w-full h-full rounded-2xl bg-[var(--surface)] relative overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700" style={{ background: "linear-gradient(105deg, transparent 20%, var(--primary-glow) 30%, var(--accent-glow) 40%, var(--secondary-glow) 50%, transparent 60%)", backgroundSize: "200% 100%", animation: "shimmer 3s ease-in-out infinite" }} />
                  <div className="absolute inset-0 grid-bg opacity-20" />

                  <div className="relative z-10 flex flex-col items-center justify-center h-full p-8">
                    <div className="absolute top-6 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#a855f7]/30 to-transparent" />

                    {showCert && (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring", stiffness: 200 }} className="absolute top-5 right-5">
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30">
                          <CheckCircle2 className="w-3 h-3 text-[var(--accent)]" />
                          <span className="text-[9px] font-bold text-[var(--accent)] uppercase tracking-wider">Verified</span>
                        </div>
                      </motion.div>
                    )}

                    <div className="relative mb-5">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center shadow-[0_0_30px_var(--primary-glow)] group-hover:shadow-[0_0_50px_var(--primary-glow)] transition-shadow duration-500">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute inset-0 rounded-xl border border-[var(--primary)]/30 animate-ping" style={{ animationDuration: "2.5s" }} />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black text-gradient-primary tracking-tight mb-2">MASTER TRADER</h3>
                    <p className="text-gray-400 font-mono tracking-[0.25em] text-[10px] uppercase mb-2">Psychedelia Graduate</p>

                    {showCert && (
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[var(--accent)] text-xs font-medium mb-3">{email}</motion.p>
                    )}

                    <div className="w-24 h-px bg-gradient-to-r from-transparent via-[var(--primary)]/40 to-transparent mb-4" />
                    <p className="text-gray-500 text-xs font-light">Certified by <span className="text-[var(--primary)] font-semibold">Techriz</span></p>

                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-gray-600"><Fingerprint className="w-3 h-3 text-[var(--primary)]/50" />PX-2025-ELITE</div>
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-gray-600"><Shield className="w-3 h-3 text-[var(--accent)]/50" />VERIFIED</div>
                    </div>
                    <div className="absolute bottom-12 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {showCert && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex justify-center gap-4 mt-10">
            <button className="btn-neon px-8 py-3 text-sm"><span>Download Certificate</span></button>
            <button className="inline-flex items-center gap-2 px-8 py-3 text-sm rounded-full border border-[var(--accent)]/30 text-[var(--accent)] font-semibold hover:bg-[var(--accent)]/8 transition-all">Share on Social</button>
          </motion.div>
        )}

        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center text-gray-600 text-xs mt-10">
          Hover over the card to see the holographic effect ✨
        </motion.p>
      </div>
    </section>
  );
}
