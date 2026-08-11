import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "mb-12 max-w-2xl md:mb-16",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[rgba(14,90,93,0.18)] bg-white/60 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#0e5a5d] uppercase backdrop-blur-md">
          <span className="size-1.5 rounded-full bg-[#e08a3c]" />
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl font-bold tracking-tight text-[#0f2b30] sm:text-4xl md:text-[2.6rem] md:leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-[#547075] sm:text-lg">{description}</p>
      )}
    </Reveal>
  );
}
