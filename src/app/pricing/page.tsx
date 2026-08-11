import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { pricingPlans } from "@/lib/data";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Stagger, StaggerItem, Reveal } from "@/components/motion";
import { FaqSection } from "@/components/faq-section";
import { QuoteForm } from "@/components/quote-form";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent, fixed-fee immigration consulting. Free first consultation, no hidden charges, quotes before we start.",
};

const pricingFaqs = [
  {
    q: "Are there any hidden fees?",
    a: "No. Your quote covers our full service for that case. Government filing fees are paid directly to USCIS and itemized separately — we never mark them up.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes — Standard and Premium plans can be split into three installments for eligible cases. Ask your consultant for details.",
  },
  {
    q: "What if my case is more complex than expected?",
    a: "If new complications arise mid-case, we quote any additional work transparently before doing it — and you're free to say no.",
  },
  {
    q: "Is the first consultation really free?",
    a: "Yes. 30 minutes, no obligation, no credit card. You get an honest assessment of your options and likely timeline.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Transparent pricing, zero surprises"
        description="Fixed fees quoted before we start. Government filing fees paid directly by you to USCIS — never marked up, never hidden."
        image="/images/pricing.jpg"
        imageAlt="Consultant showing a pricing plan to clients"
      />

      <section className="section-pad pt-6">
        <div className="mx-auto max-w-6xl">
          <Stagger className="grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <StaggerItem key={plan.name} className="h-full">
                <div
                  className={cn(
                    "glass-card relative flex h-full flex-col rounded-[1.8rem] p-8",
                    plan.featured && "ring-2 ring-[rgba(224,138,60,0.5)]",
                  )}
                >
                  {plan.featured && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#0e5a5d] to-[#e08a3c] px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                      Most Popular
                    </span>
                  )}
                  <h2 className="font-heading text-lg font-bold text-[#0f2b30]">{plan.name}</h2>
                  <p className="mt-1 text-sm text-[#547075]">{plan.description}</p>
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="font-heading text-5xl font-bold text-[#0e5a5d]">{plan.price}</span>
                    <span className="text-sm font-medium text-[#547075]">{plan.period}</span>
                  </div>
                  <ul className="mt-7 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-[#26474c]">
                        <i className="fa-solid fa-circle-check mt-0.5 text-[#0e5a5d]" aria-hidden />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={cn(
                      buttonVariants({ variant: "default" }),
                      "mt-8 h-12 w-full rounded-full text-[15px] font-semibold",
                      plan.featured ? "btn-gradient" : "btn-outline-glass",
                    )}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-10 text-center">
            <p className="text-sm text-[#547075]">
              Need something custom?{" "}
              <Link href="/contact" className="font-semibold text-[#0e5a5d] underline-offset-4 hover:underline">
                Ask for a tailored quote
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-[rgba(14,90,93,0.035)]">
        <SectionHeading
          eyebrow="Pricing FAQ"
          title="How our pricing works"
        />
        <FaqSection faqs={pricingFaqs} />
      </section>

      <section className="px-5 pb-20 sm:px-8 md:pb-28">
        <div className="glass-strong mx-auto max-w-5xl rounded-[2rem] p-7 sm:p-12">
          <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
            <div>
              <h2 className="font-heading text-2xl font-bold tracking-tight text-[#0f2b30] sm:text-3xl">
                Get an exact quote for your case
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#547075]">
                Tell us about your situation and we&apos;ll send a fixed-fee quote within one
                business day.
              </p>
              <div className="mt-6 flex items-center gap-4 rounded-2xl bg-[rgba(14,90,93,0.06)] p-4">
                <span className="icon-badge size-11 shrink-0 text-lg text-[#0e5a5d]">
                  <i className="fa-solid fa-shield-halved" aria-hidden />
                </span>
                <p className="text-sm text-[#26474c]">
                  Every quote is fixed for 30 days — what we quote is what you pay.
                </p>
              </div>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>

      <CtaBand
        title="Still comparing options?"
        text="Book a free call and we'll help you compare paths — including the DIY route, honestly."
        cta="Talk to an Expert"
      />
    </>
  );
}
