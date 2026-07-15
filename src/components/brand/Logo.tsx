import Link from "next/link";

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
      <span className="relative flex h-9 w-9 shrink-0 items-center justify-center">
        <span
          className="absolute inset-0 rounded-lg bg-accent/30 blur-md opacity-70 transition group-hover:opacity-100"
          aria-hidden
        />
        <svg
          viewBox="0 0 40 40"
          className="relative h-9 w-9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M20 2L36 11V29L20 38L4 29V11L20 2Z"
            stroke="url(#logoStroke)"
            strokeWidth="1.5"
            fill="url(#logoFill)"
          />
          <path
            d="M14 14L10 20L14 26M26 14L30 20L26 26"
            stroke="#3DB4FF"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="logoFill" x1="4" y1="2" x2="36" y2="38">
              <stop stopColor="#0A2744" />
              <stop offset="1" stopColor="#06101F" />
            </linearGradient>
            <linearGradient id="logoStroke" x1="4" y1="2" x2="36" y2="38">
              <stop stopColor="#3DB4FF" />
              <stop offset="1" stopColor="#1E9BFF" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      {showWordmark && (
        <span className="font-display text-[15px] font-bold tracking-[0.14em] text-text sm:text-base">
          CODENOVIA
        </span>
      )}
    </Link>
  );
}
