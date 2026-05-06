type Pillar = {
  title: string;
  body: string;
  mascot: string;
  alt: string;
};

const PILLARS: Pillar[] = [
  {
    title: "real-world routines.",
    body: "daily drills. weekly projects. lifetime progress.",
    mascot: "/mascots/sensei-fight.png",
    alt: "Martial artist sensei",
  },
  {
    title: "game mechanics.",
    body: "xp. levels. streaks. the hooks that already work.",
    mascot: "/mascots/racer-trophy.png",
    alt: "Racer with trophy",
  },
  {
    title: "social motivation.",
    body: "show off what you've earned. compete with the people you respect.",
    mascot: "/mascots/rapper-mic.png",
    alt: "Rapper with mic",
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
    <div className="group relative bg-cream border border-cream-border rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-ink/5 hover:-translate-y-1 transition-all">
      <div className="aspect-[4/3] flex items-end justify-center bg-gradient-to-b from-cream-elevated to-cream overflow-hidden">
        <img
          src={pillar.mascot}
          alt={pillar.alt}
          loading="lazy"
          className="h-[88%] w-auto object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.05]"
        />
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
