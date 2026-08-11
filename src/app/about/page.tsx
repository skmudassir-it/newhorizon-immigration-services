import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/data";
import { PageHero } from "@/components/page-hero";
import { StatsStrip } from "@/components/stats-strip";
import { SectionHeading } from "@/components/section-heading";
import { Stagger, StaggerItem, Reveal } from "@/components/motion";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Since 2012, NewHorizon Immigration Services has helped 4,800+ families, professionals and students succeed. Meet the team behind the approvals.",
};

const values = [
  {
    icon: "fa-solid fa-heart",
    title: "Compassion",
    text: "Every case is a person with a story. We treat yours with the empathy it deserves.",
  },
  {
    icon: "fa-solid fa-gavel",
    title: "Integrity",
    text: "Honest eligibility assessments and no promises we can't keep — ever.",
  },
  {
    icon: "fa-solid fa-microscope",
    title: "Precision",
    text: "Meticulous filings built on current regulations, updated weekly.",
  },
  {
    icon: "fa-solid fa-handshake",
    title: "Partnership",
    text: "You're never alone in the process — we're with you from first call to final approval.",
  },
];

const timeline = [
  { year: "2012", text: "NewHorizon opens in Austin with a single consultant and a simple promise: honest help." },
  { year: "2015", text: "Our 500th case approved — and our first waiver victory for a family separated by a removal order." },
  { year: "2018", text: "Expanded to 40+ countries served with multilingual support in four languages." },
  { year: "2021", text: "Launched attorney-partnership program, adding expert review on every complex case." },
  { year: "2024", text: "4,800+ cases approved, 97% success rate, and a 4.9/5 average across 680+ reviews." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="The people who fight for your new horizon"
        description={`Since ${siteConfig.founded}, we've helped more than 4,800 clients cross borders and finish lines — with honesty, precision and heart.`}
        image="/images/about.jpg"
        imageAlt="The NewHorizon team collaborating in a bright office"
      />

      <div className="px-5 sm:px-8">
        <StatsStrip />
      </div>

      {/* Story */}
      <section className="section-pad">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="Born from a denied application"
              className="mb-6"
            />
            <Reveal delay={0.1}>
              <div className="space-y-4 text-[15px] leading-relaxed text-[#547075]">
                <p>
                  NewHorizon began in 2012 when our founder watched a close friend&apos;s family
                  visa application get denied over a technicality — a missing signature on page 14
                  of a 60-page form. No one had bothered to check.
                </p>
                <p>
                  That day, we made a promise: every NewHorizon case gets prepared as if it were
                  our own family&apos;s future riding on it. Page by page, line by line, deadline
                  by deadline.
                </p>
                <p>
                  Thirteen years later, that promise has carried 4,800+ families, engineers,
                  founders and students across their own horizons — and it&apos;s still the first
                  thing every new consultant learns.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="relative">
            <div className="glass-card overflow-hidden rounded-[2rem] p-2.5">
              <Image
                src="/images/consultation.jpg"
                alt="A NewHorizon consultant on a video call with a client"
                width={1100}
                height={720}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full rounded-[1.6rem] object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-[rgba(14,90,93,0.035)]">
        <SectionHeading
          eyebrow="Our Values"
          title="What we stand for"
          description="Four principles guide every form we file and every call we take."
        />
        <div className="mx-auto max-w-6xl">
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="glass-card h-full rounded-3xl p-7 text-center">
                  <span className="icon-badge mx-auto size-12 text-xl text-[#0e5a5d]">
                    <i className={v.icon} aria-hidden />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-[#0f2b30]">{v.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#547075]">{v.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad">
        <SectionHeading
          eyebrow="Milestones"
          title="A decade of delivering horizons"
        />
        <div className="mx-auto max-w-3xl">
          <Stagger className="relative space-y-8 border-l-2 border-[rgba(14,90,93,0.15)] pl-8">
            {timeline.map((t) => (
              <StaggerItem key={t.year}>
                <div className="relative">
                  <span className="absolute -left-[2.55rem] top-1 size-4 rounded-full border-2 border-white bg-gradient-to-br from-[#0e5a5d] to-[#e08a3c] shadow" aria-hidden />
                  <div className="glass-card rounded-2xl p-5">
                    <p className="font-heading text-lg font-bold text-[#0e5a5d]">{t.year}</p>
                    <p className="mt-1 text-sm leading-relaxed text-[#547075]">{t.text}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <div className="px-5 sm:px-8">
        <div className="mx-auto mb-20 max-w-6xl text-center">
          <Reveal>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-[#0f2b30] sm:text-3xl">
              Work with a team that&apos;s on your side
            </h2>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "default" }),
                "btn-gradient mt-7 inline-flex h-12 rounded-full px-8 text-[15px] font-semibold",
              )}
            >
              Meet Your Consultant
              <i className="fa-solid fa-arrow-right text-xs" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </div>

      <CtaBand />
    </>
  );
}
