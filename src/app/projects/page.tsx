import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { projects, testimonials } from "@/lib/data";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Carousel } from "@/components/carousel";
import { Stagger, StaggerItem, Reveal } from "@/components/motion";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Real approvals from NewHorizon clients — family reunifications, tech-team sponsorships, O-1 victories and more.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Success Stories"
        title="Real clients. Real approvals. Real new horizons."
        description="Every case below started with a free consultation — and ended with a family reunited, a career unblocked, or a new life begun."
        image="/images/project-family-reunion.jpg"
        imageAlt="A family embracing at the airport after their reunion"
      />

      <section className="section-pad pt-6">
        <div className="mx-auto max-w-6xl">
          <Stagger className="grid gap-7 md:grid-cols-2">
            {projects.map((p) => (
              <StaggerItem key={p.slug} className="h-full">
                <article className="glass-card group flex h-full flex-col overflow-hidden rounded-[1.8rem]">
                  <div className="relative overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      width={1100}
                      height={620}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <span className="absolute top-4 left-4 rounded-full border border-white/50 bg-white/70 px-3.5 py-1.5 text-xs font-semibold text-[#0e5a5d] backdrop-blur-md">
                      {p.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h2 className="font-heading text-xl font-bold text-[#0f2b30]">{p.title}</h2>
                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-[#547075]">{p.summary}</p>
                    <dl className="mt-5 grid grid-cols-3 gap-3">
                      {p.metrics.map((m) => (
                        <div key={m.label} className="rounded-xl bg-[rgba(14,90,93,0.06)] px-3 py-2.5 text-center">
                          <dd className="font-heading text-base font-bold text-[#0e5a5d]">{m.value}</dd>
                          <dt className="mt-0.5 text-[10px] font-medium tracking-wide text-[#547075] uppercase">
                            {m.label}
                          </dt>
                        </div>
                      ))}
                    </dl>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* In-depth story */}
      <section className="section-pad bg-[rgba(14,90,93,0.035)]">
        <SectionHeading
          eyebrow="Featured Story"
          title={projects[0].title}
          description={projects[0].category}
        />
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="glass-card overflow-hidden rounded-[2rem]">
              <Image
                src={projects[0].image}
                alt={projects[0].title}
                width={1400}
                height={700}
                sizes="100vw"
                className="aspect-[2/1] w-full object-cover"
              />
              <div className="space-y-4 p-8 sm:p-10">
                {projects[0].story.map((para) => (
                  <p key={para.slice(0, 24)} className="text-[15px] leading-relaxed text-[#547075]">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Client words carousel */}
      <section className="section-pad">
        <SectionHeading
          eyebrow="In Their Words"
          title="What approved clients say"
        />
        <div className="mx-auto max-w-6xl">
          <Carousel>
            {testimonials.map((t) => (
              <div key={t.name} className="embla__slide embla__slide--half embla__slide--third">
                <figure className="glass-card flex h-full flex-col rounded-3xl p-8">
                  <div className="flex gap-1 text-[#e08a3c]" aria-label="5 star rating">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <i key={i} className="fa-solid fa-star text-sm" aria-hidden />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-[#26474c]">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3.5 border-t border-[rgba(14,90,93,0.1)] pt-5">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0e5a5d] to-[#e08a3c] text-sm font-bold text-white">
                      {t.initials}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-[#0f2b30]">{t.name}</p>
                      <p className="text-xs text-[#547075]">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      <CtaBand
        title="Your success story is next"
        text="The next case we celebrate could be yours. Start with a free consultation."
        cta="Start My Story"
      />
    </>
  );
}
