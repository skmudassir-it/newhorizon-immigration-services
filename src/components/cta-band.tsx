import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion";

export function CtaBand({
  title = "Ready to start your journey?",
  text = "Book a free 30-minute consultation and get an honest assessment of your options — no obligation, no pressure.",
  cta = "Book a Free Consultation",
  href = "/contact",
}: {
  title?: string;
  text?: string;
  cta?: string;
  href?: string;
}) {
  return (
    <section className="px-5 pb-20 sm:px-8 md:pb-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem]">
            <Image
              src="/images/cta-contact.jpg"
              alt=""
              aria-hidden
              width={1600}
              height={640}
              sizes="100vw"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,52,55,0.88)] via-[rgba(14,90,93,0.72)] to-[rgba(224,138,60,0.55)]" aria-hidden />
            <div className="relative px-7 py-16 text-center sm:px-14 md:py-20">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
                {text}
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href={href}
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "h-12 rounded-full bg-white px-8 text-[15px] font-semibold text-[#0e5a5d] shadow-xl transition-all hover:-translate-y-0.5 hover:bg-white hover:brightness-95",
                  )}
                >
                  {cta}
                  <i className="fa-solid fa-arrow-right text-xs" aria-hidden />
                </Link>
                <Link
                  href="tel:+15550123456"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "h-12 rounded-full border-white/50 bg-white/10 px-8 text-[15px] font-semibold text-white backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-white hover:bg-white/20",
                  )}
                >
                  <i className="fa-solid fa-phone text-xs" aria-hidden />
                  +1 (555) 012-3456
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
