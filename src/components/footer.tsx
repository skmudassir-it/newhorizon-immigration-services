import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { Logo } from "@/components/logo";

const columns = [
  {
    title: "Explore",
    links: [
      { label: "Services", href: "/services" },
      { label: "About Us", href: "/about" },
      { label: "Success Stories", href: "/projects" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Visa & Green Card", href: "/services/visa-green-card-applications" },
      { label: "Citizenship", href: "/services/citizenship-naturalization" },
      { label: "Family Immigration", href: "/services/family-based-immigration" },
      { label: "Employment Visas", href: "/services/employment-based-visas" },
      { label: "Student Visas", href: "/services/student-visas" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative z-10 px-3 pb-6 sm:px-6">
      <div className="glass-strong mx-auto max-w-6xl rounded-3xl px-6 py-12 sm:px-10">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#547075]">
              Trusted immigration consulting since {siteConfig.founded}. We guide families,
              professionals and students across every horizon.
            </p>
            <div className="mt-5 flex gap-2.5">
              {siteConfig.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex size-11 items-center justify-center rounded-full border border-[rgba(14,90,93,0.18)] bg-white/60 text-[#0e5a5d] transition-all hover:-translate-y-0.5 hover:border-[rgba(224,138,60,0.6)] hover:bg-white focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                >
                  <i className={`${s.icon} text-base`} aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="font-heading text-sm font-semibold tracking-wide text-[#0f2b30] uppercase">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-[#547075] transition-colors hover:text-[#0e5a5d] focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none rounded-sm"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="font-heading text-sm font-semibold tracking-wide text-[#0f2b30] uppercase">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3.5 text-sm text-[#547075]">
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-location-dot mt-1 text-[#0e5a5d]" aria-hidden />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-phone text-[#0e5a5d]" aria-hidden />
                <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`} className="hover:text-[#0e5a5d]">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-envelope text-[#0e5a5d]" aria-hidden />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[#0e5a5d]">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-clock text-[#0e5a5d]" aria-hidden />
                <span>{siteConfig.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[rgba(14,90,93,0.12)] pt-6 sm:flex-row">
          <p className="text-xs text-[#547075]">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-[#547075]">
            Immigration consulting services — not a substitute for legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
