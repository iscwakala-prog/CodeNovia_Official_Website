import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { ctaLabel, navLinks } from "@/lib/data/nav";
import { coreServices } from "@/lib/data/services";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-surface">
      <Container className="grid gap-10 py-14 md:grid-cols-3">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-text-muted">
            Building smarter digital experiences for ambitious teams worldwide.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-display text-sm font-semibold tracking-wider text-white">
            Navigate
          </h3>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-text-muted transition hover:text-accent-bright"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-sm font-semibold tracking-wider text-white">
            Services
          </h3>
          <ul className="space-y-2.5">
            {coreServices.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services#${service.slug}`}
                  className="text-sm text-text-muted transition hover:text-accent-bright"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-6 inline-block font-display text-sm font-semibold text-accent-bright hover:text-white"
          >
            {ctaLabel} →
          </Link>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col gap-2 py-5 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} CodeNovia. All rights reserved.</p>
          <p>Building Tomorrow&apos;s Digital Solutions.</p>
        </Container>
      </div>
    </footer>
  );
}
