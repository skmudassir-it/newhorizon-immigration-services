import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-2.5 rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-ring/50", className)}
      aria-label="NewHorizon Immigration Services — home"
    >
      <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#0e5a5d] to-[#e08a3c] text-white shadow-[0_6px_18px_rgba(14,90,93,0.35)]">
        <i className="fa-solid fa-compass-drafting text-lg" aria-hidden />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="font-heading text-base font-bold tracking-tight text-[#0f2b30] sm:text-lg">
          New<span className="text-gradient">Horizon</span>
        </span>
        <span className="text-[10px] font-medium tracking-[0.18em] text-[#0e5a5d] uppercase">
          Immigration Services
        </span>
      </span>
    </Link>
  );
}
