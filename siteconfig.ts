/**
 * siteconfig.ts — the single source of truth for this site.
 *
 * Every business fact (name, contact details, hours, services, coverage,
 * rates, reviews, posts, SEO copy, URLs) lives here. Components and routes
 * import from this file instead of hard-coding those values, so changing the
 * phone number or adding a service only happens in one place.
 *
 * Only data belongs here — keep JSX, icons and styling in components.
 */

/* -------------------------------------------------------------------------- */
/*                                   Brand                                    */
/* -------------------------------------------------------------------------- */

export const site = {
  name: "Electric Jamez",
  ownerName: "James",
  legalName: "Ampere Electric Jamez",
  fullName: "AmpereElectricJamez",
  shortName: "Electric Jamez",
  tradingSince: 2009,
  yearsExperience: 15,
  jobsCompleted: 2000,
  locale: "en_GB",
  lang: "en-GB",
  /** Canonical production origin — no trailing slash. */
  baseUrl: "https://electric-jamez-website-build.vercel.app",
  serviceArea: "North West London",
  depotArea: "Cricklewood",
  depotPostcode: "NW2",
  tagline:
    "NAPIT approved · Which? Trusted Trader · serving NW London",
  description:
    "NAPIT approved and Which? Trusted Trader electrician serving North West London. Professional, certified, and reliable electrical services for home and business.",
} as const;

/* -------------------------------------------------------------------------- */
/*                                  Contact                                   */
/* -------------------------------------------------------------------------- */

export const contact = {
  phone: "07000 000 000",
  phoneHref: "tel:+447000000000",
  email: "info@electricjamez.co.uk",
  emailHref: "mailto:info@electricjamez.co.uk",
  address: {
    locality: "Cricklewood",
    postcode: "NW2",
    region: "North West London",
    /** Rendered under "The office" in the footer. */
    lines: ["Cricklewood,", "NW2, North West London"],
    /** Single-line version used in the quote panel. */
    oneLine: "Cricklewood, NW2, North West London",
  },
} as const;

/* -------------------------------------------------------------------------- */
/*                               Opening hours                                */
/* -------------------------------------------------------------------------- */

/**
 * Office hours, expressed once. `openDay`/`closeDay` are JS day numbers
 * (0 = Sunday). Times are minutes from midnight.
 */
export const hours = {
  openDay: 1,
  closeDay: 6,
  openMinutes: 7 * 60 + 30,
  closeMinutes: 18 * 60,
  officeDays: "Mon–Sat",
  officeTimes: "7:30–18:00",
  /** e.g. "Mon–Sat 7:30–18:00 · emergencies 24/7" */
  display: "Mon–Sat 7:30–18:00 · emergencies 24/7",
  emergency: "emergencies 24/7",
  emergencyShort: "24/7",
  openNote: "Office open — replies in minutes",
  closedNote: "Out of hours — 24/7 line open",
} as const;

/** True when the office line is staffed (emergencies are always covered). */
export function isOfficeOpen(date: Date = new Date()): boolean {
  const day = date.getDay();
  const minutes = date.getHours() * 60 + date.getMinutes();
  return (
    day >= hours.openDay &&
    day <= hours.closeDay &&
    minutes >= hours.openMinutes &&
    minutes < hours.closeMinutes
  );
}

/* -------------------------------------------------------------------------- */
/*                              Accreditations                                */
/* -------------------------------------------------------------------------- */

export const accreditations = {
  napit: "NAPIT Approved",
  napitLower: "NAPIT approved",
  napitContractor: "NAPIT Approved Contractor",
  whichTrustedTrader: "Which? Trusted Trader",
  partP: "Part P",
  fullyInsured: "Fully Insured",
  wiringRegulations: "BS 7671:2018+A2:2022",
  guaranteeYears: 6,
  /** Short badges shown in the footer. */
  badges: ["NAPIT Approved", "Which? Trusted Trader", "Part P", "Fully Insured"],
  /** Compact line for the top bar. */
  topBarLine: "NAPIT Approved Contractor · Which? Trusted Trader · BS 7671:2018+A2:2022",
  topBarLineShort: "NAPIT Approved · Which? Trusted Trader",
} as const;

/* -------------------------------------------------------------------------- */
/*                                  Services                                  */
/* -------------------------------------------------------------------------- */

export type ServiceId =
  | "air-conditioning"
  | "ev-charger"
  | "eicr"
  | "flood-damage"
  | "outdoor-lighting"
  | "pat-testing"
  | "solar-panels";

export type Service = {
  id: ServiceId;
  n: string;
  title: string;
  /** Short label for navigation. */
  navDescription: string;
  /** Headline "from" price. */
  from: string;
  /** Full copy shown when the service is expanded. */
  copy: string;
  tags: string[];
  /** Wording used in the quote form's job dropdown. */
  jobLabel: string;
};

export const services: Service[] = [
  {
    id: "air-conditioning",
    n: "01",
    title: "Air Conditioning Service",
    navDescription: "Split systems, ducted AC & maintenance",
    from: "from £189",
    copy: "Keep your home or business cool year-round with expert AC installation and servicing. We provide full air conditioning solutions including split system installation, ducted systems, multi-zone setups, and regular maintenance servicing. Our NAPIT-approved engineers ensure every installation meets the highest safety and efficiency standards. We work with leading brands and offer comprehensive aftercare support.",
    tags: ["Split systems", "Ducted AC", "Maintenance plans"],
    jobLabel: "Air Conditioning Service",
  },
  {
    id: "ev-charger",
    n: "02",
    title: "EV Charger Installation",
    navDescription: "Tesla, Ohme & Pod Point certified",
    from: "from £849",
    copy: "Certified EV charger installation for all major brands — from site survey to final sign-off. As certified EV charger installers, we handle everything from site surveys to final commissioning. We install all major brands including Tesla Wall Connectors, Ohme, Pod Point, and Easee. Every installation includes electrical capacity assessment, dedicated circuit installation, and all necessary Part P certification documentation.",
    tags: ["Tesla · Ohme · Pod Point", "7kW / 22kW", "OZEV grant advice"],
    jobLabel: "EV Charger Installation",
  },
  {
    id: "eicr",
    n: "03",
    title: "Electric Safety Certificates",
    navDescription: "Landlord EICR & homebuyer reports",
    from: "from £129",
    copy: "EICR testing for landlords, buyers, and businesses — legally compliant and fully documented. Our Electrical Installation Condition Reports (EICR) meet all current regulations. Essential for landlords (legally required every 5 years), homebuyers, and insurance requirements. We thoroughly test all circuits, identify any defects, and provide clear documentation with remedial recommendations where needed.",
    tags: ["Landlord EICR", "Homebuyer reports", "PDF within 24h"],
    jobLabel: "EICR & Safety Certificates",
  },
  {
    id: "flood-damage",
    n: "04",
    title: "Flood Damage Assessment",
    navDescription: "Emergency isolation & re-certification",
    from: "from £149",
    copy: "Rapid-response electrical assessment and restoration after water or flood damage. Flooding can cause catastrophic damage to electrical systems. Our rapid response team provides thorough assessment of all affected circuits, consumer units, and wiring. We handle isolation, drying assessments, replacement of damaged components, re-testing, and full re-certification to get your property safely back online.",
    tags: ["Emergency response", "Insurance liaison", "Full re-certification"],
    jobLabel: "Flood Damage Assessment",
  },
  {
    id: "outdoor-lighting",
    n: "05",
    title: "Outdoor Lighting & Heating",
    navDescription: "Garden, security & patio heaters",
    from: "from £199",
    copy: "Bespoke outdoor lighting and heating installations — weatherproof and energy-efficient. Create stunning outdoor environments with our bespoke lighting design and installation service. From garden pathway lights and security floodlights to patio heaters and entertaining areas — we design and install complete outdoor electrical solutions that are weatherproof, energy-efficient, and beautifully integrated.",
    tags: ["Garden lighting", "Security lights", "Patio heaters"],
    jobLabel: "Outdoor Lighting & Heating",
  },
  {
    id: "pat-testing",
    n: "06",
    title: "PAT Testing",
    navDescription: "Workplace compliance & digital reports",
    from: "from £65",
    copy: "Full Portable Appliance Testing with pass/fail labels and a digital compliance report. Regular PAT testing is essential for workplace safety and insurance compliance. We test all portable electrical equipment, from computers and kettles to power tools and extension leads. Each appliance receives a pass/fail label, and you receive a comprehensive digital report for your records.",
    tags: ["Workplace compliance", "Digital reports", "Pass/fail labels"],
    jobLabel: "PAT Testing",
  },
  {
    id: "solar-panels",
    n: "07",
    title: "Solar Panel Installation",
    navDescription: "MCS certified PV & battery storage",
    from: "from £4,995",
    copy: "Modern solar panel systems for residential and commercial properties — reduce bills and energy dependence. Harness the power of the sun with our professional solar panel installation service. We design and install complete solar PV systems tailored to your property and energy needs. From site assessment and system sizing to MCS registration and grid connection, we handle every step. Our installations include battery storage options, monitoring systems, and comprehensive warranties for long-term peace of mind.",
    tags: ["MCS certified", "Battery storage", "Grid connection"],
    jobLabel: "Solar Panel Installation",
  },
];

/** Service titles, in order — used by the footer's service nav. */
export const serviceTitles: string[] = services.map((s) => s.title);

/* -------------------------------------------------------------------------- */
/*                                  Coverage                                  */
/* -------------------------------------------------------------------------- */

export type CoverageArea = {
  code: string;
  area: string;
  /** Typical door-to-door response from the NW2 depot. */
  mins: string;
  depot?: boolean;
};

export const coverageAreas: CoverageArea[] = [
  { code: "NW2", area: "Cricklewood", mins: "15 min", depot: true },
  { code: "NW10", area: "Willesden", mins: "18 min" },
  { code: "NW2", area: "Dollis Hill", mins: "12 min" },
  { code: "NW10", area: "Neasden", mins: "20 min" },
  { code: "NW6", area: "Kilburn", mins: "22 min" },
  { code: "NW6", area: "West Hampstead", mins: "25 min" },
  { code: "NW6", area: "Brondesbury", mins: "24 min" },
  { code: "NW10", area: "Kensal Rise", mins: "20 min" },
  { code: "NW3", area: "Hampstead", mins: "20 min" },
  { code: "NW4", area: "Hendon", mins: "18 min" },
  { code: "NW11", area: "Golders Green", mins: "15 min" },
];

/** Uppercase town names for the hero marquee. */
export const coverageMarquee: string[] = coverageAreas
  .slice(0, 8)
  .map((a) => a.area.toUpperCase());

/* -------------------------------------------------------------------------- */
/*                                  Reviews                                   */
/* -------------------------------------------------------------------------- */

export type Testimonial = {
  quote: string;
  name: string;
  meta: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Fantastic service. Reliable, efficient, works quickly and fixed a problem a previous electrician couldn't. Thank you James, we are happy to have a trusted electrician for any future jobs.",
    name: "Jack",
    meta: "Cricklewood, NW2 · socket replacement",
    initials: "JK",
  },
  {
    quote:
      "James is not your average tradesman. He's super professional, pleasant to have around and knows his stuff. He answers emails promptly, turns up exactly when he's promised. Honestly, we can't recommend James highly enough.",
    name: "Claire Chaudoir",
    meta: "Willesden, NW10 · fault finding",
    initials: "CC",
  },
  {
    quote:
      "Reliable, honest and trustworthy. Very satisfied with his work and the advice he gave me was most helpful. Couldn't recommend him more highly.",
    name: "Teresa Courtney",
    meta: "Dollis Hill, NW2 · lighting installation",
    initials: "TC",
  },
  {
    quote:
      "James arrived on time and did a good and quick job replacing a number of double sockets and a light fitting. In and out in 45 minutes.",
    name: "Michael Barker",
    meta: "Neasden, NW10 · sockets & lights",
    initials: "MB",
  },
  {
    quote:
      "James was great. Punctual, friendly, professional and reasonable prices. What more could you ask for? Besides, he's a lovely person!",
    name: "Ornah Levine-Dolberg",
    meta: "Kilburn, NW6 · rewiring",
    initials: "OL",
  },
  {
    quote:
      "James is a reliable, efficient and friendly electrician. He turned up on time and tried his best to solve the problem. Price is fair. Very glad to have found him.",
    name: "Dr W Wang",
    meta: "West Hampstead, NW3 · consumer unit",
    initials: "WW",
  },
];

export const reviewSummary = {
  score: "5.0",
  count: "60+",
  source: "Google",
} as const;

/* -------------------------------------------------------------------------- */
/*                                   Stats                                    */
/* -------------------------------------------------------------------------- */

export type Stat = { to: number; suffix: string; label: string; note: string };

export const stats: Stat[] = [
  {
    to: site.yearsExperience,
    suffix: "+",
    label: "Years Experience",
    note: `since ${site.tradingSince}`,
  },
  {
    to: site.jobsCompleted,
    suffix: "+",
    label: "Jobs Completed",
    note: "across NW London",
  },
  { to: 5, suffix: "★", label: "Rated Service", note: "5 star Google reviews" },
  { to: 8, suffix: "", label: "Areas Covered", note: "NW2, NW3, NW6, NW10, NW11, NW4" },
];

/* -------------------------------------------------------------------------- */
/*                                 Rate card                                  */
/* -------------------------------------------------------------------------- */

export type RateRow = { item: string; note?: string; price: string };
export type RateGroup = { heading: string; rows: RateRow[] };

export const rateCard: RateGroup[] = [
  {
    heading: "Call-outs & labour",
    rows: [
      { item: "Emergency call-out — 24/7, 365", note: "first 30 min of labour included", price: "£89" },
      { item: "Standard visit — Mon–Fri, 8am–6pm", price: "£65" },
      { item: "Evenings & Saturdays", price: "£75" },
      { item: "Hourly rate thereafter", note: "charged in 15-min increments", price: "£55/hr" },
    ],
  },
  {
    heading: "Testing & upgrades",
    rows: [
      { item: "EICR — home up to 3 bedrooms", note: "PDF certificate within 24h", price: "£129" },
      { item: "EICR — 4–5 bed or HMO", price: "from £179" },
      { item: "Consumer unit upgrade — 18-way", note: "dual RCD + Type 2 SPD, notified", price: "from £549" },
      { item: "Fault finding (per hour)", note: "waived if we fix it there and then", price: "£55" },
    ],
  },
  {
    heading: "Installs",
    rows: [
      { item: "EV charger — 7kW, standard install", note: "inc. cable run to 10m & certification", price: "from £849" },
      { item: "Double socket — supplied & fitted", price: "from £95" },
      { item: "Downlights — room of six", note: "fire-rated, dimmable LED", price: "from £240" },
      { item: "Electric shower — like-for-like swap", price: "from £320" },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*                                    FAQ                                     */
/* -------------------------------------------------------------------------- */

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Do I actually need an EICR?",
    a: "If you're a landlord, yes — it's a legal requirement in England, renewed at least every 5 years, and you must supply it to tenants within 28 days. If you're a homeowner, it's not law, but it's the only way to know whether 40-year-old cables are safe behind the walls. We'll tell you honestly if your property doesn't need one yet.",
  },
  {
    q: "Are you properly insured and accredited?",
    a: "Yes. NAPIT Approved and Which? Trusted Trader registered, and we carry £5m public liability plus £10m employer's liability cover. Certificates are available on request before we step foot in your home.",
  },
  {
    q: "What exactly does the emergency call-out cover?",
    a: "£89 gets an engineer to your door 24/7 with the first 30 minutes of diagnosis and labour included. Most common faults — tripping RCDs, dead circuits, burning smells traced — are resolved inside that window. Anything bigger gets a fixed written price before we continue.",
  },
  {
    q: "Do you handle Building Control notifications?",
    a: "Yes — all notifiable work (new circuits, consumer unit changes, work in bathrooms) is registered with Building Control through our NAPIT membership. You receive the certificate PDF the same day and the official notification within 30 days, filed for your records.",
  },
  {
    q: "How do you take payment?",
    a: "Card, bank transfer, or Apple/Google Pay on the van. Landlords and commercial clients get monthly invoicing. We never add card surcharges, and you'll never hear 'cash only, mate' from us.",
  },
  {
    q: "Can you work alongside my builder or kitchen fitter?",
    a: "Happily — most of our work is coordinated with other trades. We'll share drawings, agree first- and second-fix dates by email, and actually turn up on the day we said. Your builder will like us; they usually send their own homes our way.",
  },
];

/* -------------------------------------------------------------------------- */
/*                                Quote form                                  */
/* -------------------------------------------------------------------------- */

/** Extra options that aren't a specific service. */
export const extraJobOptions = {
  emergency: "Emergency / fault right now",
  other: "Something else entirely",
} as const;

/** Job dropdown options, built from the service list so they never drift. */
export const jobOptions: string[] = [
  extraJobOptions.emergency,
  ...services.map((s) => s.jobLabel),
  extraJobOptions.other,
];

/** Reference prefix for quote requests, e.g. AS-5123. */
export const quoteRefPrefix = "AS-";

/* -------------------------------------------------------------------------- */
/*                                   Blog                                     */
/* -------------------------------------------------------------------------- */

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date. */
  date: string;
  readTime: string;
  category: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "ev-charger-installation-guide-london-homeowners",
    title: "The Complete Guide to EV Charger Installation for London Homeowners",
    excerpt:
      "Everything you need to know about installing a home EV charger in London — costs, regulations, grants, and how to choose the right charger for your property.",
    date: "2026-02-10",
    readTime: "8 min read",
    category: "EV Charging",
  },
  {
    slug: "electrical-safety-certificate-eicr-what-landlords-need-to-know",
    title: "Electrical Safety Certificates (EICR): What Every London Landlord Needs to Know",
    excerpt:
      "A landlord's guide to EICR regulations, compliance deadlines, penalties for non-compliance, and how to book an inspection with a qualified electrician.",
    date: "2026-01-25",
    readTime: "6 min read",
    category: "Safety",
  },
  {
    slug: "signs-your-home-needs-rewiring",
    title: "7 Warning Signs Your London Home Needs Rewiring",
    excerpt:
      "Flickering lights, burning smells, and tripping breakers could mean your wiring is outdated or dangerous. Learn the key warning signs and when to call a professional.",
    date: "2026-01-12",
    readTime: "5 min read",
    category: "Home Safety",
  },
];

/* -------------------------------------------------------------------------- */
/*                                    SEO                                     */
/* -------------------------------------------------------------------------- */

export const seo = {
  title: "AmpereElectricJamez | NAPIT Approved Electrician in NW London",
  description:
    "NAPIT approved and Which? Trusted Trader electrician serving NW2, NW3, NW6, NW10, NW11 & NW London. Fixed prices, emergency call-outs, EV chargers, EICR & solar panel installations.",
  keywords: [
    "Electrician Cricklewood",
    "Electrician NW2",
    "NAPIT approved electrician London",
    "Which Trusted Trader Electrician",
    "EV charger installation NW London",
    "EICR safety certificates NW London",
  ],
  author: "Electric Jamez",
  openGraph: {
    title: "Electric Jamez | NAPIT Approved Electrician North West London",
    description:
      "Professional electrical service in NW London. Fixed prices, 24/7 emergency response, 6-year workmanship guarantee.",
    type: "website" as const,
    locale: "en_GB",
    siteName: "Electric Jamez",
  },
  blog: {
    title: "Electrical Tips & Guides | Electric Jamez Blog | North West London",
    description:
      "Expert electrical advice, guides, and tips from Electric Jamez. Learn about EV charger installation, home electrical safety, and energy-saving solutions for your London property.",
    openGraphTitle: "Electric Jamez Blog | Electrical Tips & Guides",
  },
} as const;

/* -------------------------------------------------------------------------- */
/*                              PWA / metadata                                */
/* -------------------------------------------------------------------------- */

export const appearance = {
  themeColor: "#cbd4e8ff",
  backgroundColor: "#ffffff",
  manifestName: "Electric Jamez | NAPIT Approved Electrician NW2",
  manifestShortName: "Electric Jamez",
  manifestDescription:
    "Professional electrical services in North West London (NW2). NAPIT approved & Which? Trusted Trader. EV charger installation, air conditioning, PAT testing & more.",
  icon: {
    src: "/images/EJ-logo.png",
    sizes: "32x32",
    type: "image/png",
  },
} as const;

/* -------------------------------------------------------------------------- */
/*                                Sitemap                                     */
/* -------------------------------------------------------------------------- */

export type SitemapEntry = {
  path: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
};

export const staticRoutes: SitemapEntry[] = [
  { path: "", changeFrequency: "weekly", priority: 1.0 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
  { path: "/privacy", changeFrequency: "monthly", priority: 0.3 },
  { path: "/terms", changeFrequency: "monthly", priority: 0.3 },
  { path: "/cookies", changeFrequency: "monthly", priority: 0.3 },
];

/** Blog posts are always indexed under /blog with a fixed priority. */
export const blogSitemapPriority = 0.6;

/* -------------------------------------------------------------------------- */
/*                                 Legal pages                                */
/* -------------------------------------------------------------------------- */

export const legalPages = {
  privacy: {
    title: "Privacy Policy | Electric Jamez",
    description: "How we collect, use, and protect your personal data at Electric Jamez.",
    lastUpdated: "March 19, 2026",
  },
  terms: {
    title: "Terms of Service | Electric Jamez",
    description: "The legal terms and conditions for our electrical services at Electric Jamez.",
    lastUpdated: "March 19, 2026",
  },
  cookies: {
    title: "Cookie Policy | Electric Jamez",
    description: "Learn about how we use cookies at Electric Jamez to improve your browsing experience.",
    lastUpdated: "March 19, 2026",
  },
} as const;

export type LegalPageId = keyof typeof legalPages;

/* -------------------------------------------------------------------------- */
/*                            Quote notifications                             */
/* -------------------------------------------------------------------------- */

/** Where quote-form submissions are delivered. */
export const quoteDelivery = {
  from: "Ampere Electric <onboarding@resend.dev>",
  to: "wecodeappz@gmail.com",
  supabaseTable: "quotes",
} as const;

/* -------------------------------------------------------------------------- */
/*                              Derived helpers                               */
/* -------------------------------------------------------------------------- */

/** Absolute URL for a site path (leading slash optional). */
export function absoluteUrl(path = ""): string {
  const clean = path.replace(/^\/+/, "");
  return clean ? `${site.baseUrl}/${clean}` : site.baseUrl;
}
