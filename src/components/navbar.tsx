"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/data";
import { Logo } from "@/components/logo";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav
        aria-label="Main navigation"
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full py-2 pr-2 pl-5 transition-all duration-300",
          scrolled ? "glass-nav-scrolled" : "glass-nav",
        )}
      >
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium text-[#26474c] transition-colors hover:bg-[rgba(14,90,93,0.08)] hover:text-[#0e5a5d] focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none",
                isActive(item.href) &&
                  "bg-[rgba(14,90,93,0.1)] text-[#0e5a5d] font-semibold",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="btn-gradient hidden h-11 items-center gap-2 rounded-full px-6 text-sm font-semibold focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none sm:inline-flex"
          >
            <i className="fa-solid fa-comments text-xs" aria-hidden />
            Free Consultation
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="Open menu"
              className="inline-flex size-11 items-center justify-center rounded-full border border-[rgba(14,90,93,0.2)] bg-white/70 text-[#0e5a5d] backdrop-blur-md transition-colors hover:border-[rgba(224,138,60,0.6)] focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none lg:hidden"
            >
              <i className="fa-solid fa-bars-staggered text-lg" aria-hidden />
            </SheetTrigger>
            <SheetContent side="right" className="w-80 gap-0 border-l border-[rgba(14,90,93,0.14)] bg-white/85 p-0 backdrop-blur-2xl">
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <div className="flex items-center justify-between border-b border-[rgba(14,90,93,0.1)] px-5 py-4">
                <Logo />
              </div>
              <div className="flex flex-col gap-1 p-4">
                {siteConfig.nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "flex min-h-11 items-center justify-between rounded-xl px-4 text-[15px] font-medium text-[#26474c] transition-colors hover:bg-[rgba(14,90,93,0.08)] hover:text-[#0e5a5d] focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none",
                      isActive(item.href) && "bg-[rgba(14,90,93,0.1)] font-semibold text-[#0e5a5d]",
                    )}
                  >
                    {item.label}
                    <i className="fa-solid fa-angle-right text-xs opacity-40" aria-hidden />
                  </Link>
                ))}
              </div>
              <div className="mt-auto border-t border-[rgba(14,90,93,0.1)] p-4">
                <Link
                  href="/contact"
                  className="btn-gradient flex h-12 items-center justify-center gap-2 rounded-full text-sm font-semibold focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                >
                  <i className="fa-solid fa-comments text-xs" aria-hidden />
                  Book a Free Consultation
                </Link>
                <p className="mt-4 text-center text-xs text-[#547075]">{siteConfig.phone}</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
