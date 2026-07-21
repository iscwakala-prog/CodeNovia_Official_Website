import { WhatsAppIcon } from "@/components/icons/SocialIcons";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { contactInfo } from "@/lib/data/contact";

export function ContactFinalCta() {
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
              Ready to Transform Your Business?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-text-muted">
              Share your goals today—and let&apos;s engineer the platforms, AI,
              and systems that move your company forward.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="#project-form" size="lg">
                Start Your Project
              </Button>
              <Button
                href={contactInfo.whatsappHref}
                variant="outline"
                size="lg"
                className="gap-2"
              >
                <WhatsAppIcon size={18} />
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
