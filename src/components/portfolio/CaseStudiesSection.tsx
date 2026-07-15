import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CaseStudyVisual } from "@/components/portfolio/CaseStudyVisual";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { caseStudies, type CaseStudy } from "@/lib/data/caseStudies";

function CaseStudyCard({
  study,
  index,
  featured,
}: {
  study: CaseStudy;
  index: number;
  featured?: boolean;
}) {
  return (
    <Reveal delay={Math.min(index * 0.05, 0.3)}>
      <article
        id={study.slug}
        className={`group scroll-mt-28 overflow-hidden rounded-2xl border border-border bg-bg-elevated/40 transition duration-300 hover:border-accent/40 ${
          featured ? "lg:grid lg:grid-cols-2" : ""
        }`}
      >
        <CaseStudyVisual
          study={study}
          className={
            featured
              ? "min-h-[260px] lg:min-h-full lg:h-full"
              : "min-h-[220px]"
          }
          priority={index < 2 && featured}
        />
        <div className="flex flex-col p-6 sm:p-8">
          <span className="inline-flex w-fit rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-display text-[10px] font-semibold tracking-wider text-accent-bright uppercase">
            {study.industry}
          </span>
          <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-white">
            {study.title}
          </h3>
          <p className="mt-2 font-display text-sm font-medium text-accent-bright">
            {study.tagline}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-text-muted">
            {study.description}
          </p>

          <div className="mt-5">
            <p className="mb-2 font-display text-xs font-semibold tracking-wide text-white uppercase">
              Key capabilities
            </p>
            <ul className="grid gap-1.5 sm:grid-cols-2">
              {study.features.slice(0, featured ? 8 : 6).map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-text-muted"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-bright" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <p className="mb-2 font-display text-xs font-semibold tracking-wide text-white uppercase">
              Technology
            </p>
            <div className="flex flex-wrap gap-2">
              {study.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border bg-bg-deep/60 px-2.5 py-1 font-display text-xs text-text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-auto flex flex-wrap gap-3 pt-6">
            <Button href={`/portfolio/${study.slug}`} size="md">
              View Case Study
            </Button>
            <Button href="/contact" variant="outline" size="md">
              Discuss Similar Work
            </Button>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function CaseStudiesSection() {
  const featured = caseStudies.filter((s) => s.featured);
  const more = caseStudies.filter((s) => !s.featured);

  return (
    <Section id="case-studies">
      <Reveal>
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 font-display text-xs font-semibold tracking-[0.2em] text-accent-bright uppercase">
            Case Studies
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Products and platforms engineered for scale
          </h2>
          <p className="mt-4 text-text-muted">
            Selected engagements across industries—each designed as production
            software, not demos.
          </p>
        </div>
      </Reveal>

      <div className="space-y-8">
        {featured.map((study, i) => (
          <CaseStudyCard key={study.slug} study={study} index={i} featured />
        ))}
      </div>

      <Reveal className="mt-16 mb-8">
        <h3 className="font-display text-2xl font-bold text-white">
          More solutions across industries
        </h3>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-2">
        {more.map((study, i) => (
          <CaseStudyCard key={study.slug} study={study} index={i} />
        ))}
      </div>

      <Reveal className="mt-10 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 font-display text-sm font-semibold text-accent-bright hover:text-white"
        >
          Looking for a different industry? Let&apos;s talk
          <ArrowUpRight size={16} />
        </Link>
      </Reveal>
    </Section>
  );
}
