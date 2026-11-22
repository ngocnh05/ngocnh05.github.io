// components/SendMessageButton.tsx
import React from "react";

type SendMessageButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string;
};

export default function SendMessageButton({
  text = "Send Message",
  className = "",
  ...props
}: SendMessageButtonProps) {
  return (
    <button
      type="button"
      className={[
        "w-full",
        "rounded-2xl",
        "px-6 py-4",
        "uppercase tracking-wider font-bold text-sm md:text-base",
        // Light mode
        "bg-white/95 text-slate-800 border-2 border-slate-300/80 shadow-[0_8px_24px_rgba(15,23,42,0.1)]",
        // Dark mode
        "dark:bg-white/10 dark:text-white/90 dark:border-white/20 dark:shadow-[0_18px_50px_rgba(0,0,0,0.35)]",
        // Hover & Active
        "transition-all duration-200 ease-out cursor-pointer select-none",
        "hover:text-[#0284c7] hover:border-sky-400 hover:scale-[1.02] hover:shadow-lg",
        "dark:hover:text-cyan-300 dark:hover:bg-white/20 dark:hover:border-white/30",
        "active:scale-[0.99]",
        "focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300/50",
        className,
      ].join(" ")}
      {...props}
    >
      <span className="inline-flex items-center justify-center gap-3">
        <span>{text}</span>
        <span aria-hidden className="leading-none text-base">
          →
        </span>
      </span>
    </button>
  );
}
