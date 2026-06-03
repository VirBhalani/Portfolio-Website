export function Marquee({
  text,
  reverse = false,
  bg = "bg-black",
  fg = "text-[var(--sand)]",
  size = "text-6xl md:text-8xl",
}: {
  text: string;
  reverse?: boolean;
  bg?: string;
  fg?: string;
  size?: string;
}) {
  const items = Array.from({ length: 6 });
  return (
    <div className={`marquee ${reverse ? "marquee-reverse" : ""} ${bg} ${fg} brutal-border border-x-0 py-4`}>
      <div className="marquee-track">
        {items.map((_, i) => (
          <span key={i} className={`font-display font-bold uppercase ${size} whitespace-nowrap flex items-center gap-8`}>
            {text}
            <span className="inline-block h-6 w-6 rotate-45 bg-[var(--chartreuse)] brutal-border" />
          </span>
        ))}
      </div>
      <div className="marquee-track" aria-hidden>
        {items.map((_, i) => (
          <span key={i} className={`font-display font-bold uppercase ${size} whitespace-nowrap flex items-center gap-8`}>
            {text}
            <span className="inline-block h-6 w-6 rotate-45 bg-[var(--chartreuse)] brutal-border" />
          </span>
        ))}
      </div>
    </div>
  );
}
