"use client";

import ExperienceTimeline from "@/components/experience/ExperienceTimeLine";
import { useApp } from "@/context/AppContext";

export default function Experience() {
    const { t } = useApp();

    const timelineItems = [
        {
            id: "exp-1",
            period: t.experience.exp1Period,
            title: t.experience.exp1Title,
            company: t.experience.exp1Company,
            linkToCompany: "#",
            summary: t.experience.exp1Summary,
            bullets: t.experience.exp1Bullets,
            tags: t.experience.exp1Tags,
        },
        {
            id: "exp-2",
            period: t.experience.exp2Period,
            title: t.experience.exp2Title,
            company: t.experience.exp2Company,
            linkToCompany: "#",
            summary: t.experience.exp2Summary,
            bullets: t.experience.exp2Bullets,
            tags: t.experience.exp2Tags,
        },
    ];

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 overflow-x-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] xl:grid-cols-[420px_1fr] gap-8 md:gap-12 items-start">

                {/* Left: Info & Khung X */}
                <div className="flex flex-col gap-4 lg:sticky lg:top-24">
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white uppercase">
                        {t.experience.heading1}
                    </h1>
                    <h2 className="text-base md:text-lg font-semibold text-[#8acbd3]">
                        {t.experience.heading2}
                    </h2>
                    <p className="text-sm md:text-base text-white/80 leading-relaxed">
                        {t.experience.description}
                    </p>

                    {/* Khung X Experience */}
                    <div className="relative w-full max-w-xs md:max-w-sm aspect-4/3 rounded-2xl border-2 border-dashed border-white/35 bg-[#1e2a4a]/85 overflow-hidden flex flex-col items-center justify-center select-none shadow-[0_18px_60px_rgba(0,0,0,0.35)] mt-2">
                        {/* Đường chéo chữ X nối 4 góc */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0" y1="0" x2="100%" y2="100%" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="2" strokeDasharray="6 6" />
                            <line x1="100%" y1="0" x2="0" y2="100%" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="2" strokeDasharray="6 6" />
                        </svg>

                        {/* Thẻ ghi chú kích thước */}
                        <div className="relative z-10 flex flex-col items-center justify-center p-4 text-center bg-black/60 rounded-xl border border-white/20 shadow-lg max-w-[85%]">
                            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center mb-1.5 text-white">
                                <span className="text-lg font-bold">✕</span>
                            </div>
                            <h4 className="text-xs md:text-sm font-bold text-white tracking-wide">
                                {t.experience.expFrame}
                            </h4>
                            <p className="mt-0.5 text-[11px] md:text-xs font-semibold text-[#8acbd3]">
                                {t.experience.expFrameSize}
                            </p>
                            <span className="text-[10px] md:text-[11px] text-white/70">
                                {t.experience.expFrameRatio}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right: Timeline */}
                <div className="min-w-0 w-full">
                    <ExperienceTimeline items={timelineItems} />
                </div>
                           
            </div>
        </section>
    );
}