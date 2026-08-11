import type { Metadata } from "next";
import { services } from "@/lib/data";
import { PageHero } from "@/components/page-hero";
import { ServicesGrid } from "@/components/services-grid";
import { FaqSection } from "@/components/faq-section";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Immigration Services",
  description:
    "Explore our seven practice areas: visa & green card applications, citizenship, family immigration, employment visas, student visas, adjustment of status, and appeals & waivers.",
};

const pageFaqs = [
  {
    q: "How do I choose the right service?",
    a: "Book a free consultation and we'll map your situation to the right path — many clients discover a faster or cheaper route than they expected.",
  },
  {
    q: "Do you charge for the first consultation?",
    a: "No — your first 30-minute assessment is always free, with no obligation to continue.",
  },
  {
    q: "Can you help with cases that were denied?",
    a: "Absolutely. Our Appeals & Waivers practice exists exactly for that — we review denials and build the strongest comeback strategy.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Immigration services for every stage of your journey"
        description="Seven specialized practice areas, one goal: getting you approved. Explore what we do and how we do it."
        image="/images/consultation.jpg"
        imageAlt="Consultant on a video consultation with a client"
      />

      <section className="section-pad pt-6">
        <div className="mx-auto max-w-6xl">
          <ServicesGrid />
        </div>
      </section>

      <section className="section-pad bg-[rgba(14,90,93,0.035)]">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center font-heading text-3xl font-bold tracking-tight text-[#0f2b30]">
            Common questions about our services
          </h2>
          <FaqSection faqs={pageFaqs} />
        </div>
      </section>

      <div className="pt-16">
        <CtaBand
          title="Not sure which service fits?"
          text="Tell us your story and we'll point you to the right path — free."
          cta="Get a Free Assessment"
        />
      </div>
    </>
  );
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
