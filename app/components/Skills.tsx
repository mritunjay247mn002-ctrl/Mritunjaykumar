"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-28">
      <div className="container-rail">
        <SectionHeading eyebrow="Skills" title="Tools of the trade." />

        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((group, gi) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: gi * 0.06, ease: "easeOut" }}
              className="card p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold text-white">
                  {group.group}
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                  {group.items.length}
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs text-neutral-300 transition-colors hover:border-amber/30 hover:text-amber"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
