const HERO_MASCOTS = [
  { discipline: "Martial Artist", img: "/mascots/sensei-fight.png" },
  { discipline: "Boxer", img: "/mascots/boxer-jab.png" },
  { discipline: "Racer", img: "/mascots/racer-trophy.png" },
  { discipline: "Baker", img: "/mascots/baker-flame.png" },
  { discipline: "Rapper", img: "/mascots/rapper-mic.png" },
];

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden bg-black font-readex flex flex-col"
    >
      {/* Background — soft brand-gradient glows */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-[60%] h-[60%] rounded-full bg-[#a855f7]/20 blur-[140px]" />
        <div className="absolute -bottom-1/4 -right-1/4 w-[60%] h-[60%] rounded-full bg-[#ec4899]/20 blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] rounded-full bg-[#fb923c]/10 blur-[120px]" />
      </div>

      {/* Centered hero content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 md:px-10 pt-32 pb-8 md:pt-40 md:pb-16">
        <h1
          className="hero-title text-white text-[clamp(2.5rem,8vw,6rem)] font-medium leading-[0.95] tracking-[-0.04em] lowercase max-w-5xl opacity-0 animate-fade-up text-balance"
          style={{ animationDelay: "0.1s" }}
        >
          become the{" "}
          <span className="text-brand-gradient">main character</span>
          <br className="hidden sm:inline" /> of your craft.
        </h1>

        <p
          className="text-white/85 text-lg md:text-2xl font-light mt-6 md:mt-8 max-w-2xl opacity-0 animate-fade-up lowercase"
          style={{ animationDelay: "0.3s" }}
        >
          apps where practice is progression.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center gap-3 mt-8 md:mt-10 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <button
            type="button"
            className="bg-brand-gradient text-white font-medium px-8 py-3.5 text-sm rounded-full hover:brightness-110 active:scale-[0.97] transition-all lowercase tracking-wide"
            onClick={() => {
              const el = document.querySelector("#join");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            start the journey
          </button>
          <button
            type="button"
            className="border border-white/20 text-white font-medium px-8 py-3.5 text-sm rounded-full hover:bg-white/5 active:scale-[0.97] transition-all lowercase tracking-wide"
            onClick={() => {
              const el = document.querySelector("#genre");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            see how it works
          </button>
        </div>

        <p
          className="text-white/50 text-xs md:text-sm font-light mt-10 md:mt-14 tracking-wide lowercase opacity-0 animate-fade-up"
          style={{ animationDelay: "0.7s" }}
        >
          panama city · 14 years making games · 44m+ downloads
        </p>
      </div>

      {/* Mascot strip — peeks up from the bottom edge */}
      <div className="relative w-full h-[26vh] md:h-[28vh] flex items-end justify-center pointer-events-none">
        <div className="flex items-end justify-center gap-1 md:gap-3 px-2 md:px-6 max-w-7xl w-full">
          {HERO_MASCOTS.map((m, i) => (
            <MascotImage
              key={m.discipline}
              discipline={m.discipline}
              img={m.img}
              delay={0.6 + i * 0.08}
              hideOnMobile={i === 1 || i === 4}
            />
          ))}
        </div>
        {/* Bottom gradient — fades mascots into black */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-black"
        />
      </div>
    </section>
  );
}

function MascotImage({
  discipline,
  img,
  delay,
  hideOnMobile,
}: {
  discipline: string;
  img: string;
  delay: number;
  hideOnMobile?: boolean;
}) {
  return (
    <div
      className={`flex-1 min-w-0 opacity-0 animate-fade-up ${
        hideOnMobile ? "hidden sm:block" : ""
      }`}
      style={{ animationDelay: `${delay}s` }}
    >
      <img
        src={img}
        alt={discipline}
        loading="eager"
        className="block w-full h-auto max-h-[26vh] md:max-h-[28vh] object-contain object-bottom mx-auto"
      />
    </div>
  );
}
