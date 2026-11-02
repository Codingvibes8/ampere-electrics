import type { Metadata } from "next";
import { Crimson_Pro, JetBrains_Mono, Jost } from "next/font/google";
import "./globals.css";
import { ClientInit } from "@/components/client-init";
import { Toaster } from "sonner";
import { seo } from "@/siteconfig";

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
  title: seo.title,
  description: seo.description,
  keywords: [...seo.keywords],
  authors: [{ name: seo.author }],
  openGraph: {
    title: seo.openGraph.title,
    description: seo.openGraph.description,
    type: seo.openGraph.type,
    locale: seo.openGraph.locale,
    siteName: seo.openGraph.siteName,
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
      className={`${crimsonPro.variable} ${jost.variable} ${jetbrainsMono.variable} scroll-smooth overflow-x-hidden`}
    >
      <body className="min-h-screen overflow-x-hidden bg-ink font-body text-snow antialiased">
        <ClientInit />
        {children}
        <Toaster richColors position="bottom-right" />
        <div className="noise" aria-hidden="true" />
      </body>
    </html>
  );
}
