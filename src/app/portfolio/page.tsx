import type { Metadata } from "next";
import { CaseStudiesSection } from "@/components/portfolio/CaseStudiesSection";
import { PortfolioFinalCta } from "@/components/portfolio/PortfolioFinalCta";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { PortfolioIndustries } from "@/components/portfolio/PortfolioIndustries";
import { PortfolioMetrics } from "@/components/portfolio/PortfolioMetrics";
import { PortfolioProcessSection } from "@/components/portfolio/PortfolioProcessSection";
import { PortfolioTech } from "@/components/portfolio/PortfolioTech";
import { PortfolioTestimonials } from "@/components/portfolio/PortfolioTestimonials";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore CodeNovia case studies—FinTech, EdTech, enterprise operations, AI automation and more. Products engineered for scale.",
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioMetrics />
      <CaseStudiesSection />
      <PortfolioIndustries />
      <PortfolioTech />
      <PortfolioProcessSection />
      <PortfolioTestimonials />
      <PortfolioFinalCta />
    </>
  );
}
