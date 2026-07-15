import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { projects } from "@/lib/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return { title: project?.title ?? "Project" };
}

export default async function PortfolioProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  return (
    <Section className="pt-28">
      <h1 className="font-display text-4xl font-bold text-white">
        {project?.title ?? "Project"}
      </h1>
      <p className="mt-4 text-text-muted">
        Case study details coming next.{" "}
        <Link href="/" className="text-accent-bright hover:underline">
          Back to Home
        </Link>
      </p>
    </Section>
  );
}
