import { useEffect, useState } from "react";

// Hero mascot video — businessman → sensei transformation arc, 8s loop.
// 720x1080 h.264, ~600 KB, pure-black background (matches hero bg-black
// so there's no visible edge / seam between the video and the section).
const SENSEI_VIDEO = "/sensei-hero.mp4";
// Poster for instant first paint (and the reduced-motion fallback).
const SENSEI_POSTER = "/frames/sensei/frame-000.webp";

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
      {/* Ambient background glows — all on the LEFT half of the section so
          the right side (behind the video) stays pure black and the video's
          black bg blends seamlessly with no visible seam. */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        {/* Top-left purple — atmospheric depth above the headline */}
        <div className="absolute -top-1/4 -left-1/4 w-[55%] h-[55%] rounded-full bg-[#a855f7]/40 blur-[140px] hero-glow-pulse" />
        {/* Bottom-left pink — the dominant flare (moved from bottom-right) */}
        <div
          className="absolute -bottom-1/4 -left-1/4 w-[70%] h-[75%] rounded-full bg-[#ec4899]/45 blur-[160px] hero-glow-pulse"
          style={{ animationDelay: "-2s" }}
        />
        {/* Mid-left orange — warmth between the purple + pink, completes the brand gradient */}
        <div
          className="absolute top-1/3 -left-1/3 w-[40%] h-[40%] rounded-full bg-[#fb923c]/25 blur-[140px] hero-glow-pulse"
          style={{ animationDelay: "-4s" }}
        />
      </div>

      {/* Layout: stacked on mobile, two-column on desktop */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pt-32 sm:pt-36 lg:pt-20 pb-12 lg:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
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
            {/* Fixed 2-line layout: prefix on line 1, cycling word on line 2.
                Block elements force the linebreak regardless of word length so
                the layout never shifts as the word cycles. */}
            <div className="text-white/85 font-light">
              we create apps that make you
            </div>
            <div
              key={word}
              className="text-brand-gradient font-bold animate-fade-in"
            >
              {word}
            </div>
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

        {/* Hero mascot — businessman → sensei transformation video, 8s loop.
            Pure-black background blends seamlessly with the hero's bg-black.
            iOS Safari hardening: pointer-events-none + tabIndex=-1 +
            disablePictureInPicture so the video never captures touch and
            hijacks scroll. Reduced-motion users see the poster (still). */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          {prefersReducedMotion ? (
            <img
              src={SENSEI_POSTER}
              alt="Looplab sensei mascot"
              className="block h-[45vh] lg:h-[70vh] w-auto"
              loading="eager"
              fetchPriority="high"
              style={{ boxShadow: "0 0 120px 40px #000" }}
            />
          ) : (
            <video
              src={SENSEI_VIDEO}
              poster={SENSEI_POSTER}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              tabIndex={-1}
              aria-hidden="true"
              disablePictureInPicture
              disableRemotePlayback
              className="block h-[45vh] lg:h-[70vh] w-auto pointer-events-none"
              style={{
                touchAction: "pan-y",
                /* Bleed the pure-black bg past the video bounds so the
                   rectangle outline doesn't show against the section's
                   flare-tinted bg (most visible on mobile). */
                boxShadow: "0 0 120px 40px #000",
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
