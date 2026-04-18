"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

const scrollTo = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[82vh] items-center pb-16 pt-28 md:pt-32"
    >
      <div className="container-rail">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-[11px] uppercase tracking-[0.28em] text-neutral-400"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber" />
          <span>{profile.title}</span>
          <span className="hidden h-3 w-px bg-white/10 sm:inline-block" />
          <span className="text-neutral-500">{profile.location}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
          className="heading-xl mt-6 max-w-3xl"
        >
          {profile.name}
          <span className="text-amber">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mt-5 max-w-2xl font-display text-xl leading-snug text-neutral-200 md:text-2xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="mt-5 font-mono text-[11px] uppercase tracking-[0.3em] text-neutral-500 md:text-xs"
        >
          {profile.subtext}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href="#research"
            onClick={scrollTo("#research")}
            className="inline-flex items-center gap-2 rounded-full bg-amber px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-amber/90"
          >
            View research
            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#projects"
            onClick={scrollTo("#projects")}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-5 py-2.5 text-sm text-neutral-200 transition-colors hover:border-amber/40 hover:text-amber"
          >
            View projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
