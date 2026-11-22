"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ProjectShowcaseCardProps } from "@/types/projectsPageInfo";
import { FaCode } from "react-icons/fa6";
import { IoDocumentAttach } from "react-icons/io5";
import { useApp } from "@/context/AppContext";

export default function ProjectShowcaseCard({
  title,
  description,
  techs,
  codeUrl,
  detailUrl,
  media,
  className = ""
}: ProjectShowcaseCardProps) {
  const { t } = useApp();
  // Create transition
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <section ref={ref} className={`w-full ${className} px-3 sm:px-6 md:px-10 overflow-y-hidden`}>
      {/* Wrapper */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={inView? {opacity: 1, y: 0} : {}}
        transition={{ duration: 1.2, ease: "easeOut"}}
        className="relative mx-auto max-w-5xl rounded-2xl border border-white/90">

          {/* Media area: Khung demo dự án */}
          <div className="relative overflow-hidden rounded-t-2xl bg-[#1e2a4a]/90 aspect-16/9 flex items-center justify-center border-b border-white/20 select-none">
            {media?.type === "image" && media.src ? (
              <Image
                src={media.src}
                alt={media.alt || title}
                fill
                className="object-cover"
              />
            ) : media?.type === "video" && media.src ? (
              <video
                src={media.src}
                poster={media.poster}
                controls
                className="w-full h-full object-cover"
              />
            ) : (
              <>
                {/* Đường chéo chữ X nối 4 góc */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="0" x2="100%" y2="100%" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="2" strokeDasharray="6 6" />
                  <line x1="100%" y1="0" x2="0" y2="100%" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="2" strokeDasharray="6 6" />
                </svg>

                {/* Thẻ thông số kích thước ở trung tâm */}
                <div className="relative z-10 flex flex-col items-center justify-center p-4 md:p-6 text-center bg-black/60 rounded-xl border border-white/20 shadow-xl max-w-[85%]">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/10 flex items-center justify-center mb-2 md:mb-3 text-white">
                    <span className="text-xl md:text-2xl font-bold">✕</span>
                  </div>
                  <h4 className="text-sm md:text-lg font-bold text-white tracking-wide">
                    {t.projects.demoFrame}
                  </h4>
                  <p className="mt-1 text-xs md:text-sm font-semibold text-[#8acbd3]">
                    {t.projects.demoFrameSize}
                  </p>
                  <span className="mt-0.5 text-[11px] md:text-xs text-white/70">
                    {t.projects.demoFrameRatio}
                  </span>
                </div>
              </>
            )}
          </div>

        {/* BOTTOM: Purple info panel (overlaps) */}
        <div
          className="relative rounded-b-2xl px-7 py-8 shadow-2xl ring-1 ring-white/10 bg-[#7ca7d4]"
        >
          <p className="text-xl md:text-xl lg:text-2xl font-semibold tracking-tight uppercase text-[#4d2d48] mb-2">
            {title}
          </p>

          <p className="text-xs md:text-sm lg:text-base leading-relaxed text-[#4a1945]">
            {description}
          </p>

          {/* Tech chips */}
          <div className="mt-5 flex flex-wrap gap-2">
            {techs.map((t) => (
              <span
                key={t}
                className="text-[10px] md:text-sm font-medium rounded-full border border-[#4d2d48]/50 bg-[#4d2d48]/10 px-3 py-1 text-white/80"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            {codeUrl ? (
              <Link
                href={codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                    inline-flex items-center gap-2 rounded-xl 
                    border border-[#4d2d48]/50 bg-[#4d2d48]/40 px-4 py-2 
                    text-xs md:text-sm lg:text-base font-semibold text-white 
                    shadow-sm transition hover:bg-[#4d2d48]/20 hover:scale-[1.06]
                    focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                {/* simple icon */}
                <FaCode className="w-4 h-4 md:w-6 md:h-6"/> {t.projects.viewCode}
              </Link>
            ) : null}

            {detailUrl ? (
              <Link
                href={detailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                    inline-flex items-center gap-2 rounded-xl ml-5
                    border border-[#4d2d48]/50 bg-[#4d2d48]/40 px-4 py-2 
                    text-xs md:text-sm lg:text-base font-semibold text-white 
                    shadow-sm transition hover:bg-[#4d2d48]/20 hover:scale-[1.06]
                    focus:outline-none focus:ring-2 focus:ring-white/30
                "
              >
                <IoDocumentAttach className="w-4 h-4 md:w-6 md:h-6"/> {t.projects.viewDetail}
              </Link>
            ) : null}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
