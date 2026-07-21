import Link from "next/link";
import { LogoMark } from "@/components/brand/LogoMark";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
};

export function Logo({ className = "", showWordmark = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 group ${className}`}
      aria-label="CodeNovia home"
    >
      <span className="relative isolate flex h-9 w-9 shrink-0 items-center justify-center">
        <span
          className="absolute inset-0 -z-10 rounded-lg bg-accent/20 blur-md opacity-60 transition group-hover:opacity-90"
          aria-hidden
        />
        <LogoMark className="h-9 w-9" priority />
      </span>
      {showWordmark && (
        <span className="font-display text-[15px] font-bold tracking-tight text-text sm:text-base">
          CodeNovia
        </span>
      )}
    </Link>
  );
}
