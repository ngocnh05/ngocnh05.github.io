'use client'

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useApp } from "@/context/AppContext";

export interface ToolItem {
    name: string;
    icon?: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
    color?: string;
}

interface CardWhatICanDoProps {
    title: string;
    contain: string[];
    imageSrc?: string;
    imageAlt?: string;
    tools?: ToolItem[];
    isReverse?: boolean;
}

export default function CardWhatICanDo({
    title = 'Title',
    contain = [],
    imageSrc,
    imageAlt,
    tools = [],
    isReverse = false,
}: CardWhatICanDoProps) {
    const { t } = useApp();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section ref={ref} className="w-full lg:mt-16 overflow-x-hidden">
            <div className="mx-auto px-4 max-w-6xl">
                <div
                    className={[
                        "flex flex-col-reverse items-center gap-10 lg:items-center",
                        isReverse ? "lg:flex-row-reverse" : "lg:flex-row",
                    ].join(" ")}
                >
                    {/* Illustration / Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: isReverse ? 60 : -60 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-1/2 flex justify-center"
                    >
                        {imageSrc ? (
                            <div className="relative w-full max-w-lg aspect-4/3 rounded-2xl border border-white/20 bg-slate-900/60 backdrop-blur-md overflow-hidden flex items-center justify-center p-3 sm:p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] group">
                                <Image
                                    src={imageSrc}
                                    alt={imageAlt || title}
                                    width={600}
                                    height={400}
                                    className="w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        ) : (
                            <div className="relative w-full max-w-lg aspect-4/3 rounded-2xl border-2 border-dashed border-white/35 bg-[#1e2a4a]/85 overflow-hidden flex flex-col items-center justify-center select-none shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
                                <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0" y1="0" x2="100%" y2="100%" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="2" strokeDasharray="6 6" />
                                    <line x1="100%" y1="0" x2="0" y2="100%" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="2" strokeDasharray="6 6" />
                                </svg>
                                <div className="relative z-10 flex flex-col items-center justify-center p-5 text-center bg-black/60 rounded-xl border border-white/20 shadow-lg max-w-[85%]">
                                    <h4 className="text-sm md:text-base font-bold text-white tracking-wide">
                                        {t.home.largeIllustration}
                                    </h4>
                                    <p className="mt-1 text-xs md:text-sm font-semibold text-[#8acbd3]">
                                        {t.home.largeIllustrationSize}
                                    </p>
                                </div>
                            </div>
                        )}
                    </motion.div>

                    {/* Content & Tools Side */}
                    <motion.div 
                        initial={{ opacity: 0, x: isReverse ? -60 : 60 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="w-full lg:w-1/2"
                    >
                        <h2 className="font-bold text-white text-center lg:text-left text-xl md:text-2xl lg:text-3xl leading-snug">
                            {title}
                        </h2>

                        {/* Tool Badges */}
                        {tools && tools.length > 0 && (
                            <div className="mt-5 flex flex-wrap justify-center lg:justify-start items-center gap-2 sm:gap-2.5">
                                {tools.map((tool, idx) => {
                                    const IconComponent = tool.icon;
                                    return (
                                        <div
                                            key={idx}
                                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-200 text-xs sm:text-sm font-medium text-white shadow-sm"
                                        >
                                            {IconComponent && (
                                                <IconComponent
                                                    className="w-4 h-4 shrink-0"
                                                    style={{ color: tool.color || "#ffffff" }}
                                                />
                                            )}
                                            <span>{tool.name}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {/* Bullet Points */}
                        <ul className="m-0 my-5 space-y-4">
                            {contain.map((text, idx) => (
                                <li key={idx} className="flex gap-3 items-start">
                                    <span className="text-amber-300 shrink-0 text-base md:text-lg mt-0.5">⚡</span>
                                    <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed italic">
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
