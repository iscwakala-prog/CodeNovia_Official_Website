import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function PortfolioFinalCta() {
  return (
    <Section className="pb-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-elevated px-6 py-16 text-center sm:px-12 sm:py-20">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,155,255,0.2),transparent_65%)]"
            aria-hidden
          />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Ready to Build Your Next Big Product?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-text-muted">
              Let&apos;s discuss how CodeNovia can help transform your business
              with modern technology solutions.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/contact" size="lg">
                Start Your Project
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Schedule Discovery Call
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
