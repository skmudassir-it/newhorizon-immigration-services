import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";
import { PageHero } from "@/components/page-hero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { QuoteForm } from "@/components/quote-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Book a free consultation with NewHorizon Immigration Services. Call, email or send the form — a consultant replies within one business day.",
};

const channels = [
  {
    icon: "fa-solid fa-phone",
    title: "Call us",
    line1: siteConfig.phone,
    line2: siteConfig.hours,
    href: `tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`,
    cta: "Call now",
  },
  {
    icon: "fa-solid fa-envelope",
    title: "Email us",
    line1: siteConfig.email,
    line2: "Replies within 1 business day",
    href: `mailto:${siteConfig.email}`,
    cta: "Send email",
  },
  {
    icon: "fa-solid fa-location-dot",
    title: "Visit us",
    line1: siteConfig.address,
    line2: "Free parking on site",
    href: "https://maps.google.com/?q=480+Horizon+Avenue+Austin+TX",
    cta: "Get directions",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your case"
        description="Free 30-minute consultation. No obligation, no pressure — just clear answers about your options."
        image="/images/cta-contact.jpg"
        imageAlt="The welcoming reception area of NewHorizon's office"
      />

      <section className="section-pad pt-6">
        <div className="mx-auto max-w-6xl">
          <Stagger className="grid gap-5 sm:grid-cols-3">
            {channels.map((c) => (
              <StaggerItem key={c.title}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="glass-card group flex h-full flex-col rounded-3xl p-7 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                >
                  <span className="icon-badge size-12 text-xl text-[#0e5a5d]">
                    <i className={c.icon} aria-hidden />
                  </span>
                  <h2 className="mt-5 font-heading text-lg font-bold text-[#0f2b30]">{c.title}</h2>
                  <p className="mt-1.5 text-sm text-[#26474c]">{c.line1}</p>
                  <p className="text-xs text-[#547075]">{c.line2}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0e5a5d]">
                    {c.cta}
                    <i
                      className="fa-solid fa-arrow-right text-xs transition-transform duration-300 group-hover:translate-x-1.5"
                      aria-hidden
                    />
                  </span>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8">
        <div className="glass-strong mx-auto max-w-5xl rounded-[2rem] p-7 sm:p-12">
          <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
            <div>
              <Reveal>
                <h2 className="font-heading text-2xl font-bold tracking-tight text-[#0f2b30] sm:text-3xl">
                  Request your free consultation
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-[#547075]">
                  Share a few details and a dedicated consultant will get back to you within one
                  business day.
                </p>
                <div className="mt-7 rounded-2xl border border-[rgba(14,90,93,0.12)] bg-[rgba(14,90,93,0.05)] p-5">
                  <p className="text-sm font-semibold text-[#0f2b30]">Prefer video calls?</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#547075]">
                    We consult by video across all time zones. Share your availability in the
                    message and we&apos;ll find a slot.
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-full bg-[rgba(224,138,60,0.15)] text-[#b96f26]">
                    <i className="fa-solid fa-clock text-sm" aria-hidden />
                  </span>
                  <p className="text-sm text-[#547075]">{siteConfig.hours}</p>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <QuoteForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
