import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { ctaLabel } from "@/lib/data/nav";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <Section className="pt-28">
      <h1 className="font-display text-4xl font-bold text-white">{ctaLabel}</h1>
      <p className="mt-4 text-text-muted">
        Contact form and WhatsApp links coming next.{" "}
        <Link href="/" className="text-accent-bright hover:underline">
          Back to Home
        </Link>
      </p>
    </Section>
  );
}
