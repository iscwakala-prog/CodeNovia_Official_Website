import type { Metadata } from "next";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogPostGrid } from "@/components/blog/BlogPostGrid";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ctaLabel } from "@/lib/data/nav";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "CodeNovia insights on digital transformation, AI, SaaS, software engineering, UX, SEO, and cloud—for founders, SMEs, and enterprises.",
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <Section className="!pt-4 md:!pt-6 pb-20">
        <Reveal>
          <div className="mb-10 flex flex-col gap-2 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 font-display text-xs font-semibold tracking-[0.2em] text-accent-bright uppercase">
                All Articles
              </p>
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Browse by topic and challenge
              </h2>
            </div>
            <p className="max-w-sm text-sm text-text-muted">
              Click any article to open the full page. Detailed content will be
              added as each piece is ready.
            </p>
          </div>
        </Reveal>
        <BlogPostGrid />
      </Section>

      <Section className="pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-elevated px-6 py-14 text-center sm:px-10">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,155,255,0.18),transparent_65%)]"
              aria-hidden
            />
            <div className="relative">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Need advice tailored to your business?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-text-muted">
                Share your goals—we&apos;ll map the technology path forward.
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
