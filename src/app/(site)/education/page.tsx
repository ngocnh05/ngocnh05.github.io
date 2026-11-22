"use client";

import EducationCard from "@/components/education/EducationCard"
import { useApp } from "@/context/AppContext";

export default function Education() {
    const { t } = useApp();

    const educationList = [
        {
            schoolName: t.education.schoolName,
            period: t.education.period,
            major: t.education.major,
            bullets: t.education.bullets,
            websiteUrl: "#",
            websiteLabel: t.education.visitWebsite,
        }
    ];

    return (
        <section className="w-full mt-10 md:mt-30 lg:mt-20">

            {/* Basic information section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

                {/* Khung X Education */}
                <div className="p-6 md:p-10 flex items-center justify-center">
                    <div className="relative w-full max-w-md aspect-4/3 rounded-2xl border-2 border-dashed border-white/35 bg-[#1e2a4a]/85 overflow-hidden flex flex-col items-center justify-center select-none shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
                        {/* Đường chéo chữ X nối 4 góc */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0" y1="0" x2="100%" y2="100%" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="2" strokeDasharray="6 6" />
                            <line x1="100%" y1="0" x2="0" y2="100%" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="2" strokeDasharray="6 6" />
                        </svg>

                        {/* Thẻ ghi chú kích thước */}
                        <div className="relative z-10 flex flex-col items-center justify-center p-4 md:p-6 text-center bg-black/60 rounded-xl border border-white/20 shadow-lg max-w-[85%]">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center mb-2 text-white">
                                <span className="text-xl md:text-2xl font-bold">✕</span>
                            </div>
                            <h4 className="text-sm md:text-base font-bold text-white tracking-wide">
                                {t.education.eduFrame}
                            </h4>
                            <p className="mt-1 text-xs md:text-sm font-semibold text-[#8acbd3]">
                                {t.education.eduFrameSize}
                            </p>
                            <span className="mt-0.5 text-[11px] md:text-xs text-white/70">
                                {t.education.eduFrameRatio}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Basic Information */}
                <div className="p-8 lg:mt-15">
                    <h1 className="tracking-widest text-slate-100 uppercase">
                        {t.education.heading1}
                    </h1>

                    <div className="mt-6 inline-block [filter:drop-shadow(0_14px_0_rgba(0,0,0,0.18))]">
                        <h2
                        className="
                            bg-[#26aec3] text-white
                            px-8 py-5 md:px-5 lg:px-10
                            uppercase tracking-wide
                            [clip-path:polygon(0_0,94%_0,100%_100%,0_100%)]
                        "
                        >
                            {t.education.heading2}
                        </h2>
                    </div>

                    <p className="mt-8 text-slate-300 lg:mr-10">
                        {t.education.description}
                    </p>
                </div>
            </div>

            {/* Education Info details */}
            <div>
                <h2 className="flex items-center justify-center mt-25 md:mt-35 lg:mt-30">{t.education.degreesReceived}</h2>
                <div className="flex flex-col justify-center p-10">
                    {educationList.map((item, idx) => (
                    <EducationCard key={idx} {...item} />
                    ))}
                </div>
            </div>
        </section>
    )
}