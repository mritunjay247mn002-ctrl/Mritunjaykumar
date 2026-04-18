"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import {
  consultancy,
  type ConsultancyItem,
  type ConsultancyVisual as ConsultancyVisualKey,
} from "@/data/consultancy";
import { experience, experienceGroupOrder } from "@/data/experience";

/**
 * Optional field / simulation photos: add files under /public/images/consultancy/
 * and map the visual key here. When set, the photo is shown under the schematic
 * (schematic stays for engineering readability).
 */
const VISUAL_IMAGES: Partial<Record<ConsultancyVisualKey, string>> = {
  // blast: "/images/consultancy/blast-pattern.jpg",
  // slope: "/images/consultancy/slope-output.png",
};

function BlastDiagram() {
  /* Staggered drill grid: front row toward free face (right), burden B, spacing S */
  const holes: { cx: number; cy: number; d: number }[] = [
    { cx: 72, cy: 70, d: 0 },
    { cx: 96, cy: 70, d: 45 },
    { cx: 120, cy: 70, d: 90 },
    { cx: 144, cy: 70, d: 135 },
    { cx: 84, cy: 54, d: 180 },
    { cx: 108, cy: 54, d: 225 },
    { cx: 132, cy: 54, d: 270 },
    { cx: 156, cy: 54, d: 315 },
  ];

  return (
    <svg className="consultancy-viz" viewBox="0 0 260 104" aria-hidden>
      <title>Blast pattern schematic</title>
      <line x1="8" y1="82" x2="164" y2="82" stroke="#404040" strokeWidth="1.2" />
      <line x1="176" y1="28" x2="176" y2="82" stroke="#525252" strokeWidth="1.2" />

      {holes.map((h) => (
        <circle
          key={`${h.cx}-${h.cy}`}
          cx={h.cx}
          cy={h.cy}
          r="2.8"
          fill="#0a0a0a"
          stroke="#525252"
          strokeWidth="0.85"
          className="transition-colors duration-200 ease-out group-hover:stroke-[#a8902e] group-hover:fill-[#121212]"
          style={{ transitionDelay: `${h.d}ms` }}
        />
      ))}

      <line
        x1="144"
        y1="70"
        x2="174"
        y2="70"
        stroke="#3f3f3f"
        strokeWidth="0.85"
        strokeDasharray="3 2"
        className="transition-colors duration-200 ease-out group-hover:stroke-neutral-400"
        style={{ transitionDelay: "360ms" }}
      />
      <text x="146" y="64" className="viz-strong">
        Burden
      </text>

      <line
        x1="96"
        y1="88"
        x2="120"
        y2="88"
        stroke="#3f3f3f"
        strokeWidth="0.85"
        className="transition-colors duration-200 ease-out group-hover:stroke-neutral-400"
        style={{ transitionDelay: "400ms" }}
      />
      <text x="98" y="98" className="viz-strong">
        Spacing
      </text>
    </svg>
  );
}

function SlopeDiagram() {
  return (
    <svg className="consultancy-viz" viewBox="0 0 260 104" aria-hidden>
      <title>Slope stability schematic</title>
      <line x1="8" y1="86" x2="248" y2="86" stroke="#404040" strokeWidth="1" />
      <polygon
        points="20,86 198,86 198,34"
        fill="#111111"
        stroke="#404040"
        strokeWidth="0.9"
      />
      <line
        x1="42"
        y1="86"
        x2="184"
        y2="40"
        stroke="#525252"
        strokeWidth="1"
        strokeDasharray="4 3"
        className="transition-[stroke,stroke-width] duration-300 ease-out group-hover:stroke-[#c9a227] group-hover:[stroke-width:1.25px]"
      />
      <text x="96" y="58" className="viz-strong">
        Failure Plane
      </text>
      <text x="14" y="22" fill="#737373" className="font-mono" style={{ fontSize: "7px" }}>
        FoS
      </text>
    </svg>
  );
}

function PillarDiagram() {
  const n = 7;
  const baseX = 14;
  const gap = 32;
  const w = 20;
  const y0 = 30;
  const h = 56;

  return (
    <svg className="consultancy-viz" viewBox="0 0 260 104" aria-hidden>
      <title>Pillar layout schematic</title>
      <text x="14" y="16" className="viz-strong">
        Load Distribution
      </text>
      <line x1="14" y1="22" x2="246" y2="22" stroke="#333333" strokeWidth="0.8" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => {
        const lx = baseX + i * gap + w / 2;
        return (
          <line
            key={`ld-${i}`}
            x1={lx}
            y1="22"
            x2={lx}
            y2={y0}
            stroke="#2a2a2a"
            strokeWidth="0.6"
          />
        );
      })}
      <line x1="14" y1={y0} x2="246" y2={y0} stroke="#404040" strokeWidth="1" />
      <line x1="14" y1={y0 + h} x2="246" y2={y0 + h} stroke="#404040" strokeWidth="1" />
      {Array.from({ length: n }).map((_, i) => {
        const x = baseX + i * gap;
        const isCore = i >= 2 && i <= 4;
        const rect = (
          <rect
            x={x}
            y={y0}
            width={w}
            height={h}
            fill="#0c0c0c"
            stroke="#404040"
            strokeWidth="0.9"
          />
        );
        if (isCore) {
          return (
            <g key={i} className="consultancy-pillar-core">
              {rect}
            </g>
          );
        }
        return (
          <g key={i}>
            {rect}
          </g>
        );
      })}
    </svg>
  );
}

function UnderwaterDiagram() {
  const radii = [6, 14, 22, 30, 38];
  return (
    <svg className="consultancy-viz" viewBox="0 0 260 104" aria-hidden>
      <title>Underwater pressure wave schematic</title>
      <g transform="translate(130 52)">
        <g className="consultancy-underwater-scale">
          {radii.map((r) => (
            <circle
              key={r}
              cx="0"
              cy="0"
              r={r}
              fill="none"
              stroke="#3a4a58"
              strokeWidth="0.85"
            />
          ))}
          <circle cx="0" cy="0" r="2.2" fill="#2a3540" stroke="#4b5563" strokeWidth="0.6" />
        </g>
        <text x="-36" y="-40" className="viz-strong">
          Pressure Wave
        </text>
      </g>
    </svg>
  );
}

const diagrams: Record<ConsultancyVisualKey, () => JSX.Element> = {
  blast: BlastDiagram,
  slope: SlopeDiagram,
  pillar: PillarDiagram,
  underwater: UnderwaterDiagram,
};

function VisualPanel({ item }: { item: ConsultancyItem }) {
  const Diagram = diagrams[item.visual] ?? BlastDiagram;
  const photo = VISUAL_IMAGES[item.visual];

  return (
    <div className="relative flex min-h-[176px] w-full items-stretch justify-center border-b border-neutral-800 bg-[#070707] md:min-h-[192px]">
      {photo ? (
        <>
          <Image
            src={photo}
            alt="Field or simulation reference (schematic overlay)"
            fill
            className="object-cover opacity-[0.22]"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/85 to-transparent" />
        </>
      ) : null}
      <div className="relative z-[1] flex w-full max-w-[280px] items-center px-4 py-3 md:max-w-[320px]">
        <Diagram />
      </div>
    </div>
  );
}

export default function Consultancy() {
  return (
    <section id="field" className="relative py-14 md:py-28">
      <div className="container-rail">
        <SectionHeading
          eyebrow="Field & Consultancy"
          title="Applied engineering work."
          lede="Applied engineering across blasting, rock mechanics, and slope stability."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {consultancy.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                delay: (i % 2) * 0.05,
                ease: "easeOut",
              }}
              className="group flex flex-col overflow-hidden rounded-xl border border-neutral-800 bg-[#0a0a0a] transition-colors duration-200 hover:border-neutral-600"
            >
              <VisualPanel item={item} />

              <div className="flex flex-col gap-2 border-t border-neutral-800 p-4 md:p-6">
                <h3 className="font-display text-lg font-semibold leading-snug tracking-tight text-white md:text-xl">
                  {item.title}
                </h3>
                <div className="font-mono text-[10px] uppercase tracking-[0.26em] text-neutral-500">
                  {item.domain}
                </div>
                <p className="text-sm leading-relaxed text-neutral-400">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mt-12 text-center font-mono text-[11px] uppercase tracking-[0.3em] text-neutral-600"
        >
          Experience across coal, iron ore, hard rock, and marble mining environments.
        </motion.p>

        <div className="mt-16 border-t border-neutral-800 pt-14 md:mt-20 md:pt-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Consultancy Experience
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-400 md:text-base">
            Field-based engineering across blasting, rock mechanics, and geotechnical analysis.
          </p>

          <div className="mt-10 border border-neutral-800 bg-[#080808]">
            {experienceGroupOrder.map((groupName) => {
              const rows = experience.filter((e) => e.group === groupName);
              if (!rows.length) return null;
              return (
                <div key={groupName}>
                  <div className="border-b border-neutral-800 bg-[#0c0c0c] px-4 py-2.5 md:px-5">
                    <h3 className="font-mono text-[10px] uppercase tracking-[0.28em] text-neutral-500">
                      {groupName}
                    </h3>
                  </div>
                  <ul className="divide-y divide-neutral-800">
                    {rows.map((row) => (
                      <li key={`${row.company}-${row.location}`}>
                        <div className="px-4 py-4 transition-colors duration-150 ease-out active:bg-white/[0.05] md:px-5 md:py-3.5 md:hover:bg-white/[0.03]">
                          <div className="flex flex-col gap-1.5 md:grid md:grid-cols-[minmax(0,10rem)_minmax(0,1fr)_minmax(0,8.5rem)] md:items-baseline md:gap-x-6">
                            <div className="min-w-0 font-mono text-[10px] uppercase leading-snug tracking-[0.2em] text-neutral-500">
                              {row.domain}
                            </div>
                            <div className="min-w-0 font-display text-base font-semibold leading-snug text-white md:text-[17px]">
                              {row.company}
                            </div>
                            <div className="min-w-0 font-mono text-[11px] leading-snug text-neutral-400 md:text-right md:text-xs">
                              {row.location}
                            </div>
                          </div>
                          <p className="mt-3 text-sm leading-relaxed text-neutral-400 md:mt-2 md:pl-[calc(10rem+1.5rem)] md:text-[13px]">
                            {row.work}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <p className="mt-8 text-center font-mono text-[11px] uppercase leading-relaxed tracking-[0.28em] text-neutral-600">
            Experience across opencast, underground, and marine environments.
          </p>
        </div>
      </div>
    </section>
  );
}
