import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function AboutTeaser() {
  return (
    <Section>
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 font-display text-xs font-semibold tracking-[0.2em] text-accent-bright uppercase">
            About Us
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            A partner for tomorrow&apos;s digital products
          </h2>
          <p className="mt-5 text-base leading-relaxed text-text-muted sm:text-lg">
            CodeNovia helps ambitious teams design, build, and scale software
            with clarity—pairing engineering craft with business outcomes.
          </p>
          <div className="mt-8">
            <Button href="/about" variant="outline">
              Learn About CodeNovia
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
