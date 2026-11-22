"use client";

import LinkButton from "@/components/LinkButton";
import ProjectShowcaseCard from "@/components/projects/ProjectShowcaseCard";
import { PROJECTS_BASIC_INFO } from "@/lib/projectsPageInfo";
import { useApp } from "@/context/AppContext";

export default function Projects() {
    const { t } = useApp();

    const projectsList = [
        {
            title: t.projects.proj1Title,
            description: t.projects.proj1Desc,
            techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
            codeUrl: "https://github.com",
            detailUrl: "https://github.com",
        },
        {
            title: t.projects.proj2Title,
            description: t.projects.proj2Desc,
            techs: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
            codeUrl: "https://github.com",
            detailUrl: "https://github.com",
        },
        {
            title: t.projects.proj3Title,
            description: t.projects.proj3Desc,
            techs: ["Python", "FastAPI", "Microservices", "RabbitMQ", "AWS"],
            codeUrl: "https://github.com",
            detailUrl: "https://github.com",
        },
    ];

    return (
        <section className="w-full mt-10 md:mt-30 lg:mt-20 mb-30">
            <div className="flex flex-col justify-center items-center gap-5 mb-10 md:mb-20 px-10 md:px-20">
                <h2 className="uppercase">{t.projects.title}</h2>
                <span className="max-w-3xl text-center text-white/80">{t.projects.description}</span>
            </div>
            <div className="flex flex-col gap-10 md:gap-15 lg:gap-20 overflow-x-hidden">
                {projectsList.map((item, idx) => 
                    <ProjectShowcaseCard key={idx} {...item}/>
                )}
            </div>
            <div className="mt-10 md:mt-15 lg:mt-20">
                <LinkButton
                    href={PROJECTS_BASIC_INFO.linkToGitHub}
                    aria-label={t.projects.seeMore}
                    textToShow={t.projects.seeMore}
                    target="_blank"
                />
            </div>
        </section>
    )
}