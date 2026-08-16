"use client";

import { IconPhone } from "@/components/icons";

export function CallFab() {
  return (
    <a
      href="tel:+447000000000"
      className="fixed bottom-5 right-5 z-[70] flex items-center gap-2.5 border border-volt bg-volt px-5 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.14em] text-ink shadow-[0_16px_44px_rgba(255,179,0,.4)] transition-transform duration-300 hover:-translate-y-1 lg:hidden"
      aria-label="Call the 24/7 emergency line"
    >
      <IconPhone className="h-4 w-4" />
      24/7 call-out
    </a>
  );
}
