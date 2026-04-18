"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { education } from "@/data/education";

export default function EducationTimeline() {
  const total = education.length;

  return (
    <section id="journey" className="relative border-y border-neutral-800 bg-ink py-20 md:py-28">
      <div className="container-rail">
        <SectionHeading
          eyebrow="Education"
          title="Academic timeline."
          lede="Chronological stops from secondary school through doctoral research."
        />

        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-neutral-600 md:text-xs">
          {education.map((e) => e.phase).join(" → ")}
        </p>

        <div className="relative mt-12 md:mt-16">
          <div className="-mx-5 snap-x snap-mandatory overflow-x-auto overflow-y-visible px-5 pb-2 [-webkit-overflow-scrolling:touch] md:mx-0 md:px-0">
            <ol className="relative flex w-max flex-row gap-6 md:gap-5">
              {education.map((item, i) => {
                const isLast = i === total - 1;
                return (
                  <motion.li
                    key={`${item.year}-${item.phase}-${i}`}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.35,
                      ease: "easeOut",
                      delay: (i % total) * 0.04,
                    }}
                    className={`relative flex w-[min(78vw,248px)] shrink-0 snap-center flex-col items-center px-1 pb-2 text-center transition-colors duration-150 hover:bg-white/[0.02] md:w-[220px] md:shrink-0 md:px-2 ${
                      !isLast
                        ? "after:pointer-events-none after:absolute after:left-1/2 after:top-[15px] after:z-0 after:h-px after:w-[calc(100%_+_1.5rem)] after:bg-neutral-700 after:content-[''] md:after:w-[calc(100%_+_1.25rem)]"
                        : ""
                    }`}
                  >
                    <div className="relative z-[1] flex h-8 w-full flex-col items-center justify-end">
                      <span
                        className={`h-2.5 w-2.5 shrink-0 rounded-full ring-4 ring-ink ${
                          isLast ? "bg-amber" : "bg-neutral-600"
                        }`}
                      />
                    </div>

                    <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.28em] text-neutral-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <time className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-400 md:text-xs">
                      {item.year}
                    </time>

                    <span className="mt-2 rounded border border-amber/25 bg-amber/5 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-amber/90">
                      {item.phase}
                    </span>

                    <h3 className="mt-4 font-display text-base font-semibold leading-snug tracking-tight text-white md:text-[17px]">
                      {item.institute}
                    </h3>

                    <p className="mt-2 max-w-[260px] text-xs leading-relaxed text-neutral-400 md:max-w-none md:text-[13px]">
                      {item.description}
                    </p>
                  </motion.li>
                );
              })}
            </ol>
          </div>

          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-600">
            Scroll sideways to see all stops
          </p>
        </div>
      </div>
    </section>
  );
}
