"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
};

export default function SectionHeading({ eyebrow, title, lede, align = "left" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`mb-8 md:mb-14 ${align === "center" ? "text-center" : ""}`}
    >
      <div className={`section-eyebrow ${align === "center" ? "justify-center" : ""}`}>
        {eyebrow}
      </div>
      <h2
        className={`heading-lg mt-3 max-w-3xl md:mt-4 ${align === "center" ? "mx-auto" : ""}`}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={`mt-2 max-w-2xl text-sm leading-relaxed text-neutral-400 sm:text-base md:mt-3 ${align === "center" ? "mx-auto" : ""}`}
        >
          {lede}
        </p>
      )}
    </motion.div>
  );
}
