const STATS = [
  { value: "14", label: "Years making mobile games" },
  { value: "44M+", label: "Downloads in our portfolio" },
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
          We come from <span className="text-primary">games.</span>
        </h2>
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-3 space-y-5 text-ink/85 text-lg font-light leading-relaxed">
            <p>
              Fourteen years of mobile games. Forty-four million downloads.
              We learned our craft on hypercasual — shipping fast, testing
              brutally, finding what makes someone tap once more.
            </p>
            <p>
              We know what makes a daily loop click. The micro-feedback. The
              cohort-tested retention curves. The production speed that lets
              a studio kill a bad idea in a week instead of a year.
            </p>
            <p>
              Now we're pointing all of that at something bigger than fun.{" "}
              <span className="text-ink font-medium">Real mastery.</span>
            </p>
            <p className="text-ink font-medium text-xl pt-2">
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
