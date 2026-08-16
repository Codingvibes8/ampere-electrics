"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/lib/motion";
import { IconBolt, IconPlus } from "@/components/icons";

const FAQS = [
  {
    q: "Do I actually need an EICR?",
    a: "If you're a landlord, yes — it's a legal requirement in England, renewed at least every 5 years, and you must supply it to tenants within 28 days. If you're a homeowner, it's not law, but it's the only way to know whether 40-year-old cables are safe behind the walls. We'll tell you honestly if your property doesn't need one yet.",
  },
  {
    q: "Are you properly insured and accredited?",
    a: "Yes. NAPIT Approved and Which? Trusted Trader registered, and we carry £5m public liability plus £10m employer's liability cover. Certificates are available on request before we step foot in your home.",
  },
  {
    q: "What exactly does the emergency call-out cover?",
    a: "£89 gets an engineer to your door 24/7 with the first 30 minutes of diagnosis and labour included. Most common faults — tripping RCDs, dead circuits, burning smells traced — are resolved inside that window. Anything bigger gets a fixed written price before we continue.",
  },
  {
    q: "Do you handle Building Control notifications?",
    a: "Yes — all notifiable work (new circuits, consumer unit changes, work in bathrooms) is registered with Building Control through our NAPIT membership. You receive the certificate PDF the same day and the official notification within 30 days, filed for your records.",
  },
  {
    q: "How do you take payment?",
    a: "Card, bank transfer, or Apple/Google Pay on the van. Landlords and commercial clients get monthly invoicing. We never add card surcharges, and you'll never hear 'cash only, mate' from us.",
  },
  {
    q: "Can you work alongside my builder or kitchen fitter?",
    a: "Happily — most of our work is coordinated with other trades. We'll share drawings, agree first- and second-fix dates by email, and actually turn up on the day we said. Your builder will like us; they usually send their own homes our way.",
  },
];

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative scroll-mt-16 border-t border-edge bg-ink py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <p className="flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-volt">
                <IconBolt className="h-3.5 w-3.5" /> Before you ask
              </p>
              <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[0.95] text-snow sm:text-5xl">
                Fair questions, straight answers
              </h2>
              <p className="mt-5 max-w-sm leading-relaxed text-mist">
                The things Londoners ask us most, answered without the trade waffle.
                Anything else — ring the office, James knows everything.
              </p>
              <a
                href="tel:+447000000000"
                className="mt-7 inline-flex items-center gap-2 border border-edge px-5 py-3.5 font-mono text-[0.72rem] font-bold uppercase tracking-[0.14em] text-snow transition-all duration-300 hover:border-volt hover:text-volt"
              >
                07000 000 000
              </a>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-8">
          <ul className="divide-y divide-edge border-y border-edge">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={f.q} delay={i * 50}>
                  <li>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      className="group flex w-full items-center justify-between gap-6 px-2 py-5 text-left sm:px-4"
                    >
                      <span
                        className={cn(
                          "font-display text-xl font-bold uppercase tracking-wide transition-colors duration-300 sm:text-2xl",
                          isOpen ? "text-volt" : "text-snow group-hover:text-volt2"
                        )}
                      >
                        {f.q}
                      </span>
                      <span
                        className={cn(
                          "flex h-8 w-8 shrink-0 items-center justify-center border transition-all duration-300",
                          isOpen
                            ? "rotate-45 border-volt bg-volt text-ink"
                            : "border-edge text-mist group-hover:border-volt/60 group-hover:text-volt"
                        )}
                      >
                        <IconPlus className="h-4 w-4" />
                      </span>
                    </button>
                    <div className={cn("acc-panel", isOpen && "open")}>
                      <div>
                        <p className="max-w-2xl px-2 pb-6 leading-relaxed text-mist sm:px-4">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
