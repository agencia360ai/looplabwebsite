import { useEffect, useState } from "react";

const VIDEO_SRC = "/sensei-loop.mp4";
const POSTER_SRC = "/frames/sensei/frame-030.webp";

const CYCLING_WORDS = [
  "a master.",
  "a champion.",
  "limitless.",
  "unstoppable.",
];

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });
  useEffect(() => {
    const mq = window.matchMedia(query);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [query]);
  return matches;
}

export default function HeroSection() {
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % CYCLING_WORDS.length);
    }, 2500);
    return () => clearInterval(id);
  }, [prefersReducedMotion]);

  const handleCTA = () => {
    const el = document.querySelector("#lab");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const word = prefersReducedMotion ? CYCLING_WORDS[0] : CYCLING_WORDS[wordIndex];

  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden bg-black font-readex flex items-center"
      aria-label="Looplab hero"
    >
      {/* Ambient background glows — slow pulse, asynchronous */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-[60%] h-[60%] rounded-full bg-[#a855f7]/25 blur-[140px] hero-glow-pulse" />
        <div
          className="absolute -bottom-1/4 -right-1/4 w-[60%] h-[60%] rounded-full bg-[#ec4899]/25 blur-[140px] hero-glow-pulse"
          style={{ animationDelay: "-2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] rounded-full bg-[#fb923c]/10 blur-[120px] hero-glow-pulse"
          style={{ animationDelay: "-4s" }}
        />
      </div>

      {/* Layout: stacked on mobile, two-column on desktop */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pt-24 lg:pt-20 pb-12 lg:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Title + cycling text + CTA */}
        <div className="lg:col-span-6 text-center lg:text-left">
          <h1
            className="hero-title text-white text-[clamp(2.5rem,7vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.045em] lowercase opacity-0 animate-fade-up text-balance"
            style={{ animationDelay: "0.1s" }}
          >
            become the{" "}
            <span className="text-brand-gradient">main character</span>{" "}
            of your craft.
          </h1>

          <div
            className="mt-6 lg:mt-8 text-white text-[clamp(1.125rem,2vw,1.75rem)] font-medium lowercase tracking-[-0.015em] opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="text-white/85 font-light">
              we create apps that make you{" "}
            </span>
            <span
              key={word}
              className="text-brand-gradient font-bold animate-fade-in inline-block"
            >
              {word}
            </span>
          </div>

          <div
            className="mt-8 lg:mt-10 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <button
              type="button"
              onClick={handleCTA}
              className="bg-brand-gradient text-white font-medium px-8 py-3.5 lg:px-9 lg:py-4 text-sm rounded-full hover:brightness-110 hover:shadow-lg hover:shadow-[#ec4899]/30 active:scale-[0.97] transition-all lowercase tracking-wide cursor-pointer inline-flex items-center gap-2"
            >
              check out more
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Sensei mascot — looping kata video on autoplay, static poster for reduced-motion */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          {prefersReducedMotion ? (
            <img
              src={POSTER_SRC}
              alt="Looplab sensei mascot"
              className="block h-auto w-auto max-h-[40vh] lg:max-h-[65vh] max-w-[75%]"
              loading="eager"
              fetchPriority="high"
            />
          ) : (
            <video
              src={VIDEO_SRC}
              poster={POSTER_SRC}
              autoPlay
              muted
              loop
              playsInline
              disablePictureInPicture
              aria-hidden="true"
              tabIndex={-1}
              className="block h-auto w-auto max-h-[40vh] lg:max-h-[65vh] max-w-[75%] pointer-events-none"
              style={{ transform: "translate3d(0,0,0)" }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
