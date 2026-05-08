"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("psy-theme") as "dark" | "light" | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("psy-theme", next);
  }

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-xl border border-[rgba(168,85,247,0.2)] bg-[rgba(168,85,247,0.06)]" />
    );
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative w-10 h-10 rounded-xl flex items-center justify-center border border-[rgba(168,85,247,0.2)] hover:border-[rgba(168,85,247,0.4)] bg-[rgba(168,85,247,0.06)] hover:bg-[rgba(168,85,247,0.12)] transition-all duration-300 group"
    >
      {theme === "dark" ? (
        <Sun className="w-4.5 h-4.5 text-[#f59e0b] group-hover:rotate-45 transition-transform duration-300" />
      ) : (
        <Moon className="w-4.5 h-4.5 text-[#7c3aed] group-hover:-rotate-12 transition-transform duration-300" />
      )}
    </button>
  );
}
