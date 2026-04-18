"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="container-rail">
        <SectionHeading
          eyebrow="Projects"
          title="Shipped and in-progress tools."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const isLive = p.link.startsWith("http");
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
                className="card flex flex-col p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold text-white">
                    {p.title}
                  </h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                    0{i + 1}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-5">
                  {isLive ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 rounded-full bg-amber px-3 py-1.5 text-xs font-medium text-ink transition-colors hover:bg-amber/90"
                    >
                      {p.linkLabel}
                      <svg
                        className="h-3 w-3"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      >
                        <path
                          d="M3 9l6-6M4 3h5v5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber" />
                      {p.linkLabel}
                    </span>
                  )}
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                    {isLive ? "Live" : "In progress"}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
