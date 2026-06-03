import type { ReactNode, CSSProperties } from "react";

export function Sticker({
  children,
  className = "",
  rotate = 0,
  color = "var(--chartreuse)",
}: {
  children: ReactNode;
  className?: string;
  rotate?: number;
  color?: string;
}) {
  return (
    <div
      className={`inline-flex items-center justify-center brutal-border brutal-shadow-sm px-3 py-1 font-mono text-xs font-bold uppercase ${className}`}
      style={{ transform: `rotate(${rotate}deg)`, backgroundColor: color } as CSSProperties}
    >
      {children}
    </div>
  );
}
