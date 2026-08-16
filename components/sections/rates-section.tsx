"use client";

import { Reveal } from "@/lib/motion";
import { IconArrow, IconBolt, IconShield, IconVan } from "@/components/icons";

type Row = { item: string; note?: string; price: string };
type Group = { heading: string; rows: Row[] };

const LEDGER: Group[] = [
  {
    heading: "Call-outs & labour",
    rows: [
      { item: "Emergency call-out — 24/7, 365", note: "first 30 min of labour included", price: "£89" },
      { item: "Standard visit — Mon–Fri, 8am–6pm", price: "£65" },
      { item: "Evenings & Saturdays", price: "£75" },
      { item: "Hourly rate thereafter", note: "charged in 15-min increments", price: "£55/hr" },
    ],
  },
  {
    heading: "Testing & upgrades",
    rows: [
      { item: "EICR — home up to 3 bedrooms", note: "PDF certificate within 24h", price: "£129" },
      { item: "EICR — 4–5 bed or HMO", price: "from £179" },
      { item: "Consumer unit upgrade — 18-way", note: "dual RCD + Type 2 SPD, notified", price: "from £549" },
      { item: "Fault finding (per hour)", note: "waived if we fix it there and then", price: "£55" },
    ],
  },
  {
    heading: "Installs",
    rows: [
      { item: "EV charger — 7kW, standard install", note: "inc. cable run to 10m & certification", price: "from £849" },
      { item: "Double socket — supplied & fitted", price: "from £95" },
      { item: "Downlights — room of six", note: "fire-rated, dimmable LED", price: "from £240" },
      { item: "Electric shower — like-for-like swap", price: "from £320" },
    ],
  },
];

export function Rates() {
  return (
    <section id="rates" className="relative scroll-mt-16 bg-paper py-24 text-inkpaper lg:py-32">
      {/* perforated top edge */}
      <div
        className="absolute inset-x-0 top-0 h-3"
        style={{
          backgroundImage: "radial-gradient(circle at 8px -2px, var(--color-ink) 6px, transparent 6.5px)",
          backgroundSize: "18px 12px",
        }}
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-copper">
              <IconBolt className="h-3.5 w-3.5" /> The rate card
            </p>
            <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[0.95] sm:text-5xl">
              Straight rates.
              <br />
              Written down. <span className="text-copper">Since 2009.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs font-mono text-xs uppercase tracking-[0.14em] leading-relaxed text-inkpaper/70">
              Every price includes VAT.
              <br />
              What we quote is what you pay.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* ledger */}
          <div className="space-y-12 lg:col-span-8">
            {LEDGER.map((g, gi) => (
              <Reveal key={g.heading} delay={gi * 90}>
                <section aria-label={g.heading}>
                  <h3 className="flex items-center gap-4 font-mono text-[0.7rem] font-bold uppercase tracking-[0.24em] text-copper">
                    {g.heading}
                    <span className="h-px flex-1 bg-inkpaper/20" aria-hidden="true" />
                  </h3>
                  <ul className="mt-5 divide-y divide-inkpaper/10">
                    {g.rows.map((r) => (
                      <li
                        key={r.item}
                        className="group py-4 transition-all duration-300 hover:bg-paper2 hover:pl-3"
                      >
                        <div className="leaders">
                          <div className="shrink-0">
                            <p className="font-semibold leading-snug">{r.item}</p>
                            {r.note && (
                              <p className="mt-0.5 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-inkpaper/55">
                                {r.note}
                              </p>
                            )}
                          </div>
                          <span className="dots" aria-hidden="true" />
                          <p className="shrink-0 font-mono text-base font-bold tabular-nums transition-colors group-hover:text-copper">
                            {r.price}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              </Reveal>
            ))}
            <Reveal delay={120}>
              <p className="font-mono text-[0.66rem] uppercase tracking-[0.14em] leading-relaxed text-inkpaper/60">
                * Standard install assumes a healthy existing supply. If anything needs
                upgrading, you'll know the cost in writing before we start — not after.
              </p>
            </Reveal>
          </div>

          {/* side rail */}
          <div className="lg:col-span-4">
            <div className="space-y-6 lg:sticky lg:top-32">
              <Reveal dir="r">
                <div className="border-2 border-inkpaper bg-paper2 p-6 shadow-[6px_6px_0_rgba(27,36,52,.9)]">
                  <p className="flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-copper">
                    <IconVan className="h-4 w-4" /> Landlords &amp; portfolios
                  </p>
                  <p className="mt-3 font-display text-2xl font-extrabold uppercase leading-tight">
                    Six properties or sixty — one number to call
                  </p>
                  <ul className="mt-4 space-y-2.5 text-sm">
                    {[
                      "EICR cycle tracked & chased for you",
                      "24-hour minor-repairs turnaround",
                      "One consolidated monthly invoice",
                      "Digital certificate filing for agents",
                    ].map((t) => (
                      <li key={t} className="flex gap-2.5">
                        <IconBolt className="mt-1 h-3 w-3 shrink-0 text-copper" />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#quote"
                    className="group mt-6 flex items-center justify-between border-2 border-inkpaper bg-inkpaper px-4 py-3 font-mono text-[0.7rem] font-bold uppercase tracking-[0.16em] text-paper transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_rgba(27,36,52,.55)]"
                  >
                    Get portfolio rates
                    <IconArrow className="h-4 w-4 text-volt transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </Reveal>

              <Reveal dir="r" delay={120}>
                <div className="flex gap-4 border border-inkpaper/25 p-5">
                  <IconShield className="h-8 w-8 shrink-0 text-copper" />
                  <p className="text-sm leading-relaxed">
                    <span className="font-bold">The punctuality promise:</span> if we're
                    more than 30 minutes late without calling, the call-out is on us.
                    We've paid out four times in five years — we keep score.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
