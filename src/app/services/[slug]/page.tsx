import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { services, siteConfig } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { FaqSection } from "@/components/faq-section";
import { CtaBand } from "@/components/cta-band";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { QuoteForm } from "@/components/quote-form";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service not found" };
  return {
    title: service.title,
    description: service.short,
    openGraph: {
      title: `${service.title} | ${siteConfig.shortName}`,
      description: service.short,
      images: [{ url: service.image, width: 1200, height: 675, alt: service.title }],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-5 pt-32 pb-16 sm:px-8 md:pt-40 md:pb-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Reveal>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-[rgba(14,90,93,0.18)] bg-white/60 px-4 py-1.5 text-xs font-semibold text-[#0e5a5d] backdrop-blur-md transition-colors hover:border-[rgba(224,138,60,0.6)]"
              >
                <i className="fa-solid fa-arrow-left text-[10px]" aria-hidden />
                All Services
              </Link>
            </Reveal>
            <Reveal delay={0.08}>
              <span className="icon-badge mt-6 size-14 text-2xl text-[#0e5a5d]">
                <i className={service.faIcon} aria-hidden />
              </span>
              <h1 className="mt-5 font-heading text-3xl leading-tight font-bold tracking-tight text-[#0f2b30] sm:text-4xl md:text-5xl">
                {service.title}
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#547075] sm:text-lg">
                {service.description}
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "btn-gradient h-12 rounded-full px-7 text-[15px] font-semibold",
                  )}
                >
                  Start Your Case
                  <i className="fa-solid fa-arrow-right text-xs" aria-hidden />
                </Link>
                <Link
                  href="/pricing"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "btn-outline-glass h-12 rounded-full px-7 text-[15px] font-semibold",
                  )}
                >
                  See Pricing
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="relative">
            <div className="glass-card overflow-hidden rounded-[2rem] p-2.5">
              <Image
                src={service.image}
                alt={service.title}
                width={1100}
                height={620}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full rounded-[1.6rem] object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features + process */}
      <section className="section-pad pt-4">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="What's Included"
              title="Everything covered, nothing overlooked"
              className="mb-8"
            />
            <Stagger className="space-y-3.5">
              {service.features.map((f) => (
                <StaggerItem key={f}>
                  <div className="glass-card flex items-start gap-4 rounded-2xl px-5 py-4">
                    <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0e5a5d] to-[#e08a3c] text-white">
                      <i className="fa-solid fa-check text-xs" aria-hidden />
                    </span>
                    <p className="text-[15px] font-medium text-[#26474c]">{f}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="How It Works"
              title="A clear process from day one"
              className="mb-8"
            />
            <Stagger className="space-y-5">
              {service.process.map((step, i) => (
                <StaggerItem key={step.title}>
                  <div className="glass-card relative rounded-2xl p-6 pl-8">
                    <span className="absolute -left-4 top-6 flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-[#0e5a5d] to-[#e08a3c] text-sm font-bold text-white shadow-lg">
                      {i + 1}
                    </span>
                    <h3 className="font-heading text-base font-bold text-[#0f2b30]">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#547075]">{step.text}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="section-pad bg-[rgba(14,90,93,0.035)]">
        <SectionHeading
          eyebrow="Keep Exploring"
          title="Related services"
        />
        <div className="mx-auto max-w-6xl">
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services
              .filter((s) => s.slug !== slug)
              .slice(0, 6)
              .map((s) => (
                <StaggerItem key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="glass-card group flex h-full items-center gap-4 rounded-2xl p-5 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                  >
                    <span className="icon-badge size-11 shrink-0 text-lg text-[#0e5a5d]">
                      <i className={s.faIcon} aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-heading text-[15px] font-bold text-[#0f2b30]">{s.title}</h3>
                      <span className="mt-0.5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#0e5a5d]">
                        View service
                        <i className="fa-solid fa-arrow-right text-[10px] transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
          </Stagger>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad">
        <SectionHeading
          eyebrow="FAQ"
          title={`${service.title} — common questions`}
        />
        <FaqSection faqs={service.faqs} />
      </section>

      {/* Quote band */}
      <section className="px-5 pb-20 sm:px-8 md:pb-28">
        <div className="glass-strong mx-auto max-w-5xl rounded-[2rem] p-7 sm:p-12">
          <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
            <div>
              <h2 className="font-heading text-2xl font-bold tracking-tight text-[#0f2b30] sm:text-3xl">
                Get a free quote for{" "}
                <span className="text-gradient">{service.title}</span>
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#547075]">
                Fill in the form and a dedicated consultant will reply within one business day with
                next steps and a transparent fixed-fee quote.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-[#26474c]">
                {["Free 30-minute assessment", "Transparent fixed-fee quote", "No obligation"].map(
                  (t) => (
                    <li key={t} className="flex items-center gap-3">
                      <i className="fa-solid fa-circle-check text-[#0e5a5d]" aria-hidden />
                      {t}
                    </li>
                  ),
                )}
              </ul>
            </div>
            <QuoteForm defaultService={service.slug} />
          </div>
        </div>
      </section>

      <CtaBand
        title="Prefer to talk it through?"
        text="Call us directly and speak with a consultant today — no forms required."
        cta="Call Now"
        href="tel:+15550123456"
      />
    </>
  );
}
