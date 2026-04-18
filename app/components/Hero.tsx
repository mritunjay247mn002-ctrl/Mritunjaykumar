"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

const HERO_VIDEO_SRC = "/video/video.mp4";

/** Very light blur on video (~2–4px): keeps detail readable, softens noise. */
function HeroBackgroundVideo() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-ink"
    >
      <div className="absolute -inset-[2%]">
        <video
          className="h-full w-full scale-[1.02] object-cover blur-[3px] sm:blur-[4px]"
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
          disablePictureInPicture
          controls={false}
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

/** Stronger darkening on the left (where copy sits) + light global veil. */
function HeroScrim() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(to_right,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.62)_32%,rgba(10,10,10,0.35)_58%,rgba(10,10,10,0.15)_100%)]"
    />
  );
}

function HeroAtmosphere() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-black/25 via-transparent to-black/45"
    />
  );
}

const textShadow =
  "0 1px 2px rgba(0,0,0,0.95),0 2px 8px rgba(0,0,0,0.85),0 0 1px rgba(0,0,0,1)";

const scrollTo = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative z-0 flex min-h-[82vh] items-center overflow-hidden pb-16 pt-28 md:pt-32"
    >
      <HeroBackgroundVideo />
      <HeroScrim />
      <HeroAtmosphere />

      <div className="relative z-20 w-full">
        <div className="container-rail">
          <div className="max-w-3xl rounded-2xl border border-white/10 bg-black/35 px-5 py-6 shadow-[0_8px_40px_rgba(0,0,0,0.45)] backdrop-blur-[6px] md:px-7 md:py-8">
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex max-w-3xl flex-col gap-2 font-mono text-[11px] font-semibold uppercase leading-snug tracking-[0.26em] text-white sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 sm:gap-y-1.5"
              style={{ textShadow }}
            >
              <span className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-amber shadow-sm" />
                <span>{profile.title}</span>
                <span className="hidden h-3 w-px bg-white/25 sm:inline-block" />
              </span>
              <span className="text-white/95 sm:max-w-[min(100%,36rem)]">
                {profile.location}
              </span>
            </motion.div>

            <motion.h1
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white md:mt-6 md:text-6xl"
              style={{ textShadow }}
            >
              {profile.name}
              <span className="text-amber">.</span>
            </motion.h1>

            <motion.p
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="mt-5 max-w-2xl font-display text-lg font-semibold leading-snug text-white md:text-2xl"
              style={{ textShadow }}
            >
              {profile.tagline}
            </motion.p>

            <motion.p
              initial={false}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mt-4 font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-neutral-100 md:text-xs"
              style={{ textShadow }}
            >
              {profile.subtext}
            </motion.p>

            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="mt-8 flex flex-wrap gap-3 md:mt-10"
            >
              <a
                href="#research"
                onClick={scrollTo("#research")}
                className="inline-flex items-center gap-2 rounded-full bg-amber px-5 py-2.5 text-sm font-bold text-ink shadow-lg transition-colors hover:bg-amber/90"
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
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-black/70 px-5 py-2.5 text-sm font-bold text-white shadow-lg transition-colors hover:border-amber/60 hover:bg-black/80 hover:text-amber"
              >
                View projects
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
