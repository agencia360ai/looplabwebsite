type App = {
  id: string;
  title: string;
  tagline: string;
  mascot: string | null;
  status: string;
  featured: boolean;
};

const APPS: App[] = [
  {
    id: "martial-artist",
    title: "Become a Martial Artist",
    tagline: "Daily kata. Mascot sensei. Weekly belts.",
    mascot: "/mascots/sensei-fight.png",
    status: "In production",
    featured: true,
  },
  {
    id: "racer",
    title: "Become a Racer",
    tagline: "Sim laps. Drill apexes. Podium ladder.",
    mascot: "/mascots/racer-trophy.png",
    status: "In production",
    featured: true,
  },
  {
    id: "boxer",
    title: "Become a Boxer",
    tagline: "Round-by-round drills. Pad feedback. Sparring loop.",
    mascot: "/mascots/boxer-jab.png",
    status: "In production",
    featured: true,
  },
  {
    id: "rapper",
    title: "Become a Rapper",
    tagline: "Bars. Flow drills. Beat-bank cyphers.",
    mascot: "/mascots/rapper-mic.png",
    status: "In production",
    featured: true,
  },
  {
    id: "baker",
    title: "Become a Baker",
    tagline: "Recipe streaks. Weekly bake projects. A pâtissier guide.",
    mascot: "/mascots/baker-flame.png",
    status: "In production",
    featured: true,
  },
  {
    id: "calligrapher",
    title: "Become a Calligrapher",
    tagline: "Stroke drills. Daily glyphs. A gallery worth sharing.",
    mascot: null,
    status: "On the loop",
    featured: false,
  },
];

export default function AppsSection() {
  return (
    <section
      id="apps"
      className="relative py-24 md:py-32 px-6 md:px-10 bg-cream border-t border-cream-border"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">
          The Catalog
        </p>
        <h2 className="text-ink text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.04em] uppercase mb-6 max-w-3xl">
          Six Self-RPG Apps.{" "}
          <span className="text-primary">Twelve months.</span>
        </h2>
        <p className="text-ink-muted text-lg md:text-xl font-light max-w-2xl mb-16 leading-relaxed">
          Each one a complete production loop — not a content library.
          Identity-first. Mascot-led. Daily.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {APPS.map((app, i) => (
            <AppCard key={app.id} app={app} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AppCard({ app, index }: { app: App; index: number }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <div className="group relative aspect-[3/4] bg-cream-elevated border border-cream-border rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-lg hover:shadow-ink/5 transition-all">
      <span className="absolute top-5 right-5 text-[5rem] leading-none font-bold text-ink/[0.06] tracking-tight select-none">
        {num}
      </span>
      {app.mascot && (
        <img
          src={app.mascot}
          alt={app.title}
          loading="lazy"
          className="absolute inset-x-0 bottom-0 mx-auto h-[88%] w-auto object-contain transition-transform duration-700 group-hover:scale-[1.03]"
        />
      )}
      <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-cream-elevated via-cream-elevated/95 to-transparent pt-16">
        <div className="flex items-center gap-2 mb-3">
          <span
            className={`size-1.5 rounded-full ${
              app.featured ? "bg-primary" : "bg-ink/30"
            }`}
          />
          <span className="text-[10px] tracking-[0.2em] uppercase text-ink-muted">
            {app.status}
          </span>
        </div>
        <h3 className="text-ink text-lg md:text-xl font-semibold tracking-tight mb-1">
          {app.title}
        </h3>
        <p className="text-ink-muted text-sm font-light">{app.tagline}</p>
      </div>
    </div>
  );
}
