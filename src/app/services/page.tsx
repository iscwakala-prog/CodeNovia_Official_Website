import type { Metadata } from "next";
import { ArrowRight, Code2 } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { ServicesHero } from "@/components/services/ServicesHero";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { serviceIcons } from "@/lib/service-icons";
import { ctaLabel } from "@/lib/data/nav";
import { serviceCategories } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "CodeNovia services—SaaS engineering, AI automation, product design, cloud, and growth strategy.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />

      {serviceCategories.map((category, catIndex) => (
        <Section
          key={category.id}
          id={category.id}
          className={catIndex % 2 === 1 ? "bg-bg-surface/40" : ""}
        >
          <Reveal>
            <div className="mb-10 flex flex-col gap-3 border-l-2 border-accent/60 pl-5 sm:mb-12">
              <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {category.title}
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-text-muted sm:text-base">
                {category.summary}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {category.services.map((service, i) => {
              const Icon = serviceIcons[service.slug] ?? Code2;
              return (
                <Reveal key={service.slug} delay={i * 0.05}>
                  <article
                    id={service.slug}
                    className="group scroll-mt-28 relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-bg-elevated/35 p-6 transition duration-300 hover:border-accent/45 hover:bg-bg-elevated/80"
                  >
                    <span
                      className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 transition group-hover:opacity-100"
                      aria-hidden
                    />
                    <div className="mb-5 flex items-start justify-between gap-3">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent-bright transition group-hover:bg-accent/25 group-hover:shadow-[0_0_24px_rgba(30,155,255,0.3)]">
                        <Icon size={22} />
                      </span>
                      {service.core && (
                        <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-display text-[10px] font-semibold tracking-wider text-accent-bright uppercase">
                          Core
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
                      {service.description}
                    </p>
                    <Link
                      href="/contact"
                      className="mt-5 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-accent-bright transition hover:gap-2.5 hover:text-white"
                    >
                      {ctaLabel}
                      <ArrowRight size={14} />
                    </Link>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Section>
      ))}

      <Section className="pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-elevated px-6 py-14 text-center sm:px-10">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,155,255,0.18),transparent_65%)]"
              aria-hidden
            />
            <div className="relative">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Need a custom engagement?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-text-muted">
                Tell us your goals—we&apos;ll assemble the right mix of
                engineering, AI, design, and growth.
              </p>
              <div className="mt-8 flex justify-center">
                <Button href="/contact" size="lg">
                  {ctaLabel}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
