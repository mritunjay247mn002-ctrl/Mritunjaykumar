"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { research, ResearchDomain, ResearchStatus } from "@/data/research";

const domainTag: Record<ResearchDomain, string> = {
  "AI Mining": "border-amber/30 bg-amber/10 text-amber",
  "Rock Mechanics": "border-orange-400/30 bg-orange-400/10 text-orange-300",
  Sustainability: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  Systems: "border-sky-400/30 bg-sky-400/10 text-sky-300",
};

const statusDot: Record<ResearchStatus, string> = {
  "Full-text": "bg-emerald-400",
  Private: "bg-amber",
  Published: "bg-sky-400",
};

export default function Research() {
  const sorted = [...research].sort((a, b) => b.year - a.year);

  return (
    <section id="research" className="relative py-14 md:py-28">
      <div className="container-rail">
        <SectionHeading
          eyebrow="Research"
          title="Publications and ongoing work."
          lede="Core focus: underground pillar design and rock mechanics. Adjacent work on AI-driven mining systems and sustainability."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sorted.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.04, ease: "easeOut" }}
              className="card flex flex-col p-4 md:p-5"
            >
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`inline-flex items-center rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] ${domainTag[item.domain]}`}
                >
                  {item.domain}
                </span>
                <span className="font-mono text-[11px] text-neutral-500">{item.year}</span>
              </div>

              <h3 className="mt-4 font-display text-[17px] font-semibold leading-snug text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-neutral-400 sm:text-base">
                {item.description}
              </p>

              <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4 font-mono text-[10px] uppercase tracking-[0.2em]">
                <span className="text-neutral-500">{item.type}</span>
                <span className="inline-flex items-center gap-2 text-neutral-300">
                  <span className={`h-1.5 w-1.5 rounded-full ${statusDot[item.status]}`} />
                  {item.status}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
