import RotatingText from "./RotatingText";

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
      className="relative min-h-screen flex flex-col bg-hero-bg overflow-hidden pt-24 md:pt-28"
    >
      {/* Soft warm radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,_hsl(var(--primary)/0.10),_transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_100%,_hsl(280_80%_60%/0.10),_transparent_70%)]"
      />

      {/* Top: text */}
      <div className="relative z-10 text-center px-6 md:px-10 max-w-5xl mx-auto">
        <p
          className="opacity-0 animate-fade-up text-primary text-xs md:text-sm font-semibold tracking-[0.4em] uppercase mb-5"
          style={{ animationDelay: "0.1s" }}
        >
          Run the loop.
        </p>

        <h1
          className="opacity-0 animate-fade-up text-[clamp(2.25rem,7vw,5.25rem)] font-bold leading-[1.05] tracking-[-0.045em] text-foreground mb-4 md:mb-6 uppercase"
          style={{ animationDelay: "0.2s" }}
        >
          We help users become
          <br />
          <span className="text-primary">
            <RotatingText />
          </span>
        </h1>

        <p
          className="opacity-0 animate-fade-up text-foreground/85 text-[clamp(1rem,2vw,1.5rem)] font-light max-w-2xl mx-auto"
          style={{ animationDelay: "0.45s" }}
        >
          Self-RPG Apps. Your real-life progression is the game.
        </p>

        <div
          className="opacity-0 animate-fade-up flex flex-wrap items-center justify-center gap-3 font-bold mt-7 md:mt-9"
          style={{ animationDelay: "0.65s" }}
        >
          <button
            type="button"
            className="bg-primary text-primary-foreground px-6 py-3 md:px-8 md:py-4 text-sm rounded-sm cursor-pointer hover:brightness-110 transition-all active:scale-[0.97] uppercase tracking-widest"
            onClick={() => {
              const el = document.querySelector("#contact");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Partner with us
          </button>
          <button
            type="button"
            className="bg-white text-background px-6 py-3 md:px-8 md:py-4 text-sm rounded-sm cursor-pointer hover:brightness-90 transition-all active:scale-[0.97] uppercase tracking-widest"
            onClick={() => {
              const el = document.querySelector("#apps");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            See the apps
          </button>
        </div>
      </div>

      {/* Bottom: mascot lineup */}
      <div className="relative flex-1 flex items-end justify-center mt-6 md:mt-10 min-h-[38vh] md:min-h-[46vh]">
        <div className="flex items-end justify-center gap-1 md:gap-3 px-2 md:px-6 max-w-7xl w-full">
          {HERO_MASCOTS.map((m, i) => (
            <div
              key={m.discipline}
              className="flex-1 min-w-0 opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.7 + i * 0.08}s` }}
            >
              <img
                src={m.img}
                alt={m.discipline}
                loading="eager"
                className="block w-full h-auto max-h-[55vh] object-contain object-bottom"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Floor: trust line */}
      <p
        className="relative z-10 opacity-0 animate-fade-up text-muted-foreground/70 text-[10px] md:text-xs font-light text-center tracking-wider pb-4 md:pb-6 px-4"
        style={{ animationDelay: "1.2s" }}
      >
        Mobile studio · Panama City · 14 years · 200+ prototypes · 44M+ downloads
      </p>
    </section>
  );
}
