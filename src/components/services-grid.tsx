import Link from "next/link";
import { services } from "@/lib/data";
import { Stagger, StaggerItem } from "@/components/motion";

export function ServicesGrid({ limit }: { limit?: number }) {
  const items = limit ? services.slice(0, limit) : services;
  return (
    <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((s) => (
        <StaggerItem key={s.slug}>
          <Link
            href={`/services/${s.slug}`}
            className="glass-card group flex h-full flex-col rounded-3xl p-7 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
          >
            <span className="icon-badge size-12 text-xl text-[#0e5a5d]">
              <i className={s.faIcon} aria-hidden />
            </span>
            <h3 className="mt-5 font-heading text-lg font-bold text-[#0f2b30]">{s.title}</h3>
            <p className="mt-2.5 flex-1 text-sm leading-relaxed text-[#547075]">{s.short}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0e5a5d]">
              Learn more
              <i
                className="fa-solid fa-arrow-right text-xs transition-transform duration-300 group-hover:translate-x-1.5"
                aria-hidden
              />
            </span>
          </Link>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
