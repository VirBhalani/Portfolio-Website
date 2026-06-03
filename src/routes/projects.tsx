import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { SiteNav } from "@/components/SiteNav";
import { Footer } from "@/components/Footer";
import { Sticker } from "@/components/Sticker";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Vir Bhalani" },
      { name: "description", content: "Three flagship projects: GPay UX prototype, APEX 0110 deepfake detection, and MACRC fintech compliance dashboard." },
      { property: "og:title", content: "Projects — Vir Bhalani" },
      { property: "og:description", content: "Product UX, AI-for-good, and enterprise fintech — three case studies." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* HERO */}
      <section className="relative overflow-hidden brutal-border border-x-0">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-8">
              <div className="inline-block brutal-border bg-[var(--chartreuse)] px-3 py-1 font-mono text-xs uppercase">
                / Selected Work — 2024-26
              </div>
              <h1 className="mt-4 font-display text-5xl md:text-8xl font-bold uppercase leading-[0.9]">
                Welcome to<br />
                <span className="text-stroke">Projects Page</span>{" "}
                <span className="inline-block bg-black text-[var(--chartreuse)] px-2 -rotate-1"></span>
              </h1>
              <p className="mt-6 max-w-2xl font-mono text-base md:text-lg">
                Product UX, AI-for-good, and enterprise fintech — distilled into a single scroll.
                Each entry is a complete case study with the journey, system, and outcomes.
              </p>
              <nav className="mt-10 flex flex-wrap gap-3 font-mono text-sm">
                <a href="#gpay" className="brutal-border bg-[var(--chartreuse)] px-4 py-2 brutal-shadow-sm brutal-press">01 · GPay UX →</a>
                <a href="#apex" className="brutal-border bg-[var(--indigo-pop)] text-white px-4 py-2 brutal-shadow-sm brutal-press">02 · APEX 0110 →</a>
                <a href="#macrc" className="brutal-border bg-black text-[var(--sand)] px-4 py-2 brutal-shadow-sm brutal-press">03 · MACRC →</a>
              </nav>
            </div>
            <div className="lg:col-span-4">
              <HeroAtlas />
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-24 space-y-32">
        <GPayBlock />
        <ApexBlock />
        <MacrcBlock />
      </main>

      <Footer />
    </div>
  );
}

function HeroAtlas() {
  const items = [
    {
      id: "01",
      name: "GPay UX",
      href: "https://www.figma.com/proto/o5MRaCHX3pb10lFcvk7CRU/Gpay-Prototype?node-id=2-3&p=f&t=C5cXLf5yWHX4quuz-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=49%3A1396",
      desc: "Figma prototype",
      color: "var(--chartreuse)",
    },
    {
      id: "02",
      name: "APEX 0110",
      href: "https://github.com/SPIT-Hackathon-2026/APEX-0100",
      desc: "GitHub repo",
      color: "var(--indigo-pop)",
      fg: "text-white",
    },
    {
      id: "03",
      name: "MACRC",
      href: "https://github.com/VirBhalani/Portfolio-Website",
      desc: "Project repo",
      color: "black",
      fg: "text-[var(--sand)]",
    },
  ];

  return (
    <div className="brutal-border-thick brutal-shadow-lg bg-white overflow-hidden">
      <div className="border-b-[3px] border-black bg-black px-4 py-3 font-mono text-[11px] uppercase text-[var(--chartreuse)]">
        Project Links
      </div>
      <div className="p-4 space-y-3">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="block brutal-border p-3 bg-[var(--sand)] hover:-translate-y-0.5 transition-transform"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="font-mono text-[10px] uppercase opacity-70">Project {item.id}</div>
                <div className="font-display text-xl font-bold uppercase">{item.name}</div>
                <div className="mt-1 font-mono text-xs uppercase opacity-70">{item.desc}</div>
              </div>
              <div
                className={`brutal-border px-2 py-1 font-mono text-xs font-bold uppercase ${item.fg ?? "text-black"}`}
                style={{ backgroundColor: item.color }}
              >
                Open
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="border-t-[3px] border-black p-4 bg-[var(--chartreuse)]">
        <p className="font-mono text-xs uppercase">
          Explore the source or prototype for each project
        </p>
      </div>
    </div>
  );
}

/* ---------- Shared atoms ---------- */

function ProjectHeader({ n, eyebrow, title, sub, accent, fg = "text-black" }: {
  n: string; eyebrow: string; title: string; sub: string; accent: string; fg?: string;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
      <div className="md:col-span-3">
        <div className={`brutal-border-thick brutal-shadow p-6 ${fg}`} style={{ backgroundColor: accent }}>
          <div className="font-display text-7xl font-bold leading-none">{n}</div>
          <div className="mt-2 font-mono text-xs uppercase">{eyebrow}</div>
        </div>
      </div>
      <div className="md:col-span-9">
        <h2 className="font-display text-4xl md:text-6xl font-bold uppercase leading-[0.95]">{title}</h2>
        <p className="mt-4 max-w-3xl font-mono text-sm md:text-base">{sub}</p>
      </div>
    </div>
  );
}

function Stat({ k, v, bg, fg = "text-black" }: { k: string; v: string; bg: string; fg?: string }) {
  return (
    <div className={`brutal-border-thick brutal-shadow p-5 ${fg}`} style={{ backgroundColor: bg }}>
      <div className="font-display text-3xl md:text-4xl font-bold">{k}</div>
      <div className="mt-1 font-mono text-[10px] uppercase">{v}</div>
    </div>
  );
}

type SwitcherItem = {
  key: string;
  label: string;
  title: string;
  body: string;
  bullets: string[];
  meta?: string;
};

function ProjectSwitcher({
  items,
  accent = "var(--chartreuse)",
  activeFg = "text-black",
  panelBg = "white",
  panelFg = "text-black",
}: {
  items: SwitcherItem[];
  accent?: string;
  activeFg?: string;
  panelBg?: string;
  panelFg?: string;
}) {
  const [activeKey, setActiveKey] = useState(items[0]?.key ?? "");
  const activeItem = items.find((item) => item.key === activeKey) ?? items[0];

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <div className="md:col-span-4 space-y-3">
        {items.map((item) => {
          const isActive = item.key === activeItem?.key;
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => setActiveKey(item.key)}
              aria-pressed={isActive}
              className={`w-full text-left brutal-border-thick brutal-shadow-sm p-4 brutal-press ${isActive ? activeFg : "text-black"}`}
              style={{ backgroundColor: isActive ? accent : "white" }}
            >
              <div className="font-mono text-[10px] uppercase opacity-70">{item.label}</div>
              <div className="mt-1 font-display text-lg font-bold uppercase leading-tight">{item.title}</div>
              {item.meta ? (
                <div className="mt-2 font-mono text-xs opacity-70">{item.meta}</div>
              ) : null}
            </button>
          );
        })}
      </div>
      <motion.div
        key={activeItem?.key}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className={`md:col-span-8 brutal-border-thick brutal-shadow p-6 md:p-8 ${panelFg}`}
        style={{ backgroundColor: panelBg }}
      >
        <div className="font-mono text-[10px] uppercase opacity-60">{activeItem?.label}</div>
        <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold uppercase">{activeItem?.title}</h3>
        <p className="mt-3 font-mono text-sm md:text-base max-w-3xl">{activeItem?.body}</p>
        <ul className="mt-4 grid gap-2 font-mono text-sm md:text-base">
          {activeItem?.bullets.map((bullet) => (
            <li key={bullet} className="brutal-border bg-white/70 px-3 py-2">
              {bullet}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

/* ---------- 01 · GPay UX Prototype ---------- */

const GPAY_PHASES = [
  {
    n: "01",
    title: "Product audit + user intent",
    body: "Mapped the primary intents (send, scan, split, pay bills, check rewards) and audited the clutter across existing UPI apps. The north star: reduce cognitive load at the moment money moves.",
    pill: "Discovery",
    color: "white",
  },
  {
    n: "02",
    title: "Information architecture reboot",
    body: "Rebuilt navigation around 4 persistent zones: Pay, Scan, Bills, and Insights. Secondary tasks tuck into contextual sheets so the core flow stays fast.",
    pill: "Structure",
    color: "var(--chartreuse)",
  },
  {
    n: "03",
    title: "Component system + tokens",
    body: "Defined spacing, type scale, and color tokens for trust and speed. Built a reusable kit: action buttons, bottom sheets, PIN pads, receipts, and alert states.",
    pill: "System",
    color: "white",
  },
  {
    n: "04",
    title: "Hi-fi prototype + motion",
    body: "Crafted a clickable prototype with micro-interactions for scan-to-pay, amount entry, and receipt confirmation. All key flows run end-to-end without dead-ends.",
    pill: "Prototype",
    color: "var(--indigo-pop)",
    fg: "text-white",
  },
  {
    n: "05",
    title: "Usability + iteration",
    body: "Refined copy, error states, and safety cues after task runs. Focused on clarity: what happened, why it happened, and the next best action.",
    pill: "Validation",
    color: "var(--chartreuse)",
  },
];

const GPAY_FLOWS: SwitcherItem[] = [
  {
    key: "onboarding",
    label: "Flow 01",
    title: "Onboarding + bank linking",
    meta: "Phone verification · UPI ID · KYC status",
    body: "A guided setup that prioritizes clarity and trust. Every step surfaces why it is needed and what will happen next.",
    bullets: [
      "Auto-detect banks with a manual fallback for unsupported issuers.",
      "Progressive disclosure: show KYC only when needed, not upfront.",
      "Inline security tips with short, friendly microcopy.",
    ],
  },
  {
    key: "pay",
    label: "Flow 02",
    title: "Send money in under 6 taps",
    meta: "Scan · UPI ID · contact · amount · confirm",
    body: "The primary money movement flow is tuned for speed but still feels safe at each decision point.",
    bullets: [
      "One-screen amount entry with quick add chips and a note field.",
      "Verification sheet with recipient avatar, last-4 UPI, and bank.",
      "Instant receipt with copy/share and dispute entry points.",
    ],
  },
  {
    key: "bills",
    label: "Flow 03",
    title: "Bills, autopay, and reminders",
    meta: "Due now · upcoming · autopay rules",
    body: "Bills are grouped by urgency and displayed as cards with a clear CTA. Autopay can be toggled from each card.",
    bullets: [
      "Due today gets a high-contrast state; upcoming stays calm.",
      "Autopay toggle includes a transparent date and limit control.",
      "Late-fee warnings appear before the user commits to pay.",
    ],
  },
  {
    key: "safety",
    label: "Flow 04",
    title: "Safety, support, and dispute",
    meta: "Scam warnings · report · helpline",
    body: "Trust is part of the flow. Users can always see how to get help or reverse a mistake.",
    bullets: [
      "Contextual scam warnings triggered by first-time transfers.",
      "Dispute entry from the receipt with clear SLA messaging.",
      "Human support surfaced after two failed attempts.",
    ],
  },
];

function GPayBlock() {
  return (
    <section id="gpay" className="scroll-mt-24">
      <ProjectHeader
        n="01"
        eyebrow="UI / UX Case Study"
        title="GPay Prototype — a faster, safer way to pay."
        sub="A full UI/UX redesign prototype of Google Pay with a focus on clarity, trust, and speed. Built as a high-fidelity Figma prototype with realistic flows, motion cues, and resilient error states."
        accent="var(--chartreuse)"
      />

      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 brutal-border-thick brutal-shadow bg-white">
        {[
          ["Role", "UI/UX Designer"],
          ["Timeline", "6 weeks"],
          ["Scope", "Mobile payments"],
          ["Platform", "Android + iOS"],
          ["Tools", "Figma · FigJam"],
          ["Focus", "Trust + speed"],
        ].map(([k, v], i, a) => (
          <div
            key={k}
            className={`p-5 ${i < a.length - 1 ? "lg:border-r-[3px] border-black" : ""} ${i < 3 ? "border-b-[3px] lg:border-b-0 border-black" : ""}`}
          >
            <div className="font-mono text-[10px] uppercase opacity-60">{k}</div>
            <div className="mt-1 font-display text-base md:text-lg font-bold uppercase">{v}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="brutal-border-thick brutal-shadow bg-white p-6 md:p-8">
          <div className="font-mono text-xs uppercase opacity-70">/ Live Prototype</div>
          <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold uppercase">Explore the interactive build</h3>
          <p className="mt-3 font-mono text-sm md:text-base">
            The prototype includes onboarding, scan-to-pay, UPI transfers, bills, rewards, and support flows.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="https://www.figma.com/proto/o5MRaCHX3pb10lFcvk7CRU/Gpay-Prototype?node-id=2-3&p=f&t=C5cXLf5yWHX4quuz-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=49%3A1396"
              target="_blank"
              rel="noreferrer"
              className="brutal-border bg-[var(--chartreuse)] px-4 py-2 font-mono text-xs uppercase brutal-press"
            >
              Open Figma Prototype
            </a>
            <a
              href="https://drive.google.com/file/d/14-AEGHDpPIfoDamHzMZO_aH0LMPe06o0/view"
              target="_blank"
              rel="noreferrer"
              className="brutal-border bg-black text-[var(--sand)] px-4 py-2 font-mono text-xs uppercase brutal-press"
            >
              Watch Demo Video
            </a>
          </div>
        </div>
        <div className="brutal-border-thick brutal-shadow bg-[var(--indigo-pop)] text-white p-6 md:p-8">
          <div className="font-mono text-xs uppercase opacity-80">/ Design Goals</div>
          <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold uppercase">Make money movement feel calm.</h3>
          <ul className="mt-3 font-mono text-sm md:text-base space-y-2">
            <li><b>1.</b> Reduce friction while maintaining verification.</li>
            <li><b>2.</b> Highlight safety without sounding alarmist.</li>
            <li><b>3.</b> Make errors understandable and fixable.</li>
            <li><b>4.</b> Keep the primary action always visible.</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 space-y-6">
        {GPAY_PHASES.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="grid grid-cols-12 gap-3 md:gap-6"
          >
            <div className="col-span-12 md:col-span-3">
              <div className="brutal-border-thick brutal-shadow bg-black text-[var(--chartreuse)] p-5">
                <div className="font-display text-5xl font-bold">{s.n}</div>
                <div className="mt-2 font-mono text-xs uppercase">{s.pill}</div>
              </div>
            </div>
            <div
              className="col-span-12 md:col-span-9 brutal-border-thick brutal-shadow p-5 md:p-7"
              style={{ backgroundColor: s.color, color: s.fg ? undefined : "black" }}
            >
              <h3 className={`font-display text-2xl md:text-3xl font-bold uppercase ${s.fg ?? ""}`}>{s.title}</h3>
              <p className={`mt-3 font-mono text-sm md:text-base max-w-3xl ${s.fg ?? ""}`}>{s.body}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12">
        <div className="font-mono text-xs uppercase opacity-70">/ Prototype Highlights</div>
        <h3 className="mt-2 font-display text-3xl md:text-4xl font-bold uppercase">Choose a flow to explore</h3>
        <p className="mt-3 font-mono text-sm md:text-base max-w-3xl">
          Each flow is fully clickable with micro-interactions and success/failure states.
        </p>
        <div className="mt-6">
          <ProjectSwitcher items={GPAY_FLOWS} accent="var(--chartreuse)" />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Design system">
          Tokens for spacing, type, and color ensure consistent trust cues. Components include numeric PIN pads, risk alerts, receipts, and quick action chips.
        </Card>
        <Card title="Content + microcopy" bg="var(--chartreuse)">
          Plain-language prompts for money movement: what happened, what changed, and what to do next. No hidden fees or vague status text.
        </Card>
        <Card title="Accessibility" bg="var(--indigo-pop)" fg="text-white">
          High-contrast states, large tap targets, and readable typography. All critical actions work without color alone.
        </Card>
      </div>

      <div className="mt-10 brutal-border-thick brutal-shadow-lg bg-black text-[var(--sand)] p-8 md:p-10">
        <div className="font-mono text-xs uppercase opacity-70">/ Outcome</div>
        <h3 className="mt-2 font-display text-3xl md:text-5xl font-bold uppercase">A prototype built for real-world trust.</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            ["10+", "core screens with full flow coverage"],
            ["4", "primary journeys refined end-to-end"],
            ["0", "dead-ends in the prototype"],
          ].map(([k, v]) => (
            <div key={k} className="brutal-border bg-[var(--sand)] text-black p-4">
              <div className="font-display text-3xl font-bold">{k}</div>
              <div className="mt-1 font-mono text-[11px] uppercase opacity-80">{v}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 border-t border-black/50" />
    </section>
  );
}

/* ---------- 02 · APEX 0110 ---------- */

const APEX_PIPELINE: SwitcherItem[] = [
  {
    key: "capture",
    label: "Stage 01",
    title: "Capture + face tracking",
    meta: "ROI stabilization · lighting normalization",
    body: "Frames are stabilized to keep the facial region consistent and reduce jitter that can hide pulse traces.",
    bullets: [
      "Multi-face detection with adaptive ROI tracking.",
      "Temporal smoothing to reduce camera shake.",
      "Auto exposure normalization to keep rPPG stable.",
    ],
  },
  {
    key: "signal",
    label: "Stage 02",
    title: "rPPG signal extraction",
    meta: "Band-pass filtering · signal quality score",
    body: "Subtle color changes are converted into a time-series pulse signal and validated for physiological coherence.",
    bullets: [
      "Chrominance-based filtering to isolate pulse.",
      "Signal quality scoring to suppress noisy frames.",
      "Heartbeat estimation for explainable output.",
    ],
  },
  {
    key: "model",
    label: "Stage 03",
    title: "Deepfake classifier",
    meta: "Temporal CNN + attention",
    body: "The model learns whether the signal is consistent with real blood flow rather than surface textures.",
    bullets: [
      "Cross-validated on real vs synthetic clips.",
      "Confidence-calibrated outputs for UI display.",
      "ONNX export for real-time inference.",
    ],
  },
  {
    key: "explain",
    label: "Stage 04",
    title: "Explainability + UI",
    meta: "Waveform · confidence · reason",
    body: "The interface surfaces the reason behind the verdict so reviewers can trust the system quickly.",
    bullets: [
      "Waveform and confidence shown side-by-side.",
      "Reason labels such as \"pulse incoherence\" or \"signal drop\".",
      "Audit-ready export for compliance teams.",
    ],
  },
];

const APEX_SIGNAL_READOUT = [
  {
    label: "Subject A",
    verdict: "REAL",
    fake: false,
    bpm: 72,
    coherence: 0.94,
    snr: 17.8,
    drift: 0.08,
    reason: "Periodic waveform and physiologically valid BPM.",
  },
  {
    label: "Subject B",
    verdict: "FAKE",
    fake: true,
    bpm: 129,
    coherence: 0.31,
    snr: 4.2,
    drift: 0.41,
    reason: "Pulse instability, low SNR, and abrupt phase discontinuity.",
  },
];

function ApexBlock() {
  return (
    <section id="apex" className="scroll-mt-24">
      <ProjectHeader
        n="02"
        eyebrow="SIH 2024 — Winner 🏆"
        title="APEX 0110 — Reading the blood under the pixel."
        sub="A real-time deepfake detector that reads micro-fluctuations of facial blood flow (rPPG). The UI turns invisible signals into an explainable, fast verdict for investigators."
        accent="var(--indigo-pop)"
        fg="text-white"
      />

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 brutal-border-thick brutal-shadow bg-black text-[var(--sand)] p-6 md:p-8 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg" />
          <div className="relative">
            <div className="flex items-center justify-between font-mono text-xs uppercase">
              <span>▸ live feed · cam_01</span>
              <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[var(--chartreuse)] animate-pulse" /> analyzing</span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {APEX_SIGNAL_READOUT.map((subject) => (
                <FaceFrame key={subject.label} subject={subject} />
              ))}
            </div>
            <WaveformPanel />
            <div className="mt-4 brutal-border bg-[var(--sand)] text-black p-3">
              <div className="font-mono text-[10px] uppercase opacity-70">How to read this panel</div>
              <ul className="mt-2 font-mono text-xs space-y-1">
                <li>• Coherence compares pulse periodicity across time windows. Higher is better.</li>
                <li>• SNR measures usable physiological signal over noise floor.</li>
                <li>• Drift captures unstable phase shifts typical in synthetic face generation.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <Stat k="99.2%" v="Validation accuracy on FF++ subset" bg="var(--chartreuse)" />
          <Stat k="< 180ms" v="Per-frame inference (RTX 4060)" bg="white" />
          <Stat k="🏆 1st" v="Smart India Hackathon 2024" bg="var(--indigo-pop)" fg="text-white" />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="brutal-border-thick brutal-shadow bg-white p-6 md:p-8">
          <h3 className="font-display text-2xl md:text-3xl font-bold uppercase">Why rPPG?</h3>
          <p className="mt-3 font-mono text-sm md:text-base">
            When light hits skin, sub-pixel color shifts reveal the cardiac cycle — invisible to the eye, measurable by a camera. GANs trained on visual textures don't model hemodynamics, so generated faces lack a coherent pulse signal.
          </p>
          <p className="mt-4 font-mono text-sm md:text-base italic">Something here.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["OpenCV", "PyTorch", "FastAPI", "ONNX", "React + D3"].map(t => <Sticker key={t} color="var(--sand)">{t}</Sticker>)}
          </div>
        </div>
        <div className="brutal-border-thick brutal-shadow bg-[var(--chartreuse)] p-6 md:p-8">
          <h3 className="font-display text-2xl md:text-3xl font-bold uppercase">Designing trust for an invisible signal</h3>
          <ul className="mt-3 font-mono text-sm md:text-base space-y-2">
            <li><b>1.</b> Show the waveform — forensic users need to see <i>why</i>.</li>
            <li><b>2.</b> Verdict + confidence + reason; never a bare "FAKE".</li>
            <li><b>3.</b> Color-coded severity, mapped to the brand palette.</li>
            <li><b>4.</b> Exports include a signal snapshot for audit trails.</li>
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <div className="font-mono text-xs uppercase opacity-70">/ Model + UI Pipeline</div>
        <h3 className="mt-2 font-display text-3xl md:text-4xl font-bold uppercase">From camera feed to verdict</h3>
        <p className="mt-3 font-mono text-sm md:text-base max-w-3xl">
          A four-stage pipeline designed for speed, explainability, and minimal false positives.
        </p>
        <div className="mt-6">
          <ProjectSwitcher items={APEX_PIPELINE} accent="var(--indigo-pop)" activeFg="text-white" panelBg="black" panelFg="text-[var(--sand)]" />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Dataset + evaluation">
          Trained and validated against a mix of real and synthetic sources, with a focus on cross-lighting robustness and varied camera quality.
        </Card>
        <Card title="Latency + deployment" bg="var(--chartreuse)">
          Built for real-time usage: frame buffering, ONNX runtime, and client-side throttling keep the UI responsive.
        </Card>
        <Card title="Ethics + safeguards" bg="var(--indigo-pop)" fg="text-white">
          Confidence thresholds are explicit, and the interface encourages secondary review for low-signal cases.
        </Card>
      </div>

      <div className="mt-16 border-t border-black/50" />
    </section>
  );
}

function FaceFrame({
  subject,
}: {
  subject: {
    label: string;
    verdict: string;
    fake?: boolean;
    bpm: number;
    coherence: number;
    snr: number;
    drift: number;
    reason: string;
  };
}) {
  return (
    <div className="brutal-border bg-[var(--sand)] text-black p-3">
      <div className="aspect-square relative overflow-hidden brutal-border bg-gradient-to-br from-zinc-300 to-zinc-500">
        <div className="absolute inset-4 brutal-border border-dashed" />
        <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full brutal-border bg-white/40" />
        <motion.div
          className="absolute inset-x-0 h-[2px] bg-[var(--chartreuse)]"
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <div className="mt-2 flex items-center justify-between font-mono text-xs">
        <span>{subject.label}</span>
        <span className={`brutal-border px-2 py-0.5 ${subject.fake ? "bg-black text-[var(--chartreuse)]" : "bg-[var(--chartreuse)]"}`}>{subject.verdict}</span>
      </div>
      <div className="mt-2 grid grid-cols-2 gap-1 font-mono text-[10px]">
        <span className="brutal-border bg-white px-2 py-1">BPM: {subject.bpm}</span>
        <span className="brutal-border bg-white px-2 py-1">Coherence: {subject.coherence.toFixed(2)}</span>
        <span className="brutal-border bg-white px-2 py-1">SNR: {subject.snr.toFixed(1)} dB</span>
        <span className="brutal-border bg-white px-2 py-1">Drift: {subject.drift.toFixed(2)}</span>
      </div>
      <p className="mt-2 font-mono text-[10px] leading-relaxed">{subject.reason}</p>
    </div>
  );
}

function WaveformPanel() {
  const realPts = Array.from({ length: 80 }, (_, i) => 56 + Math.sin(i / 3.1) * 17 + Math.sin(i / 1.5) * 4);
  const fakePts = Array.from({ length: 80 }, (_, i) => 52 + Math.sin(i / 2.2) * 11 + Math.sin(i / 0.8) * 9 + (i % 11 === 0 ? 13 : 0));
  const toPath = (pts: number[]) => pts.map((y, i) => `${i === 0 ? "M" : "L"} ${i * (600 / (pts.length - 1))} ${y}`).join(" ");
  const realPath = toPath(realPts);
  const fakePath = toPath(fakePts);

  return (
    <div className="mt-6 brutal-border bg-[var(--sand)] text-black p-3">
      <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] uppercase">
        <span>rPPG trace comparison</span>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1"><span className="h-2 w-2 bg-black" /> real-like</span>
          <span className="inline-flex items-center gap-1"><span className="h-2 w-2 bg-[var(--indigo-pop)]" /> fake-like</span>
        </div>
      </div>
      <svg viewBox="0 0 600 100" className="mt-2 w-full h-20">
        <path d={realPath} fill="none" stroke="black" strokeWidth="2.3" />
        <path d={fakePath} fill="none" stroke="var(--indigo-pop)" strokeWidth="2.3" opacity="0.9" />
        <line x1="0" y1="50" x2="600" y2="50" stroke="black" strokeDasharray="6 5" opacity="0.35" />
      </svg>
      <div className="mt-2 grid grid-cols-2 gap-2 font-mono text-[10px] uppercase">
        <div className="brutal-border bg-white px-2 py-1">Decision rule: coherence &lt; 0.55 and snr &lt; 8 dB</div>
        <div className="brutal-border bg-white px-2 py-1">Current suspect: coherence 0.31 · snr 4.2 dB</div>
      </div>
    </div>
  );
}

/* ---------- 03 · MACRC ---------- */

const MACRC_WORKFLOWS: SwitcherItem[] = [
  {
    key: "triage",
    label: "Workflow 01",
    title: "Triage + queue management",
    meta: "Risk radar · SLA · assignment",
    body: "Analysts start in a focused queue view with contextual filters and a single-key shortcut to claim a case.",
    bullets: [
      "Queue is sorted by risk and SLA breach proximity.",
      "Hotkeys for claim, skip, and escalate actions.",
      "Lightweight notes to avoid context switching.",
    ],
  },
  {
    key: "investigation",
    label: "Workflow 02",
    title: "Investigation + evidence",
    meta: "Entity profile · transaction chain",
    body: "The detail rail brings together identity, transaction graph, and linked alerts in one uninterrupted surface.",
    bullets: [
      "Side-by-side identity and transaction trace.",
      "Inline evidence attachments and annotations.",
      "Reason codes presented as structured chips.",
    ],
  },
  {
    key: "decision",
    label: "Workflow 03",
    title: "Council decision",
    meta: "Multi-agent trace · override",
    body: "Disagreements between agents are transparent. Reviewers can accept, override, or request more context.",
    bullets: [
      "Debate transcript with timestamps and confidence.",
      "One-click override with mandatory rationale.",
      "Decision log appended automatically.",
    ],
  },
  {
    key: "audit",
    label: "Workflow 04",
    title: "Audit + reporting",
    meta: "Timeline · export · compliance",
    body: "Every action produces an immutable trail suitable for internal audit and external regulators.",
    bullets: [
      "Scrubbable timeline of every change.",
      "Export packages for regulatory review.",
      "Role-based visibility for sensitive data.",
    ],
  },
];

function MacrcBlock() {
  return (
    <section id="macrc" className="scroll-mt-24">
      <ProjectHeader
        n="03"
        eyebrow="Enterprise SaaS · Fintech"
        title="MACRC — Compliance, choreographed."
        sub="A high-density operations console for the Multi-Agent Compliance Review Council. Analysts triage flagged transactions, audit AI-agent reasoning, and approve dispositions — without leaving the keyboard."
        accent="black"
        fg="text-[var(--sand)]"
      />

      <div className="mt-10">
        <DashboardMock />
      </div>

      <div className="mt-10">
        <div className="font-mono text-xs uppercase opacity-70">/ Workflow Explorer</div>
        <h3 className="mt-2 font-display text-3xl md:text-4xl font-bold uppercase">Four rails, zero context loss</h3>
        <p className="mt-3 font-mono text-sm md:text-base max-w-3xl">
          The UI is designed so analysts never have to leave the case view to take action.
        </p>
        <div className="mt-6">
          <ProjectSwitcher items={MACRC_WORKFLOWS} accent="black" activeFg="text-[var(--sand)]" panelBg="var(--sand)" panelFg="text-black" />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Information Architecture">
          Three persistent rails — Queue, Detail, Council Trace. Analysts never lose context; reviewers can rewind any agent's reasoning trail.
        </Card>
        <Card title="Risk Visualization" bg="var(--chartreuse)">
          A 5-axis risk radar replaces the legacy 11-column table. Outliers pop visually; analysts triage 3.4× faster.
        </Card>
        <Card title="Multi-Agent Trace" bg="var(--indigo-pop)" fg="text-white">
          Four specialized agents (AML, KYC, Sanctions, PEP) — disagreements surface as a debate transcript with one-click overrides.
        </Card>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Keyboard-first ops">
          Core actions map to consistent shortcuts. Bulk approvals, escalations, and handoffs happen without leaving the table view.
        </Card>
        <Card title="Dense but legible" bg="var(--chartreuse)">
          Type scale and spacing were tuned for 1440p. Critical fields get contrast; secondary metadata is muted but reachable.
        </Card>
        <Card title="Resilience" bg="var(--indigo-pop)" fg="text-white">
          Offline-friendly drafts, auto-save, and conflict warnings keep investigations stable during long sessions.
        </Card>
      </div>

      <div className="mt-8 brutal-border-thick brutal-shadow bg-black text-[var(--sand)] p-6 md:p-8">
        <div className="font-mono text-xs uppercase opacity-70">/ Stack & Constraints</div>
        <h3 className="mt-2 font-display text-2xl md:text-4xl font-bold uppercase">Built for screens that never sleep.</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Next.js", "TanStack Table", "tRPC", "PostgreSQL", "Redis", "D3", "Auth0", "RBAC"].map(t => <Sticker key={t} color="var(--chartreuse)">{t}</Sticker>)}
        </div>
        <p className="mt-4 font-mono text-sm max-w-3xl">
          Designed for compliance ops centers running 24/7 across three timezones. Keyboard-first, dense-but-legible at 1440p, with a full audit trail rendered as a scrubbable timeline.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href="https://github.com/SPIT-Hackathon-2026/APEX-0100"
            target="_blank"
            rel="noreferrer"
            className="brutal-border bg-white px-4 py-2 font-mono text-xs font-bold uppercase text-black brutal-shadow-sm brutal-press"
          >
            ↗ GitHub Repo
          </a>
        </div>
      </div>

      <div className="mt-16 border-t border-black/50" />
      <div className="mt-16 text-center">
        <Link to="/" className="inline-flex items-center gap-3 brutal-border-thick bg-[var(--chartreuse)] px-6 py-4 font-display text-xl font-bold uppercase brutal-shadow-lg brutal-press">
          ← Back to Home
        </Link>
      </div>

      <div className="mt-16 border-t border-black/50" />
    </section>
  );
}

function Card({ title, children, bg = "white", fg = "text-black" }: any) {
  return (
    <div className={`brutal-border-thick brutal-shadow p-6 ${fg}`} style={{ backgroundColor: bg }}>
      <h4 className="font-display text-xl font-bold uppercase">{title}</h4>
      <p className="mt-3 font-mono text-sm">{children}</p>
    </div>
  );
}

function DashboardMock() {
  const rows = [
    ["TX-9821", "₹ 48,21,000", "AML", "0.81", "REVIEW"],
    ["TX-9822", "₹ 12,50,000", "Sanctions", "0.94", "BLOCK"],
    ["TX-9823", "₹ 2,30,400", "KYC", "0.42", "PASS"],
    ["TX-9824", "₹ 88,00,000", "PEP", "0.77", "REVIEW"],
    ["TX-9825", "₹ 5,99,000", "AML", "0.12", "PASS"],
  ];
  return (
    <div className="brutal-border-thick brutal-shadow bg-white overflow-x-auto">
      <div className="flex items-center justify-between border-b-[3px] border-black bg-[var(--sand)] p-3 font-mono text-xs uppercase min-w-[720px]">
        <div className="flex items-center gap-3">
          <span className="brutal-border bg-black text-[var(--chartreuse)] px-2 py-0.5">MACRC v2.4</span>
          <span>Council · Mumbai-North</span>
        </div>
        <div className="flex gap-2">
          <span>⌘K Search</span><span>⇧⌘A Approve</span>
        </div>
      </div>
      <div className="grid grid-cols-12 min-w-[720px]">
        <aside className="col-span-3 border-r-[3px] border-black p-3">
          <div className="font-mono text-[10px] uppercase opacity-60">Queue · 142</div>
          <ul className="mt-2 space-y-1 font-mono text-xs">
            {rows.map((r) => (
              <li key={r[0]} className="brutal-border bg-[var(--sand)] p-2 flex justify-between">
                <span>{r[0]}</span><span className="opacity-60">{r[2]}</span>
              </li>
            ))}
          </ul>
        </aside>
        <section className="col-span-6 p-4">
          <div className="font-mono text-[10px] uppercase opacity-60">Live transactions</div>
          <table className="mt-2 w-full font-mono text-xs">
            <thead className="text-left uppercase">
              <tr className="border-b-[3px] border-black"><th className="py-2">ID</th><th>Amount</th><th>Flag</th><th>Risk</th><th>Status</th></tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-b border-black/30 hover:bg-[var(--chartreuse)]/40">
                  <td className="py-2">{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td>
                  <td><RiskBar v={parseFloat(r[3])} /></td>
                  <td><span className={`brutal-border px-1.5 py-0.5 ${r[4] === "BLOCK" ? "bg-black text-[var(--chartreuse)]" : r[4] === "REVIEW" ? "bg-[var(--chartreuse)]" : "bg-white"}`}>{r[4]}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <aside className="col-span-3 border-l-[3px] border-black bg-[var(--sand)] p-3">
          <div className="font-mono text-[10px] uppercase opacity-60">Council Trace · TX-9822</div>
          <ul className="mt-2 space-y-2 font-mono text-[11px]">
            <li className="brutal-border bg-white p-2"><b>AML</b> → match · OFAC entry 4421</li>
            <li className="brutal-border bg-white p-2"><b>KYC</b> → ok</li>
            <li className="brutal-border bg-[var(--chartreuse)] p-2"><b>Sanctions</b> → escalate</li>
            <li className="brutal-border bg-white p-2"><b>PEP</b> → no match</li>
          </ul>
          <button className="mt-3 w-full brutal-border bg-black text-[var(--chartreuse)] py-2 font-bold uppercase brutal-press">Confirm Block</button>
        </aside>
      </div>
    </div>
  );
}

function RiskBar({ v }: { v: number }) {
  return (
    <div className="brutal-border h-3 w-24 bg-white">
      <div className="h-full" style={{ width: `${v * 100}%`, background: v > 0.7 ? "black" : v > 0.4 ? "var(--chartreuse)" : "var(--indigo-pop)" }} />
    </div>
  );
}
