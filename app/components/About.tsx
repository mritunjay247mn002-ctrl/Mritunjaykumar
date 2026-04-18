"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ABOUT_SLIDESHOW_IMAGES,
  ABOUT_SLIDESHOW_INTERVAL_MS,
} from "@/data/aboutSlideshow";
import { profile } from "@/data/profile";

function AboutSlideshowBackground() {
  const slides = ABOUT_SLIDESHOW_IMAGES;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, ABOUT_SLIDESHOW_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [slides.length]);

  if (slides.length === 0) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-neutral-950"
    >
      <div className="absolute -inset-[2%]">
        <div className="relative h-full w-full">
          {slides.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt=""
              fill
              className={`object-cover blur-[2px] transition-opacity duration-[1400ms] ease-out sm:blur-[3px] md:blur-[4px] ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={i === 0}
              loading={i === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/** Dark scrims so white/amber copy stays readable over photos. */
function AboutReadabilityScrim() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/90 via-black/82 to-black/92 md:from-black/80 md:via-black/72 md:to-black/88"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(to_right,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.68)_45%,rgba(0,0,0,0.72)_100%)] md:bg-[linear-gradient(to_right,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.55)_42%,rgba(0,0,0,0.62)_100%)]"
      />
    </>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden border-b border-neutral-800/80 py-16 md:py-32"
    >
      <AboutSlideshowBackground />
      <AboutReadabilityScrim />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_80%_60%_at_20%_-10%,rgba(245,197,66,0.07),transparent_55%),radial-gradient(ellipse_60%_50%_at_100%_50%,rgba(245,197,66,0.04),transparent_50%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2] opacity-[0.22] bg-grid"
      />

      <div className="container-rail relative z-10">
        <div className="grid grid-cols-1 items-start gap-10 text-center lg:grid-cols-12 lg:gap-16 lg:text-left">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.38em] text-amber/90">
                About
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-tight text-white sm:text-4xl md:mt-5 md:text-5xl lg:text-[clamp(2.75rem,4vw,3.75rem)]">
                <span className="text-neutral-400">From strata to </span>
                <span className="text-amber">systems.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl font-display text-base font-medium leading-snug text-neutral-200 sm:text-lg md:mx-0 md:mt-6 md:text-2xl lg:mx-0">
                {profile.tagline}
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.28em] text-neutral-500 sm:text-[11px]">
                {profile.subtext}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
              className="mx-auto mt-8 grid max-w-xl grid-cols-1 gap-2 rounded-lg border border-white/10 bg-white/10 sm:grid-cols-3 sm:gap-px sm:p-0 md:mx-0 md:mt-10"
            >
              {profile.aboutStats.map((s) => (
                <div
                  key={s.label}
                  className="min-h-[44px] bg-[#0a0a0a]/95 px-4 py-3 text-center sm:min-h-0 sm:px-4 sm:py-5"
                >
                  <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-neutral-500">
                    {s.label}
                  </div>
                  <div className="mt-2 font-display text-sm font-semibold leading-tight text-white sm:text-[15px]">
                    {s.value}
                  </div>
                </div>
              ))}
            </motion.div>

            <div className="mt-10 space-y-4 border-amber/25 pl-0 md:mt-14 md:space-y-6 md:border-l md:pl-8">
              {profile.about.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 + i * 0.06,
                    ease: "easeOut",
                  }}
                  className={
                    i === 0
                      ? "text-base leading-relaxed text-neutral-100 sm:text-lg md:text-lg"
                      : "prose-dim text-[15px] sm:text-base md:text-base"
                  }
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: 0.06, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent p-px shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]">
              <div className="rounded-2xl bg-[#080808]/95 p-4 md:p-8">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                      Focus
                    </p>
                    <p className="mt-2 font-display text-lg font-semibold text-white md:text-xl">
                      Where the work lands
                    </p>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber/80">
                    {String(profile.focus.length).padStart(2, "0")} axes
                  </span>
                </div>

                <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-8">
                  {profile.focus.map((f, i) => (
                    <motion.li
                      key={f}
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.35,
                        delay: 0.12 + i * 0.05,
                        ease: "easeOut",
                      }}
                      className="group rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 transition-colors duration-200 active:border-amber/40 active:bg-white/[0.06] sm:py-3.5 md:hover:-translate-y-0.5 md:hover:border-amber/35 md:hover:bg-white/[0.05]"
                    >
                      <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600 transition-colors group-hover:text-amber/70">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="mt-1.5 text-sm font-medium leading-snug text-neutral-200 transition-colors group-hover:text-white">
                        {f}
                      </p>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/10 pt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                  <span>{profile.location}</span>
                  <span className="hidden text-neutral-700 sm:inline">·</span>
                  <a
                    href={profile.website}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex min-h-[44px] items-center justify-center text-amber/90 transition-colors hover:text-amber sm:min-h-0 sm:inline"
                  >
                    {profile.website.replace(/^https?:\/\//, "")}
                  </a>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
