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
      className="relative py-24 md:py-32 px-6 md:px-10 bg-cream border-t border-cream-border"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">
          The Studio
        </p>
        <h2 className="text-ink text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.04em] uppercase mb-12 max-w-4xl">
          The earned <span className="text-primary">secret.</span>
        </h2>
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-3 space-y-5 text-ink/85 text-lg font-light leading-relaxed">
            <p>
              The market thinks gamified-learning is a content problem. We
              know it's a{" "}
              <span className="text-ink font-medium">
                production-system problem
              </span>
              .
            </p>
            <p>
              Studios entering from learning or wellness lack the production
              system. Studios that have it are still shipping hyper-casual.
            </p>
            <p className="text-ink font-medium text-xl">
              Looplab is the bridge.
            </p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-cream-elevated border border-cream-border rounded-lg p-5 md:p-6"
              >
                <p className="text-primary text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2">
                  {stat.value}
                </p>
                <p className="text-ink-muted text-[11px] tracking-[0.15em] uppercase leading-snug">
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
