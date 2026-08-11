import { testimonials } from "@/lib/data";
import { Carousel } from "@/components/carousel";
import { cn } from "@/lib/utils";

export function TestimonialSlider() {
  return (
    <Carousel>
      {testimonials.map((t) => (
        <div key={t.name} className={cn("embla__slide embla__slide--half embla__slide--third")}>
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
  );
}
