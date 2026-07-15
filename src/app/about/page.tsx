import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <Section className="pt-28">
      <h1 className="font-display text-4xl font-bold text-white">About Us</h1>
      <p className="mt-4 text-text-muted">
        Full about page coming next.{" "}
        <Link href="/" className="text-accent-bright hover:underline">
          Back to Home
        </Link>
      </p>
    </Section>
  );
}
