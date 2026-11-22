'use client'

import { EducationCardProps } from "@/types/educationPageInfo";
import { motion } from "framer-motion";
import { useApp } from "@/context/AppContext";

export default function EducationCard({
  schoolName,
  period,
  major,
  bullets,
  logoSrc,
  logoAlt = "School logo",
  websiteUrl,
  websiteLabel,
}: EducationCardProps) {
  const { t } = useApp();
  const activeWebsiteLabel = websiteLabel ?? t.education.visitWebsite;
  return (
    <motion.div
      className="w-full overflow-x-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.12 },
        },
      }}
    >
      <div className="flex items-center gap-6">
        {/* Left logo bubble (flip) */}
        <motion.div
          className="hidden md:flex shrink-0"
          style={{ perspective: 1200 }}
          variants={{
            hidden: { opacity: 0, rotateY: -180, scale: 0.9 },
            show: {
              opacity: 1,
              rotateY: 0,
              scale: 1,
              transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {logoSrc ? (
            <div className="h-36 w-36 rounded-full bg-white shadow-[0_12px_32px_rgba(0,0,0,0.45)] border-2 border-white/20 flex items-center justify-center p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logoSrc} alt={logoAlt} className="h-24 w-24 object-contain" />
            </div>
          ) : (
            <div className="relative h-36 w-36 rounded-full border-2 border-dashed border-[#26aec3] bg-slate-900 shadow-[0_12px_32px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center overflow-hidden select-none">
              {/* Đường chéo chữ X */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <line x1="15%" y1="15%" x2="85%" y2="85%" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.5" />
                <line x1="85%" y1="15%" x2="15%" y2="85%" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.5" />
              </svg>
              <span className="relative z-10 text-xl font-bold text-white mb-0.5">✕</span>
              <span className="relative z-10 text-[10px] font-semibold text-white/90 bg-black/60 px-2 py-0.5 rounded">
                {t.education.logoBadge}
              </span>
            </div>
          )}
        </motion.div>

        {/* Right card (slide from right) */}
        <motion.div
          className="flex-1 rounded-2xl bg-white dark:bg-slate-900 shadow-xl overflow-hidden border border-slate-200 dark:border-slate-800 transition-all duration-300"
          variants={{
            hidden: { opacity: 0, x: 100 },
            show: {
              opacity: 1,
              x: 0,
              transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {/* Header */}
          <div className="bg-slate-100 dark:bg-slate-800/80 px-6 py-5 border-b border-slate-200 dark:border-slate-700/60">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-base md:text-xl font-bold text-slate-900 dark:text-white leading-snug">
                {schoolName}
              </h3>
              <span className="text-xs md:text-sm text-slate-600 dark:text-slate-400 font-semibold shrink-0">
                {period}
              </span>
            </div>

            <div className="mt-2 text-sm md:text-base font-semibold text-[#26aec3] dark:text-[#38bdf8]">
              {major}
            </div>
          </div>

          {/* Body */}
          <div className="px-6 py-5">
            <ul className="space-y-3">
              {bullets.map((bulletText, i) => (
                <motion.li
                  key={i}
                  className="flex gap-3 text-slate-700 dark:text-slate-200 items-start text-xs md:text-sm leading-relaxed"
                  variants={{
                    hidden: { opacity: 0, x: 24 },
                    show: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                >
                  <span className="mt-1 select-none text-amber-500 shrink-0">⚡</span>
                  <span className="leading-relaxed">{bulletText}</span>
                </motion.li>
              ))}
            </ul>

            {/* Footer button */}
            {websiteUrl && websiteUrl !== "#" && (
              <motion.div
                className="mt-6 flex justify-end"
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex items-center justify-center gap-2
                    rounded-lg bg-slate-100 dark:bg-slate-800 px-5 py-2.5
                    text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-200
                    border border-slate-200 dark:border-slate-700
                    hover:bg-[#26aec3] hover:text-white hover:border-[#26aec3]
                    dark:hover:bg-[#26aec3] dark:hover:text-white dark:hover:border-[#26aec3]
                    hover:shadow-md hover:-translate-y-0.5
                    focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:ring-offset-2
                    transition duration-200
                  "
                >
                  <span>{activeWebsiteLabel}</span>
                  <svg className="w-4 h-4 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Mobile logo (stacked) */}
      <div className="md:hidden mt-5 flex justify-center">
        {logoSrc ? (
          <div className="h-24 w-24 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center p-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} alt={logoAlt} className="h-16 w-16 object-contain" />
          </div>
        ) : (
          <div className="relative h-24 w-24 rounded-full border-2 border-dashed border-[#26aec3] bg-slate-900 shadow-md flex flex-col items-center justify-center overflow-hidden select-none">
            {/* Đường chéo chữ X */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <line x1="15%" y1="15%" x2="85%" y2="85%" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.5" />
              <line x1="85%" y1="15%" x2="15%" y2="85%" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.5" />
            </svg>
            <span className="relative z-10 text-lg font-bold text-white mb-0.5">✕</span>
            <span className="relative z-10 text-[9px] font-semibold text-white/90 bg-black/60 px-1.5 py-0.5 rounded">
              {t.education.logoBadge}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
