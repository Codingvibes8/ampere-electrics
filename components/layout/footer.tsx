"use client";

import { IconBolt, Logo } from "@/components/icons";
import Link from "next/link";
import {
  accreditations,
  contact,
  coverageAreas,
  hours,
  serviceTitles,
  site,
} from "@/siteconfig";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-edge bg-[#070e18]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-mist">
              {site.description}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {accreditations.badges.map((t) => (
                <li
                  key={t}
                  className="border border-edge px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-mist"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <nav className="lg:col-span-2" aria-label="Services">
            <h3 className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-volt">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {serviceTitles.map((l) => (
                <li key={l}>
                  <a href="#services" className="text-mist transition-colors hover:text-volt">{l}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="lg:col-span-3" aria-label="Areas covered">
            <h3 className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-volt">Covered</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
              {coverageAreas.map((a) => (
                <li key={a.area}>
                  <a href="#areas" className="text-mist transition-colors hover:text-volt">{a.area}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h3 className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-volt">The office</h3>
            <address className="mt-4 space-y-2.5 text-sm not-italic text-mist">
              <p>{contact.address.lines[0]}<br />{contact.address.lines[1]}</p>
              <p>
                <a href={contact.phoneHref} className="font-semibold text-snow transition-colors hover:text-volt">
                  {contact.phone}
                </a>{" "}
                <span className="font-mono text-[0.6rem] uppercase tracking-wider">· {hours.emergencyShort}</span>
              </p>
              <p>
                <a href={contact.emailHref} className="transition-colors hover:text-volt">
                  {contact.email}
                </a>
              </p>
            </address>
            <div className="mt-5 border border-edge bg-ink2/60 px-4 py-3">
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-mist">
                {hours.display}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-edge pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-mist/70">
            © {year} {site.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-4 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-mist/70">
            <li><Link href="/blog" className="transition-colors hover:text-volt">Blog</Link></li>
            <li><Link href="/privacy" className="transition-colors hover:text-volt">Privacy</Link></li>
            <li><Link href="/terms" className="transition-colors hover:text-volt">Terms</Link></li>
            <li><Link href="/cookies" className="transition-colors hover:text-volt">Cookies</Link></li>
          </ul>
          <p className="flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-mist/70">
            <IconBolt className="h-3.5 w-3.5 text-volt" /> Wired in {site.depotArea}, naturally
          </p>
        </div>
      </div>
    </footer>
  );
}
