const LINES = [
  "train. compete. level up.",
  "consistency becomes xp.",
  "your progress is something you feel.",
];

export default function GenreSection() {
  return (
    <section
      id="genre"
      className="relative py-24 md:py-32 px-6 md:px-10 bg-cream border-t border-cream-border overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center relative">
        <p className="text-brand-gradient text-xs font-semibold tracking-[0.3em] uppercase mb-5">
          self-rpg apps
        </p>
        <h2 className="text-ink text-[clamp(2rem,5.5vw,4.25rem)] font-bold leading-[1.05] tracking-[-0.035em] mb-12 lowercase">
          your real-life progress is the game.
        </h2>

        {/* Hero graphic — XP path of light */}
        <div className="relative mx-auto max-w-2xl mb-12 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <img
            src="/graphics/genre.png"
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="w-full h-auto rounded-2xl"
            style={{
              filter: "drop-shadow(0 20px 40px rgba(168,85,247,0.15))",
            }}
          />
        </div>

        <ul className="flex flex-col gap-3 md:gap-4 text-ink/75 text-xl md:text-3xl font-light lowercase">
          {LINES.map((line, i) => (
            <li
              key={line}
              className="opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.4 + i * 0.12}s` }}
            >
              {line}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
