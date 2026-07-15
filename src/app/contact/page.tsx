import type { Metadata } from "next";
import { ContactFaq } from "@/components/contact/ContactFaq";
import { ContactFinalCta } from "@/components/contact/ContactFinalCta";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactProcess } from "@/components/contact/ContactProcess";
import { QuickContact } from "@/components/contact/QuickContact";
import { WhyWorkWithUs } from "@/components/contact/WhyWorkWithUs";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with CodeNovia. Tell us about your goals—SaaS, AI, web, mobile, cloud, and digital transformation for startups, SMEs, and enterprises.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <section className="relative pb-16 md:pb-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start xl:gap-12">
            <ContactForm />
            <QuickContact />
          </div>
        </Container>
      </section>

      <WhyWorkWithUs />
      <ContactProcess />
      <ContactFaq />
      <ContactFinalCta />
    </>
  );
}
