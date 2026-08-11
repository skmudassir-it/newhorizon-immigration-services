import Image from "next/image";
import { Reveal } from "@/components/motion";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden px-5 pt-32 pb-14 sm:px-8 md:pt-40 md:pb-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <Reveal>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[rgba(14,90,93,0.18)] bg-white/60 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#0e5a5d] uppercase backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-[#e08a3c]" />
              {eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-heading text-3xl leading-tight font-bold tracking-tight text-[#0f2b30] sm:text-4xl md:text-5xl">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#547075] sm:text-lg">
              {description}
            </p>
          </Reveal>
        </div>
        {image && (
          <Reveal delay={0.2} className="relative hidden lg:block">
            <div className="glass-card overflow-hidden rounded-[1.8rem] p-2">
              <Image
                src={image}
                alt={imageAlt ?? ""}
                width={900}
                height={560}
                sizes="(max-width: 1280px) 40vw, 500px"
                className="h-auto w-full rounded-[1.4rem] object-cover"
              />
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
