import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/** Near full-bleed page width — only modest side padding, like Devsync. */
export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-14 ${className}`}>
      {children}
    </div>
  );
}
