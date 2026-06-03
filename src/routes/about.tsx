import { createFileRoute } from "@tanstack/react-router";
import { ProjectShell } from "@/components/ProjectShell";
import { Sticker } from "@/components/Sticker";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Vir Bhalani" },
      { name: "description", content: "Background, leadership, and what I'm building toward." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <ProjectShell
      eyebrow="/ About"
      title="Half engineer, half designer."
      subtitle="A snapshot of how I work, what I'm studying, and what I'm leading."
      accent="white"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Block title="Education">
          <ul className="space-y-3 font-mono text-sm">
            <li>→ <b>B.Tech, Computer Engineering</b> — Sardar Patel Institute of Technology (SPIT)</li>
            <li>→ <b>B.S., Data Science & Applications</b> — IIT Madras (online degree, in parallel)</li>
          </ul>
        </Block>
        <Block title="Leadership" bg="var(--indigo-pop)" fg="text-white">
          <div className="font-display text-3xl font-bold uppercase">Chairperson — ENACTUS SPIT</div>
          <p className="mt-3 font-mono text-sm">Leading a chapter of social-impact entrepreneurs. Strategy, hiring, fundraising, mentorship.</p>
        </Block>
        <Block title="Toolbelt">
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            {["TypeScript","React","Next.js","TanStack","Python","PyTorch","scikit-learn","FastAPI","PostgreSQL","Supabase","LangChain","Figma","Tailwind","Framer Motion"].map(t => (
              <span key={t} className="brutal-border bg-white px-2 py-1">{t}</span>
            ))}
          </div>
        </Block>
        <Block title="Philosophy" bg="var(--chartreuse)">
          <p className="font-mono text-sm">
            Heavy systems deserve light interfaces. Every model, every pipeline, every database query should eventually reach a human who feels <i>respected</i> by what's on screen.
          </p>
          <div className="mt-4 flex gap-2">
            <Sticker rotate={-3}>Accessibility first</Sticker>
            <Sticker rotate={3} color="white">Design = engineering</Sticker>
          </div>
        </Block>
      </div>
    </ProjectShell>
  );
}

function Block({ title, children, bg = "white", fg = "text-black" }: any) {
  return (
    <div className={`brutal-border-thick brutal-shadow p-6 ${fg}`} style={{ backgroundColor: bg }}>
      <div className="font-mono text-xs uppercase opacity-70">/ {title}</div>
      <div className="mt-3">{children}</div>
    </div>
  );
}
