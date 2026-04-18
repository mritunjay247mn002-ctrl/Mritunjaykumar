"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState, type RefObject } from "react";
import { profile } from "@/data/profile";

const HERO_VIDEO_SRC = "/video/video.mp4";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return reduced;
}

/**
 * Hero video: no CSS blur (blur + full-bleed video is very GPU-heavy).
 * `preload="metadata"` limits initial download; playback pauses when scrolled away.
 */
function HeroBackgroundVideo({
  sectionRef,
  videoRef,
  active,
}: {
  sectionRef: RefObject<HTMLElement | null>;
  videoRef: RefObject<HTMLVideoElement>;
  active: boolean;
}) {
  useEffect(() => {
    if (!active) return;
    const root = sectionRef.current;
    const vid = videoRef.current;
    if (!root || !vid) return;

    const setPlaying = (playing: boolean) => {
      if (playing) {
        void vid.play().catch(() => {});
      } else {
        vid.pause();
      }
    };

    const obs = new IntersectionObserver(
      (entries) => {
        const hit = entries.some((e) => e.isIntersecting && e.intersectionRatio > 0.04);
        setPlaying(hit);
      },
      { threshold: [0, 0.04, 0.15] }
    );
    obs.observe(root);
    return () => obs.disconnect();
  }, [active, sectionRef, videoRef]);

  if (!active) {
    return (
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 bg-ink" />
    );
  }

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-ink"
    >
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        muted
        playsInline
        loop
        preload="metadata"
        disablePictureInPicture
        controls={false}
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>
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

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null!);
  const prefersReducedMotion = usePrefersReducedMotion();
  const videoActive = !prefersReducedMotion;

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative z-0 flex min-h-[82vh] items-center overflow-hidden pb-16 pt-28 md:pt-32"
    >
      <HeroBackgroundVideo sectionRef={sectionRef} videoRef={videoRef} active={videoActive} />
      <HeroScrim />
      <HeroAtmosphere />

      <div className="relative z-20 w-full">
        <div className="container-rail">
          {/* Solid scrim instead of backdrop-blur — avoids sampling the video every frame */}
          <div className="max-w-3xl rounded-2xl border border-white/10 bg-black/60 px-5 py-6 shadow-[0_8px_40px_rgba(0,0,0,0.45)] md:px-7 md:py-8">
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
              <Link
                href="/research"
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
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-black/70 px-5 py-2.5 text-sm font-bold text-white shadow-lg transition-colors hover:border-amber/60 hover:bg-black/80 hover:text-amber"
              >
                View projects
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
