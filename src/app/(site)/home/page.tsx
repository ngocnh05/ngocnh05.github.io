"use client";

import { useState } from "react";
import { useApp } from "@/context/AppContext";
import { HOMEPAGE_BASIC_INFOR } from "@/lib/homePageInfo";
import Stack from "@/components/home/CardRotate";
import CardWhatICanDo from "@/components/home/CardWhatIcanDo";
import ScrollHint from "@/components/ScrollHint";
import LinkButton from "@/components/LinkButton";
import ResumeModal from "@/components/home/ResumeModal";
import {
  SiFigma,
  SiDiagramsdotnet,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiCanva,
  SiYoutube,
  SiTiktok,
} from "react-icons/si";
import {
  FiLayout,
  FiLayers,
  FiCheckCircle,
  FiImage,
  FiEye,
  FiVideo,
  FiType,
  FiVolume2,
} from "react-icons/fi";

export default function Home() {
    const { t } = useApp();
    const info = HOMEPAGE_BASIC_INFOR;
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    const placeholderImages = [
        {
            id: 1,
            title: `${t.home.photoCard} 1`,
            dimension: t.home.photoCardSize,
            ratio: t.home.photoCardRatio,
        },
        {
            id: 2,
            title: `${t.home.photoCard} 2`,
            dimension: t.home.photoCardSize,
            ratio: t.home.photoCardRatio,
        },
        {
            id: 3,
            title: `${t.home.photoCard} 3`,
            dimension: t.home.photoCardSize,
            ratio: t.home.photoCardRatio,
        },
    ];

    const whatICanDoSections = [
        {
            title: t.home.spec1Title,
            contain: t.home.spec1Bullets,
            imageSrc: "/computer_graphic_image.png",
            imageAlt: "UI/UX & Interactive Design",
            isReverse: false,
            tools: [
                { name: "Figma", icon: SiFigma, color: "#F24E1E" },
                { name: "draw.io", icon: SiDiagramsdotnet, color: "#F08705" },
                { name: "User Flow", icon: FiLayout, color: "#38BDF8" },
                { name: "Wireframe", icon: FiLayers, color: "#C084FC" },
                { name: "Prototype", icon: FiCheckCircle, color: "#34D399" },
            ],
        },
        {
            title: t.home.spec2Title,
            contain: t.home.spec2Bullets,
            imageSrc: "/ml_image.png",
            imageAlt: "2D Graphic Design & Visual Media",
            isReverse: true,
            tools: [
                { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
                { name: "Illustrator", icon: SiAdobeillustrator, color: "#FF9A00" },
                { name: "Canva", icon: SiCanva, color: "#00C4CC" },
                { name: "Poster & Banner", icon: FiImage, color: "#F472B6" },
                { name: "Key Visual", icon: FiEye, color: "#FACC15" },
            ],
        },
        {
            title: t.home.spec3Title,
            contain: t.home.spec3Bullets,
            imageSrc: "/deploy_image.png",
            imageAlt: "Video Editing & Multimedia Production",
            isReverse: false,
            tools: [
                { name: "CapCut Pro", icon: FiVideo, color: "#22D3EE" },
                { name: "YouTube", icon: SiYoutube, color: "#FF0000" },
                { name: "TikTok", icon: SiTiktok, color: "#00F2FE" },
                { name: "Subtitle Sync", icon: FiType, color: "#A78BFA" },
                { name: "AI Voice / TTS", icon: FiVolume2, color: "#4ADE80" },
            ],
        },
    ];

    return (
        <section className="w-full">
            {/* Basic information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:mt-20">
                {/* Information */}
                <div className="p-8 md:pt-20 lg:pt-20">
                    <h1 className="flex items-center justify-center lg:mt-10">{t.home.fullname}</h1>
                    <h2 className="flex items-center justify-center mt-4">( {t.home.position} )</h2>
                    <p className="text-center mt-4 text-white/85 italic leading-relaxed max-w-lg md:max-w-xl [text-wrap:balance] mx-auto">{t.home.description}</p>
                    <LinkButton
                        href={info.linkToResume}
                        target="_blank"
                        aria-label={t.home.seeResume}
                        className="flex justify-center mt-4"
                        textToShow={t.home.seeResume}
                        onClick={(e) => {
                            e.preventDefault();
                            setIsResumeOpen(true);
                        }}
                    />

                </div>
                {/* Image Placeholder Stack (3 ảnh) */}
                <div className="w-full flex justify-center lg:justify-start">
                    <div className="h-80 w-80 md:h-120 md:w-120 lg:h-150 lg:w-150 flex items-center justify-center">
                        <Stack
                            randomRotation={false}
                            sensitivity={120}
                            sendToBackOnClick
                            cards={placeholderImages.map((item) => (
                                <div
                                    key={item.id}
                                    className="relative w-full h-full rounded-2xl border-2 border-dashed border-white/40 bg-[#1e2a4a]/90 overflow-hidden flex flex-col items-center justify-center select-none shadow-[0_18px_60px_rgba(0,0,0,0.35)]"
                                >
                                    {/* Khung X (đường chéo nối góc) */}
                                    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="0" y1="0" x2="100%" y2="100%" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="2" strokeDasharray="6 6" />
                                        <line x1="100%" y1="0" x2="0" y2="100%" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="2" strokeDasharray="6 6" />
                                    </svg>

                                    {/* Khung thông tin kích thước ở trung tâm */}
                                    <div className="relative z-10 flex flex-col items-center justify-center p-4 md:p-6 text-center bg-black/60 rounded-xl border border-white/20 shadow-lg max-w-[85%]">
                                        <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/10 flex items-center justify-center mb-2 md:mb-3 text-white">
                                            <span className="text-xl md:text-2xl font-bold">✕</span>
                                        </div>
                                        <h3 className="text-sm md:text-lg font-bold text-white tracking-wide">
                                            {item.title}
                                        </h3>
                                        <p className="mt-1 text-xs md:text-sm font-semibold text-[#8acbd3]">
                                            {item.dimension}
                                        </p>
                                        <span className="mt-1 text-[11px] md:text-xs text-white/70">
                                            {item.ratio}
                                        </span>
                                    </div>
                                </div>
                            ))}
                            autoplay
                            autoplayDelay={3000}
                            pauseOnHover
                        />
                    </div>
                </div>
                
            </div>

            {/* Scroll hint */}
            <div className="w-full flex justify-center mt-12 mb-4">
                <ScrollHint id='what-i-can-do' />
            </div>

            {/* What I can do */}
            <div id='what-i-can-do' className="flex flex-col mt-20 md:mt-28 lg:mt-36 pt-4">
                <h1 className="flex items-center justify-center text-center">{t.home.whatICanDoTitle}</h1>
                <div className="flex flex-col justify-center mb-10 mt-10 md:mt-20 gap-20 md:gap-30">
                    { whatICanDoSections.map((item, idx) => (
                        <CardWhatICanDo  
                            key={idx}
                            title={item.title}
                            contain={item.contain}
                            imageSrc={item.imageSrc}
                            imageAlt={item.imageAlt}
                            tools={item.tools}
                            isReverse={item.isReverse}
                        />
                    ))
                    }
                </div>
            </div>

            {/* Resume Preview Modal */}
            <ResumeModal
                isOpen={isResumeOpen}
                onClose={() => setIsResumeOpen(false)}
                previewUrl={info.resumePreviewUrl || ""}
                driveUrl={info.linkToResume}
            />

        </section>
    )
}