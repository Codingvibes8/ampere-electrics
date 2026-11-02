"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { IconBolt, IconPhone, IconPin, Logo } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown } from "lucide-react";
import { contact, coverageAreas, services, site } from "@/siteconfig";

function useScrolled(threshold = 10) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

function useScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return p;
}

export function Nav() {
  const scrolled = useScrolled(14);
  const progress = useScrollProgress();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-edge bg-ink/85 shadow-[0_10px_40px_rgba(4,10,18,.45)] backdrop-blur-md"
          : "border-b border-transparent bg-ink"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="/" aria-label="ElectricJamez — home" className="transition-opacity hover:opacity-85">
          <Logo />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-7 lg:flex">
          {/* Services with Hover Dropdown */}
          <li className="group relative py-2">
            <a
              href="#services"
              className="inline-flex items-center gap-1 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-mist transition-colors group-hover:text-snow"
            >
              Services
              <ChevronDown className="h-3 w-3 text-volt transition-transform duration-200 group-hover:rotate-180" />
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-volt transition-all duration-300 group-hover:w-full" />
            </a>

            {/* Dropdown Menu */}
            <div className="pointer-events-none absolute left-0 top-full pt-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="w-80 border border-edge bg-ink2/95 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.65)] backdrop-blur-md">
                <p className="mb-2 flex items-center gap-1.5 px-2.5 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-volt">
                  <IconBolt className="h-3 w-3" /> Electrical Services
                </p>
                <ul className="space-y-1">
                  {services.map((service) => (
                    <li key={service.id}>
                      <a
                        href="#services"
                        className="block border border-transparent p-2 transition-all hover:border-edge hover:bg-ink hover:text-volt"
                      >
                        <p className="font-semibold text-snow">{service.title}</p>
                        <p className="font-mono text-[0.6rem] text-mist/70">{service.navDescription}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>

          <li>
            <a
              href="#standard"
              className="group relative font-mono text-[0.7rem] uppercase tracking-[0.18em] text-mist transition-colors hover:text-snow"
            >
              The Standard
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-volt transition-all duration-300 group-hover:w-full" />
            </a>
          </li>

          {/* Areas with Hover Dropdown */}
          <li className="group relative py-2">
            <a
              href="#areas"
              className="inline-flex items-center gap-1 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-mist transition-colors group-hover:text-snow"
            >
              Areas
              <ChevronDown className="h-3 w-3 text-volt transition-transform duration-200 group-hover:rotate-180" />
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-volt transition-all duration-300 group-hover:w-full" />
            </a>

            {/* Dropdown Menu */}
            <div className="pointer-events-none absolute -left-12 top-full pt-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="w-84 border border-edge bg-ink2/95 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.65)] backdrop-blur-md">
                <p className="mb-2 flex items-center justify-between px-2.5 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-volt">
                  <span className="flex items-center gap-1.5">
                    <IconPin className="h-3 w-3" /> NW London Coverage
                  </span>
                  <span className="text-[0.55rem] text-mist">Depot {site.depotPostcode}</span>
                </p>
                <div className="grid grid-cols-2 gap-1">
                  {coverageAreas.map((item) => (
                    <a
                      key={item.area}
                      href="#areas"
                      className="flex items-center justify-between border border-transparent px-2.5 py-1.5 transition-all hover:border-edge hover:bg-ink hover:text-volt"
                    >
                      <div>
                        <p className="font-semibold text-snow">{item.area}</p>
                        <p className="font-mono text-[0.58rem] text-mist/70">{item.code}</p>
                      </div>
                      <span className="font-mono text-[0.6rem] font-bold text-volt">{item.mins}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </li>

          <li>
            <a
              href="#reviews"
              className="group relative font-mono text-[0.7rem] uppercase tracking-[0.18em] text-mist transition-colors hover:text-snow"
            >
              Reviews
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-volt transition-all duration-300 group-hover:w-full" />
            </a>
          </li>

          <li>
            <a
              href="#rates"
              className="group relative font-mono text-[0.7rem] uppercase tracking-[0.18em] text-mist transition-colors hover:text-snow"
            >
              Rates
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-volt transition-all duration-300 group-hover:w-full" />
            </a>
          </li>

          <li>
            <a
              href="#faq"
              className="group relative font-mono text-[0.7rem] uppercase tracking-[0.18em] text-mist transition-colors hover:text-snow"
            >
              FAQ
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-volt transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={contact.phoneHref}
            className="group hidden items-center gap-2 font-mono text-sm font-semibold text-snow transition-colors hover:text-volt md:flex"
          >
            <IconPhone className="h-4 w-4 text-volt transition-transform duration-300 group-hover:-rotate-12" />
            {contact.phone}
          </a>
          
          <Button asChild className="hidden sm:inline-flex">
            <a href="#quote">Get a quote</a>
          </Button>

          {/* Mobile Navigation Drawer */}
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Toggle menu"
                className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-edge bg-ink2 lg:hidden"
              >
                <span
                  className={cn(
                    "h-0.5 w-5 bg-snow transition-all duration-300",
                    menuOpen && "translate-y-2 rotate-45"
                  )}
                />
                <span className={cn("h-0.5 w-5 bg-volt transition-all duration-300", menuOpen && "opacity-0")} />
                <span
                  className={cn(
                    "h-0.5 w-5 bg-snow transition-all duration-300",
                    menuOpen && "-translate-y-2 -rotate-45"
                  )}
                />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] overflow-y-auto border-edge bg-ink/95">
              <SheetHeader className="text-left border-b border-edge pb-4">
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <ul className="mt-6 space-y-3">
                {/* Mobile Services Collapsible */}
                <li>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="flex w-full items-center justify-between border border-transparent px-3 py-2 font-display text-xl font-bold uppercase tracking-wide text-snow hover:border-edge hover:bg-ink2 hover:text-volt"
                  >
                    <span>Services</span>
                    <ChevronDown className={cn("h-5 w-5 text-volt transition-transform", mobileServicesOpen && "rotate-180")} />
                  </button>
                  {mobileServicesOpen && (
                    <ul className="ml-4 mt-2 space-y-1.5 border-l border-edge pl-3">
                      {services.map((service) => (
                        <li key={service.id}>
                          <a
                            href="#services"
                            onClick={() => setMenuOpen(false)}
                            className="block py-1 text-xs text-mist hover:text-volt"
                          >
                            {service.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                <li>
                  <a
                    href="#standard"
                    onClick={() => setMenuOpen(false)}
                    className="block border border-transparent px-3 py-2 font-display text-xl font-bold uppercase tracking-wide text-snow hover:border-edge hover:bg-ink2 hover:text-volt"
                  >
                    The Standard
                  </a>
                </li>

                {/* Mobile Areas Collapsible */}
                <li>
                  <button
                    type="button"
                    onClick={() => setMobileAreasOpen((v) => !v)}
                    className="flex w-full items-center justify-between border border-transparent px-3 py-2 font-display text-xl font-bold uppercase tracking-wide text-snow hover:border-edge hover:bg-ink2 hover:text-volt"
                  >
                    <span>Areas</span>
                    <ChevronDown className={cn("h-5 w-5 text-volt transition-transform", mobileAreasOpen && "rotate-180")} />
                  </button>
                  {mobileAreasOpen && (
                    <ul className="ml-4 mt-2 grid grid-cols-2 gap-1 border-l border-edge pl-3">
                      {coverageAreas.map((a) => (
                        <li key={a.area}>
                          <a
                            href="#areas"
                            onClick={() => setMenuOpen(false)}
                            className="block py-1 text-xs text-mist hover:text-volt"
                          >
                            {a.area} <span className="text-[0.6rem] text-volt">({a.code})</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                <li>
                  <a
                    href="#reviews"
                    onClick={() => setMenuOpen(false)}
                    className="block border border-transparent px-3 py-2 font-display text-xl font-bold uppercase tracking-wide text-snow hover:border-edge hover:bg-ink2 hover:text-volt"
                  >
                    Reviews
                  </a>
                </li>

                <li>
                  <a
                    href="#rates"
                    onClick={() => setMenuOpen(false)}
                    className="block border border-transparent px-3 py-2 font-display text-xl font-bold uppercase tracking-wide text-snow hover:border-edge hover:bg-ink2 hover:text-volt"
                  >
                    Rates
                  </a>
                </li>

                <li>
                  <a
                    href="#faq"
                    onClick={() => setMenuOpen(false)}
                    className="block border border-transparent px-3 py-2 font-display text-xl font-bold uppercase tracking-wide text-snow hover:border-edge hover:bg-ink2 hover:text-volt"
                  >
                    FAQ
                  </a>
                </li>

                <li className="pt-4">
                  <Button asChild className="w-full justify-center">
                    <a href={contact.phoneHref} className="flex items-center gap-2">
                      <IconPhone className="h-4 w-4" /> Call {contact.phone}
                    </a>
                  </Button>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* scroll progress */}
      <div className="h-0.5 w-full bg-transparent">
        <div
          className="h-full bg-volt transition-[width] duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </header>
  );
}
