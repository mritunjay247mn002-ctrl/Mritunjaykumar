"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { profile } from "@/data/profile";

const cards = [
  { label: "GitHub", sub: "Code and tools", href: profile.github },
  { label: "LinkedIn", sub: "Background and network", href: profile.linkedin },
  { label: "MiningToolkit", sub: "Main product", href: profile.website },
];

export default function LinksHub() {
  return (
    <section id="connect" className="relative py-14 md:py-28">
      <div className="container-rail">
        <SectionHeading eyebrow="Connect" title="Contact and links." align="center" />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {cards.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer noopener"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
              className="card group flex min-h-[100px] flex-col justify-between p-4 md:min-h-0 md:p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold text-white transition-colors group-hover:text-amber">
                  {c.label}
                </h3>
                <svg
                  className="h-4 w-4 text-neutral-500 transition-colors group-hover:text-amber"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path d="M4 12L12 4M6 4h6v6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="mt-2 text-sm text-neutral-400">{c.sub}</p>
              <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                {c.href.replace(/^https?:\/\//, "").split("/")[0]}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center gap-2 text-center"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
            Email
          </span>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex min-h-[44px] items-center justify-center rounded-md px-3 font-mono text-sm text-amber transition-colors active:text-amber/90 hover:text-amber/80"
          >
            {profile.email}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
