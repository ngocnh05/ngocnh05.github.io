"use client";

import { useMemo } from "react";
import { useApp } from "@/context/AppContext";
import { GooeyNav } from "./GooyeyNav";
import { HiddenMenu } from "./HiddenMenu";
import CtaButton from "./SignatureLogo";
import { MenuItem } from "@/types/menu";

export function Header() {
    const { t } = useApp();

    const items: MenuItem[] = useMemo(() => [
        {
            label: t.menu.home,
            href: '/home',
            ariaLabel: t.menu.home,
            rotation: -8,
            hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
        },
        {
            label: t.menu.education,
            href: '/education',
            ariaLabel: t.menu.education,
            rotation: 8,
            hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
        },
        {
            label: t.menu.experience,
            href: '/experience',
            ariaLabel: t.menu.experience,
            rotation: 8,
            hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
        },
        {
            label: t.menu.projects,
            href: '/projects',
            ariaLabel: t.menu.projects,
            rotation: 8,
            hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' }
        },
        {
            label: t.menu.contact,
            href: '/contact',
            ariaLabel: t.menu.contact,
            rotation: -8,
            hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
        }
    ], [t.menu]);

    return (
        <header className="relative w-full">
            {/* Name */}
            <div className="absolute top-1 md:top-12 lg:top-1 left-4 z-50">
                <CtaButton className="mt-6"/>
            </div>
            {/* Desktop and Ipad */}
            <div className="hidden md:block">
                <div 
                    className="flex justify-center mt-4 px-4 sm:px-6 lg:px-8 overflow-hidden" 
                >
                    <div className="w-full max-w-5xl flex justify-center">
                    <GooeyNav
                        items={items}
                        particleCount={1}
                        particleDistances={[90, 10]}
                        particleR={100}
                        initialActiveIndex={0}
                        animationTime={600}
                        timeVariance={300}
                        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                    />
                    </div>
                </div>
            </div>
            {/* Phone */}
            <div className="block md:hidden">
                <HiddenMenu items={items}/>
            </div>
        </header>
    )
}