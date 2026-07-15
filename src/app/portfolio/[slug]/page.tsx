import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { CaseStudyVisual } from "@/components/portfolio/CaseStudyVisual";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import {
  caseStudies,
  getCaseStudyBySlug,
} from "@/lib/data/caseStudies";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return { title: "Case Study" };
  return {
    title: study.title,
    description: study.tagline,
  };
}

export default async function PortfolioCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  return (
    <>
      <Section className="pt-28 md:pt-32">
        <Reveal>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 font-display text-sm font-medium text-text-muted transition hover:text-accent-bright"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
        </Reveal>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <span className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-display text-[10px] font-semibold tracking-wider text-accent-bright uppercase">
              {study.industry}
            </span>
            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              {study.title}
            </h1>
            <p className="mt-3 font-display text-lg font-medium text-accent-bright">
              {study.tagline}
            </p>
            <p className="mt-5 text-base leading-relaxed text-text-muted">
              {study.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" size="lg">
                Start a Similar Project
              </Button>
              <Button href="/portfolio#case-studies" variant="outline" size="lg">
                All Case Studies
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <CaseStudyVisual study={study} className="min-h-[280px]" />
          </Reveal>
        </div>
      </Section>

      <Section className="bg-bg-surface/40">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-white">
              Key capabilities
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {study.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 rounded-lg border border-border bg-bg-elevated/40 px-4 py-3 text-sm text-text-muted"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-bright" />
                  {feature}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-2xl font-bold text-white">
              Technology stack
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {study.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border bg-bg-elevated/50 px-3 py-2 font-display text-sm text-text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-10 rounded-xl border border-border bg-bg-elevated/40 p-6">
              <h3 className="font-display text-lg font-semibold text-white">
                Build with the same rigor
              </h3>
              <p className="mt-2 text-sm text-text-muted">
                Share your industry and goals—we&apos;ll map a product path
                engineered for long-term scale.
              </p>
              <div className="mt-5">
                <Button href="/contact">Let&apos;s Talk Business</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
