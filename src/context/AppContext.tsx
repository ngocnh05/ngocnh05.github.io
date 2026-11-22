'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language, Theme, translations } from '@/lib/i18n/translations';

interface AppContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  t: typeof translations['en'];
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  // Default language: 'en'
  const [lang, setLangState] = useState<Language>('en');
  // Default theme: 'dark' (Night)
  const [theme, setThemeState] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 1. Load language from localStorage, default 'en'
    try {
      const savedLang = localStorage.getItem('portfolio-lang') as Language;
      if (savedLang === 'en' || savedLang === 'vi') {
        setLangState(savedLang);
      } else {
        setLangState('en');
      }
    } catch {
      // ignore
    }

    // 2. Load theme from localStorage, default 'dark'
    try {
      const savedTheme = localStorage.getItem('portfolio-theme') as Theme;
      if (savedTheme === 'light' || savedTheme === 'dark') {
        setThemeState(savedTheme);
        applyTheme(savedTheme);
      } else {
        // default is dark
        setThemeState('dark');
        applyTheme('dark');
      }
    } catch {
      applyTheme('dark');
    }

    setMounted(true);
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    if (newTheme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      root.setAttribute('data-theme', 'light');
    }
  };

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem('portfolio-lang', newLang);
    } catch {
      // ignore
    }
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'vi' : 'en');
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    applyTheme(newTheme);
    try {
      localStorage.setItem('portfolio-theme', newTheme);
    } catch {
      // ignore
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const t = translations[lang];

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        theme,
        setTheme,
        toggleTheme,
        t,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
