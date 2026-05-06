const STEPS = [
  {
    n: "01",
    title: "concept in a week.",
    body: "no decks. we prototype the loop and feel it on a phone.",
  },
  {
    n: "02",
    title: "cohort-test on day one.",
    body: "real users. real retention curves. the data decides what's real.",
  },
  {
    n: "03",
    title: "cut what doesn't loop.",
    body: "no vanity. if it doesn't bring them back, it dies.",
  },
  {
    n: "04",
    title: "scale what does.",
    body: "ua, polish, ship. then start the next one.",
  },
];

export default function PlaybookSection() {
  return (
    <section
      id="process"
      className="relative py-24 md:py-32 px-6 md:px-10 bg-cream border-t border-cream-border"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-brand-gradient text-xs font-semibold tracking-[0.3em] uppercase mb-4">
          the playbook
        </p>
        <h2 className="text-ink text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.035em] lowercase mb-6 max-w-4xl">
          we move like{" "}
          <span className="text-brand-gradient">hypercasual.</span>
        </h2>
        <p className="text-ink-muted text-lg md:text-xl font-light max-w-2xl mb-16 leading-relaxed lowercase">
          test fast. iterate. keep what works. fourteen years of mobile games
          taught us how to find a loop and feed it.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="bg-cream-elevated border border-cream-border rounded-2xl p-7 hover:border-primary/40 hover:shadow-lg hover:shadow-ink/5 hover:-translate-y-1 transition-all"
            >
              <p className="text-brand-gradient text-xs font-semibold tracking-[0.25em] mb-5">
                {s.n}
              </p>
              <h3 className="text-ink text-lg font-semibold mb-3 tracking-tight lowercase">
                {s.title}
              </h3>
              <p className="text-ink-muted text-sm font-light leading-relaxed lowercase">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
