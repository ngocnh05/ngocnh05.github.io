'use client'

import React, { useEffect, useMemo, useRef, useState } from "react";
import { ExperienceTimeLineProps } from "@/types/experiencePageInfo";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

export default function ExperienceTimeline({ items }: ExperienceTimeLineProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const railRef = useRef<HTMLDivElement | null>(null);
  const [dotY, setDotY] = useState(0);
  const [progressH, setProgressH] = useState(0);
  const [dotVisible, setDotVisible] = useState(false);
  const safeItems = useMemo(() => items ?? [], [items]);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const container = containerRef.current;
      const rail = railRef.current;
      if (!container || !rail) return;

      const c = container.getBoundingClientRect();
      const r = rail.getBoundingClientRect();

      const viewportH = window.innerHeight;
      const inView = c.top < viewportH * 0.9 && c.bottom > viewportH * 0.1;
      setDotVisible(inView);
      const start = viewportH * 0.25; // start moving when container top reaches 25% viewport
      const end = viewportH * 0.75; // finish when container bottom reaches 75% viewport
      const total = c.height + (end - start);
      const current = start - c.top;
      let p = current / total;
      p = Math.max(0, Math.min(1, p));
      const dotSize = 18;
      const travel = Math.max(0, r.height - dotSize);
      const y = p * travel;

      setDotY(y);
      setProgressH(Math.min(r.height, y + dotSize / 2));
    };

    // Use requestAnimationFrame to avoid doing heavy work too often on scroll
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    // Initial computation
    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="w-full">
      <div className="px-4 md:px-8">
        <div ref={containerRef} className="relative">
          <div
            ref={railRef}
            className="absolute left-6 top-0 h-full w-1 bg-slate-400/70"
            aria-hidden="true"
          />

          {/* Progress overlay rail (white) - grows as user scrolls */}
          <div
            className="absolute left-6 top-0 w-1 bg-white shadow-[0_0_14px_rgba(255,255,255,0.35)]"
            style={{ height: `${progressH}px` }}
            aria-hidden="true"
          />

          {/* Moving dot that follows scroll */}
          <div
            className={[
              "absolute left-4 top-0 h-5 w-5 rounded-full bg-white",
              "ring-2 ring-[#FF6B6B] shadow-sm",
              "transition-opacity duration-200",
              dotVisible ? "opacity-100" : "opacity-0",
            ].join(" ")}
            style={{ transform: `translateY(${dotY}px)` }}
            aria-hidden="true"
          />

          {/* Timeline items */}
          <div className="space-y-20">
            {safeItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-1 gap-4 md:grid-cols-[130px_1fr] lg:grid-cols-[150px_1fr] md:gap-8"
              >
                {/* LEFT: date label + static node for each experience */}
                <div className="relative">
                  {/* Static node (milestone) */}
                  <div className="absolute left-4 top-2 h-5 w-5 rounded-full bg-white ring-2 ring-slate-200 shadow-sm" />

                  {/* Date label */}
                  <div className="pl-14 pt-1">
                    <div className="text-xs md:text-sm font-semibold text-slate-200 tracking-wide">
                      {item.period}
                    </div>
                  </div>
                </div>

                {/* RIGHT: content card */}
                <div className="min-w-0 ml-11 sm:ml-12 md:ml-0">
                  <div className="rounded-2xl bg-white/95 p-4 sm:p-5 md:p-6 shadow-md border border-white/20 overflow-hidden">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      <h3 className="text-base md:text-lg font-bold text-slate-900 break-words">
                        {item.title}
                      </h3>
                      <span className="text-[#FF6B6B] font-bold">·</span>
                      <span className="text-sm md:text-base font-semibold text-slate-700 break-words">
                        {item.company}
                      </span>
                      <Link 
                        className="text-slate-400 hover:text-slate-700 transition ml-1"
                        href={item.linkToCompany} target="_blank" aria-label="Go to Company Page."
                      >
                        <FaExternalLinkAlt className="h-3 w-3 inline"/>
                      </Link>
                    </div>

                    {/* Optional summary line */}
                    {item.summary ? (
                      <p className="text-xs md:text-sm mt-2.5 text-slate-600 leading-relaxed break-words">
                        {item.summary}
                      </p>
                    ) : null}

                    {/* Bullet points */}
                    <ul className="mt-3.5 space-y-2 text-slate-700">
                      {item.bullets.map((b, i) => (
                        <li key={i} className="flex gap-2.5 items-start">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                          <span className="text-xs md:text-sm leading-relaxed break-words">{b}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    {item.tags?.length ? (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {item.tags.map((t) => (
                          <span
                            key={t}
                            className="text-xs rounded-md bg-slate-100 px-2.5 py-1 text-slate-700 ring-1 ring-slate-200 font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Extra bottom padding so the follower dot doesn't feel "stuck" at the end */}
          <div className="h-6" />
        </div>
      </div>
    </section>
  );
}
