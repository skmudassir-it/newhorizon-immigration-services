import { stats } from "@/lib/data";
import { Stagger, StaggerItem } from "@/components/motion";

export function StatsStrip() {
  return (
    <section aria-label="Company statistics" className="px-5 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Stagger className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <StaggerItem key={s.label}>
              <div className="glass-card rounded-3xl px-6 py-7 text-center">
                <p className="font-heading text-3xl font-bold text-[#0e5a5d] sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1.5 text-sm font-medium text-[#547075]">{s.label}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
