type Pillar = {
  title: string;
  body: string;
  gradient: string;
  icon: JSX.Element;
};

const PILLARS: Pillar[] = [
  {
    title: "real-world routines.",
    body: "daily drills. weekly projects. lifetime progress.",
    gradient: "from-[#a855f7] via-[#a855f7]/70 to-[#7c3aed]",
    icon: <LoopIcon />,
  },
  {
    title: "game mechanics.",
    body: "xp. levels. streaks. the hooks that already work.",
    gradient: "from-[#ec4899] via-[#ec4899]/70 to-[#db2777]",
    icon: <LevelUpIcon />,
  },
  {
    title: "social motivation.",
    body: "show off what you've earned. compete with the people you respect.",
    gradient: "from-[#fb923c] via-[#fb923c]/70 to-[#ea580c]",
    icon: <TrophyIcon />,
  },
];

export default function WhatWeMakeSection() {
  return (
    <section
      id="what"
      className="relative py-24 md:py-32 px-6 md:px-10 bg-cream-elevated border-t border-cream-border"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-brand-gradient text-xs font-semibold tracking-[0.3em] uppercase mb-4">
          what we make
        </p>
        <h2 className="text-ink text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.035em] lowercase mb-12 max-w-3xl">
          improvement, but make it{" "}
          <span className="text-brand-gradient">addictive.</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PILLARS.map((p) => (
            <PillarCard key={p.title} pillar={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarCard({ pillar }: { pillar: Pillar }) {
  return (
    <div className="group relative bg-cream border border-cream-border rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-ink/5 hover:-translate-y-1 transition-all cursor-pointer">
      <div
        className={`aspect-[4/3] relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${pillar.gradient}`}
      >
        {/* Soft inner glow */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(255,255,255,0.25),_transparent_60%)]"
        />
        {/* Decorative offset circle */}
        <div
          aria-hidden
          className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-white/10 blur-xl"
        />
        <div className="relative text-white transition-transform duration-500 group-hover:scale-110">
          {pillar.icon}
        </div>
      </div>
      <div className="p-7">
        <h3 className="text-ink text-xl font-semibold tracking-tight mb-2 lowercase">
          {pillar.title}
        </h3>
        <p className="text-ink-muted text-sm font-light leading-relaxed lowercase">
          {pillar.body}
        </p>
      </div>
    </div>
  );
}

function LoopIcon() {
  return (
    <svg
      width="88"
      height="88"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12a9 9 0 0 1-9 9 9 9 0 0 1-6.4-2.6L3 21" />
      <path d="M3 12a9 9 0 0 1 9-9 9 9 0 0 1 6.4 2.6L21 3" />
      <path d="M21 3v6h-6" />
      <path d="M3 21v-6h6" />
    </svg>
  );
}

function LevelUpIcon() {
  return (
    <svg
      width="88"
      height="88"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 20h4v-6H3v6Z" />
      <path d="M10 20h4V10h-4v10Z" />
      <path d="M17 20h4V4h-4v16Z" />
      <path d="m3 8 4-4 4 4 4-4" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg
      width="88"
      height="88"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}
