"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/profile";

const links = [
  { path: "/about", sectionId: "about", label: "About", n: "01" },
  { path: "/journey", sectionId: "journey", label: "Journey", n: "02" },
  { path: "/research", sectionId: "research", label: "Research", n: "03" },
  { path: "/field", sectionId: "field", label: "Field", n: "04" },
  { path: "/projects", sectionId: "projects", label: "Projects", n: "05" },
  { path: "/skills", sectionId: "skills", label: "Skills", n: "06" },
  { path: "/connect", sectionId: "connect", label: "Connect", n: "07" },
] as const;

const socials = [
  { label: "LinkedIn", href: profile.linkedin },
  { label: "GitHub", href: profile.github },
  { label: "MiningToolkit", href: profile.website },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!onHome) return;
    const sections = links
      .map((l) => document.querySelector(`#${l.sectionId}`))
      .filter(Boolean) as Element[];
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [onHome]);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
      };
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = prev;
        window.removeEventListener("keydown", onKey);
      };
    }
  }, [open]);

  const isNavActive = (l: (typeof links)[number]) =>
    pathname === l.path || (onHome && active === `#${l.sectionId}`);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ease-out ${
          scrolled || open
            ? "border-b border-white/5 bg-ink/95"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="container-rail flex h-16 items-center justify-between" aria-label="Primary">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="group flex items-center gap-2.5"
          >
            <span className="relative flex h-7 w-7 items-center justify-center rounded-md border border-amber/40 bg-amber/10">
              <span className="absolute inset-0 rounded-md bg-amber/10 blur-md opacity-60 transition-opacity group-hover:opacity-100" />
              <span className="relative font-mono text-[11px] font-bold tracking-widest text-amber">
                MK
              </span>
            </span>
            <span className="font-display text-sm font-semibold tracking-tight text-white">
              Mritunjay<span className="text-amber"> .</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => {
              const activeNav = isNavActive(l);
              return (
                <li key={l.path}>
                  <Link
                    href={l.path}
                    className={`relative px-3 py-2 text-sm transition-colors ${
                      activeNav ? "text-amber" : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {l.label}
                    {activeNav && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-2 -bottom-0.5 h-px bg-amber"
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <a
            href={`mailto:${profile.email}`}
            className="hidden rounded-full border border-amber/40 bg-amber/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-amber transition-all hover:bg-amber hover:text-ink hover:shadow-glow-amber md:inline-block"
          >
            Say hello
          </a>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="relative z-[60] flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-ink/80 md:hidden"
          >
            <span className="sr-only">Toggle menu</span>
            <span className="relative flex h-4 w-5 flex-col justify-between">
              <span
                className={`block h-[1.5px] origin-center rounded-full bg-white transition-all duration-300 ${
                  open ? "translate-y-[7px] rotate-45 bg-amber" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] origin-center rounded-full bg-white transition-all duration-300 ${
                  open ? "scale-x-0 opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] origin-center rounded-full bg-white transition-all duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45 bg-amber" : ""
                }`}
              />
            </span>
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col md:hidden"
          >
            <div className="absolute inset-0 bg-ink" aria-hidden />
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,197,66,0.10),_transparent_60%)]"
            />
            <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />

            <div className="relative flex h-16 items-center justify-between px-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                menu · {String(links.length).padStart(2, "0")} sections
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-amber/80">
                esc to close
              </span>
            </div>

            <motion.ul
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
              }}
              className="relative flex flex-1 flex-col justify-center px-5"
            >
              {links.map((l) => {
                const activeNav = isNavActive(l);
                return (
                  <motion.li
                    key={l.path}
                    variants={{
                      hidden: { opacity: 0, x: -16 },
                      show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
                    }}
                    className="border-b border-white/5 last:border-0"
                  >
                    <Link
                      href={l.path}
                      onClick={() => setOpen(false)}
                      className={`group flex items-center justify-between py-5 font-display text-3xl font-semibold tracking-tight transition-colors ${
                        activeNav ? "text-amber" : "text-white hover:text-amber"
                      }`}
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="font-mono text-[11px] font-normal tracking-[0.3em] text-neutral-500 group-hover:text-amber/80">
                          {l.n}
                        </span>
                        {l.label}
                      </span>
                      <svg
                        className={`h-4 w-4 transition-all duration-300 ${
                          activeNav
                            ? "text-amber opacity-100"
                            : "-translate-x-2 text-neutral-500 opacity-0 group-hover:translate-x-0 group-hover:text-amber group-hover:opacity-100"
                        }`}
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      >
                        <path
                          d="M3 8h10M9 4l4 4-4 4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="relative border-t border-white/5 bg-ink/60 px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-5"
            >
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center justify-between rounded-xl border border-amber/30 bg-amber/5 px-4 py-3.5 text-sm text-amber transition-all hover:bg-amber hover:text-ink"
              >
                <span className="flex items-center gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="h-4 w-4"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {profile.email}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em]">
                  Say hello
                </span>
              </a>

              <ul className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-400 hover:text-amber"
                    >
                      {s.label}
                      <span className="ml-1.5 text-neutral-600">↗</span>
                    </a>
                  </li>
                ))}
                <li className="ml-auto font-mono text-[10px] tracking-[0.3em] text-neutral-600">
                  v1.0
                </li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
