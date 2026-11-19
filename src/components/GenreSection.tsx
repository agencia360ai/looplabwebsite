const LINES = [
  "train. compete. level up.",
  "consistency becomes xp.",
  "your progress is something you feel.",
];

export default function GenreSection() {
  return (
    <section
      id="genre"
      className="relative py-24 md:py-32 px-6 md:px-10 bg-cream border-t border-cream-border overflow-clip-safe"
    >
      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 items-center">
          {/* Text content */}
          <div className="reveal lg:col-span-7 text-center lg:text-left">
            <p className="text-brand-gradient text-xs font-semibold tracking-[0.3em] uppercase mb-5">
              self-rpg apps
            </p>
            <h2 className="text-ink text-[clamp(2rem,5.5vw,4.25rem)] font-bold leading-[1.05] tracking-[-0.035em] mb-10 lowercase">
              your real-life progress is the game.
            </h2>
            <ul className="flex flex-col gap-3 md:gap-4 text-ink/75 text-xl md:text-3xl font-light lowercase">
              {LINES.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          <div className="reveal lg:col-span-5">
            <PlayerCard />
          </div>
        </div>
      </div>
    </section>
  );
}

// Illustrative game HUD for a real-life skill: what "your progress is the
// game" looks like inside one of our apps.
const QUESTS = [
  { label: "20-min daily routine", xp: 120, done: true },
  { label: "50 front kicks", xp: 80, done: true },
  { label: "learn taegeuk 2", xp: 200, done: false },
];

const STATS = [
  { value: "12", label: "day streak" },
  { value: "+340", label: "xp today" },
  { value: "#8", label: "in league" },
];

function PlayerCard() {
  return (
    <div className="relative w-full max-w-sm mx-auto" aria-hidden="true">
      <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-[#a855f7]/35 via-[#ec4899]/25 to-[#fb923c]/30 blur-2xl" />

      <div className="relative rounded-3xl bg-[#0e0e14] p-6 text-white shadow-2xl ring-1 ring-white/10 text-left">
        <div className="hud-float absolute -top-4 -right-3 rounded-full bg-brand-gradient px-3 py-1.5 text-xs font-bold text-black shadow-lg">
          +50 xp
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-full bg-brand-gradient p-[2px]">
            <img
              src="/apps/hud-avatar.webp"
              alt=""
              loading="lazy"
              width={56}
              height={56}
              className="h-14 w-14 rounded-full bg-[#1b1b26]"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm text-white/50 lowercase">
              you · taekwondo
            </p>
            <div className="flex items-center gap-2.5">
              <p className="text-xl font-semibold tracking-tight lowercase">
                level 7
              </p>
              <span className="whitespace-nowrap rounded-full border border-yellow-300/40 bg-yellow-300/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-yellow-200">
                yellow belt
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="mb-2 flex justify-between text-xs lowercase">
            <span className="text-white/50">xp to level 8</span>
            <span className="font-medium text-white/80">1,240 / 2,000</span>
          </div>
          <div className="relative h-3 overflow-hidden rounded-full bg-white/10">
            <div className="absolute inset-y-0 left-0 w-[62%] overflow-hidden rounded-full bg-brand-gradient">
              <div className="hud-shine absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-2.5">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-white/[0.05] px-2 py-3 text-center"
            >
              <p className="text-lg font-bold tracking-tight">{s.value}</p>
              <p className="text-[10px] uppercase tracking-wider text-white/45">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-6 mb-2.5 text-[10px] uppercase tracking-[0.2em] text-white/40">
          today's quests
        </p>
        <ul className="space-y-2">
          {QUESTS.map((q) => (
            <li
              key={q.label}
              className="flex items-center gap-3 rounded-xl bg-white/[0.04] px-3 py-2.5 text-sm lowercase"
            >
              {q.done ? (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-gradient">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
              ) : (
                <span className="h-5 w-5 rounded-full border-2 border-white/25" />
              )}
              <span className={q.done ? "text-white/85" : "text-white/55"}>
                {q.label}
              </span>
              <span className="ml-auto text-xs font-semibold text-[#fb923c]">
                +{q.xp} xp
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
