import { useState } from "react";
import { Link } from "@tanstack/react-router";
import logoSrc from "../lib/Vir Bhalani Logo Final.png";

/**
 * Persistent brand mark — fixed to the top-right corner on every page.
 * Brutalist: thick border + hard shadow, indigo + chartreuse accent.
 */
export function FixedLogo() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <Link
      to="/"
      aria-label="Vir Bhalani — Home"
      className="group fixed top-3 right-3 md:top-5 md:right-5 z-[100] brutal-press select-none"
    >
      <div className="relative brutal-border-thick brutal-shadow bg-[var(--sand)] rotate-[-2deg] group-hover:rotate-0 transition-transform">
        {/* Image (with fallback to the existing typography) */}
        {!imageFailed ? (
          <div className="flex items-stretch">
            <div className="w-35 h-20 flex items-center justify-center">
              <img
                src={logoSrc}
                alt="Vir Bhalani"
                className="w-full h-full object-contain m-auto"
                onError={() => setImageFailed(true)}
              />
            </div>
          </div>
        ) : (
          <>
            {/* Top stripe with monogram */}
            <div className="flex items-stretch">
              <div className="grid place-items-center bg-[var(--indigo-pop)] text-[var(--chartreuse)] border-r-[4px] border-black px-2 md:px-3 font-display text-xl md:text-2xl font-bold">
                VB
                <span className="sr-only">ir </span>
              </div>
              <div className="flex flex-col justify-center px-2 md:px-3 py-1 md:py-1.5 font-display leading-none">
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.18em]">Vir</span>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.18em]">Bhalani</span>
              </div>
            </div>
          </>
        )}

        {/* Chartreuse underline accent */}
        <div className="h-1.5 bg-[var(--chartreuse)] border-t-[3px] border-black" />
        {/* Decorative corner dot */}
        <div className="absolute -top-1.5 -left-1.5 h-3 w-3 bg-[var(--chartreuse)] brutal-border" />
      </div>
    </Link>
  );
}
