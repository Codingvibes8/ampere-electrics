"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { useScramble } from "@/lib/motion";
import { IconArrow, IconBolt, IconPhone, IconShield, IconStar } from "@/components/icons";
import { JobTicket } from "./job-ticket";
import { Button } from "@/components/ui/button";

const WORDS = ["ELECTRIFIED.", "PROTECTED.", "CERTIFIED.", "POWERED UP."] as const;

const AREAS = [
  "CRICKLEWOOD", "WILLESDEN", "DOLLIS HILL", "NEASDEN", "KILBURN",
  "WEST HAMPSTEAD", "BRONDESBURY", "KENSAL RISE",
];

function CircuitBackdrop() {
  return (
    <svg
      className="circuit absolute inset-0 h-full w-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <path className="trace" d="M-20 140h300v180h280V200h260v240h300v-120h340" />
      <path className="trace" d="M-20 560h220v140h260V560h300v200h700" />
      <path className="trace" d="M760-20v160h280V70h420" />
      <path className="trace" d="M160 920V740H70V500h250" />
      <path className="trace" d="M1120 920V660h-180V460h220" />
      <path className="live" d="M-20 140h300v180h280V200h260v240h300v-120h340" />
      <path className="live d2" d="M-20 560h220v140h260V560h300v200h700" />
      <path className="live d3" d="M760-20v160h280V70h420" />
      <circle className="node" cx="280" cy="140" r="4" />
      <circle className="node" cx="560" cy="320" r="4" />
      <circle className="node" cx="840" cy="200" r="4" />
      <circle className="node" cx="200" cy="560" r="4" />
      <circle className="node" cx="480" cy="700" r="4" />
      <circle className="node" cx="1040" cy="140" r="4" />
      <circle className="node" cx="940" cy="660" r="4" />
      <rect x="556" y="316" width="8" height="8" className="node" />
      <rect x="1036" y="136" width="8" height="8" className="node" />
    </svg>
  );
}

export function Hero() {
  const word = useScramble(WORDS, 3400);
  const [mainsOn, setMainsOn] = useState(true);

  return (
    <section
      id="top"
      className={cn("relative overflow-hidden bg-ink", !mainsOn && "mains-off")}
    >
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div
        className="glow absolute -top-40 right-[-10%] h-[42rem] w-[42rem] rounded-full opacity-100"
        style={{ background: "radial-gradient(closest-side, rgba(12,77,162,.2), transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="glow absolute bottom-[-20%] left-[-12%] h-[36rem] w-[36rem] rounded-full opacity-60"
        style={{ background: "radial-gradient(closest-side, rgba(188,57,49,.18), transparent 70%)" }}
        aria-hidden="true"
      />
      <CircuitBackdrop />

      {/* vertical spec rail */}
      <p
        className="absolute left-5 top-1/2 hidden -translate-y-1/2 font-mono text-[0.6rem] uppercase tracking-[0.42em] text-mist/60 xl:block"
        style={{ writingMode: "vertical-rl" }}
        aria-hidden="true"
      >
        230V — 50Hz — BS 7671:2018+A2 — NAPIT APPROVED
      </p>

      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 pb-10 pt-14 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:pb-16 lg:pt-20">
        {/* left */}
        <div className="lg:col-span-7">
          <p className="mask-line font-mono text-[0.68rem] uppercase tracking-[0.24em] text-volt">
            <span style={{ "--d": "80ms" } as React.CSSProperties}>
              ⌁ NAPIT approved · Which? Trusted Trader · serving NW London
            </span>
          </p>

          <h1 className="masks-in mt-5 font-display font-extrabold uppercase leading-[0.92] tracking-[0.005em] text-snow">
            <span className="mask-line text-[clamp(3.1rem,8.4vw,6.9rem)]">
              <span style={{ "--d": "140ms" } as React.CSSProperties}>Professional Electrical</span>
            </span>
            <span className="mask-line text-[clamp(3.1rem,8.4vw,6.9rem)]">
              <span style={{ "--d": "280ms" } as React.CSSProperties}>Service in North West</span>
            </span>
            <span className="mask-line text-[clamp(3.1rem,8.4vw,6.9rem)] text-volt">
              <span style={{ "--d": "420ms" } as React.CSSProperties}>
                <span className="inline-block min-w-[6ch]">{word}</span>
                <svg
                  viewBox="0 0 300 14"
                  className="mt-1 h-[0.16em] w-[5.2em] max-w-full text-secondary"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    className="du"
                    d="M4 10C60 3 120 3 150 7s90 4 146-3"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
            NAPIT approved and Which? Trusted Trader electrician serving NW2 and surrounding areas.
            Powering your home safely with over 15 years of expert excellence.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="group">
              <a href="tel:+447000000000" className="flex items-center gap-3">
                <IconPhone className="h-4.5 w-4.5 transition-transform duration-300 group-hover:-rotate-12" />
                07000 000 000
                <span className="hidden font-medium normal-case tracking-normal opacity-80 sm:inline">24/7</span>
              </a>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="group">
              <a href="#quote" className="flex items-center gap-2.5">
                Book a fixed quote
                <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          {/* trust strip */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-[#0C4DA2]/20 border border-[#0C4DA2]/50 rounded-full px-4 py-2 shadow-lg transition-transform hover:scale-105">
                <IconShield className="w-4 h-4 text-snow" />
                <span className="text-xs font-bold text-snow tracking-wide">NAPIT Approved</span>
              </div>
              <div className="flex items-center gap-2 bg-[#BC3931]/20 border border-[#BC3931]/50 rounded-full px-4 py-2 shadow-lg transition-transform hover:scale-105">
                <IconStar className="w-4 h-4 text-snow" />
                <span className="text-xs font-bold text-snow tracking-wide">Which? Trusted Trader</span>
              </div>
            </div>
          </div>
        </div>

        {/* right — live ticket */}
        <div className="relative lg:col-span-5">
          <p className="mb-3 flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-mist">
            <IconBolt className="h-3.5 w-3.5 text-volt" />
            From the dispatch board, right now
          </p>
          <JobTicket mainsOn={mainsOn} onToggle={() => setMainsOn((v) => !v)} />
          <div className="pointer-events-none absolute -bottom-6 -left-6 -z-10 hidden h-full w-full border border-secondary/40 sm:block" aria-hidden="true" />
          <p className="mt-6 flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-mist/80">
            <IconShield className="h-4 w-4 text-secondary" />
            Every job photographed, tested &amp; certified before we leave
          </p>
        </div>
      </div>

      {/* areas marquee */}
      <div className="relative border-t border-edge bg-ink2/70 py-3.5 backdrop-blur-sm">
        <div className="marquee">
          <div className="marquee-track items-center gap-8">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex items-center gap-8" aria-hidden={dup === 1}>
                {AREAS.map((a) => (
                  <span key={`${dup}-${a}`} className="flex items-center gap-8 whitespace-nowrap">
                    <span className="font-display text-lg font-bold uppercase tracking-[0.14em] text-mist transition-colors hover:text-volt">
                      {a}
                    </span>
                    <IconBolt className="h-3.5 w-3.5 text-volt/70" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
