"use client";

import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/lib/motion";
import {
  IconArrow, IconBolt, IconCheck, IconClock, IconMail, IconPhone, IconPin,
} from "@/components/icons";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const JOBS = [
  "Emergency / fault right now",
  "Air Conditioning Service",
  "EV Charger Installation",
  "EICR & Safety Certificates",
  "Flood Damage Assessment",
  "Outdoor Lighting & Heating",
  "PAT Testing",
  "Solar Panel Installation",
  "Something else entirely",
];

const URGENCIES = ["Emergency — today", "This week", "Planning ahead"] as const;

type Fields = {
  name: string;
  phone: string;
  postcode: string;
  job: string;
  urgency: string;
  details: string;
};

const EMPTY: Fields = {
  name: "",
  phone: "",
  postcode: "",
  job: "",
  urgency: URGENCIES[1],
  details: "",
};

export function Quote() {
  const [f, setF] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [ref, setRef] = useState("");

  const set = (k: keyof Fields) => (v: string) => {
    setF((prev) => ({ ...prev, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = () => {
    const e: Partial<Record<keyof Fields, string>> = {};
    if (f.name.trim().length < 2) e.name = "We need a name to call you back";
    if (!/^\+?[0-9][0-9\s]{8,14}$/.test(f.phone.trim())) e.phone = "Enter a valid UK phone number";
    if (!/^[A-Z]{1,2}[0-9][A-Z0-9]?\s*[0-9][A-Z]{2}$/i.test(f.postcode.trim()))
      e.postcode = "e.g. HA5 4NR";
    if (!f.job) e.job = "Pick the closest match — we'll sort the details";
    return e;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    setStatus("sending");
    window.setTimeout(() => {
      setRef(`AS-${Math.floor(4822 + Math.random() * 900)}`);
      setStatus("done");
    }, 950);
  };

  const labelCls = "mb-1.5 block font-mono text-[0.62rem] uppercase tracking-[0.18em] text-mist";

  return (
    <section id="quote" className="relative scroll-mt-16 overflow-hidden border-t border-edge">
      {/* backdrop */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="/images/van-night.jpg"
          alt=""
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/92 to-ink" />
        <div className="bg-grid absolute inset-0 opacity-60" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 py-24 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-32">
        {/* left rail */}
        <div className="lg:col-span-5">
          <Reveal>
            <p className="flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-volt">
              <IconBolt className="h-3.5 w-3.5" /> Get a fixed quote
            </p>
            <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[0.95] text-snow sm:text-5xl">
              Tell us what's <span className="text-volt">sparking.</span>
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-mist">
              Two minutes on the form and it lands on the dispatch board next to the
              live jobs. We ring back with a fixed price — usually within the hour
              in working time.
            </p>
          </Reveal>

          <Reveal delay={130}>
            <ul className="mt-10 space-y-5">
              <li>
                <a href="tel:+447000000000" className="group flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center border border-edge bg-ink2 text-volt transition-all duration-300 group-hover:border-volt group-hover:bg-volt group-hover:text-ink">
                    <IconPhone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-mono text-[0.6rem] uppercase tracking-[0.18em] text-mist">
                      24/7 line — a human answers
                    </span>
                    <span className="block text-lg font-semibold text-snow group-hover:text-volt">
                      07000 000 000
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:info@electricjamez.co.uk" className="group flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center border border-edge bg-ink2 text-volt transition-all duration-300 group-hover:border-volt group-hover:bg-volt group-hover:text-ink">
                    <IconMail className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-mono text-[0.6rem] uppercase tracking-[0.18em] text-mist">
                      Quotes & certificates
                    </span>
                    <span className="block text-lg font-semibold text-snow group-hover:text-volt">
                      info@electricjamez.co.uk
                    </span>
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center border border-edge bg-ink2 text-volt">
                  <IconPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-mono text-[0.6rem] uppercase tracking-[0.18em] text-mist">
                    The depot
                  </span>
                  <span className="block text-lg font-semibold text-snow">
                    Cricklewood, NW2, North West London
                  </span>
                </span>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center border border-edge bg-ink2 text-volt">
                  <IconClock className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-mono text-[0.6rem] uppercase tracking-[0.18em] text-mist">
                    Office hours
                  </span>
                  <span className="block text-lg font-semibold text-snow">
                    Mon–Sat 7:30–18:00 · emergencies 24/7
                  </span>
                </span>
              </li>
            </ul>
          </Reveal>
        </div>

        {/* form */}
        <Reveal dir="r" delay={100} className="lg:col-span-7">
          <div className="border border-edge bg-ink2/95 p-6 shadow-[0_36px_90px_rgba(2,8,15,.7)] backdrop-blur-sm sm:p-9">
            {status === "done" ? (
              <div className="flex min-h-[28rem] flex-col items-start justify-center">
                <span className="flex h-14 w-14 items-center justify-center bg-volt text-ink">
                  <IconCheck className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-4xl font-extrabold uppercase leading-none text-snow sm:text-5xl">
                  Logged. <span className="text-volt">We're on it.</span>
                </h3>
                <p className="mt-4 max-w-md leading-relaxed text-mist">
                  Thanks {f.name.split(" ")[0]} — request{" "}
                  <span className="font-mono font-bold text-volt">{ref}</span> just hit
                  the dispatch board. We'll ring{" "}
                  <span className="font-semibold text-snow">{f.phone}</span> within two
                  working hours — usually much sooner.
                </p>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-mist">
                  If it's urgent in the meantime, skip the queue:{" "}
                  <a href="tel:+447000000000" className="font-semibold text-volt underline-offset-4 hover:underline">
                    07000 000 000
                  </a>
                  .
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setF(EMPTY);
                    setStatus("idle");
                  }}
                  className="mt-8 group"
                >
                  Log another job
                  <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <p className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-mist">
                    Quote request — free, no obligation
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-go">
                    <span className="dot-ping h-1.5 w-1.5 rounded-full bg-go" /> dispatch live
                  </span>
                </p>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="q-name" className={labelCls}>Your name *</label>
                    <Input
                      id="q-name"
                      type="text"
                      autoComplete="name"
                      placeholder="e.g. Amara Osei"
                      value={f.name}
                      onChange={(e) => set("name")(e.target.value)}
                      error={!!errors.name}
                    />
                    {errors.name && <p className="mt-1.5 font-mono text-[0.62rem] uppercase tracking-wider text-alarm">⌁ {errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="q-phone" className={labelCls}>Phone *</label>
                    <Input
                      id="q-phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="07… or 020…"
                      value={f.phone}
                      onChange={(e) => set("phone")(e.target.value)}
                      error={!!errors.phone}
                    />
                    {errors.phone && <p className="mt-1.5 font-mono text-[0.62rem] uppercase tracking-wider text-alarm">⌁ {errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="q-postcode" className={labelCls}>Postcode *</label>
                    <Input
                      id="q-postcode"
                      type="text"
                      autoComplete="postal-code"
                      placeholder="HA5 4NR"
                      value={f.postcode}
                      onChange={(e) => set("postcode")(e.target.value)}
                      error={!!errors.postcode}
                      className="uppercase"
                    />
                    {errors.postcode && <p className="mt-1.5 font-mono text-[0.62rem] uppercase tracking-wider text-alarm">⌁ {errors.postcode}</p>}
                  </div>
                  <div>
                    <label htmlFor="q-job" className={labelCls}>What needs doing? *</label>
                    <Select
                      id="q-job"
                      value={f.job}
                      onChange={(e) => set("job")(e.target.value)}
                      error={!!errors.job}
                      className={cn(!f.job && "text-mist/60")}
                    >
                      <option value="" disabled>Choose the closest match</option>
                      {JOBS.map((j) => (
                        <option key={j} value={j} className="bg-ink2 text-snow">{j}</option>
                      ))}
                    </Select>
                    {errors.job && <p className="mt-1.5 font-mono text-[0.62rem] uppercase tracking-wider text-alarm">⌁ {errors.job}</p>}
                  </div>
                </div>

                <fieldset className="mt-5">
                  <legend className={labelCls}>How soon?</legend>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                    {URGENCIES.map((u) => (
                      <button
                        key={u}
                        type="button"
                        onClick={() => set("urgency")(u)}
                        aria-pressed={f.urgency === u}
                        className={cn(
                          "border px-3 py-3 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.1em] transition-all duration-300",
                          f.urgency === u
                            ? "border-volt bg-volt/15 text-volt"
                            : "border-edge text-mist hover:border-mist/60 hover:text-snow"
                        )}
                      >
                        {u}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <div className="mt-5">
                  <label htmlFor="q-details" className={labelCls}>Anything else? (optional)</label>
                  <Textarea
                    id="q-details"
                    rows={3}
                    placeholder="e.g. Board trips every time the kettle and toaster run together…"
                    value={f.details}
                    onChange={(e) => set("details")(e.target.value)}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={status === "sending"}
                  size="lg"
                  className={cn(
                    "group mt-7 w-full py-4.5",
                    status === "sending" && "cursor-wait opacity-80"
                  )}
                >
                  {status === "sending" ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-ink/30 border-t-ink" />
                      Sending to dispatch…
                    </>
                  ) : (
                    <>
                      Send it to the board
                      <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </>
                  )}
                </Button>
                <p className="mt-3.5 text-center font-mono text-[0.62rem] uppercase tracking-[0.14em] text-mist/70">
                  No spam, no selling your number — just a call back from James
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
