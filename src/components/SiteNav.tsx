import { Link } from "@tanstack/react-router";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 brutal-border-thick border-t-0 border-x-0 bg-background">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-3 md:px-8 pr-24 md:pr-44">
        <Link to="/" className="font-mono text-xs uppercase opacity-70 hover:opacity-100">
          ↩ index
        </Link>
        <nav className="flex items-center gap-1 font-mono text-xs md:text-sm">
          {[
            { to: "/", label: "Home" },
            { to: "/projects", label: "Projects" },
            { to: "/achievements", label: "Achievements" },
            { to: "/about", label: "About" },
            { to: "/#contact", label: "Contact", external: true },
          ].map((l) => (
            l.external ? (
              <a
                key={l.to}
                href={l.to}
                className="px-2 md:px-3 py-2 invert-hover brutal-border border-transparent hover:border-black"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="px-2 md:px-3 py-2 invert-hover brutal-border border-transparent hover:border-black"
                activeProps={{ className: "px-2 md:px-3 py-2 brutal-border bg-black text-[var(--sand)]" }}
              >
                {l.label}
              </Link>
            )
          ))}
        </nav>
      </div>
    </header>
  );
}
