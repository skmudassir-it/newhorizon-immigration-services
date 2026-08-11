import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center px-5 pt-32 pb-20 text-center sm:px-8">
      <div className="glass-strong w-full max-w-xl rounded-[2rem] p-10 sm:p-14">
        <div className="flex justify-center">
          <Logo />
        </div>
        <p className="mt-8 font-heading text-7xl font-bold text-gradient sm:text-8xl">404</p>
        <h1 className="mt-4 font-heading text-2xl font-bold tracking-tight text-[#0f2b30] sm:text-3xl">
          This page crossed the wrong border
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-[#547075]">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you
          back on track.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "default" }),
              "btn-gradient h-12 rounded-full px-7 text-[15px] font-semibold",
            )}
          >
            Back to Home
            <i className="fa-solid fa-house text-xs" aria-hidden />
          </Link>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "btn-outline-glass h-12 rounded-full px-7 text-[15px] font-semibold",
            )}
          >
            Contact Us
          </Link>
        </div>
        <p className="mt-8 text-xs text-[#547075]">
          Or call us directly:{" "}
          <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`} className="font-semibold text-[#0e5a5d]">
            {siteConfig.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
