import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { caseStudies } from "@/lib/data/caseStudies";

export function PortfolioPreview() {
  const featured = caseStudies.filter((s) => s.featured).slice(0, 4);

  return (
    <Section className="bg-bg-surface/40">
      <Reveal>
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="mb-3 font-display text-xs font-semibold tracking-[0.2em] text-accent-bright uppercase">
              Case Studies
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Products engineered for modern businesses
            </h2>
          </div>
          <Button href="/portfolio" variant="outline">
            View Portfolio
          </Button>
        </div>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2">
        {featured.map((study, i) => (
          <Reveal key={study.slug} delay={i * 0.05}>
            <Link
              href={`/portfolio/${study.slug}`}
              className="group relative flex min-h-[200px] flex-col justify-end overflow-hidden rounded-xl border border-border bg-gradient-to-br from-bg-elevated to-bg-deep p-6 transition hover:border-accent/40"
            >
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-accent/10 blur-2xl transition group-hover:bg-accent/20"
                aria-hidden
              />
              <p className="relative text-xs font-medium tracking-wide text-accent-bright">
                {study.industry}
              </p>
              <div className="relative mt-2 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">
                    {study.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-muted">{study.tagline}</p>
                </div>
                <ArrowUpRight
                  className="mt-1 shrink-0 text-text-muted transition group-hover:text-accent-bright"
                  size={20}
                />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
