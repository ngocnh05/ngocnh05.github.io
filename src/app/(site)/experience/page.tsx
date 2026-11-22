"use client";

import ExperienceTimeline from "@/components/experience/ExperienceTimeLine";
import { useApp } from "@/context/AppContext";
import Image from "next/image";

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
        {
            id: "exp-3",
            period: t.experience.exp3Period,
            title: t.experience.exp3Title,
            company: t.experience.exp3Company,
            linkToCompany: "#",
            summary: t.experience.exp3Summary,
            bullets: t.experience.exp3Bullets,
            tags: t.experience.exp3Tags,
        },
    ];

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 overflow-x-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] xl:grid-cols-[420px_1fr] gap-8 md:gap-12 items-start">

                {/* Left: Info & Experience Illustration */}
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

                    {/* Illustration Frame */}
                    <div className="relative w-full max-w-xs md:max-w-sm aspect-4/3 rounded-2xl border border-white/20 bg-slate-900/60 backdrop-blur-md overflow-hidden flex items-center justify-center p-4 shadow-[0_18px_60px_rgba(0,0,0,0.35)] group mt-2">
                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#26aec3]/25 rounded-full blur-2xl pointer-events-none" />
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-sky-500/20 rounded-full blur-2xl pointer-events-none" />
                        <Image
                            src="/experience_image.svg"
                            alt="Experience Illustration"
                            width={500}
                            height={380}
                            priority
                            className="relative z-10 w-full h-auto max-h-[220px] object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                        />
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
