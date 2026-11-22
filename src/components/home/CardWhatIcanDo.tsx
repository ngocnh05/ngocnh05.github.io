'use client'

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { iconItem } from "@/types/honePageInfo";
import { useApp } from "@/context/AppContext";

interface CardWhatICanDoProps {
    linkToImage?: string;
    title: string;
    icons?: iconItem[];
    contain: string[];
}

export default function CardWhatICanDo({
    title = 'Title',
    contain = [],
}: CardWhatICanDoProps) {
    const { t } = useApp();

    // Create transition
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section ref={ref} className="w-full lg:mt-20 overflow-x-hidden">
            <div className="mx-auto px-4 max-w-6xl">
                <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:items-center">
                
                {/* Left (Khung X ghi kích cỡ) */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-1/2 flex justify-center"
                >
                    <div className="relative w-full max-w-lg aspect-4/3 rounded-2xl border-2 border-dashed border-white/35 bg-[#1e2a4a]/85 overflow-hidden flex flex-col items-center justify-center select-none shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
                        {/* Đường chéo chữ X nối 4 góc */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0" y1="0" x2="100%" y2="100%" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="2" strokeDasharray="6 6" />
                            <line x1="100%" y1="0" x2="0" y2="100%" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="2" strokeDasharray="6 6" />
                        </svg>

                        {/* Thẻ ghi chú kích thước */}
                        <div className="relative z-10 flex flex-col items-center justify-center p-5 text-center bg-black/60 rounded-xl border border-white/20 shadow-lg max-w-[85%]">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center mb-2 text-white">
                                <span className="text-xl md:text-2xl font-bold">✕</span>
                            </div>
                            <h4 className="text-sm md:text-base font-bold text-white tracking-wide">
                                {t.home.largeIllustration}
                            </h4>
                            <p className="mt-1 text-xs md:text-sm font-semibold text-[#8acbd3]">
                                {t.home.largeIllustrationSize}
                            </p>
                            <span className="mt-0.5 text-[11px] md:text-xs text-white/70">
                                {t.home.largeIllustrationRatio}
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Right (Text & ghi chú sau ⚡) */}
                <motion.div 
                    initial={{ opacity: 0, x: 60 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="w-full lg:w-1/2"
                >
                    <h2 className="font-semibold text-white text-center lg:text-left text-lg md:text-2xl leading-snug">
                        {title}
                    </h2>

                    {/* Dãy khung X nhỏ cho logo ngôn ngữ & công cụ */}
                    <div className="mt-5 flex flex-wrap justify-center lg:justify-start items-center gap-3 md:gap-4">
                        {[1, 2, 3, 4, 5].map((num) => (
                            <div key={num} className="flex flex-col items-center gap-1">
                                <div
                                    className="relative flex items-center justify-center h-12 w-12 lg:h-14 lg:w-14 rounded-xl border-2 border-dashed border-white/40 bg-white/5 overflow-hidden shadow-sm"
                                    title={`Khung logo công cụ ${num} (Kích cỡ: 48 × 48 px)`}
                                >
                                    {/* Đường chéo chữ X */}
                                    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="0" y1="0" x2="100%" y2="100%" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.5" />
                                        <line x1="100%" y1="0" x2="0" y2="100%" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.5" />
                                    </svg>
                                    <span className="relative z-10 text-[9px] md:text-[10px] font-semibold text-white/90 bg-black/60 px-1 py-0.5 rounded">
                                        48×48
                                    </span>
                                </div>
                                <span className="text-[10px] md:text-xs text-white/70">
                                    {t.home.toolBadge} {num}
                                </span>
                            </div>
                        ))}
                    </div>

                    <ul className="m-0 md:my-5 space-y-5 mt-6">
                        {contain.map((text, idx) => (
                            <li key={idx} className="flex gap-3 items-start">
                                <span className="text-amber-300 shrink-0 text-base md:text-lg">⚡</span>
                                <p className="text-xs md:text-base text-white/90 leading-relaxed italic">
                                    {text}
                                </p>
                            </li>
                        ))}
                    </ul>
                </motion.div>
                </div>
            </div>
        </section>
    );
}