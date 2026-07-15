import Image from "next/image";
import type { CaseStudy } from "@/lib/data/caseStudies";

/** Premium case study cover image with subtle brand overlay. */
export function CaseStudyVisual({
  study,
  className = "",
  priority = false,
}: {
  study: CaseStudy;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-border bg-bg-deep ${className}`}
    >
      <Image
        src={study.image}
        alt={`${study.title} product preview`}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px"
        className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-deep/80 via-bg-deep/10 to-transparent"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <span className="inline-flex rounded-full border border-white/15 bg-bg-deep/70 px-2.5 py-0.5 font-display text-[10px] font-semibold tracking-wider text-accent-bright uppercase backdrop-blur-sm">
          {study.industry}
        </span>
        <p className="mt-2 truncate font-display text-sm font-medium text-white/90">
          {study.title}
        </p>
      </div>
    </div>
  );
}
