"use client";

import React from "react";

type SoftButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
};

export default function SoftButton({
  label = "Explore",
  className = "",
  ...props
}: SoftButtonProps) {
  return (
    <button
      className={[
        // layout
        "flex items-center justify-center gap-2 sm:gap-3",
        "px-5 py-2.5 sm:px-8 sm:py-3.5",
        "rounded-full",

        // typography
        "font-bold uppercase tracking-wider text-xs sm:text-sm md:text-base",
        "text-slate-800 dark:text-white",

        // background & border
        "bg-white/90 dark:bg-[#1E2B57]/90",
        "border-2 border-slate-300/80 dark:border-white/20",

        // shadow
        "shadow-[0_8px_24px_rgba(15,23,42,0.12)] dark:shadow-[-2px_-1px_8px_rgba(255,255,255,0.1),4px_2px_16px_rgba(0,0,0,0.5)]",

        // transform & transition
        "transform transition-all duration-200 cursor-pointer select-none",

        // hover
        "hover:text-[#0284c7] dark:hover:text-cyan-300",
        "hover:bg-white dark:hover:bg-[#25366d]",
        "hover:border-sky-400 dark:hover:border-cyan-400/50",
        "hover:scale-105 hover:shadow-xl",

        // active
        "active:scale-95",

        "whitespace-nowrap",
        className,
      ].join(" ")}
      {...props}
    >
      <span>{label}</span>
    </button>
  );
}
