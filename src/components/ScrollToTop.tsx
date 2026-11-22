"use client";

import { useEffect, useState } from "react";
import { useApp } from "@/context/AppContext";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);
  const { t } = useApp();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollTop}
      aria-label={t.scrollToTop}
      title={t.scrollToTop}
      className={`
        fixed right-5 bottom-5 z-40
        h-12 w-12 md:h-14 md:w-14 rounded-full
        border border-slate-300/80 dark:border-white/20
        bg-white/80 dark:bg-white/10 backdrop-blur-md
        text-slate-800 dark:text-white
        shadow-[0_10px_30px_rgba(0,0,0,0.2)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)]
        grid place-items-center
        transition-all duration-200 cursor-pointer
        hover:-translate-y-1 hover:shadow-lg
        active:translate-y-0 active:scale-95
        ${show ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
      `}
    >
      {/* arrow up */}
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
