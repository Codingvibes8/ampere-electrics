import { TopBar } from "@/components/nav/top-bar";
import { Nav } from "@/components/nav/navbar";
import { Hero } from "@/components/hero/hero-section";
import { StatsStrip } from "@/components/sections/stats-strip";
import { Services } from "@/components/sections/services-section";
import { Craft } from "@/components/sections/craft-section";
import { Coverage } from "@/components/sections/coverage-section";
import { Rates } from "@/components/sections/rates-section";
import { Faq } from "@/components/sections/faq-section";
import { Quote } from "@/components/sections/quote-section";
import { Footer } from "@/components/layout/footer";
import { CallFab } from "@/components/layout/call-fab";


export default function Home() {
  return (
    <div className="min-h-screen bg-ink font-body text-snow">
      <a
        href="#services"
        className="sr-only z-[100] bg-volt px-4 py-2 font-mono text-sm font-bold text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <TopBar />
      <Nav />

      <main>
        <Hero />
        <StatsStrip />
        <Services />
        <Craft />
        <Coverage />
        <Rates />
        <Faq />
        <Quote />
      </main>

      <Footer />
      <CallFab />
    </div>
  );
}

