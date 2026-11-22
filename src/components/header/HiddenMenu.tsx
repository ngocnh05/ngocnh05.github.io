"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MenuItem } from "@/types/menu";
import { useApp } from "@/context/AppContext";

export function HiddenMenu({ items }: { items?: MenuItem[] }) {
  const [open, setOpen] = useState(false);
  const { t } = useApp();

  const menuList = items ?? [
    { label: t.menu.home, href: '/home' },
    { label: t.menu.education, href: '/education' },
    { label: t.menu.experience, href: '/experience' },
    { label: t.menu.projects, href: '/projects' },
    { label: t.menu.contact, href: '/contact' },
  ];

  return (
    <div className="flex justify-between items-center px-4 py-3">

      {/* Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="relative z-50 right-2 top-2 ml-auto flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-full bg-white/90 dark:bg-slate-800/90 shadow-md border border-slate-200 dark:border-white/10 active:scale-95 transition-all cursor-pointer"
        aria-label="Toggle menu"
      >
        <span className="w-5 h-[2px] bg-slate-900 dark:bg-white rounded-full transition-all" />
        <span className="w-5 h-[2px] bg-slate-900 dark:bg-white rounded-full transition-all" />
        <span className="w-5 h-[2px] bg-slate-900 dark:bg-white rounded-full transition-all" />
      </button>

      {/* Overlay: Fullscreen Pill Menu on mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-slate-900/60 dark:bg-black/75 backdrop-blur-md flex flex-col items-center pt-14 sm:pt-16 px-5 overflow-y-auto"
            onClick={() => setOpen(false)}
          >
            {/* Close Button top-right */}
            <div className="w-full max-w-[440px] flex justify-end mb-3">
              <button
                onClick={() => setOpen(false)}
                className="w-11 h-11 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-bold shadow-lg border border-slate-200 dark:border-white/10 active:scale-90 transition-transform cursor-pointer"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            {/* Pill List - Exact same animated style as BubbleMenu */}
            <ul
              className="w-full max-w-[440px] flex flex-col gap-3 list-none p-0 m-0"
              onClick={(e) => e.stopPropagation()}
            >
              {menuList.map((item, idx) => (
                <motion.li
                  key={item.href}
                  initial={{ scale: 0, opacity: 0, y: 15 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{
                    delay: idx * 0.07,
                    type: "spring",
                    stiffness: 280,
                    damping: 18,
                  }}
                  className="w-full"
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="w-full rounded-full bg-white text-slate-900 shadow-[0_4px_14px_rgba(0,0,0,0.10)] flex items-center justify-center py-3.5 px-6 font-semibold text-xl transition-all duration-200 active:scale-95 hover:bg-slate-100"
                    style={{
                      minHeight: "54px",
                    }}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
