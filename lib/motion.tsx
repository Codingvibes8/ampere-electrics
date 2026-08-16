"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

/* Shared reveal observer — call once from root layout or page. Adds `.in` to `.reveal` nodes. */
export function useRevealObserver() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/* Reveal wrapper — pairs with useRevealObserver */
export function Reveal({
  children,
  delay = 0,
  dir,
  className,
}: {
  children: ReactNode;
  delay?: number;
  dir?: "l" | "r";
  className?: string;
}) {
  return (
    <div
      className={cn("reveal", dir === "l" && "reveal-l", dir === "r" && "reveal-r", className)}
      style={{ "--d": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

/* Count-up number that fires when scrolled into view */
export function CountUp({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1500,
  className,
}: {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const reduced = usePrefersReducedMotion();
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced) {
      setVal(to);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started.current) return;
        started.current = true;
        io.disconnect();
        const t0 = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(to * eased);
          if (p < 1) requestAnimationFrame(tick);
          else setVal(to);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration, reduced]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {val.toLocaleString("en-GB", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

const GLYPHS = "!<>-_\\/[]{}=+*^?#01AmpVW";

/* Scramble-decode rotator */
export function useScramble(words: readonly string[], hold = 3200) {
  const [text, setText] = useState(words[0]);
  const reduced = usePrefersReducedMotion();
  const idx = useRef(0);

  useEffect(() => {
    let timer = 0;
    let frameTimer = 0;

    const next = () => {
      idx.current = (idx.current + 1) % words.length;
      const target = words[idx.current];
      if (reduced) {
        setText(target);
        timer = window.setTimeout(next, hold);
        return;
      }
      let frame = 0;
      const totalFrames = 15;
      const tick = () => {
        frame += 1;
        const out = target
          .split("")
          .map((ch, i) => {
            if (ch === " ") return " ";
            const revealAt = (i / target.length) * totalFrames * 0.75;
            return frame > revealAt + 4
              ? ch
              : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join("");
        setText(out);
        if (frame < totalFrames + 6) {
          frameTimer = window.setTimeout(tick, 42);
        } else {
          setText(target);
          timer = window.setTimeout(next, hold);
        }
      };
      tick();
    };

    timer = window.setTimeout(next, hold);
    return () => {
      clearTimeout(timer);
      clearTimeout(frameTimer);
    };
  }, [words, hold, reduced]);

  return text;
}
