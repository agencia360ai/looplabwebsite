import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 60;
const FRAME_PATH = "/frames/sensei/frame-";
const FRAME_EXT = ".webp";
const POSTER_FRAME = 30;

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

const framePath = (i: number) =>
  `${FRAME_PATH}${String(i).padStart(3, "0")}${FRAME_EXT}`;

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const glowRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const lastFrameRef = useRef<number>(-1);
  const rafRef = useRef<number>(0);
  const canvasSizeRef = useRef<{ w: number; h: number; dpr: number }>({
    w: 0,
    h: 0,
    dpr: 1,
  });

  const [loaded, setLoaded] = useState(false);
  const [mobileWordIndex, setMobileWordIndex] = useState(0);
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const isMobile = useMediaQuery("(max-width: 1023px)");
  const useStatic = prefersReducedMotion || isMobile;

  useEffect(() => {
    if (!useStatic || prefersReducedMotion) return;
    const id = setInterval(() => {
      setMobileWordIndex((i) => (i + 1) % CYCLING_WORDS.length);
    }, 2500);
    return () => clearInterval(id);
  }, [useStatic, prefersReducedMotion]);

  useEffect(() => {
    if (useStatic) return;
    let cancelled = false;
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.decoding = "async";
      img.src = framePath(i);
      const onDone = () => {
        if (cancelled) return;
        loadedCount++;
        if (loadedCount === FRAME_COUNT) setLoaded(true);
      };
      img.onload = onDone;
      img.onerror = onDone;
      images.push(img);
    }
    imagesRef.current = images;
    return () => { cancelled = true; };
  }, [useStatic]);

  useEffect(() => {
    if (useStatic) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      canvasSizeRef.current = { w: rect.width, h: rect.height, dpr };
      lastFrameRef.current = -1;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    return () => ro.disconnect();
  }, [useStatic, loaded]);

  useEffect(() => {
    if (useStatic || !loaded) return;

    const drawFrame = (index: number) => {
      if (index === lastFrameRef.current) return;
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      const img = imagesRef.current[index];
      if (!canvas || !ctx || !img || !img.complete) return;
      let { w, h, dpr } = canvasSizeRef.current;
      // Self-recover if canvas isn't sized yet (initial paint before ResizeObserver fires)
      if (w === 0 || h === 0) {
        const rect = canvas.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.floor(rect.width * dpr);
        canvas.height = Math.floor(rect.height * dpr);
        w = rect.width;
        h = rect.height;
        canvasSizeRef.current = { w, h, dpr };
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      const scale = Math.min(w / img.naturalWidth, h / img.naturalHeight);
      const drawW = img.naturalWidth * scale;
      const drawH = img.naturalHeight * scale;
      const x = (w - drawW) / 2;
      const y = (h - drawH) / 2;
      ctx.drawImage(img, x, y, drawW, drawH);
      lastFrameRef.current = index;
    };

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

      // Subtle ambient color shift behind the character.
      // Warmer / brighter around the transformation moment (0.45–0.65).
      if (glowRef.current) {
        const opacity = 0.35 + Math.min(0.45, progress * 0.6);
        const dist = Math.abs(progress - 0.55);
        const warmth = Math.max(0, 1 - (dist / 0.4) ** 2);
        const r = Math.round(168 + warmth * 60);
        const g = Math.round(85 + warmth * 80);
        const b = Math.round(247 - warmth * 100);
        glowRef.current.style.opacity = String(opacity);
        glowRef.current.style.background = `radial-gradient(ellipse, rgba(${r},${g},${b},0.28) 0%, rgba(236,72,153,0.16) 40%, transparent 70%)`;
        // Preserve the centering transform
        glowRef.current.style.transform = "translate(-50%, -50%)";
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const scrollable = section.offsetHeight - window.innerHeight;
        if (scrollable <= 0) return;
        const progress = Math.max(0, Math.min(1, -rect.top / scrollable));
        const frameIndex = Math.min(
          FRAME_COUNT - 1,
          Math.round(progress * (FRAME_COUNT - 1))
        );
        drawFrame(frameIndex);
        updateWords(progress);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Initial paint — schedule on next frame to ensure layout is complete,
    // then again on the frame after to catch any late ResizeObserver updates.
    requestAnimationFrame(() => {
      onScroll();
      requestAnimationFrame(onScroll);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [useStatic, loaded]);

  const handleCTA = () => {
    const el = document.querySelector("#lab");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  // ─── Mobile / reduced-motion fallback ──────────────────────────────────
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

        <div className="relative z-10 w-full px-6 md:px-10 pt-32 pb-16">
          <div className="max-w-5xl mx-auto text-center">
            <h1
              className="hero-title text-white text-[clamp(2.75rem,9vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.04em] lowercase opacity-0 animate-fade-up text-balance"
              style={{ animationDelay: "0.1s" }}
            >
              become the{" "}
              <span className="text-brand-gradient">main character</span>
              <br className="hidden sm:inline" /> of your craft.
            </h1>

            <div
              className="relative mt-8 max-w-md mx-auto opacity-0 animate-fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              <img
                src={framePath(POSTER_FRAME)}
                alt="Looplab sensei mascot"
                className="w-full h-auto"
                loading="eager"
              />
            </div>

            <div
              className="mt-2 text-white text-[clamp(1.5rem,5vw,2.25rem)] font-medium lowercase opacity-0 animate-fade-up tracking-[-0.02em]"
              style={{ animationDelay: "0.7s" }}
            >
              <span className="text-white/85 font-light">
                we create apps that make you{" "}
              </span>
              <span
                key={mobileWordIndex}
                className="text-brand-gradient font-bold animate-fade-in inline-block"
              >
                {prefersReducedMotion
                  ? CYCLING_WORDS[0]
                  : CYCLING_WORDS[mobileWordIndex]}
              </span>
            </div>

            <div
              className="mt-10 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.9s" }}
            >
              <button
                type="button"
                onClick={handleCTA}
                className="bg-brand-gradient text-white font-medium px-8 py-3.5 text-sm rounded-full hover:brightness-110 hover:shadow-lg hover:shadow-[#ec4899]/20 active:scale-[0.97] transition-all lowercase tracking-wide cursor-pointer"
              >
                check out more
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ─── Desktop: two-column scroll hero, character on right ───────────────
  // 400vh height = animation moves slower per scroll-pixel
  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative bg-black font-readex"
      style={{ height: "700vh" }}
      aria-label="Looplab hero"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background ambient glows */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-1/4 -left-1/4 w-[55%] h-[55%] rounded-full bg-[#a855f7]/22 blur-[160px]" />
          <div className="absolute -bottom-1/4 -right-1/4 w-[55%] h-[55%] rounded-full bg-[#ec4899]/22 blur-[160px]" />
        </div>

        {/* Two-column content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center h-full">
          {/* LEFT — title + CTA */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h1
              className="hero-title text-white text-[clamp(2.75rem,7vw,6.5rem)] font-medium leading-[0.92] tracking-[-0.045em] lowercase opacity-0 animate-fade-up text-balance"
              style={{ animationDelay: "0.1s" }}
            >
              become the{" "}
              <span className="text-brand-gradient">main character</span>{" "}
              of your craft.
            </h1>

            <div
              className="mt-10 md:mt-12 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              <button
                type="button"
                onClick={handleCTA}
                className="bg-brand-gradient text-white font-medium px-9 py-4 text-sm rounded-full hover:brightness-110 hover:shadow-lg hover:shadow-[#ec4899]/30 active:scale-[0.97] transition-all lowercase tracking-wide cursor-pointer inline-flex items-center gap-2"
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

          {/* RIGHT — large character canvas with cycling text overlapping feet */}
          <div className="lg:col-span-7 relative h-full flex flex-col items-center justify-center">
            <div className="relative w-full h-full">
              {/* Centered glow behind character — sized + placed to sit right behind the figure */}
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

              {/* Character canvas */}
              <canvas
                ref={canvasRef}
                className="relative w-full h-full z-10"
                aria-hidden="true"
              />

              {/* Cycling word — overlapping the lower-leg/feet area */}
              <div
                className="absolute inset-x-0 z-20 pointer-events-none opacity-0 animate-fade-up"
                style={{
                  bottom: "5%",
                  animationDelay: "0.6s",
                }}
              >
                <div className="text-center text-white text-[clamp(1.4rem,3vw,2.5rem)] font-medium lowercase tracking-[-0.025em] leading-[1.15]"
                     style={{
                       textShadow:
                         "0 4px 30px rgba(0,0,0,0.85), 0 2px 12px rgba(0,0,0,0.7), 0 0 60px rgba(0,0,0,0.5)",
                     }}>
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

              {!loaded && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
                  <div className="w-8 h-8 border-2 border-white/15 border-t-white/70 rounded-full animate-spin" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        {loaded && (
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
