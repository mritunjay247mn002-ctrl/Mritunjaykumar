"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { education } from "@/data/education";

export default function EducationTimeline() {
  return (
    <section id="journey" className="relative py-20 md:py-28">
      <div className="container-rail">
        <SectionHeading eyebrow="Education" title="Academic path." />

        <div className="relative">
          <div
            aria-hidden
            className="absolute bottom-0 left-3 top-2 w-px bg-gradient-to-b from-amber/50 via-white/10 to-transparent md:left-4"
          />

          <ul className="space-y-4">
            {education.map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
                className="relative pl-10 md:pl-14"
              >
                <span
                  aria-hidden
                  className="absolute left-[9px] top-5 h-2 w-2 rounded-full bg-amber ring-4 ring-ink md:left-[13px]"
                />

                <article className="card p-5 md:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-amber/80">
                        {item.degree}
                      </div>
                      <h3 className="mt-1.5 font-display text-lg font-semibold text-white md:text-xl">
                        {item.title}
                      </h3>
                      <div className="mt-1 text-sm text-neutral-400">{item.location}</div>
                    </div>
                    <div className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                      {item.year}
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                    {item.description}
                  </p>
                </article>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
