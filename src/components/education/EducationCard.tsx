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
      <div className="flex items-center gap-5">
        {/* Left logo bubble (flip) - Khung X */}
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
            <div className="h-36 w-36 rounded-full bg-white shadow-[0_12px_32px_rgba(0,0,0,0.5)] flex items-center justify-center">
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
          className="flex-1 rounded-xl bg-white shadow-lg overflow-hidden border border-slate-200"
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
          <div className="bg-slate-200 px-6 py-5">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-base md:text-xl font-bold text-slate-900 leading-snug">
                {schoolName}
              </h3>
              <span className="text-xs md:text-sm text-slate-600 font-semibold shrink-0">
                {period}
              </span>
            </div>

            <div className="mt-2 text-sm md:text-base font-semibold text-slate-700">
              {major}
            </div>
          </div>

          {/* Body */}
          <div className="px-5 py-4">
            <ul className="space-y-2.5">
              {bullets.map((t, i) => (
                <motion.li
                  key={i}
                  className="flex gap-3 text-slate-700 items-start"
                  variants={{
                    hidden: { opacity: 0, x: 24 },
                    show: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                >
                  <span className="mt-1 select-none text-amber-500">⚡</span>
                  <span className="text-xs md:text-sm leading-relaxed text-slate-700">{t}</span>
                </motion.li>
              ))}
            </ul>

            {/* Footer button */}
            {websiteUrl && websiteUrl !== "#" && (
              <motion.div
                className="mt-4 flex justify-end"
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
                    inline-flex items-center justify-center
                    rounded-lg bg-slate-200 px-5 py-2.5
                    text-xs md:text-sm font-semibold text-slate-800
                    hover:bg-slate-300 hover:shadow-md hover:-translate-y-0.5
                    focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:ring-offset-2
                    transition
                  "
                >
                  <span>{activeWebsiteLabel}</span>
                </a>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Mobile logo (stacked) - Khung X */}
      <div className="md:hidden mt-5 flex justify-center">
        {logoSrc ? (
          <div className="h-24 w-24 rounded-full bg-white shadow-lg flex items-center justify-center">
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
