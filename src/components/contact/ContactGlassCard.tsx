import { ContactGlassCardProps } from "@/types/contactPageInfo";

export default function ContactGlassCard({
  label,
  value,
  icon: Icon,
  href,
}: ContactGlassCardProps) {
  const content = (
    <div
      className={[
        "w-full",
        "flex items-center gap-6 md:gap-8 lg:gap-10",
        "rounded-2xl",
        "border border-slate-300/80 dark:border-white/15",
        "bg-white/90 dark:bg-white/5 backdrop-blur-md",
        "px-4 md:px-8 py-3 md:py-4",
        "shadow-[0_8px_24px_rgba(15,23,42,0.08)] dark:shadow-[0_18px_60px_rgba(0,0,0,0.25)]",
        "transition-transform duration-300 ease-out",
        "hover:-translate-y-0.5 hover:scale-[1.01]",
      ].join(" ")}
    >
      {/* Icon box */}
      <div className="flex items-center justify-center p-2.5 rounded-xl ring-1 ring-slate-300/80 dark:ring-white/10 bg-slate-100 dark:bg-white/10 shrink-0">
        <Icon className="w-5 h-5 md:w-8 md:h-8 lg:w-9 lg:h-9 text-sky-600 dark:text-[#8acbd3]" />
      </div>

      {/* Text */}
      <div className="min-w-0">
        <p className="font-semibold text-slate-500 dark:text-[#8acbd3]/80 text-xs md:text-sm uppercase tracking-wider">{label}</p>
        <p className="mt-0.5 truncate font-bold tracking-wide text-slate-900 dark:text-[#9ccfd5] text-base md:text-lg">
          {value}
        </p>
      </div>
    </div>
  );

  if (!href) return content;

  return (
    <a
      href={href}
      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-200/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
    >
      {content}
    </a>
  );
}
