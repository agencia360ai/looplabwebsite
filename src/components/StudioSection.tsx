const STATS = [
  { value: "14", label: "Years shipping mobile" },
  { value: "200+", label: "Prototypes" },
  { value: "44M+", label: "Downloads" },
  { value: "36%", label: "Category YoY growth" },
];

export default function StudioSection() {
  return (
    <section
      id="studio"
      className="relative py-24 md:py-32 px-6 md:px-10 border-t border-border/40 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">
          The Studio
        </p>
        <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.04em] uppercase mb-12 max-w-4xl">
          The earned <span className="text-primary">secret.</span>
        </h2>
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-3 space-y-5 text-foreground/80 text-lg font-light leading-relaxed">
            <p>
              The market thinks gamified-learning is a content problem. We know
              it's a{" "}
              <span className="text-foreground font-medium">
                production-system problem
              </span>
              .
            </p>
            <p>
              Every breakout self-improvement app — Duolingo, Strava, Calm —
              uses a fraction of the production rigor mobile-games studios have
              built. Each took 4–7 years to build one vertical. With our
              process, we ship a flagship-quality MVP in weeks and a polished
              launch product in under four months.
            </p>
            <p>
              Companies entering from learning-app or wellness-app backgrounds
              lack the production system. Studios that have it are still
              shipping hyper-casual.
            </p>
            <p className="text-foreground font-medium text-xl">
              Looplab is the bridge.
            </p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/[0.03] border border-white/10 rounded-lg p-5 md:p-6"
              >
                <p className="text-primary text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2">
                  {stat.value}
                </p>
                <p className="text-foreground/60 text-[11px] tracking-[0.15em] uppercase leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
