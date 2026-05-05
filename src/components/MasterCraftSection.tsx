type Mascot = {
  discipline: string;
  img: string | null;
};

const MASCOTS: Mascot[] = [
  { discipline: "Martial Artist", img: "/mascots/sensei-fight.png" },
  { discipline: "Boxer", img: "/mascots/boxer-jab.png" },
  { discipline: "Racer", img: "/mascots/racer-trophy.png" },
  { discipline: "Baker", img: "/mascots/baker-flame.png" },
  { discipline: "Rapper", img: "/mascots/rapper-mic.png" },
  { discipline: "Calligrapher", img: null },
];

export default function MasterCraftSection() {
  return (
    <section className="relative bg-cream py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4 text-center">
          The Cast
        </p>
        <h2 className="text-ink text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[1.05] tracking-[-0.03em] uppercase mb-5 text-center">
          Master a craft.{" "}
          <span className="text-primary">One loop at a time.</span>
        </h2>
        <p className="text-ink-muted text-base md:text-lg font-light text-center max-w-2xl mx-auto mb-14 md:mb-20">
          Six disciplines. Six mascots. One production system. Each Self-RPG
          App is led by a character with personality — not a curriculum.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-5">
          {MASCOTS.map((m) => (
            <MascotTile key={m.discipline} mascot={m} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MascotTile({ mascot }: { mascot: Mascot }) {
  return (
    <div className="group relative flex flex-col items-center text-center">
      <div className="relative w-full aspect-[3/4] flex items-end justify-center">
        {/* Soft warm spot behind the mascot */}
        <div className="absolute inset-x-4 bottom-4 h-2/3 rounded-full bg-cream-elevated blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {mascot.img ? (
          <img
            src={mascot.img}
            alt={mascot.discipline}
            loading="lazy"
            className="relative h-full w-auto object-contain transition-transform duration-500 group-hover:-translate-y-2"
          />
        ) : (
          <div className="relative h-full w-full flex items-center justify-center">
            <span className="text-ink/15 text-6xl font-bold">?</span>
          </div>
        )}
      </div>
      <p className="mt-4 text-ink text-sm md:text-base font-semibold tracking-tight">
        {mascot.discipline}
      </p>
    </div>
  );
}
