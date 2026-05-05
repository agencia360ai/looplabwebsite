import { useEffect, useState } from "react";

const ROTATING = [
  "master.",
  "champion.",
  "legend.",
  "creator.",
  "protagonist.",
];

const LONGEST = ROTATING.reduce((a, b) => (a.length >= b.length ? a : b));

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
      className="relative h-screen min-h-[720px] w-full overflow-hidden bg-black font-readex"
    >
      {/* Background — soft brand-gradient glows */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute -top-1/4 -left-1/4 w-[60%] h-[60%] rounded-full bg-[#a855f7]/20 blur-[140px]" />
        <div className="absolute -bottom-1/4 -right-1/4 w-[60%] h-[60%] rounded-full bg-[#ec4899]/20 blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] rounded-full bg-[#fb923c]/10 blur-[120px]" />
      </div>

      {/* Foreground content */}
      <div className="relative h-full w-full">
        {/* Top-right stat */}
        <div className="absolute right-4 md:right-20 top-[14%] z-10">
          <div className="flex items-center gap-3 justify-end">
            <div className="hidden md:block h-px w-24 bg-white/40 rotate-[20deg]" />
            <span className="text-4xl md:text-5xl font-medium tracking-tight text-white">
              +14
            </span>
          </div>
          <p className="text-xs md:text-sm text-white/70 mt-1 text-right lowercase">
            years shipping
          </p>
        </div>

        {/* Staggered headlines */}
        <h1
          className="hero-title absolute text-white font-medium text-[16vw] md:text-[12vw] left-4 md:left-10 top-[14%] opacity-0 animate-fade-up lowercase"
          style={{ animationDelay: "0.15s" }}
        >
          become
        </h1>
        <h1
          className="hero-title absolute text-white/95 font-medium text-[16vw] md:text-[12vw] right-4 md:right-10 top-[36%] opacity-0 animate-fade-up lowercase"
          style={{ animationDelay: "0.3s" }}
        >
          a
        </h1>
        <h1
          className="hero-title absolute font-medium text-[16vw] md:text-[12vw] left-[8%] md:left-[18%] top-[54%] opacity-0 animate-fade-up lowercase whitespace-nowrap"
          style={{ animationDelay: "0.45s" }}
        >
          <RotatingHeroWord />
        </h1>

        {/* Description */}
        <p
          className="absolute left-4 md:left-10 top-[44%] max-w-[260px] text-[14px] md:text-[15px] leading-snug text-white/90 opacity-0 animate-fade-up lowercase"
          style={{ animationDelay: "0.6s" }}
        >
          master a craft.
          <br />
          one loop at a time.
        </p>

        {/* Bottom-left stat */}
        <div className="absolute left-4 md:left-20 bottom-[24%] md:bottom-[22%] z-10">
          <div className="flex items-center gap-3">
            <span className="text-4xl md:text-5xl font-medium tracking-tight text-white">
              200+
            </span>
            <div className="hidden md:block h-px w-24 bg-white/40 rotate-[-20deg]" />
          </div>
          <p className="text-xs md:text-sm text-white/70 mt-1 lowercase">
            prototypes shipped
          </p>
        </div>

        {/* Bottom-right stat */}
        <div className="absolute right-4 md:right-20 bottom-[24%] md:bottom-[22%] z-10 text-right">
          <div className="flex items-center gap-3 justify-end">
            <div className="hidden md:block h-px w-24 bg-white/40 rotate-[-20deg]" />
            <span className="text-4xl md:text-5xl font-medium tracking-tight text-white">
              44m+
            </span>
          </div>
          <p className="text-xs md:text-sm text-white/70 mt-1 text-right lowercase">
            downloads
          </p>
        </div>

        {/* Mascot strip — peeks up from the bottom edge */}
        <div className="absolute inset-x-0 bottom-0 h-[22vh] md:h-[20vh] flex items-end justify-center pointer-events-none z-0">
          <div className="flex items-end justify-center gap-1 md:gap-3 px-2 md:px-6 max-w-7xl w-full">
            {HERO_MASCOTS.map((m, i) => (
              <MascotImage
                key={m.discipline}
                discipline={m.discipline}
                img={m.img}
                delay={0.7 + i * 0.08}
              />
            ))}
          </div>
        </div>

        {/* Bottom gradient — fades mascots into black */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black z-0"
        />
      </div>
    </section>
  );
}

function RotatingHeroWord() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setI((n) => (n + 1) % ROTATING.length),
      2400,
    );
    return () => clearInterval(id);
  }, []);
  return (
    <span className="relative inline-block whitespace-nowrap text-brand-gradient">
      {ROTATING.map((w, idx) => (
        <span
          key={w}
          aria-hidden={idx !== i}
          className={`absolute left-0 top-0 transition-all duration-700 ease-out ${
            idx === i
              ? "opacity-100 translate-y-0 blur-0"
              : "opacity-0 translate-y-4 blur-md"
          }`}
        >
          {w}
        </span>
      ))}
      <span aria-hidden className="invisible">
        {LONGEST}
      </span>
      <span className="sr-only" aria-live="polite">
        {ROTATING[i]}
      </span>
    </span>
  );
}

function MascotImage({
  discipline,
  img,
  delay,
}: {
  discipline: string;
  img: string;
  delay: number;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <div
      className="flex-1 min-w-0 opacity-0 animate-fade-up"
      style={{ animationDelay: `${delay}s` }}
    >
      {failed ? (
        <div className="flex items-end justify-center h-full pb-2">
          <span className="text-white/30 text-[10px] tracking-[0.2em] uppercase">
            {discipline}
          </span>
        </div>
      ) : (
        <img
          src={img}
          alt={discipline}
          loading="eager"
          onError={() => setFailed(true)}
          className="block w-full h-auto max-h-[28vh] md:max-h-[26vh] object-contain object-bottom mx-auto"
        />
      )}
    </div>
  );
}
