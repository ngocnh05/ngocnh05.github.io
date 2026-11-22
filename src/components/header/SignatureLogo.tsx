'use client';

import Link from "next/link";
import { agustina } from "@/fonts/agustina";

type SignatureLogoProps = {
  name?: string;
  className?: string;
};

export default function SignatureLogo({
  className = "",
}: SignatureLogoProps) {
  return (
    <Link
      href="/"
      aria-label="Go to homepage"
      className={[
        "inline-flex items-center",
        "cursor-pointer select-none",
        "text-slate-800 dark:text-white",
        "transition-all",
        "hover:opacity-90",
        "active:scale-[0.98]",
        className,
      ].join(" ")}
    >
      {/* Left bracket */}
      <span className="text-[clamp(8px,1.5vw,16px)] font-semibold leading-none">
        {"<"}
      </span>

      {/* Signature */}
      <span
        className={[
          agustina.className,
          "mx-2",
          "text-[clamp(14px,2.5vw,22px)]", 
          "font-bold",
          "leading-none",
          "tracking-[0.02em]", 
        ].join(" ")}
      >
        HONG NGOC
      </span>

      {/* Right bracket */}
      <span className="text-[clamp(8px,1.5vw,16px)] font-semibold leading-none">
        {"/>"}
      </span>
    </Link>
  );
}
