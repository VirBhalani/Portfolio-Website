// Pure-CSS "3D" isometric stack — no WebGL, works everywhere.
import { motion } from "motion/react";

export function IsoStack() {
  return (
    <div className="relative h-[420px] w-full select-none [perspective:1200px]">
      <motion.div
        className="absolute inset-0 grid place-items-center [transform-style:preserve-3d]"
        animate={{ rotateY: [0, 8, -8, 0], rotateX: [10, 14, 10] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* base grid */}
        <div className="absolute h-72 w-72 brutal-border bg-[var(--sand)]" style={{ transform: "rotateX(60deg) rotateZ(-45deg) translateZ(-80px)" }}>
          <div className="grid-bg absolute inset-0" />
        </div>

        {/* floating cards */}
        <Card y={-40} x={-90} z={20} color="var(--chartreuse)" label="UX" rot={-6} />
        <Card y={10} x={20} z={60} color="white" label="DATA" rot={4} />
        <Card y={70} x={-30} z={110} color="var(--indigo-pop)" label="CODE" fg="white" rot={-3} />
        <Card y={-100} x={70} z={140} color="black" label="AI" fg="var(--chartreuse)" rot={8} />

        {/* floating accent shapes */}
        <motion.div
          className="absolute h-10 w-10 brutal-border bg-[var(--chartreuse)]"
          style={{ transform: "translate3d(140px,-140px,180px) rotate(45deg)" }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute h-14 w-14 rounded-full brutal-border bg-white"
          style={{ transform: "translate3d(-150px,120px,160px)" }}
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
}

function Card({
  x, y, z, color, label, fg = "black", rot = 0,
}: { x: number; y: number; z: number; color: string; label: string; fg?: string; rot?: number }) {
  return (
    <div
      className="absolute h-32 w-44 brutal-border brutal-shadow flex items-end p-3 font-display font-bold text-2xl uppercase"
      style={{
        backgroundColor: color,
        color: fg,
        transform: `translate3d(${x}px, ${y}px, ${z}px) rotate(${rot}deg)`,
      }}
    >
      {label}
    </div>
  );
}
