"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="container-rail">
        <SectionHeading
          eyebrow="About"
          title="Mining research, tooling, and AI systems."
        />

        <div className="grid gap-8 md:grid-cols-[1.1fr_1fr] md:gap-14">
          <div className="space-y-4">
            {profile.about.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
                className="prose-dim"
              >
                {p}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="card p-6"
          >
            <div className="section-eyebrow">Focus</div>
            <ul className="mt-5 space-y-3">
              {profile.focus.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-neutral-300">
                  <span className="mt-1.5 h-[3px] w-4 flex-shrink-0 rounded-full bg-amber" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
