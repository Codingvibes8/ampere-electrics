"use client";

import { Reveal } from "@/lib/motion";
import {
  IconBolt, IconCert, IconClock, IconMeter, IconShield, IconVan, IconWrench,
} from "@/components/icons";

const PROMISES = [
  {
    icon: IconCert,
    title: "Fixed prices, in writing",
    copy: "The number on the quote is the number on the invoice. It only moves if you change the scope — and we re-quote before touching anything.",
  },
  {
    icon: IconShield,
    title: "6-year workmanship guarantee",
    copy: "Every job is backed by an underwritten guarantee that transfers with the house. If our work fails, the fix is free — no small print gymnastics.",
  },
  {
    icon: IconWrench,
    title: "Tidy by default",
    copy: "Dust sheets down before the first screw comes out. Hoover round, before-and-after photos of the board, and your fuse labels done properly.",
  },
  {
    icon: IconMeter,
    title: "Certified & notified",
    copy: "Part P notifications to Building Control handled by us. You get the BS 7671 certificate as a PDF the same day — the paperwork buyers' solicitors ask for.",
  },
  {
    icon: IconClock,
    title: "Real engineers, not gig workers",
    copy: "ECS Gold Card qualified, DBS-checked, in uniform, in a marked van. The person who quotes your job is the person who does it.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Book in ~60 seconds",
    copy: "Ring the office or drop the form below. A human answers — usually James.",
    meta: "Call or web form",
  },
  {
    n: "02",
    title: "Fixed price, in writing",
    copy: "We confirm the price by text or email before anyone picks up a tool.",
    meta: "No surprises",
  },
  {
    n: "03",
    title: "The job, done properly",
    copy: "Dust sheets down, circuits tested, photos taken, labels written. Tidy out, tidy in.",
    meta: "Tested & photographed",
  },
  {
    n: "04",
    title: "Certification same day",
    copy: "BS 7671 PDF certificate and any Building Control notification, filed and forwarded.",
    meta: "PDF in your inbox",
  },
];

export function Craft() {
  return (
    <section id="standard" className="relative overflow-hidden border-t border-edge bg-ink2/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-16">
          {/* image column */}
          <Reveal dir="l" className="relative lg:col-span-5">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-full w-full border border-copper/50" aria-hidden="true" />
              <img
                src="/images/tech-portrait.jpg"
                alt="Electric Jamez engineer testing a consumer unit"
                className="relative aspect-[4/5] w-full object-cover grayscale-[20%] transition-all duration-700 hover:grayscale-0"
              />
              <div className="absolute -bottom-5 -right-3 border border-edge bg-ink px-5 py-4 shadow-[0_18px_50px_rgba(3,9,17,.55)] sm:-right-6">
                <p className="font-display text-3xl font-extrabold uppercase leading-none text-volt">97%</p>
                <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-mist">
                  fixed on the first visit
                </p>
              </div>
            </div>
            <p className="mt-10 flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-mist">
              <IconVan className="h-4 w-4 text-volt" />
              Marked vans · uniformed engineers · Cricklewood NW2
            </p>
          </Reveal>

          {/* promises column */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-volt">
                <IconBolt className="h-3.5 w-3.5" /> The Electric Jamez standard
              </p>
              <h2 className="mt-4 font-display text-5xl font-extrabold uppercase leading-[0.95] text-snow sm:text-6xl">
                No cowboys.
                <br />
                No shortcuts. <span className="text-volt">No mess.</span>
              </h2>
              <p className="mt-5 max-w-xl leading-relaxed text-mist">
                Anyone can chase a cable into a wall. The difference is everything around
                it — the quote you can hold them to, the test results, the paperwork that
                survives a house sale. That's the part we obsess over.
              </p>
            </Reveal>

            <ul className="mt-10 divide-y divide-edge border-y border-edge">
              {PROMISES.map((p, i) => {
                const Icon = p.icon;
                return (
                  <Reveal key={p.title} delay={i * 70}>
                    <li className="group flex gap-5 px-2 py-5 transition-all duration-300 hover:bg-ink2/80 hover:pl-4 sm:gap-6">
                      <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center border border-edge bg-ink text-mist transition-all duration-300 group-hover:border-volt/60 group-hover:text-volt">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-bold uppercase tracking-wide text-snow transition-colors duration-300 group-hover:text-volt2">
                          {p.title}
                        </h3>
                        <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-mist">{p.copy}</p>
                      </div>
                    </li>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </div>

        {/* process */}
        <div className="mt-24 lg:mt-32">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.95] text-snow sm:text-5xl">
                How a call-out runs
              </h2>
              <p className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-mist">
                Same four steps since 2009 — it works
              </p>
            </div>
          </Reveal>

          <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 120} className="relative">
                <li className="pr-6 lg:pr-10">
                  {i < STEPS.length - 1 && (
                    <div
                      className="connector absolute right-4 top-3 hidden h-0.5 w-[calc(100%-4rem)] lg:block"
                      aria-hidden="true"
                    />
                  )}
                  <span className="relative inline-flex h-8 items-center justify-center border border-volt/60 bg-ink px-2.5 font-mono text-xs font-bold text-volt">
                    {s.n}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-bold uppercase tracking-wide text-snow">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{s.copy}</p>
                  <p className="mt-3 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-copper">
                    {s.meta}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
