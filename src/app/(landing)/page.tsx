'use client'

import { useMemo } from "react";
import BubbleMenu from "@/components/BubbleMenu";
import { Footer } from "@/components/footer/Footer";
import SnowBg from "@/components/SnowBg";
import { getGreeting } from "@/lib/greeting";
import { useApp } from "@/context/AppContext";
import { MenuItem } from "@/types/menu";

export default function App() {
  const { lang, t } = useApp();
  const greeting = getGreeting(lang, undefined, false);
  const greetingShort = getGreeting(lang, undefined, true);

  const menuItems: MenuItem[] = useMemo(() => [
    { label: t.menu.home, href: '/home', ariaLabel: t.menu.home, rotation: -8, hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' } },
    { label: t.menu.education, href: '/education', ariaLabel: t.menu.education, rotation: 8, hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' } },
    { label: t.menu.experience, href: '/experience', ariaLabel: t.menu.experience, rotation: 8, hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' } },
    { label: t.menu.projects, href: '/projects', ariaLabel: t.menu.projects, rotation: 8, hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' } },
    { label: t.menu.contact, href: '/contact', ariaLabel: t.menu.contact, rotation: -8, hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' } },
  ], [t.menu]);

  return (
    <div className="min-h-screen flex flex-col">
      <SnowBg />
      <main className="flex-1">
        <BubbleMenu 
          logo="cat_logo.svg" 
          greeting={greeting} 
          greetingShort={greetingShort}
          items={menuItems} 
        />
      </main>
      <Footer />
    </div>
  );
}
