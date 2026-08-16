"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal, usePrefersReducedMotion } from "@/lib/motion";
import { IconArrow, IconBolt, IconPin, IconStar } from "@/components/icons";

const POSTCODES: { code: string; area: string }[] = [
  { code: "NW2", area: "Cricklewood" },
  { code: "NW10", area: "Willesden" },
  { code: "NW2", area: "Dollis Hill" },
  { code: "NW10", area: "Neasden" },
  { code: "NW6", area: "Kilburn" },
  { code: "NW6", area: "West Hampstead" },
  { code: "NW6", area: "Brondesbury" },
  { code: "NW10", area: "Kensal Rise" },
  { code: "NW3", area: "Hampstead" },
  { code: "NW4", area: "Hendon" },
  { code: "NW11", area: "Golders Green" },
];

export function Coverage() {
  return (
    <section id="areas" className="relative border-t border-edge bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <p className="flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-volt">
                  <IconBolt className="h-3.5 w-3.5" /> Coverage
                </p>
                <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[0.95] text-snow sm:text-5xl">
                  NW London postcodes, <span className="text-volt">covered</span>
                </h2>
                <p className="mt-5 leading-relaxed text-mist">
                  Based in Cricklewood, serving North West London with fast response times
                  measured door-to-door.
                </p>
              </Reveal>

              <Reveal delay={140}>
                <p className="mt-8 font-mono text-[0.64rem] uppercase tracking-[0.16em] text-mist/80">
                  Just outside NW London? Ring us — we cover the surrounding areas too.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8">
            <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
              {POSTCODES.map((p, i) => {
                return (
                  <Reveal key={p.area} delay={(i % 8) * 45}>
                    <li>
                      <div className="group relative w-full border border-edge bg-ink2/60 px-4 py-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-volt/50">
                        <span className="block font-display text-2xl font-extrabold uppercase leading-none text-snow transition-colors group-hover:text-volt2">
                          {p.code}
                        </span>
                        <span className="mt-1.5 block text-xs text-mist">{p.area}</span>
                      </div>
                    </li>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </div>sReducedMotion();
  const timer = useRef(0);

  useEffect(() => {
    if (reduced || paused) return;
    timer.current = window.setInterval(() => setIdx((i) => (i + 1) % QUOTES.length), 6500);
    return () => clearInterval(timer.current);
  }, [reduced, paused]);

  const next = (idx + 1) % QUOTES.length;

  return (
    <div id="reviews" className="mt-24 scroll-mt-32 lg:mt-32">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <p className="flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-volt">
            <IconBolt className="h-3.5 w-3.5" /> Word of mouth
          </p>
          <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[0.95] text-snow sm:text-5xl">
            The neighbours already use us
          </h2>
          <div className="mt-6 flex items-center gap-4 border border-edge bg-ink2/70 px-5 py-4">
            <span className="font-display text-5xl font-extrabold text-volt">5.0</span>
            <div>
              <span className="flex text-volt" aria-label="5.0 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} className="h-4 w-4" />
                ))}
              </span>
              <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-mist">
                60+ Google reviews · Which? Trusted Trader
              </p>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIdx((idx - 1 + QUOTES.length) % QUOTES.length)}
              aria-label="Previous review"
              className="flex h-11 w-11 items-center justify-center border border-edge text-mist transition-all duration-300 hover:border-volt hover:text-volt"
            >
              <IconArrow className="h-4 w-4 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => setIdx(next)}
              aria-label="Next review"
              className="flex h-11 w-11 items-center justify-center border border-edge text-mist transition-all duration-300 hover:border-volt hover:text-volt"
            >
              <IconArrow className="h-4 w-4" />
            </button>
            <div className="ml-2 flex gap-1.5" aria-hidden="true">
              {QUOTES.map((_, i) => (
                <button
                  key={i}

        <Testimonials />
      </div>
    </section>
  );
}

/* ------------------------------ testimonials ------------------------------ */

const QUOTES = [
  {
    quote:
      "Fantastic service. Reliable, efficient, works quickly and fixed a problem a previous electrician couldn't. Thank you James, we are happy to have a trusted electrician for any future jobs.",
    name: "Jack",
    meta: "Cricklewood, NW2 · socket replacement",
    initials: "JK",
  },
  {
    quote:
      "James is not your average tradesman. He's super professional, pleasant to have around and knows his stuff. He answers emails promptly, turns up exactly when he's promised. Honestly, we can't recommend James highly enough.",
    name: "Claire Chaudoir",
    meta: "Willesden, NW10 · fault finding",
    initials: "CC",
  },
  {
    quote:
      "Reliable, honest and trustworthy. Very satisfied with his work and the advice he gave me was most helpful. Couldn't recommend him more highly.",
    name: "Teresa Courtney",
    meta: "Dollis Hill, NW2 · lighting installation",
    initials: "TC",
  },
  {
    quote:
      "James arrived on time and did a good and quick job replacing a number of double sockets and a light fitting. In and out in 45 minutes.",
    name: "Michael Barker",
    meta: "Neasden, NW10 · sockets & lights",
    initials: "MB",
  },
  {
    quote:
      "James was great. Punctual, friendly, professional and reasonable prices. What more could you ask for? Besides, he's a lovely person!",
    name: "Ornah Levine-Dolberg",
    meta: "Kilburn, NW6 · rewiring",
    initials: "OL",
  },
  {
    quote:
      "James is a reliable, efficient and friendly electrician. He turned up on time and tried his best to solve the problem. Price is fair. Very glad to have found him.",
    name: "Dr W Wang",
    meta: "West Hampstead, NW3 · consumer unit",
    initials: "WW",
  },
];

function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = usePrefer
                  type="button"
                  tabIndex={-1}
                  onClick={() => setIdx(i)}
                  className={cn(
                    "h-1 transition-all duration-300",
                    i === idx ? "w-8 bg-volt" : "w-3 bg-edge"
                  )}
                />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal dir="r" delay={120} className="lg:col-span-8">
          <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* peeking next card */}
            <figure className="absolute inset-0 translate-x-4 translate-y-4 rotate-[1.5deg] border border-edge bg-panel/60 opacity-60" aria-hidden="true" />
            <figure className="relative border border-edge bg-ink2 p-7 shadow-[0_26px_70px_rgba(3,9,17,.55)] transition-transform duration-300 hover:-translate-y-1 sm:p-10">
              <svg viewBox="0 0 40 32" className="h-8 w-10 text-volt/70" fill="currentColor" aria-hidden="true">
                <path d="M0 32V19.2C0 8 6.4 1.6 16.8 0l1.6 5.6c-5.6 1.6-8.8 4.8-9.2 9.6H17V32H0zm23 0V19.2C23 8 29.4 1.6 39.8 0l1.6 5.6c-5.6 1.6-8.8 4.8-9.2 9.6H40V32H23z" transform="scale(0.95)" />
              </svg>
              <blockquote className="mt-5 min-h-[8.5rem] text-lg leading-relaxed text-snow sm:text-xl" aria-live="polite">
                “{QUOTES[idx].quote}”
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-4 border-t border-edge pt-6">
                <span className="flex h-12 w-12 items-center justify-center bg-volt font-display text-lg font-extrabold text-ink">
                  {QUOTES[idx].initials}
                </span>
                <div>
                  <p className="font-semibold text-snow">{QUOTES[idx].name}</p>
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-mist">
                    {QUOTES[idx].meta} · via Google
                  </p>
                </div>
                <span className="ml-auto hidden font-mono text-xs text-mist sm:block">
                  {String(idx + 1).padStart(2, "0")} / {String(QUOTES.length).padStart(2, "0")}
                </span>
              </figcaption>
            </figure>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
