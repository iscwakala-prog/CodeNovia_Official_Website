import { Quote } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { portfolioTestimonials } from "@/lib/data/caseStudies";

export function PortfolioTestimonials() {
  return (
    <Section>
      <Reveal>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 font-display text-xs font-semibold tracking-[0.2em] text-accent-bright uppercase">
            Testimonials
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trusted by ambitious teams
          </h2>
        </div>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-3">
        {portfolioTestimonials.map((item, i) => (
          <Reveal key={item.role} delay={i * 0.08}>
            <blockquote className="relative h-full rounded-xl border border-border bg-bg-elevated/40 p-6">
              <Quote className="mb-4 text-accent/50" size={22} />
              <p className="text-sm leading-relaxed text-text-muted">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-5 font-display text-sm font-semibold text-white">
                {item.role}
              </footer>
            </blockquote>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
