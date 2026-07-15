import type { CaseStudy } from "@/lib/data/caseStudies";

const accentMap = {
  blue: "from-[#0b2a4a] via-[#0a1c34] to-[#050b18]",
  cyan: "from-[#083344] via-[#0a1c34] to-[#050b18]",
  indigo: "from-[#1e1b4b] via-[#0a1528] to-[#050b18]",
  teal: "from-[#042f2e] via-[#0a1c34] to-[#050b18]",
  violet: "from-[#2e1065] via-[#0a1528] to-[#050b18]",
  sky: "from-[#0c4a6e] via-[#0a1c34] to-[#050b18]",
};

/** Premium fake product UI — reads as a dashboard screenshot without assets. */
export function CaseStudyVisual({
  study,
  className = "",
}: {
  study: CaseStudy;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-border ${className}`}
      aria-hidden
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${accentMap[study.accent]}`}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(61,180,255,0.2),transparent_45%)]" />
      <div className="relative p-4 sm:p-5">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white/25" />
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="h-2 w-2 rounded-full bg-white/10" />
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-display text-[10px] tracking-wide text-accent-bright uppercase">
            {study.industry}
          </span>
        </div>
        <div className="grid gap-3 sm:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-2 rounded-lg border border-white/10 bg-black/25 p-3">
            <div className="h-2 w-16 rounded bg-accent/50" />
            <div className="space-y-1.5 pt-2">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className="h-6 rounded bg-white/5"
                  style={{ opacity: 1 - n * 0.12 }}
                />
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2">
              {[48, 72, 36].map((h, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-white/10 bg-black/20 p-2"
                >
                  <div className="h-1.5 w-8 rounded bg-white/20" />
                  <div
                    className="mt-2 rounded bg-accent/35"
                    style={{ height: h / 4 }}
                  />
                </div>
              ))}
            </div>
            <div className="rounded-lg border border-white/10 bg-black/25 p-3">
              <div className="mb-3 flex items-end gap-1.5">
                {[28, 44, 36, 56, 40, 64, 48].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-accent/50 to-accent-bright/30"
                    style={{ height: h }}
                  />
                ))}
              </div>
              <div className="h-1.5 w-full rounded bg-white/10" />
            </div>
          </div>
        </div>
        <p className="mt-4 truncate font-display text-xs font-medium text-white/70">
          {study.title}
        </p>
      </div>
    </div>
  );
}
