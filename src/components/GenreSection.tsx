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
      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text content */}
          <div className="lg:col-span-7 text-center lg:text-left">
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

          {/* Transparent arrow graphic */}
          <div className="lg:col-span-5 relative flex justify-center">
            <img
              src="/graphics/genre.png"
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="w-full max-w-sm h-auto"
              style={{
                filter: "drop-shadow(0 20px 50px rgba(168,85,247,0.25))",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
