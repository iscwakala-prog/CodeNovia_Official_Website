import {
  Code2,
} from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { coreServices } from "@/lib/data/services";
import { serviceIcons } from "@/lib/service-icons";

export function ServicesPreview() {
  return (
    <Section id="services">
      <Reveal>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 font-display text-xs font-semibold tracking-[0.2em] text-accent-bright uppercase">
            Core Services
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What we build for ambitious teams
          </h2>
          <p className="mt-4 text-text-muted">
            From SaaS platforms and AI automation to cloud, design, and growth—
            one partner for the full product journey.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
        {coreServices.map((service, i) => {
          const Icon = serviceIcons[service.slug] ?? Code2;
          return (
            <Reveal key={service.slug} delay={Math.min(i * 0.04, 0.28)}>
              <Link
                href={`/services#${service.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-bg-elevated/40 p-5 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-bg-elevated"
              >
                <span
                  className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent/10 blur-2xl transition group-hover:bg-accent/25"
                  aria-hidden
                />
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent/15 text-accent-bright transition group-hover:bg-accent/25 group-hover:shadow-[0_0_20px_rgba(30,155,255,0.35)]">
                  <Icon size={20} />
                </span>
                <h3 className="relative font-display text-[15px] font-semibold leading-snug text-white sm:text-base">
                  {service.title}
                </h3>
                <p className="relative mt-2 flex-1 text-sm leading-relaxed text-text-muted">
                  {service.description}
                </p>
                <span className="relative mt-4 text-xs font-semibold tracking-wide text-accent-bright opacity-0 transition group-hover:opacity-100">
                  Explore →
                </span>
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
