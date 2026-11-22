"use client";

import { useEffect, useState } from "react";
import { FiX, FiDownload } from "react-icons/fi";
import { useApp } from "@/context/AppContext";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  previewUrl: string;
  driveUrl?: string;
}

export default function ResumeModal({
  isOpen,
  onClose,
  previewUrl,
}: ResumeModalProps) {
  const { t } = useApp();
  const [isLoading, setIsLoading] = useState(true);

  // Direct download link for the resume file
  const downloadUrl = "https://drive.google.com/uc?export=download&id=1NZaY3VLVdtJXhsr9zVJucHlrz5uR6ma6";

  // Close on Escape key & prevent background scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t.home.resumeModalTitle}
      className="fixed inset-0 z-[2000] flex items-center justify-center p-2 sm:p-3 md:p-4 animate-fadeIn"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity cursor-pointer"
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-5xl h-[95vh] max-h-[96vh] flex flex-col rounded-2xl border border-white/20 bg-slate-900/95 dark:bg-[#111827]/95 shadow-[0_25px_70px_rgba(0,0,0,0.6)] backdrop-blur-xl overflow-hidden transition-all duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 border-b border-white/10 bg-white/5 shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <h3 className="font-bold text-sm sm:text-base text-white truncate">
              {t.home.resumeModalTitle}
            </h3>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Download Resume Button */}
            <a
              href={downloadUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold text-emerald-300 hover:text-white bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/30 transition-all cursor-pointer shadow-sm active:scale-95"
              title={t.home.downloadResume}
            >
              <FiDownload className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>{t.home.downloadResume}</span>
            </a>

            {/* Close button */}
            <button
              onClick={onClose}
              aria-label={t.home.close}
              className="flex items-center justify-center w-8 h-8 rounded-lg text-white/70 hover:text-white bg-white/5 hover:bg-white/15 border border-white/10 transition-all cursor-pointer active:scale-95"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / Iframe Preview */}
        <div className="relative flex-1 w-full bg-slate-950 overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-950/80 z-10 text-white/70">
              <div className="w-8 h-8 border-3 border-sky-400 border-t-transparent rounded-full animate-spin" />
              <p className="text-sm font-medium">{t.home.loadingResume}</p>
            </div>
          )}

          <iframe
            src={previewUrl}
            title={t.home.resumeModalTitle}
            className="w-full h-full border-0"
            allow="autoplay"
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </div>
    </div>
  );
}
