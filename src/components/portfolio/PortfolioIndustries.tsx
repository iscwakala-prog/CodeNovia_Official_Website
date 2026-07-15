import {
  Building2,
  GraduationCap,
  HeartPulse,
  Landmark,
  Package,
  ShoppingBag,
  Sparkles,
  Truck,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { portfolioIndustries } from "@/lib/data/caseStudies";

const icons = [
  Landmark,
  GraduationCap,
  HeartPulse,
  Truck,
  ShoppingBag,
  Sparkles,
  Package,
  Building2,
];

export function PortfolioIndustries() {
  return (
    <Section className="bg-bg-surface/40">
      <Reveal>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 font-display text-xs font-semibold tracking-[0.2em] text-accent-bright uppercase">
            Industries We Serve
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Domain expertise across growing markets
          </h2>
        </div>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {portfolioIndustries.map((industry, i) => {
          const Icon = icons[i] ?? Sparkles;
          return (
            <Reveal key={industry.name} delay={i * 0.04}>
              <div className="group h-full rounded-xl border border-border bg-bg-elevated/40 p-5 transition duration-300 hover:-translate-y-1 hover:border-accent/45 hover:bg-bg-elevated">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent/15 text-accent-bright transition group-hover:bg-accent/25 group-hover:shadow-[0_0_20px_rgba(30,155,255,0.3)]">
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-white">
                  {industry.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {industry.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
