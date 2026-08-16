import type { Metadata } from "next";
import { Crimson_Pro, JetBrains_Mono, Jost } from "next/font/google";
import "./globals.css";
import { ClientInit } from "@/components/client-init";
import { Toaster } from "sonner";

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
})

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  variable: '--font-crimson-pro',
  display: 'swap',
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
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
  authors: [{ name: "Electric Jamez" }],
  openGraph: {
    title: "Electric Jamez | NAPIT Approved Electrician North West London",
    description:
      "Professional electrical service in NW London. Fixed prices, 24/7 emergency response, 6-year workmanship guarantee.",
    type: "website",
    locale: "en_GB",
    siteName: "Electric Jamez",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${crimsonPro.variable} ${jost.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-ink font-body text-snow antialiased">
        <ClientInit />
        {children}
        <Toaster richColors position="bottom-right" />
        <div className="noise" aria-hidden="true" />
      </body>
    </html>
  );
}
