"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/lib/motion";
import { IconBolt, IconPlus } from "@/components/icons";
import { contact, faqs as FAQS } from "@/siteconfig";

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
                href={contact.phoneHref}
                className="mt-7 inline-flex items-center gap-2 border border-edge px-5 py-3.5 font-mono text-[0.72rem] font-bold uppercase tracking-[0.14em] text-snow transition-all duration-300 hover:border-volt hover:text-volt"
              >
                {contact.phone}
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
