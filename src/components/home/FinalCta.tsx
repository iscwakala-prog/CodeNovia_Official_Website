import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ctaLabel } from "@/lib/data/nav";

export function FinalCta() {
  return (
    <Section className="pb-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-elevated px-6 py-14 text-center sm:px-10">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,155,255,0.18),transparent_65%)]"
            aria-hidden
          />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to build what&apos;s next?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-text-muted">
              Tell us about your product, timeline, and goals—we&apos;ll map
              the path forward.
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
  );
}
