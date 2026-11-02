"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { accreditations, hours, isOfficeOpen } from "@/siteconfig";

export function TopBar() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = window.setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(t);
  }, []);
  const open = isOfficeOpen(now);

  return (
    <div className="relative z-50 border-b border-edge bg-ink2">
      <div className="mx-auto flex max-w-7xl items-center justify-center sm:justify-between gap-4 px-4 py-2 font-mono text-[0.55rem] sm:text-[0.65rem] uppercase tracking-[0.16em] text-mist sm:px-6 lg:px-8">
        <p className="hidden truncate md:block">
          {accreditations.topBarLine}
        </p>
        <p className="hidden truncate sm:block md:hidden">{accreditations.topBarLineShort}</p>
        <p className="flex shrink-0 items-center gap-2">
          <span
            className={cn(
              "dot-ping inline-block h-1.5 w-1.5 shrink-0 rounded-full",
              open ? "bg-go text-go" : "bg-volt text-volt"
            )}
          />
          <span className={cn("truncate", open ? "text-go" : "text-volt")}>
            {open ? hours.openNote : hours.closedNote}
          </span>
        </p>
      </div>
    </div>
  );
}
