import { useState } from "react";
import { Marquee } from "./Marquee";

export function Footer() {
  const [focused, setFocused] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  return (
    <footer id="contact" className="mt-24">
      <Marquee text="LET'S BUILD SOMETHING" />
      <div className="bg-[var(--sand)]">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-4 py-16 md:grid-cols-2 md:px-8">
          <div>
            <h2 className="font-display text-4xl md:text-6xl font-bold uppercase leading-none">
              Got an idea?<br />
              <span className="text-stroke">Throw it</span> at me.
            </h2>
            <p className="mt-6 max-w-md font-mono text-sm">
              Open to collaborations across data science, full-stack engineering, and design-led product work.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://www.linkedin.com/in/vir-bhalani-vcb72?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="brutal-border bg-white px-4 py-3 font-mono text-sm font-bold brutal-shadow-sm brutal-press">
                ↗ LinkedIn
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="brutal-border bg-[var(--indigo-pop)] text-white px-4 py-3 font-mono text-sm font-bold brutal-shadow-sm brutal-press">
                ↗ GitHub
              </a>
              <a href="mailto:virbhalani01@gmail.com" className="brutal-border bg-[var(--chartreuse)] px-4 py-3 font-mono text-sm font-bold brutal-shadow-sm brutal-press">
                ↗ Email
              </a>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="brutal-border brutal-shadow bg-white p-6"
          >
            {(["name", "email"] as const).map((f) => (
              <label key={f} className="mb-4 block">
                <span className="mb-1 block font-mono text-xs uppercase">{f}</span>
                <input
                  required
                  type={f === "email" ? "email" : "text"}
                  onFocus={() => setFocused(f)}
                  onBlur={() => setFocused(null)}
                  className="w-full brutal-border bg-[var(--sand)] px-3 py-3 font-mono outline-none"
                  style={{ backgroundColor: focused === f ? "var(--chartreuse)" : undefined }}
                />
              </label>
            ))}
            <label className="mb-4 block">
              <span className="mb-1 block font-mono text-xs uppercase">message</span>
              <textarea
                required
                rows={4}
                onFocus={() => setFocused("msg")}
                onBlur={() => setFocused(null)}
                className="w-full brutal-border bg-[var(--sand)] px-3 py-3 font-mono outline-none"
                style={{ backgroundColor: focused === "msg" ? "var(--chartreuse)" : undefined }}
              />
            </label>
            <button className="w-full brutal-border bg-black text-[var(--sand)] py-4 font-display text-xl font-bold uppercase brutal-shadow brutal-press">
              {sent ? "Sent ✓" : "Send Transmission →"}
            </button>
          </form>
        </div>
        <div className="brutal-border border-x-0 border-b-0 bg-black text-[var(--sand)]">
          <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-2 px-4 py-4 font-mono text-xs uppercase md:px-8">
            <span>© {new Date().getFullYear()} Vir Bhalani</span>
            <span>Built with caffeine, code, and chartreuse.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
