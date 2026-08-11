import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pt-32 pb-20 sm:px-8 md:pt-40 md:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <Reveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[rgba(14,90,93,0.18)] bg-white/60 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#0e5a5d] uppercase backdrop-blur-md">
              <i className="fa-solid fa-certificate text-[#e08a3c]" aria-hidden />
              Trusted since 2012 · 4,800+ cases approved
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-heading text-4xl leading-[1.12] font-bold tracking-tight text-[#0f2b30] sm:text-5xl md:text-6xl">
              Your journey to a new <span className="text-gradient">horizon</span> starts here
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#547075] sm:text-lg">
              From first visa to final citizenship — NewHorizon Immigration Services guides
              families, professionals and students through every step with clarity, honesty
              and care.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "btn-gradient h-12 rounded-full px-7 text-[15px] font-semibold",
                )}
              >
                Book a Free Consultation
                <i className="fa-solid fa-arrow-right text-xs" aria-hidden />
              </Link>
              <Link
                href="/services"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "btn-outline-glass h-12 rounded-full px-7 text-[15px] font-semibold",
                )}
              >
                Explore Services
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-4">
              {[
                { v: "97%", l: "Success rate" },
                { v: "40+", l: "Countries" },
                { v: "12+", l: "Years" },
              ].map((s) => (
                <div key={s.l} className="glass-card rounded-2xl px-4 py-3.5 text-center">
                  <dt className="sr-only">{s.l}</dt>
                  <dd className="font-heading text-2xl font-bold text-[#0e5a5d]">{s.v}</dd>
                  <dd className="mt-0.5 text-xs font-medium text-[#547075]">{s.l}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative">
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(circle_at_70%_20%,rgba(224,138,60,0.25),transparent_60%)] blur-2xl" aria-hidden />
            <div className="glass-card relative overflow-hidden rounded-[2rem] p-2.5">
              <Image
                src="/images/hero.jpg"
                alt="Consultants at NewHorizon welcoming a family in a bright modern office"
                width={1200}
                height={675}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full rounded-[1.6rem] object-cover"
              />
            </div>
            <div className="glass-strong absolute -bottom-6 -left-3 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl sm:-left-6">
              <span className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-[#0e5a5d] to-[#e08a3c] text-white">
                <i className="fa-solid fa-check text-sm" aria-hidden />
              </span>
              <div>
                <p className="text-sm font-bold text-[#0f2b30]">Case Approved</p>
                <p className="text-xs text-[#547075]">Citizenship · Austin, TX</p>
              </div>
            </div>
            <div className="glass-strong absolute -top-5 -right-2 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl sm:-right-4">
              <span className="flex size-10 items-center justify-center rounded-full bg-[rgba(224,138,60,0.15)] text-[#b96f26]">
                <i className="fa-solid fa-star text-sm" aria-hidden />
              </span>
              <div>
                <p className="text-sm font-bold text-[#0f2b30]">4.9/5 Rating</p>
                <p className="text-xs text-[#547075]">680+ client reviews</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
