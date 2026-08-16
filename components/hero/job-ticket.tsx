"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { IconPin } from "@/components/icons";
import { Card, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function JobTicket({ mainsOn, onToggle }: { mainsOn: boolean; onToggle: () => void }) {
  const initial = 23 * 60 + 40;
  const [remaining, setRemaining] = useState(initial);

  useEffect(() => {
    const t = window.setInterval(
      () => setRemaining((r) => (r > 0 ? r - 1 : 0)),
      1000
    );
    return () => clearInterval(t);
  }, []);

  const mm = String(Math.floor(remaining / 60)).padStart(2, "0");
  const ss = String(remaining % 60).padStart(2, "0");
  const progress = Math.round((1 - remaining / initial) * 100);

  return (
    <Card className="relative rotate-1 transition-transform duration-500 hover:rotate-0">
      {/* header */}
      <CardHeader className="flex flex-row items-center justify-between space-y-0 px-5 py-3.5">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-mist">
          Live job ticket <span className="text-volt">·</span> № EJ-4821
        </p>
        <Badge variant={mainsOn ? "success" : "destructive"}>
          <span className={cn("dot-ping h-1.5 w-1.5 rounded-full", mainsOn ? "bg-go" : "bg-alarm")} />
          {mainsOn ? (remaining > 0 ? "En route" : "Arrived") : "Standby"}
        </Badge>
      </CardHeader>

      {/* body */}
      <div className="space-y-4 px-5 py-5">
        <div className="flex items-center gap-3.5">
          <img
            src="/images/tech-portrait.jpg"
            alt="James, senior electrician"
            className="h-12 w-12 border border-edge object-cover grayscale-[35%]"
          />
          <div>
            <p className="text-sm font-semibold text-snow">James</p>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-mist">
              Senior engineer · NAPIT Approved
            </p>
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-x-4 gap-y-3 border-t border-edge pt-4 text-sm">
          <div>
            <dt className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-mist">Job</dt>
            <dd className="mt-0.5 font-medium text-snow">Consumer unit, 18-way</dd>
          </div>
          <div>
            <dt className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-mist">Location</dt>
            <dd className="mt-0.5 flex items-center gap-1.5 font-medium text-snow">
              <IconPin className="h-3.5 w-3.5 text-volt" /> Cricklewood, NW2
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-mist">Booked</dt>
            <dd className="mt-0.5 font-medium text-snow">07:42 today</dd>
          </div>
          <div>
            <dt className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-mist">ETA</dt>
            <dd className={cn("mt-0.5 font-mono text-lg font-bold leading-none", mainsOn ? "text-volt" : "text-mist")}>
              {mainsOn ? (
                <>
                  {mm}:{ss}
                  <span className="blink">_</span>
                </>
              ) : (
                <span className="text-sm text-mist">paused</span>
              )}
            </dd>
          </div>
        </dl>

        <div>
          <div className="flex items-center justify-between font-mono text-[0.6rem] uppercase tracking-[0.18em] text-mist">
            <span>Depot → job</span>
            <span>{mainsOn ? `${progress}%` : "holding"}</span>
          </div>
          <div className="mt-1.5 h-1.5 w-full border border-edge bg-ink">
            <div
              className="h-full bg-volt transition-[width] duration-1000 ease-linear"
              style={{ width: mainsOn ? `${Math.max(progress, 4)}%` : "4%" }}
            />
          </div>
        </div>
      </div>

      {/* mains switch */}
      <div className="flex items-center justify-between border-t border-edge bg-ink px-5 py-4">
        <div>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-mist">Mains supply</p>
          <p
            className={cn(
              "mt-1 font-mono text-[0.68rem] tracking-[0.08em]",
              mainsOn ? "text-go" : "text-alarm"
            )}
          >
            {mainsOn ? "230V · 50Hz · healthy" : "RCD tripped? 45-min fix — call us"}
          </p>
        </div>
        <button
          type="button"
          onClick={onToggle}
          aria-pressed={!mainsOn}
          aria-label={mainsOn ? "Trip the mains switch" : "Restore the mains switch"}
          title="Go on — flip it"
          className={cn(
            "relative h-9 w-[4.2rem] shrink-0 border transition-colors duration-300",
            mainsOn ? "border-go/60 bg-go/15" : "border-alarm/60 bg-alarm/10"
          )}
        >
          <span
            className={cn(
              "absolute top-1 bottom-1 w-7 transition-all duration-300 ease-out",
              mainsOn ? "left-[calc(100%-2.25rem)] bg-volt shadow-[0_0_18px_rgba(255,179,0,.55)]" : "left-1 bg-mist"
            )}
          />
        </button>
      </div>
    </Card>
  );
}
