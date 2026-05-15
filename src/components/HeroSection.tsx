import { useEffect, useRef, useState } from "react";

const VIDEO_SRC = "/sensei.mp4";
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const glowRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const lastSeekRef = useRef<number>(-1);

  const [ready, setReady] = useState(false);
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const isMobile = useMediaQuery("(max-width: 1023px)");
  // Mobile gets a static hero (no scroll-scrubbed video). The <video>
  // approach is too fragile on iOS Safari — scroll-blocking, seek
  // pressure, momentum-scroll quirks. Desktop keeps the full
  // scroll-driven video.
  const useStatic = prefersReducedMotion || isMobile;

  // ─── Scroll-driven video scrubber ───────────────────────────────────────
  useEffect(() => {
    if (useStatic) return;
    const video = videoRef.current;
    if (!video) return;

    // The <video> poster already paints immediately, so we don't gate the
    // UI on metadata. Mark ready right away and force a load() call which
    // nudges iOS Safari to actually start downloading instead of waiting
    // for user interaction.
    setReady(true);
    try {
      video.load();
    } catch {
      // ignore — load() can throw on some browsers if the element is
      // already in a loading state
    }

    const updateWords = (progress: number) => {
      const slot = 1 / CYCLING_WORDS.length;
      CYCLING_WORDS.forEach((_, i) => {
        const node = wordRefs.current[i];
        if (!node) return;
        const start = i * slot;
        const end = start + slot;
        const fadeWidth = slot * 0.25;
        let opacity = 0;
        let translateY = 12;
        if (progress >= start - fadeWidth && progress <= end + fadeWidth) {
          if (progress < start) {
            const t = (progress - (start - fadeWidth)) / fadeWidth;
            opacity = t;
            translateY = (1 - t) * 12;
          } else if (progress > end) {
            const t = 1 - (progress - end) / fadeWidth;
            opacity = t;
            translateY = (1 - t) * -12;
          } else {
            opacity = 1;
            translateY = 0;
          }
        }
        node.style.opacity = String(Math.max(0, Math.min(1, opacity)));
        node.style.transform = `translateY(${translateY}px)`;
      });

      if (glowRef.current) {
        const baseOpacity = 0.35 + Math.min(0.45, progress * 0.6);
        const dist = Math.abs(progress - 0.55);
        const warmth = Math.max(0, 1 - (dist / 0.4) ** 2);
        const r = Math.round(168 + warmth * 60);
        const g = Math.round(85 + warmth * 80);
        const b = Math.round(247 - warmth * 100);
        glowRef.current.style.opacity = String(baseOpacity);
        glowRef.current.style.background = `radial-gradient(ellipse, rgba(${r},${g},${b},0.28) 0%, rgba(236,72,153,0.16) 40%, transparent 70%)`;
        glowRef.current.style.transform = "translate(-50%, -50%)";
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const section = sectionRef.current;
        const v = videoRef.current;
        if (!section || !v) return;
        const rect = section.getBoundingClientRect();
        const scrollable = section.offsetHeight - window.innerHeight;
        if (scrollable <= 0) return;
        const progress = Math.max(0, Math.min(1, -rect.top / scrollable));

        const duration = v.duration;
        if (Number.isFinite(duration) && duration > 0) {
          const target = progress * duration;
          // Round to ~30fps step (1/30s ≈ 0.033s). Reduces iOS Safari
          // seek pressure significantly while still feeling smooth.
          const step = 1 / 30;
          const snapped = Math.round(target / step) * step;
          if (Math.abs(snapped - lastSeekRef.current) >= step) {
            try {
              v.currentTime = snapped;
              lastSeekRef.current = snapped;
            } catch {
              // Some browsers throw if metadata isn't loaded yet — ignore.
            }
          }
        }

        updateWords(progress);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    requestAnimationFrame(() => {
      onScroll();
      requestAnimationFrame(onScroll);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [useStatic]);

  const handleCTA = () => {
    const el = document.querySelector("#lab");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  // ─── Reduced-motion fallback (accessibility) ───────────────────────────
  if (useStatic) {
    return (
      <section
        id="top"
        className="relative min-h-screen w-full overflow-hidden bg-black font-readex flex items-center"
        aria-label="Looplab hero"
      >
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-1/4 -left-1/4 w-[60%] h-[60%] rounded-full bg-[#a855f7]/25 blur-[140px]" />
          <div className="absolute -bottom-1/4 -right-1/4 w-[60%] h-[60%] rounded-full bg-[#ec4899]/25 blur-[140px]" />
        </div>
        <div className="relative z-10 w-full px-6 md:px-10 pt-24 pb-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="hero-title text-white text-[clamp(2.5rem,8vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.04em] lowercase text-balance">
              become the{" "}
              <span className="text-brand-gradient">main character</span>
              <br className="hidden sm:inline" /> of your craft.
            </h1>
            <div className="relative mt-6 flex justify-center">
              <img
                src={POSTER_SRC}
                alt="Looplab sensei mascot"
                className="block h-auto w-auto max-h-[40vh] max-w-[80%]"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="mt-6 text-white text-[clamp(1.25rem,4vw,2rem)] font-medium lowercase tracking-[-0.02em]">
              <span className="text-white/85 font-light">
                we create apps that make you{" "}
              </span>
              <span className="text-brand-gradient font-bold">
                {CYCLING_WORDS[0]}
              </span>
            </div>
            <div className="mt-8">
              <button
                type="button"
                onClick={handleCTA}
                className="bg-brand-gradient text-white font-medium px-8 py-3.5 text-sm rounded-full hover:brightness-110 active:scale-[0.97] transition-all lowercase tracking-wide cursor-pointer"
              >
                check out more
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ─── Scroll-driven video hero ───────────────────────────────────────────
  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative bg-black font-readex h-[200vh] lg:h-[700vh]"
      aria-label="Looplab hero"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-1/4 -left-1/4 w-[55%] h-[55%] rounded-full bg-[#a855f7]/22 blur-[160px]" />
          <div className="absolute -bottom-1/4 -right-1/4 w-[55%] h-[55%] rounded-full bg-[#ec4899]/22 blur-[160px]" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-8 lg:pb-12 grid grid-cols-1 grid-rows-[auto_1fr] lg:grid-cols-12 lg:grid-rows-1 gap-3 lg:gap-10 items-stretch lg:items-center h-full">
          <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left">
            <h1
              className="hero-title text-white text-[clamp(2.5rem,7vw,6.5rem)] font-medium leading-[0.92] tracking-[-0.045em] lowercase opacity-0 animate-fade-up text-balance"
              style={{ animationDelay: "0.1s" }}
            >
              become the{" "}
              <span className="text-brand-gradient">main character</span>{" "}
              of your craft.
            </h1>

            <div
              className="mt-6 lg:mt-12 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              <button
                type="button"
                onClick={handleCTA}
                className="bg-brand-gradient text-white font-medium px-7 py-3 lg:px-9 lg:py-4 text-sm rounded-full hover:brightness-110 hover:shadow-lg hover:shadow-[#ec4899]/30 active:scale-[0.97] transition-all lowercase tracking-wide cursor-pointer inline-flex items-center gap-2"
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

          <div className="lg:col-span-7 relative h-full min-h-[55vh] flex flex-col items-center justify-center overflow-hidden">
            <div className="relative w-full h-full">
              <div
                ref={glowRef}
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 w-[70%] h-[75%] rounded-full blur-[140px] pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse, rgba(168,85,247,0.3) 0%, rgba(236,72,153,0.18) 40%, transparent 70%)",
                  opacity: 0.4,
                  transform: "translate(-50%, -50%)",
                  willChange: "opacity",
                }}
              />

              <video
                ref={videoRef}
                src={VIDEO_SRC}
                poster={POSTER_SRC}
                muted
                playsInline
                preload="auto"
                disablePictureInPicture
                disableRemotePlayback
                aria-hidden="true"
                tabIndex={-1}
                className="relative w-full h-full object-contain z-10 pointer-events-none"
                style={{
                  willChange: "transform",
                  transform: "translate3d(0,0,0)",
                  touchAction: "pan-y",
                }}
              />

              <div
                className="absolute inset-x-0 z-20 pointer-events-none opacity-0 animate-fade-up"
                style={{ bottom: "5%", animationDelay: "0.6s" }}
              >
                <div
                  className="text-center text-white text-[clamp(1.4rem,3vw,2.5rem)] font-medium lowercase tracking-[-0.025em] leading-[1.15]"
                  style={{
                    textShadow:
                      "0 4px 30px rgba(0,0,0,0.85), 0 2px 12px rgba(0,0,0,0.7), 0 0 60px rgba(0,0,0,0.5)",
                  }}
                >
                  <div className="text-white/95 font-light text-[0.7em] mb-1">
                    we create apps that make you
                  </div>
                  <span className="relative inline-block min-w-[240px] md:min-w-[320px]">
                    {CYCLING_WORDS.map((word, i) => (
                      <span
                        key={i}
                        ref={(el) => (wordRefs.current[i] = el)}
                        className="absolute left-0 right-0 text-brand-gradient font-bold whitespace-nowrap"
                        style={{
                          opacity: 0,
                          transform: "translateY(12px)",
                          willChange: "opacity, transform",
                          filter:
                            "drop-shadow(0 4px 20px rgba(168,85,247,0.4))",
                        }}
                      >
                        {word}
                      </span>
                    ))}
                    <span aria-hidden="true" className="invisible font-bold">
                      {CYCLING_WORDS[0]}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {ready && (
          <div
            aria-hidden="true"
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1 pointer-events-none"
          >
            <p className="text-white/30 text-[10px] tracking-[0.25em] uppercase">
              scroll
            </p>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-white/30 animate-bounce"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        )}

        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-30 pointer-events-none"
        />
      </div>
    </section>
  );
}
