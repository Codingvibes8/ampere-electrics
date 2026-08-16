import React from "react";

type P = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true as const,
};

export function BoltMark({ className }: P) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="6" className="fill-ink" />
      <rect width="32" height="32" rx="6" fill="none" stroke="rgba(12,77,162,.6)" />
      <path d="M17.5 4 8 18h6l-1.5 10L22 13h-6l1.5-9z" className="fill-volt" />
    </svg>
  );
}

export function Logo({ className }: P) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <img
        src="/images/EJ-logo.svg"
        alt="Electric Jamez logo"
        className="h-9 w-9 shrink-0 rounded-lg object-contain"
      />
      <span className="leading-none">
        <span className="block font-display text-[1.35rem] font-extrabold uppercase tracking-wide text-snow">
          Electric <span className="text-volt">Jamez</span>
        </span>
        <span className="mt-1 block font-mono text-[0.58rem] uppercase tracking-[0.22em] text-mist">
          NAPIT · NW London
        </span>
      </span>
    </span>
  );
}

export function IconBolt({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M13 2 5 13.5h5L9 22l8-11.5h-5L13 2z" />
    </svg>
  );
}

export function IconMeter({ className }: P) {
  return (
    <svg {...base} className={className}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 7.5h8M8 11h5" />
      <circle cx="12" cy="16.2" r="2.4" />
      <path d="m12 16.2 1.4-1.4" />
    </svg>
  );
}

export function IconBreaker({ className }: P) {
  return (
    <svg {...base} className={className}>
      <rect x="4" y="3.5" width="16" height="17" rx="1.5" />
      <path d="M8.5 7v4M12 7v4M15.5 7v4" />
      <path d="M8.5 14.5h.01M12 14.5h.01M15.5 14.5h.01" strokeWidth="2.4" />
    </svg>
  );
}

export function IconEv({ className }: P) {
  return (
    <svg {...base} className={className}>
      <rect x="4" y="3.5" width="11" height="17" rx="1.5" />
      <path d="M7 7.5h5" />
      <path d="M11.8 10.5 9.6 14h2l-1.6 3.5" />
      <path d="M15 9h2.5a2 2 0 0 1 2 2v4.5a1.5 1.5 0 0 1-3 0V13h-1.5" />
    </svg>
  );
}

export function IconSiren({ className }: P) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3.2 2" />
      <path d="m13 2.5-1 2M3.5 8l2.2.6M20.5 8l-2.2.6" />
    </svg>
  );
}

export function IconBulb({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 1 3.6 10.8c-.8.6-1.1 1.3-1.1 2.2h-5c0-.9-.3-1.6-1.1-2.2A6 6 0 0 1 12 3z" />
      <path d="m12 8-1.2 2.5h2.4L12 13" />
    </svg>
  );
}

export function IconSmart({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="m4 11 8-7 8 7" />
      <path d="M6.5 9.5V20h11V9.5" />
      <path d="M9.8 14.5a3 3 0 0 1 4.4 0M11.2 16.4a1.2 1.2 0 0 1 1.6 0" />
      <path d="M12 18.3h.01" strokeWidth="2.6" />
    </svg>
  );
}

export function IconShield({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3 5 6v5c0 4.4 2.9 8.2 7 10 4.1-1.8 7-5.6 7-10V6l-7-3z" />
      <path d="m8.8 12 2.2 2.2 4.2-4.4" />
    </svg>
  );
}

export function IconCert({ className }: P) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="9" r="5.5" />
      <path d="m9 13.5-1.5 7 4.5-2.5 4.5 2.5-1.5-7" />
      <path d="m12 6.5.9 1.8 2 .3-1.4 1.4.3 2-1.8-1-1.8 1 .3-2-1.4-1.4 2-.3.9-1.8z" strokeWidth="1.2" />
    </svg>
  );
}

export function IconStar({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="m12 2.8 2.8 5.9 6.4.8-4.7 4.4 1.2 6.3L12 17.1l-5.7 3.1 1.2-6.3-4.7-4.4 6.4-.8L12 2.8z" />
    </svg>
  );
}

export function IconPhone({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M5.5 4h3l1.7 4.2-2 1.6a12.5 12.5 0 0 0 5.9 5.9l1.6-2L20 15.4v3.1a1.9 1.9 0 0 1-2.1 1.9C10.5 19.7 4.3 13.5 3.6 6.1A1.9 1.9 0 0 1 5.5 4z" />
    </svg>
  );
}

export function IconPin({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21s-6.5-5.6-6.5-10.4a6.5 6.5 0 0 1 13 0C18.5 15.4 12 21 12 21z" />
      <circle cx="12" cy="10.4" r="2.3" />
    </svg>
  );
}

export function IconArrow({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M4 12h15M13 5.5 19.5 12 13 18.5" />
    </svg>
  );
}

export function IconCheck({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="m4.5 12.5 5 5L19.5 7" />
    </svg>
  );
}

export function IconClock({ className }: P) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function IconWrench({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M14.5 6.5a4 4 0 0 1 5-5l-2.8 2.8.7 2.3 2.3.7L22.5 4.5a4 4 0 0 1-5 5L9 18a2.1 2.1 0 0 1-3-3l8.5-8.5z" />
      <path d="m5 19 0 0" strokeWidth="2.6" />
    </svg>
  );
}

export function IconVan({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M2.5 16V7.5A1.5 1.5 0 0 1 4 6h10a1.5 1.5 0 0 1 1.5 1.5V16" />
      <path d="M15.5 9h3.2L21.5 12v4h-2" />
      <path d="M2.5 16h3M9.5 16h6" />
      <circle cx="7.5" cy="16.5" r="1.8" />
      <circle cx="17" cy="16.5" r="1.8" />
    </svg>
  );
}

export function IconPlus({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function IconWind({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
    </svg>
  );
}

export function IconCar({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

export function IconShieldCheck({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3L5 6v5c0 4.4 2.9 8.2 7 10 4.1-1.8 7-5.6 7-10V6l-7-3z" />
      <path d="m8.8 12 2.2 2.2 4.2-4.4" />
    </svg>
  );
}

export function IconDroplets({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  );
}

export function IconSun({ className }: P) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

export function IconClipboardCheck({ className }: P) {
  return (
    <svg {...base} className={className}>
      <rect x="9" y="5" width="6" height="14" rx="1" />
      <path d="M16 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function IconZap({ className }: P) {
  return (
    <svg {...base} className={className}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

export function IconMail({ className }: P) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}
