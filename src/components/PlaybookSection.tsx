type Step = {
  n: string;
  title: string;
  body: string;
  icon: JSX.Element;
};

const STEPS: Step[] = [
  {
    n: "01",
    title: "mvp in 4 weeks.",
    body: "no decks. we prototype the loop and feel it on a phone.",
    icon: <SparkIcon />,
  },
  {
    n: "02",
    title: "validate in 2 weeks.",
    body: "real users. real retention curves. the data decides what's real.",
    icon: <PulseIcon />,
  },
  {
    n: "03",
    title: "iterate & improve.",
    body: "no vanity. cut what doesn't bring them back. double down on what does.",
    icon: <TuneIcon />,
  },
  {
    n: "04",
    title: "master the craft.",
    body: "every project earns its expertise. ship, polish, then start the next one.",
    icon: <CrownIcon />,
  },
];

export default function PlaybookSection() {
  return (
    <section
      id="process"
      className="relative py-24 md:py-32 px-6 md:px-10 bg-cream border-t border-cream-border overflow-hidden"
    >
      {/* Atmospheric decoration */}
      <div
        aria-hidden="true"
        className="absolute -top-10 -right-20 w-[28rem] h-[22rem] pointer-events-none opacity-[0.07] hidden md:block"
        style={{
          backgroundImage: "url('/graphics/playbook.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right top",
          mixBlendMode: "luminosity",
        }}
      />
      <div className="max-w-6xl mx-auto relative">
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
              className="group bg-cream-elevated border border-cream-border rounded-2xl p-7 hover:border-primary/40 hover:shadow-lg hover:shadow-ink/5 hover:-translate-y-1 transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between mb-5">
                <p className="text-brand-gradient text-xs font-semibold tracking-[0.25em]">
                  {s.n}
                </p>
                <div className="text-ink/30 group-hover:text-ink/60 transition-colors">
                  {s.icon}
                </div>
              </div>
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

function SparkIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </svg>
  );
}

function PulseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

function TuneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="4" y1="21" x2="4" y2="14" />
      <line x1="4" y1="10" x2="4" y2="3" />
      <line x1="12" y1="21" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12" y2="3" />
      <line x1="20" y1="21" x2="20" y2="16" />
      <line x1="20" y1="12" x2="20" y2="3" />
      <line x1="1" y1="14" x2="7" y2="14" />
      <line x1="9" y1="8" x2="15" y2="8" />
      <line x1="17" y1="16" x2="23" y2="16" />
    </svg>
  );
}

function CrownIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.964.734H5.815a1 1 0 0 1-.964-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" />
      <path d="M5 21h14" />
    </svg>
  );
}
