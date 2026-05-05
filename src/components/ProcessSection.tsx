const PILLARS = [
  {
    n: "01",
    title: "Daily loops",
    body: "Five-minute drills, weekly projects, meditative rituals. Every Self-RPG app earns its return-tomorrow click.",
  },
  {
    n: "02",
    title: "Mascot-driven instruction",
    body: "Not flashcards. A character with personality, voice, and a relationship with the user.",
  },
  {
    n: "03",
    title: "Feedback density",
    body: "The instant-feedback-per-session count from hyper-casual, applied to skill acquisition.",
  },
  {
    n: "04",
    title: "Cohort-tested retention",
    body: "Every loop tuned against retention curves before it ships. We don't guess — we run the data.",
  },
  {
    n: "05",
    title: "UA mastery",
    body: "Fourteen years of shipping mobile means the funnel is solved before launch, not after.",
  },
  {
    n: "06",
    title: "Identity, not curriculum",
    body: "People don't want to learn. They want to become. The product leads with who you're turning into.",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="relative py-24 md:py-32 px-6 md:px-10 border-t border-border/40"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">
          The Process
        </p>
        <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.04em] uppercase mb-6 max-w-4xl">
          We <span className="text-primary">run the loop.</span>
        </h2>
        <p className="text-foreground/70 text-lg md:text-xl font-light max-w-2xl mb-16 leading-relaxed">
          The retention machinery of mobile games maps one-to-one onto skill
          acquisition. Most operators outside hyper-casual aren't running the
          playbook. We are.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PILLARS.map((p) => (
            <div
              key={p.n}
              className="bg-white/[0.03] border border-white/10 rounded-lg p-7 hover:border-primary/40 transition-colors"
            >
              <p className="text-primary text-xs font-semibold tracking-[0.25em] mb-5">
                {p.n}
              </p>
              <h3 className="text-foreground text-xl font-semibold mb-3 tracking-tight">
                {p.title}
              </h3>
              <p className="text-foreground/60 text-sm font-light leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
