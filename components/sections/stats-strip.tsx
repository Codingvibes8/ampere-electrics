"use client";

import { cn } from "@/lib/utils";
import { CountUp, Reveal } from "@/lib/motion";

const STATS = [
  { to: 15, suffix: "+", label: "Years Experience", note: "since 2009" },
  { to: 2000, suffix: "+", label: "Jobs Completed", note: "across NW London" },
  { to: 5, suffix: "★", label: "Rated Service", note: "5 star Google reviews" },
  { to: 8, suffix: "", label: "Areas Covered", note: "NW2, NW3, NW6, NW10, NW11, NW4" },
];

export function StatsStrip() {
  return (
    <section className="relative border-b border-edge bg-ink2/60">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-edge border-x border-edge lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 90}
            className={cn("px-5 py-8 sm:px-8 lg:py-10", i >= 2 && "border-t border-edge lg:border-t-0")}
          >
            <p className="font-display text-4xl font-extrabold uppercase leading-none text-snow sm:text-5xl">
              <CountUp to={s.to} suffix={s.suffix} />
            </p>
            <p className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-volt">{s.label}</p>
            <p className="mt-1 text-sm text-mist">{s.note}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
