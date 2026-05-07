type Pillar = {
  title: string;
  body: string;
  image: string;
  alt: string;
};

const PILLARS: Pillar[] = [
  {
    title: "routines that feel like games.",
    body: "real-world practice, packaged into loops you actually want to come back to.",
    image: "/graphics/pillar-loop.png",
    alt: "",
  },
  {
    title: "hooks that keep you progressing.",
    body: "xp, levels, streaks — the mechanics proven to make people show up tomorrow.",
    image: "/graphics/pillar-bars.png",
    alt: "",
  },
  {
    title: "moments worth showing off.",
    body: "earn badges, climb leaderboards, compete with the people whose respect you want.",
    image: "/graphics/pillar-trophy.png",
    alt: "",
  },
];

export default function WhatWeMakeSection() {
  return (
    <section
      id="what"
      className="relative py-24 md:py-32 px-6 md:px-10 bg-cream-elevated border-t border-cream-border overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative">
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
      <div className="aspect-[4/3] relative overflow-hidden">
        <img
          src={pillar.image}
          alt={pillar.alt}
          aria-hidden="true"
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
