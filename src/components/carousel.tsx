"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Carousel({
  children,
  slideClassName,
  loop = true,
  className,
  controls = true,
}: {
  children: ReactNode;
  slideClassName?: string;
  loop?: boolean;
  className?: string;
  controls?: boolean;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className={cn("embla", className)}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">{children}</div>
      </div>
      {controls && (
        <div className="mt-8 flex items-center justify-center gap-5">
          <div className="flex items-center gap-2">
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => emblaApi?.scrollTo(i)}
                className={cn(
                  "embla__dot",
                  i === selectedIndex && "embla__dot--selected",
                )}
              />
            ))}
          </div>
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!loop && !canPrev}
              className="embla__button"
            >
              <i className="fa-solid fa-arrow-left text-sm" aria-hidden />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => emblaApi?.scrollNext()}
              disabled={!loop && !canNext}
              className="embla__button"
            >
              <i className="fa-solid fa-arrow-right text-sm" aria-hidden />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
