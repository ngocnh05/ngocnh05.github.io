'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function FloatingControls() {
  const { lang, toggleLang, theme, toggleTheme } = useApp();
  const isLight = theme === 'light';

  return (
    <aside
      aria-label="Theme and language settings"
      className={`fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 flex items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 rounded-full backdrop-blur-xl border shadow-xl transition-all duration-300 ${
        isLight
          ? 'bg-white/95 border-slate-300/80 text-slate-800 shadow-slate-400/25'
          : 'bg-[#141b2d]/95 border-white/20 text-white shadow-black/60'
      }`}
    >
      {/* Language Toggle: EN / VI */}
      <button
        onClick={toggleLang}
        aria-label="Toggle language between English and Vietnamese"
        title={lang === 'en' ? "Chuyển sang Tiếng Việt" : "Switch to English"}
        className={`flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold tracking-wider transition-all duration-200 active:scale-95 cursor-pointer ${
          isLight ? 'hover:bg-slate-200/80' : 'hover:bg-white/10'
        }`}
      >
        <span className={lang === 'en' ? "text-[#0284c7] font-extrabold" : isLight ? "text-slate-500 font-medium" : "text-white/40 font-normal"}>
          EN
        </span>
        <span className={isLight ? "text-slate-400" : "text-white/30"}>/</span>
        <span className={lang === 'vi' ? "text-[#0284c7] font-extrabold" : isLight ? "text-slate-500 font-medium" : "text-white/40 font-normal"}>
          VI
        </span>
      </button>

      {/* Divider */}
      <div className={`w-[1px] h-3.5 sm:h-4 ${isLight ? 'bg-slate-300' : 'bg-white/20'}`} aria-hidden="true" />

      {/* Theme Toggle: Sun / Moon */}
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme between Day and Night"
        title={isLight ? "Chuyển sang chế độ Đêm (Night mode)" : "Switch to Day mode"}
        className={`flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full transition-all duration-200 active:scale-90 cursor-pointer ${
          isLight ? 'hover:bg-slate-200/80 text-amber-500' : 'hover:bg-white/10 text-amber-300'
        }`}
      >
        {isLight ? (
          <FiSun className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform hover:rotate-45" />
        ) : (
          <FiMoon className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform hover:-rotate-12" />
        )}
      </button>
    </aside>
  );
}
