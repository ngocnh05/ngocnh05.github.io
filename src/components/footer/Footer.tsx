"use client";

import Link from "next/link";
import { IoIosHeart } from "react-icons/io";
import { useApp } from "@/context/AppContext";

export function Footer() {
  const { t } = useApp();

  return (
    <footer className="w-full border-t border-white/10 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-8 pb-20 sm:pb-8 text-white/80">
        <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="flex items-center gap-2">
            {t.footer.madeWith} <IoIosHeart className="text-red-400" aria-hidden="true" /> {t.footer.by}{" "}
            <span className="text-white/90 font-semibold">{t.signature}.</span>
          </p>

          <p className="text-sm">
            © {new Date().getFullYear()} ·{" "}
            <Link
              href="https://github.com/ps257/portfolio-hong-ngoc"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-white transition"
            >
              {t.footer.repoLink}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
