"use client";

import EducationCard from "@/components/education/EducationCard"
import { useApp } from "@/context/AppContext";
import Image from "next/image";

export default function Education() {
    const { t } = useApp();

    const educationList = [
        {
            schoolName: t.education.schoolName,
            period: t.education.period,
            major: t.education.major,
            bullets: t.education.bullets,
            logoSrc: "/hou_logo.png",
            logoAlt: "Hanoi Open University Logo",
            websiteUrl: "https://hou.edu.vn",
            websiteLabel: t.education.visitWebsite,
        }
    ];

    return (
        <section className="w-full mt-10 md:mt-24 lg:mt-20">

            {/* Basic information section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">

                {/* Illustration Education */}
                <div className="p-6 md:p-10 flex items-center justify-center">
                    <div className="relative w-full max-w-md aspect-4/3 rounded-2xl border border-white/20 bg-slate-900/60 backdrop-blur-md overflow-hidden flex items-center justify-center p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] group">
                        <div className="absolute -top-10 -left-10 w-36 h-36 bg-[#26aec3]/25 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
                        <Image
                            src="/education_image.svg"
                            alt="Education Illustration"
                            width={500}
                            height={380}
                            priority
                            className="relative z-10 w-full h-auto max-h-[300px] object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>

                {/* Basic Information */}
                <div className="p-6 md:p-8 lg:mt-6">
                    <h1 className="tracking-widest text-slate-100 uppercase text-sm md:text-base font-semibold">
                        {t.education.heading1}
                    </h1>

                    <div className="mt-4 md:mt-6 inline-block [filter:drop-shadow(0_14px_0_rgba(0,0,0,0.18))]">
                        <h2
                        className="
                            bg-[#26aec3] text-white
                            px-6 py-4 md:px-8 md:py-5
                            uppercase tracking-wide font-bold text-lg md:text-2xl
                            [clip-path:polygon(0_0,94%_0,100%_100%,0_100%)]
                        "
                        >
                            {t.education.heading2}
                        </h2>
                    </div>

                    <p className="mt-6 md:mt-8 text-slate-300 text-sm md:text-base leading-relaxed lg:mr-10">
                        {t.education.description}
                    </p>
                </div>
            </div>

            {/* Education Info details */}
            <div className="mt-16 md:mt-24">
                <h2 className="flex items-center justify-center text-xl md:text-2xl font-bold tracking-wide text-white uppercase text-center px-4">
                    {t.education.degreesReceived}
                </h2>
                <div className="flex flex-col justify-center p-4 md:p-10 max-w-5xl mx-auto">
                    {educationList.map((item, idx) => (
                        <EducationCard key={idx} {...item} />
                    ))}
                </div>
            </div>
        </section>
    )
}
