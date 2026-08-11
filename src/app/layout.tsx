import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { Toaster } from "sonner";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import { siteConfig } from "@/lib/data";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackgroundBlobs } from "@/components/background-blobs";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Immigration Consulting`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "immigration consulting",
    "green card",
    "visa application",
    "US citizenship",
    "family-based immigration",
    "employment visas",
    "student visas",
    "adjustment of status",
    "immigration waivers",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Immigration Consulting`,
    description: siteConfig.description,
    images: [{ url: "/images/og.jpg", width: 1200, height: 675, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Immigration Consulting`,
    description: siteConfig.description,
    images: ["/images/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <BackgroundBlobs />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
