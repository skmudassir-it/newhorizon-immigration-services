import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig, homeFaqs } from "@/lib/data";
import { Hero } from "@/components/hero";
import { StatsStrip } from "@/components/stats-strip";
import { SectionHeading } from "@/components/section-heading";
import { FeatureGrid } from "@/components/feature-grid";
import { ServicesGrid } from "@/components/services-grid";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { FaqSection } from "@/components/faq-section";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "NewHorizon Immigration Services — Visa, Green Card & Citizenship Experts",
  description:
    "Trusted immigration consulting since 2012. Family, employment, student visas, green cards, citizenship and waivers — 4,800+ cases approved. Book a free consultation.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteConfig.url}/#business`,
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  foundingDate: String(siteConfig.founded),
  address: {
    "@type": "PostalAddress",
    streetAddress: "480 Horizon Avenue, Suite 210",
    addressLocality: "Austin",
    addressRegion: "TX",
    postalCode: "78701",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 30.2672, longitude: -97.7431 },
  openingHours: "Mo-Fr 09:00-18:00",
  priceRange: "$$",
  image: `${siteConfig.url}/images/og.jpg`,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "680",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />

      <div className="px-5 sm:px-8">
        <StatsStrip />
      </div>

      {/* Why choose us */}
      <section className="section-pad">
        <SectionHeading
          eyebrow="Why NewHorizon"
          title="Immigration guidance you can actually trust"
          description="We combine meticulous case preparation with honest advice — so you always know where you stand and what comes next."
        />
        <div className="mx-auto max-w-6xl">
          <FeatureGrid />
        </div>
      </section>

      {/* Services */}
      <section className="section-pad bg-[rgba(14,90,93,0.035)]">
        <SectionHeading
          eyebrow="Our Services"
          title="Every immigration path, expertly handled"
          description="Seven core practice areas covering the full journey — from your first visa to your final citizenship oath."
        />
        <div className="mx-auto max-w-6xl">
          <ServicesGrid limit={6} />
          <Reveal className="mt-12 text-center">
            <Link
              href="/services"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "btn-outline-glass h-12 rounded-full px-8 text-[15px] font-semibold",
              )}
            >
              View All Services
              <i className="fa-solid fa-arrow-right text-xs" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* About teaser */}
      <section className="section-pad">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative order-2 lg:order-1">
            <div className="glass-card overflow-hidden rounded-[2rem] p-2.5">
              <Image
                src="/images/about.jpg"
                alt="The NewHorizon consulting team collaborating in a bright glass office"
                width={1100}
                height={720}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full rounded-[1.6rem] object-cover"
              />
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="About NewHorizon"
              title="A team that treats your case like family"
              description="Since 2012 we've helped more than 4,800 families, professionals and students cross the finish line — because we prepare every case as if it were our own."
              className="mb-6"
            />
            <Reveal delay={0.1}>
              <ul className="space-y-3.5">
                {[
                  "Accredited consultants with attorney backup on complex cases",
                  "Fixed-fee pricing quoted before we begin",
                  "Direct access to your dedicated case consultant",
                  "Support in English, Spanish, Hindi and Vietnamese",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-[#26474c]">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[rgba(14,90,93,0.12)] text-[#0e5a5d]">
                      <i className="fa-solid fa-check text-[10px]" aria-hidden />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "btn-outline-glass mt-8 h-12 rounded-full px-8 text-[15px] font-semibold",
                )}
              >
                More About Us
                <i className="fa-solid fa-arrow-right text-xs" aria-hidden />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad bg-[rgba(14,90,93,0.035)]">
        <SectionHeading
          eyebrow="Client Stories"
          title="Horizons crossed, futures secured"
          description="Real clients, real approvals. Here's what they say about working with us."
        />
        <div className="mx-auto max-w-6xl">
          <TestimonialSlider />
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions? Answered."
          description="The things every client asks us — before they become clients."
        />
        <FaqSection faqs={homeFaqs} id="faq" />
      </section>

      <CtaBand />
    </>
  );
}
