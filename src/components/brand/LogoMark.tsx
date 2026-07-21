type LogoMarkProps = {
  className?: string;
  priority?: boolean;
};

const LOGO_SRC = "/brand/codenovia-logo.png";

export function LogoMark({
  className = "h-9 w-9",
  priority = false,
}: LogoMarkProps) {
  return (
    // Native img keeps the mark crisp and avoids next/image stacking issues in header/footer.
    <img
      src={LOGO_SRC}
      alt=""
      width={36}
      height={36}
      className={`relative z-10 block object-contain ${className}`}
      aria-hidden
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
    />
  );
}
