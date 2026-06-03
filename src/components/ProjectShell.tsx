import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { SiteNav } from "./SiteNav";

export function ProjectShell({
  eyebrow,
  title,
  subtitle,
  accent = "var(--chartreuse)",
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  accent?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <section className="relative overflow-hidden brutal-border border-x-0">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-24">
          <Link to="/" className="inline-flex items-center gap-2 brutal-border bg-white px-3 py-1 font-mono text-xs uppercase brutal-shadow-sm brutal-press">
            ← Back to index
          </Link>
          <div className="mt-6 inline-block brutal-border px-3 py-1 font-mono text-xs uppercase" style={{ backgroundColor: accent }}>
            {eyebrow}
          </div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-bold uppercase leading-[0.95]">{title}</h1>
          <p className="mt-6 max-w-3xl font-mono text-base md:text-lg">{subtitle}</p>
        </div>
      </section>
      <main className="mx-auto max-w-[1400px] px-4 py-12 md:px-8 md:py-20">{children}</main>
      <Footer />
    </div>
  );
}

import { Footer } from "./Footer";
