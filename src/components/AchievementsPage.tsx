import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { SiteNav } from "@/components/SiteNav";
import { Sticker } from "@/components/Sticker";

type Award = {
  year: string;
  title: string;
  org: string;
  result: "Winner" | "Runner-up" | "Finalist" | "Podium";
  description: string;
};

type LeadershipRole = {
  years: string;
  title: string;
  org: string;
  description: string;
  bullets: string[];
};

const awards: Award[] = [
  {
    year: "2024",
    title: "SIH 2024",
    org: "Institutional Innovation Hub",
    result: "Winner",
    description:
      "Led an end-to-end system from problem framing to prototype, validation, and pitch delivery.",
  },
  {
    year: "2023",
    title: "R&D Showcase",
    org: "Technical Society",
    result: "Runner-up",
    description:
      "Built a measurable demo with strong UX - optimizing for clarity, latency, and reliability.",
  },
  {
    year: "2022",
    title: "Hackathon Podium",
    org: "Cross-disciplinary Challenge",
    result: "Podium",
    description:
      "Delivered a production-minded prototype and iterated through user feedback in multiple rounds.",
  },
  {
    year: "2021",
    title: "Best Technical Narrative",
    org: "Engineering Review Panel",
    result: "Finalist",
    description:
      "Communicated technical depth with design thinking - turning complex ideas into an actionable story.",
  },
];

const leadership: LeadershipRole[] = [
  {
    years: "2025 - Present",
    title: "Chairperson",
    org: "ENACTUS SPIT",
    description:
      "Leading a chapter of student entrepreneurs deploying social-impact ventures across Mumbai.",
    bullets: [
      "Strategy + roadmap ownership for multi-venture execution",
      "Hiring, coaching, and design review for teams",
      "Fundraising, stakeholder management, and partnerships",
    ],
  },
  {
    years: "2024 - 2025",
    title: "Program Lead",
    org: "ENACTUS SPIT",
    description:
      "Coordinated workshops and mentorship loops focused on measurable outcomes and real-world constraints.",
    bullets: [
      "Operational planning + delivery management",
      "Template-driven execution for consistency",
      "Quality control across documentation, decks, and demos",
    ],
  },
];

export function AchievementsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <section className="relative overflow-hidden brutal-border border-x-0">
        <div className="absolute inset-0 grid-bg opacity-60" />

        <div className="relative mx-auto max-w-[1400px] px-4 pb-10 pt-16 md:px-8 md:pt-24">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-3">
                <Sticker rotate={-3}>Awards</Sticker>
                <Sticker rotate={2} color="var(--indigo-pop)" className="text-white">
                  Leadership
                </Sticker>
                <Sticker rotate={-1} color="white">
                  Built in public
                </Sticker>
              </div>

              <h1 className="mt-6 font-display text-5xl font-bold uppercase leading-[0.88] sm:text-6xl md:text-7xl">
                Wins, runner-ups,
                <br />
                <span className="-rotate-1 inline-block brutal-border bg-[var(--chartreuse)] px-2">
                  and leadership.
                </span>
              </h1>

              <p className="mt-6 max-w-xl font-mono text-sm md:text-base">
                A quick catalog of podium finishes and the responsibility roles that shaped how I build from
                technical execution to human-centric delivery.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  to="/projects"
                  className="group inline-flex items-center justify-between brutal-border-thick bg-black px-6 py-4 font-display text-lg font-bold uppercase text-[var(--sand)] brutal-shadow-lg brutal-press md:text-xl"
                >
                  See Projects
                  <span className="grid h-8 w-8 place-items-center brutal-border bg-[var(--chartreuse)] text-black transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  to="/about"
                  className="brutal-border bg-white px-5 py-4 font-mono text-sm font-bold brutal-shadow-sm brutal-press invert-hover"
                >
                  About / Leadership
                </Link>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4 }}
              className="w-full lg:max-w-sm"
            >
              <div className="brutal-border-thick brutal-shadow bg-white p-6">
                <div className="font-mono text-xs uppercase opacity-70">/ Highlights</div>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {[
                    { k: "5+", v: "Award podiums" },
                    { k: "3", v: "Leadership roles" },
                    { k: "infinite", v: "Iteration loops" },
                    { k: "24/7", v: "Build mindset" },
                  ].map((s, i) => (
                    <div
                      key={s.k}
                      className={`p-4 bg-[var(--sand)] ${i % 2 === 0 ? "border-r-[3px] border-black" : ""} brutal-border`}
                    >
                      <div className="font-display text-3xl font-bold">{s.k}</div>
                      <div className="font-mono text-[10px] uppercase opacity-70">{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-10">
            <Marquee
              text="WINNERS * RUNNER-UPS * BEST NARRATIVES * PODIUM FINISHES * RESPONSIBILITY"
              size="text-3xl md:text-4xl"
              bg="bg-[var(--indigo-pop)]"
              fg="text-white"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 pb-20 md:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="font-mono text-xs uppercase opacity-70">/ Leadership</div>
            <h2 className="mt-2 font-display text-4xl font-bold uppercase leading-none md:text-6xl">
              Responsibility that shipped
            </h2>
          </div>
          <p className="max-w-md font-mono text-sm">
            Leadership is treated like a product: define goals, align teams, run feedback loops, and deliver
            outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {leadership.map((r, idx) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.25 }}
              className={idx === 0 ? "lg:col-span-7" : "lg:col-span-5"}
            >
              <div
                className={
                  idx === 0
                    ? "brutal-border-thick brutal-shadow bg-[var(--indigo-pop)] p-6 text-white rotate-[0.4deg]"
                    : "brutal-border-thick brutal-shadow bg-[var(--chartreuse)] p-6 text-black -rotate-[0.4deg]"
                }
              >
                <div className="font-mono text-xs uppercase opacity-80">{r.years}</div>
                <div className="mt-2 font-display text-3xl font-bold uppercase leading-tight">
                  {r.title}
                  <br />
                  <span className="text-stroke">{r.org}</span>
                </div>
                <p className="mt-3 font-mono text-sm">{r.description}</p>

                <ul className="mt-5 space-y-2 font-mono text-sm">
                  {r.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 inline-block h-2 w-2 brutal-border bg-black" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <div className="brutal-border bg-white px-5 py-4 font-mono text-xs uppercase opacity-80 brutal-shadow">
            Tip: Awards are outcomes. The process is the skill.
          </div>
          <Link
            to="/"
            className="group inline-flex items-center gap-3 brutal-border-thick bg-black px-6 py-4 font-display text-lg font-bold uppercase text-[var(--sand)] brutal-shadow-lg brutal-press"
          >
            Back to Home
            <span className="grid h-8 w-8 place-items-center brutal-border bg-[var(--chartreuse)] text-black transition-transform group-hover:translate-x-1">
              ↩
            </span>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 pb-6 md:px-8">
        <div className="mb-2 font-mono text-xs uppercase opacity-60">/ Awards</div>
        <div className="grid gap-5 md:grid-cols-2">
          {awards.map((a) => (
            <article key={`${a.year}-${a.title}`} className="brutal-border-thick bg-white p-5 brutal-shadow">
              <div className="flex items-center justify-between gap-4">
                <div className="font-display text-2xl font-bold uppercase">{a.title}</div>
                <div className="brutal-border bg-[var(--sand)] px-2 py-1 font-mono text-xs uppercase">{a.result}</div>
              </div>
              <div className="mt-2 font-mono text-xs uppercase opacity-70">
                {a.year} / {a.org}
              </div>
              <p className="mt-3 font-mono text-sm">{a.description}</p>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
