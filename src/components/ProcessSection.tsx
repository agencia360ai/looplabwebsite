const STEPS = [
  {
    n: "01",
    title: "Concept in a week.",
    body: "No decks. We prototype the loop and feel it on a phone.",
  },
  {
    n: "02",
    title: "Cohort-test on day one.",
    body: "Real users. Real retention curves. The data decides what's real.",
  },
  {
    n: "03",
    title: "Cut what doesn't loop.",
    body: "If it doesn't bring them back, it dies. No vanity. No sunk cost.",
  },
  {
    n: "04",
    title: "Scale what does.",
    body: "UA, polish, ship. Then start the next one.",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="relative py-24 md:py-32 px-6 md:px-10 bg-cream border-t border-cream-border"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">
          The Playbook
        </p>
        <h2 className="text-ink text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.04em] uppercase mb-6 max-w-4xl">
          We ship like hypercasual.{" "}
          <span className="text-primary">We learn like hypercasual.</span>
        </h2>
        <p className="text-ink-muted text-lg md:text-xl font-light max-w-2xl mb-16 leading-relaxed">
          Test fast. Iterate. Repeat. Six apps in twelve months because we
          kill the wrong ones early.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="bg-cream-elevated border border-cream-border rounded-lg p-7 hover:border-primary/50 hover:shadow-lg hover:shadow-ink/5 transition-all"
            >
              <p className="text-primary text-xs font-semibold tracking-[0.25em] mb-5">
                {s.n}
              </p>
              <h3 className="text-ink text-xl font-semibold mb-3 tracking-tight">
                {s.title}
              </h3>
              <p className="text-ink-muted text-sm font-light leading-relaxed">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
