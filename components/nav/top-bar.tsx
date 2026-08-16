"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

function officeOpen(d: Date) {
  const day = d.getDay(); // 0 Sun … 6 Sat
  const mins = d.getHours() * 60 + d.getMinutes();
  return day >= 1 && day <= 6 && mins >= 7 * 60 + 30 && mins < 18 * 60;
}

export function TopBar() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = window.setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(t);
  }, []);
  const open = officeOpen(now);

  return (
    <div className="relative z-50 border-b border-edge bg-ink2">
      <div className="mx-auto flex max-w-7xl items-center justify-center sm:justify-between gap-4 px-4 py-2 font-mono text-[0.55rem] sm:text-[0.65rem] uppercase tracking-[0.16em] text-mist sm:px-6 lg:px-8">
        <p className="hidden truncate md:block">
          NAPIT Approved Contractor · Which? Trusted Trader · BS 7671:2018+A2:2022
        </p>
        <p className="hidden truncate sm:block md:hidden">NAPIT Approved · Which? Trusted Trader</p>
        <p className="flex shrink-0 items-center gap-2">
          <span
            className={cn(
              "dot-ping inline-block h-1.5 w-1.5 shrink-0 rounded-full",
              open ? "bg-go text-go" : "bg-volt text-volt"
            )}
          />
          <span className={cn("truncate", open ? "text-go" : "text-volt")}>
            {open ? "Office open — replies in minutes" : "Out of hours — 24/7 line open"}
          </span>
        </p>
      </div>
    </div>
  );
}
