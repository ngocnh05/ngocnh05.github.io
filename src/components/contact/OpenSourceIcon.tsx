import { OpenSourceIconProps } from "@/types/contactPageInfo";
import Link from "next/link";

export default function OpenSourceIcon({
  href,
  label,
  icon: Icon,
  iconColor = "#ffffff",
}: OpenSourceIconProps) {
  const isWhiteIcon =
    iconColor.toLowerCase() === "#ffffff" ||
    iconColor.toLowerCase() === "#fff" ||
    label.toLowerCase() === "github";

  return (
    <Link
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full flex items-center gap-4 px-5 py-4 md:py-4.5 rounded-2xl border border-slate-300/80 dark:border-white/15 bg-white/90 dark:bg-white/5 backdrop-blur-md shadow-[0_8px_24px_rgba(15,23,42,0.08)] dark:shadow-[0_18px_60px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:bg-white dark:hover:bg-white/10 hover:border-sky-400 dark:hover:border-white/30 active:scale-[0.98] select-none group"
    >
      {/* Icon box (high contrast container) */}
      <div className="flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-xl ring-1 ring-slate-300/80 dark:ring-white/15 bg-slate-100 dark:bg-white/10 shrink-0 group-hover:ring-sky-400 dark:group-hover:ring-white/30 transition-all shadow-inner">
        <Icon
          className={`w-6 h-6 md:w-7 md:h-7 transition-transform group-hover:scale-110 ${
            isWhiteIcon ? "text-[#181717] dark:text-white" : ""
          }`}
          style={isWhiteIcon ? undefined : { color: iconColor }}
        />
      </div>

      {/* Label text */}
      <div className="min-w-0 flex-1">
        <span className="block font-semibold tracking-wide text-slate-800 dark:text-white text-base md:text-lg truncate group-hover:text-sky-600 dark:group-hover:text-[#9ccfd5] transition-colors">
          {label}
        </span>
      </div>
    </Link>
  );
}