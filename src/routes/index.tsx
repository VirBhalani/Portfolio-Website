import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { SiteNav } from "@/components/SiteNav";
import { Marquee } from "@/components/Marquee";
import { Sticker } from "@/components/Sticker";
import { IsoStack } from "@/components/Brutal3D";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vir Bhalani — Portfolio" },
      { name: "description", content: "Bridging data science, engineering, and human-centric design." },
      { property: "og:title", content: "Vir Bhalani — Portfolio" },
      { property: "og:description", content: "Bridging data science, engineering, and human-centric design." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <Hero />
      <TickerStrip />
      <ProjectsCTA />
      <About />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden brutal-border border-x-0">
      <div className="absolute inset-0 grid-bg" />
      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <Sticker rotate={-3}>● Available Q3 2026</Sticker>
            <Sticker rotate={2} color="var(--indigo-pop)" className="text-white">Designer / Engineer</Sticker>
            <Sticker rotate={-1} color="white">SPIT × IIT Madras</Sticker>
          </div>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-bold uppercase leading-[0.88]">
            Vir <span className="inline-block bg-[var(--chartreuse)] brutal-border px-2 -rotate-2">Bhalani</span>
            <br />
            <span className="text-stroke">Bridging</span> Data,
            <br />
            Engineering <span className="text-[var(--indigo-pop)]">&</span> Design.
          </h1>
          <p className="mt-8 max-w-xl font-mono text-base md:text-lg">
            Pursuing a <b>B.Tech in Computer Engineering at SPIT</b> in parallel with a <b>B.S. in Data Science at IIT Madras</b>. I build technically heavy systems with sharp UI/UX sensibilities — from RAG-powered healthcare platforms to deepfake-detection pipelines and institutional fintech dashboards.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 brutal-border-thick bg-black text-[var(--sand)] px-6 py-4 font-display text-xl font-bold uppercase brutal-shadow-lg brutal-press"
            >
              View My Work
              <span className="grid h-8 w-8 place-items-center bg-[var(--chartreuse)] text-black brutal-border transition-transform group-hover:translate-x-1">→</span>
            </a>
            <Link to="/about" className="brutal-border bg-white px-5 py-4 font-mono text-sm font-bold brutal-shadow-sm brutal-press invert-hover">
              About / Leadership
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-3 max-w-md gap-0 brutal-border brutal-shadow">
            {[
              ["3+", "Flagship projects"],
              ["1st", "SIH 2024 Winner"],
              ["∞", "Pixels pushed"],
            ].map(([k, v], i) => (
              <div key={i} className={`p-4 ${i < 2 ? "border-r-[3px] border-black" : ""} bg-white`}>
                <div className="font-display text-3xl font-bold">{k}</div>
                <div className="font-mono text-[10px] uppercase opacity-70">{v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <IsoStack />
          <motion.div
            className="absolute -right-2 top-4 grid h-24 w-24 place-items-center rounded-full brutal-border bg-[var(--chartreuse)] font-display text-xs font-bold uppercase"
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          >
            <span className="text-center leading-tight">CHAIRPERSON<br />ENACTUS ✦</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TickerStrip() {
  return <Marquee text="DATA SCIENCE ✶ UX ENGINEERING ✶ RAG SYSTEMS ✶ AI ✶ DESIGN SYSTEMS" size="text-3xl md:text-5xl" bg="bg-[var(--indigo-pop)]" fg="text-white" />;
}

function ProjectsCTA() {
  const items = [
    { n: "01", tag: "UX CASE STUDY", title: "GPAY Platform", desc: "Full UI/UX redesign prototype of Google Pay using Figma", bg: "var(--chartreuse)", fg: "text-black", hash: "mediaid" },
    { n: "02", tag: "SIH 2024 WINNER", title: "APEX 0110", desc: "Deepfake detection via rPPG facial blood-flow signals.", bg: "var(--indigo-pop)", fg: "text-white", hash: "apex" },
    { n: "03", tag: "ENTERPRISE SAAS", title: "MACRC Fintech", desc: "Multi-Agent Compliance Review Council dashboard.", bg: "black", fg: "text-[var(--sand)]", hash: "macrc" },
  ];
  return (
    <section id="work" className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28">
      <div className="mb-12 flex items-end justify-between gap-6 flex-wrap">
        <div>
          <div className="font-mono text-xs uppercase opacity-70">/ Selected Work — 2024–26</div>
          <h2 className="mt-2 font-display text-5xl md:text-7xl font-bold uppercase">Projects /</h2>
        </div>
        <p className="max-w-md font-mono text-sm">
          Three case studies — healthcare UX, AI-for-good, and enterprise fintech — all live on a single dedicated page.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((it) => (
          <Link
            key={it.hash}
            to="/projects"
            hash={it.hash}
            className={`group relative overflow-hidden brutal-border-thick brutal-shadow brutal-press flex flex-col justify-between p-6 h-[260px] ${it.fg}`}
            style={{ backgroundColor: it.bg }}
          >
            <div className="absolute inset-0 dot-bg opacity-[0.07] pointer-events-none" />
            <div className="relative flex items-start justify-between">
              <span className="brutal-border bg-white text-black px-2 py-1 font-mono text-[10px] uppercase">{it.n} / {it.tag}</span>
              <span className="grid h-10 w-10 place-items-center brutal-border bg-white text-black font-display font-bold text-xl transition-transform group-hover:rotate-45">↘</span>
            </div>
            <div className="relative">
              <h3 className="font-display text-2xl md:text-3xl font-bold uppercase leading-none">{it.title}</h3>
              <p className="mt-2 font-mono text-xs md:text-sm opacity-90">{it.desc}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          to="/projects"
          className="group inline-flex items-center gap-3 brutal-border-thick bg-black text-[var(--sand)] px-6 py-4 font-display text-lg md:text-xl font-bold uppercase brutal-shadow-lg brutal-press"
        >
          View all
          <span className="grid h-8 w-8 place-items-center bg-[var(--chartreuse)] text-black brutal-border transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </section>
  );
}

function AchievementsCTA() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 pb-20 md:px-8">
      <div className="brutal-border-thick brutal-shadow bg-white p-8 md:p-10 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
        <div>
          <div className="font-mono text-xs uppercase opacity-70">/ Achievements</div>
          <h2 className="mt-2 font-display text-4xl md:text-6xl font-bold uppercase leading-tight">
            Wins, runner-ups,
            <br />and leadership.
          </h2>
          <p className="mt-4 font-mono text-sm md:text-base max-w-xl">
            Explore the story behind each award and the positions of responsibility that shaped the work.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="grid gap-4"
        >
          <div className="brutal-border bg-[var(--chartreuse)] p-4 font-mono text-xs uppercase">
            5 award podiums and 3 leadership roles
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 pb-24 md:px-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        <div className="md:col-span-7 brutal-border-thick brutal-shadow bg-white p-8 -rotate-[0.4deg]">
          <div className="font-mono text-xs uppercase opacity-70">/ About</div>
          <h2 className="mt-2 font-display text-4xl md:text-6xl font-bold uppercase leading-none">
            Half engineer, <br /> half designer, <br /> <span className="bg-black text-[var(--chartreuse)] px-2 inline-block -rotate-1">all builder.</span>
          </h2>
          <p className="mt-6 font-mono text-sm md:text-base">
            I work at the intersection of statistical rigor and visual craft. By morning I'm shipping production systems at SPIT; by night I'm modeling data at IIT Madras. The thread connecting it all: <b>humans deserve interfaces as intelligent as the systems underneath them.</b>
          </p>
          <div className="mt-6 flex flex-wrap gap-2 font-mono text-xs">
            {["TypeScript", "React", "Python", "PyTorch", "FastAPI", "Figma", "PostgreSQL", "LangChain", "Tailwind"].map((s) => (
              <span key={s} className="brutal-border bg-[var(--sand)] px-2 py-1">{s}</span>
            ))}
          </div>
        </div>

        <div className="md:col-span-5 grid grid-cols-1 gap-6">
          <div className="brutal-border-thick brutal-shadow bg-[var(--indigo-pop)] text-white p-6 rotate-[0.6deg]">
            <div className="font-mono text-xs uppercase opacity-80">/ Leadership</div>
            <div className="mt-2 font-display text-3xl font-bold uppercase leading-tight">
              Chairperson, <br /> ENACTUS SPIT
            </div>
            <p className="mt-3 font-mono text-sm">
              Leading a chapter of student entrepreneurs deploying social-impact ventures across Mumbai. Hiring, strategy, fundraising, design reviews — the works.
            </p>
          </div>
          <div className="brutal-border-thick brutal-shadow bg-[var(--chartreuse)] p-6 -rotate-[0.4deg]">
            <div className="font-mono text-xs uppercase opacity-70">/ Currently</div>
            <ul className="mt-2 font-mono text-sm space-y-1">
              <li>→ Exploring multi-agent compliance systems</li>
              <li>→ Reading: <i>Refactoring UI</i></li>
              <li>→ Listening: lo-fi at 134 bpm</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
