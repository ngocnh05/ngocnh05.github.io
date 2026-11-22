"use client";

import Link from "next/link";
import { IoIosHeart } from "react-icons/io";
import { FiSun, FiMoon } from "react-icons/fi";
import { useApp } from "@/context/AppContext";

export function Footer() {
  const { t, lang, toggleLang, theme, toggleTheme } = useApp();
  const isLight = theme === "light";

  return (
    <footer className="w-full border-t border-slate-200/60 dark:border-white/10 mt-16 transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-4 py-6 text-slate-600 dark:text-white/80">
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          {/* Controls Pill: EN / VI + Theme Toggle */}
          <div
            aria-label="Theme and language settings"
            className={`flex items-center gap-1 sm:gap-1.5 p-1 rounded-full backdrop-blur-md border shadow-md transition-all duration-300 ${
              isLight
                ? "bg-white/80 border-slate-300/80 text-slate-800 shadow-slate-300/30"
                : "bg-white/5 border-white/15 text-white shadow-black/40"
            }`}
          >
            {/* Language Toggle: EN / VI */}
            <button
              onClick={toggleLang}
              aria-label="Toggle language between English and Vietnamese"
              title={lang === "en" ? "Chuyển sang Tiếng Việt" : "Switch to English"}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold tracking-wider transition-all duration-200 active:scale-95 cursor-pointer ${
                isLight ? "hover:bg-slate-200/80" : "hover:bg-white/10"
              }`}
            >
              <span className={lang === "en" ? "text-[#0284c7] font-extrabold" : isLight ? "text-slate-500 font-medium" : "text-white/40 font-normal"}>
                EN
              </span>
              <span className={isLight ? "text-slate-400" : "text-white/30"}>/</span>
              <span className={lang === "vi" ? "text-[#0284c7] font-extrabold" : isLight ? "text-slate-500 font-medium" : "text-white/40 font-normal"}>
                VI
              </span>
            </button>

            {/* Divider */}
            <div className={`w-[1px] h-3.5 ${isLight ? "bg-slate-300" : "bg-white/20"}`} aria-hidden="true" />

            {/* Theme Toggle: Sun / Moon */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme between Day and Night"
              title={isLight ? "Chuyển sang chế độ Đêm (Night mode)" : "Switch to Day mode"}
              className={`flex items-center justify-center w-7 h-7 rounded-full transition-all duration-200 active:scale-90 cursor-pointer ${
                isLight ? "hover:bg-slate-200/80 text-amber-500" : "hover:bg-white/10 text-amber-300"
              }`}
            >
              {isLight ? (
                <FiSun className="w-3.5 h-3.5 transition-transform hover:rotate-45" />
              ) : (
                <FiMoon className="w-3.5 h-3.5 transition-transform hover:-rotate-12" />
              )}
            </button>
          </div>

          {/* Center text */}
          <p className="flex items-center gap-2 text-sm">
            {t.footer.madeWith} <IoIosHeart className="text-red-400" aria-hidden="true" /> {t.footer.by}{" "}
            <span className="text-slate-900 dark:text-white/90 font-semibold">{t.signature}.</span>
          </p>

          {/* Right copyright / link */}
          <p className="text-sm">
            © {new Date().getFullYear()} ·{" "}
            <Link
              href="https://github.com/ngocnh05/ngocnh05.github.io"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-slate-900 dark:hover:text-white transition"
            >
              {t.footer.repoLink}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
