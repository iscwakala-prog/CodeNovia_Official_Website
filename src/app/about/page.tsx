import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutSections } from "@/components/about/AboutSections";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "CodeNovia is a premium technology company building software products, AI solutions, and digital infrastructure for businesses worldwide.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutSections />
    </>
  );
}
