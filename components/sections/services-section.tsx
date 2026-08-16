"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/lib/motion";
import {
  IconArrow, IconBolt, IconPlus,
  IconWind, IconCar, IconShieldCheck,
  IconDroplets, IconSun, IconClipboardCheck, IconZap,
} from "@/components/icons";
import { Badge } from "@/components/ui/badge";

type Service = {
  n: string;
  title: string;
  icon: (p: { className?: string }) => React.ReactNode;
  from: string;
  copy: string;
  tags: string[];
};

const SERVICES: Service[] = [
  {
    n: "01",
    title: "Air Conditioning Service",
    icon: IconWind,
    from: "from £189",
    copy: "Keep your home or business cool year-round with expert AC installation and servicing. We provide full air conditioning solutions including split system installation, ducted systems, multi-zone setups, and regular maintenance servicing. Our NAPIT-approved engineers ensure every installation meets the highest safety and efficiency standards. We work with leading brands and offer comprehensive aftercare support.",
    tags: ["Split systems", "Ducted AC", "Maintenance plans"],
  },
  {
    n: "02",
    title: "EV Charger Installation",
    icon: IconCar,
    from: "from £849",
    copy: "Certified EV charger installation for all major brands — from site survey to final sign-off. As certified EV charger installers, we handle everything from site surveys to final commissioning. We install all major brands including Tesla Wall Connectors, Ohme, Pod Point, and Easee. Every installation includes electrical capacity assessment, dedicated circuit installation, and all necessary Part P certification documentation.",
    tags: ["Tesla · Ohme · Pod Point", "7kW / 22kW", "OZEV grant advice"],
  },
  {
    n: "03",
    title: "Electric Safety Certificates",
    icon: IconShieldCheck,
    from: "from £129",
    copy: "EICR testing for landlords, buyers, and businesses — legally compliant and fully documented. Our Electrical Installation Condition Reports (EICR) meet all current regulations. Essential for landlords (legally required every 5 years), homebuyers, and insurance requirements. We thoroughly test all circuits, identify any defects, and provide clear documentation with remedial recommendations where needed.",
    tags: ["Landlord EICR", "Homebuyer reports", "PDF within 24h"],
  },
  {
    n: "04",
    title: "Flood Damage Assessment",
    icon: IconDroplets,
    from: "from £149",
    copy: "Rapid-response electrical assessment and restoration after water or flood damage. Flooding can cause catastrophic damage to electrical systems. Our rapid response team provides thorough assessment of all affected circuits, consumer units, and wiring. We handle isolation, drying assessments, replacement of damaged components, re-testing, and full re-certification to get your property safely back online.",
    tags: ["Emergency response", "Insurance liaison", "Full re-certification"],
  },
  {
    n: "05",
    title: "Outdoor Lighting & Heating",
    icon: IconSun,
    from: "from £199",
    copy: "Bespoke outdoor lighting and heating installations — weatherproof and energy-efficient. Create stunning outdoor environments with our bespoke lighting design and installation service. From garden pathway lights and security floodlights to patio heaters and entertaining areas — we design and install complete outdoor electrical solutions that are weatherproof, energy-efficient, and beautifully integrated.",
    tags: ["Garden lighting", "Security lights", "Patio heaters"],
  },
  {
    n: "06",
    title: "PAT Testing",
    icon: IconClipboardCheck,
    from: "from £65",
    copy: "Full Portable Appliance Testing with pass/fail labels and a digital compliance report. Regular PAT testing is essential for workplace safety and insurance compliance. We test all portable electrical equipment, from computers and kettles to power tools and extension leads. Each appliance receives a pass/fail label, and you receive a comprehensive digital report for your records.",
    tags: ["Workplace compliance", "Digital reports", "Pass/fail labels"],
  },
  {
    n: "07",
    title: "Solar Panel Installation",
    icon: IconZap,
    from: "from £4,995",
    copy: "Modern solar panel systems for residential and commercial properties — reduce bills and energy dependence. Harness the power of the sun with our professional solar panel installation service. We design and install complete solar PV systems tailored to your property and energy needs. From site assessment and system sizing to MCS registration and grid connection, we handle every step. Our installations include battery storage options, monitoring systems, and comprehensive warranties for long-term peace of mind.",
    tags: ["MCS certified", "Battery storage", "Grid connection"],
  },
];

export function Services() {
  const [open, setOpen] = useState(0);

  return (
    <section id="services" className="relative bg-ink py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        {/* sticky rail */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <p className="flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-volt">
                <IconBolt className="h-3.5 w-3.5" /> What we do
              </p>
              <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[0.95] text-snow sm:text-5xl">
                Professional Electrical Services You Can Trust
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-mist">
                We know how much you depend on electricity for everyday life — and how dangerous improper electrical work can be. Our NAPIT-approved engineers arrive on time, work to the highest standards, and guarantee your satisfaction on every job.
              </p>
              <a
                href="#quote"
                className="group mt-7 inline-flex items-center gap-2.5 font-mono text-sm font-semibold uppercase tracking-[0.14em] text-volt transition-colors hover:text-volt2"
              >
                Describe your job — get a price
                <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </Reveal>

            <Reveal delay={140} className="mt-10 hidden lg:block">
              <a href="#quote" className="group block border border-edge bg-ink2 transition-colors duration-300 hover:border-volt/50">
                <div className="relative overflow-hidden">
                  <img
                    src="/images/ev-charger.jpg"
                    alt="Electrician fitting a home EV charger on a London house"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-3 top-3 border border-volt/50 bg-ink/85 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-volt">
                    Most booked this month
                  </span>
                </div>
                <div className="flex items-center justify-between px-4 py-3.5">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-mist">
                    7kW EV charger, fitted & certified — <span className="text-snow">from £849</span>
                  </p>
                  <IconArrow className="h-4 w-4 text-volt transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </a>
            </Reveal>
          </div>
        </div>

        {/* accordion list */}
        <div className="lg:col-span-7">
          <ul className="divide-y divide-edge border-y border-edge">
            {SERVICES.map((s, i) => {
              const isOpen = open === i;
              const Icon = s.icon;
              return (
                <Reveal key={s.n} delay={i * 60}>
                  <li className={cn("transition-colors duration-300", isOpen && "bg-ink2/70")}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      className="group flex w-full items-center gap-4 px-4 py-5 text-left sm:gap-6 sm:px-6"
                    >
                      <span className="font-mono text-xs font-semibold text-copper">{s.n}</span>
                      <Icon
                        className={cn(
                          "h-6 w-6 shrink-0 transition-colors duration-300",
                          isOpen ? "text-volt" : "text-mist group-hover:text-volt"
                        )}
                      />
                      <span className="flex-1">
                        <span
                          className={cn(
                            "block font-display text-xl font-bold uppercase tracking-wide transition-colors duration-300 sm:text-2xl",
                            isOpen ? "text-volt" : "text-snow group-hover:text-volt2"
                          )}
                        >
                          {s.title}
                        </span>
                      </span>
                      <span className="hidden font-mono text-xs font-semibold text-mist sm:block">{s.from}</span>
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
                        <div className="px-4 pb-6 pl-[3.4rem] pr-4 sm:px-6 sm:pl-[4.6rem]">
                          <p className="max-w-xl leading-relaxed text-mist">{s.copy}</p>
                          <div className="mt-4 flex flex-wrap items-center gap-2">
                            {s.tags.map((t) => (
                              <Badge key={t} variant="secondary">
                                {t}
                              </Badge>
                            ))}
                            <span className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-volt sm:hidden">
                              {s.from}
                            </span>
                          </div>
                          <a
                            href="#quote"
                            className="group/link mt-4 inline-flex items-center gap-2 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-snow transition-colors hover:text-volt"
                          >
                            Book this job
                            <IconArrow className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ul>
          <Reveal delay={120}>
            <p className="mt-5 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-mist/80">
              ⌁ Something odd on the list? If it involves electrons, ring us — we've probably fixed one this week.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
