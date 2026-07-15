import {
  Bot,
  Cloud,
  Code2,
  Smartphone,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { services } from "@/lib/data/services";

const icons: Record<string, LucideIcon> = {
  "web-development": Code2,
  "mobile-app-development": Smartphone,
  "ai-solutions": Bot,
  "cloud-services": Cloud,
  "software-consulting": Workflow,
};

export function ServicesPreview() {
  return (
    <Section id="services">
      <Reveal>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 font-display text-xs font-semibold tracking-[0.2em] text-accent-bright uppercase">
            What We Do
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Services built for modern businesses
          </h2>
          <p className="mt-4 text-text-muted">
            End-to-end digital solutions—from product strategy to cloud-scale
            delivery.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = icons[service.slug] ?? Code2;
          return (
            <Reveal key={service.slug} delay={i * 0.05}>
              <Link
                href="/services"
                className="group block h-full rounded-xl border border-border bg-bg-elevated/50 p-6 transition hover:border-accent/40 hover:bg-bg-elevated"
              >
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent/15 text-accent-bright transition group-hover:bg-accent/25">
                  <Icon size={22} />
                </span>
                <h3 className="font-display text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {service.description}
                </p>
              </Link>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-10 flex justify-center">
        <Button href="/services" variant="outline">
          View All Services
        </Button>
      </Reveal>
    </Section>
  );
}
