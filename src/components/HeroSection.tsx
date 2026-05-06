import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 65;
const FRAME_PATH = "/frames/boxer/frame-";
const POSTER_FRAME = 32;

const CYCLING_WORDS = [
  "a master.",
  "a champion.",
  "obsessed.",
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

  // Mobile: cycle words on a timer
  useEffect(() => {
    if (!useStatic || prefersReducedMotion) return;
    const id = setInterval(() => {
      setMobileWordIndex((i) => (i + 1) % CYCLING_WORDS.length);
    }, 2200);
    return () => clearInterval(id);
  }, [useStatic, prefersReducedMotion]);

  // Preload frames (desktop only)
  useEffect(() => {
    if (useStatic) return;

    let cancelled = false;
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.decoding = "async";
      img.src = `${FRAME_PATH}${String(i).padStart(3, "0")}.jpg`;
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

    return () => {
      cancelled = true;
    };
  }, [useStatic]);

  // Canvas sizing via ResizeObserver
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

  // Scroll-driven animation
  useEffect(() => {
    if (useStatic || !loaded) return;

    const drawFrame = (index: number) => {
      if (index === lastFrameRef.current) return;
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      const img = imagesRef.current[index];
      if (!canvas || !ctx || !img || !img.complete) return;

      const { w, h, dpr } = canvasSizeRef.current;
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
      // Each word gets an equal segment with a small crossfade overlap
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
            // Fading in
            const t = (progress - (start - fadeWidth)) / fadeWidth;
            opacity = t;
            translateY = (1 - t) * 12;
          } else if (progress > end) {
            // Fading out
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

      // Glow ramps in with scroll
      if (glowRef.current) {
        glowRef.current.style.opacity = String(
          0.4 + Math.min(0.6, progress * 0.8)
        );
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
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [useStatic, loaded]);

  const handleCTA = () => {
    const el = document.querySelector("#lab");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  // ─── Mobile / reduced-motion layout ────────────────────────────────────
  if (useStatic) {
    return (
      <section
        id="top"
        className="relative min-h-screen w-full overflow-hidden bg-black font-readex flex items-center"
        aria-label="Looplab hero"
      >
        {/* Background glows */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-1/4 -left-1/4 w-[60%] h-[60%] rounded-full bg-[#a855f7]/20 blur-[140px]" />
          <div className="absolute -bottom-1/4 -right-1/4 w-[60%] h-[60%] rounded-full bg-[#ec4899]/20 blur-[140px]" />
        </div>

        <div className="relative z-10 w-full px-6 md:px-10 pt-32 pb-16">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="hero-title text-white text-[clamp(2.25rem,8vw,5rem)] font-medium leading-[0.95] tracking-[-0.04em] lowercase opacity-0 animate-fade-up text-balance"
                style={{ animationDelay: "0.1s" }}>
              become the{" "}
              <span className="text-brand-gradient">main character</span>
              <br className="hidden sm:inline" /> of your craft.
            </h1>

            <div
              className="mt-6 md:mt-8 text-white/85 text-lg md:text-2xl font-light lowercase opacity-0 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <span>we create apps that make you </span>
              <span
                key={mobileWordIndex}
                className="text-brand-gradient font-medium animate-fade-in inline-block"
              >
                {prefersReducedMotion
                  ? CYCLING_WORDS[0]
                  : CYCLING_WORDS[mobileWordIndex]}
              </span>
            </div>

            <div
              className="mt-8 md:mt-10 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              <button
                type="button"
                onClick={handleCTA}
                className="bg-brand-gradient text-white font-medium px-8 py-3.5 text-sm rounded-full hover:brightness-110 hover:shadow-lg hover:shadow-[#ec4899]/20 active:scale-[0.97] transition-all lowercase tracking-wide cursor-pointer"
              >
                check out more
              </button>
            </div>

            <div
              className="mt-10 md:mt-14 max-w-sm mx-auto opacity-0 animate-fade-up"
              style={{ animationDelay: "0.7s" }}
            >
              <img
                src={`${FRAME_PATH}${String(POSTER_FRAME).padStart(3, "0")}.jpg`}
                alt="Looplab mascot"
                className="w-full h-auto"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ─── Desktop: scroll-driven hero ───────────────────────────────────────
  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative bg-black font-readex"
      style={{ height: "250vh" }}
      aria-label="Looplab hero"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        {/* Background glows */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-1/4 -left-1/4 w-[60%] h-[60%] rounded-full bg-[#a855f7]/20 blur-[140px]" />
          <div className="absolute -bottom-1/4 -right-1/4 w-[60%] h-[60%] rounded-full bg-[#ec4899]/20 blur-[140px]" />
        </div>

        {/* Concentrated glow behind the character */}
        <div
          ref={glowRef}
          aria-hidden="true"
          className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[40%] h-[70%] rounded-full blur-[140px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.25), rgba(236,72,153,0.18), transparent 70%)",
            opacity: 0.4,
            willChange: "opacity",
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
          {/* Left column — text + CTA */}
          <div className="flex flex-col justify-center">
            <h1
              className="hero-title text-white text-[clamp(2.5rem,6vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.04em] lowercase opacity-0 animate-fade-up text-balance"
              style={{ animationDelay: "0.1s" }}
            >
              become the{" "}
              <span className="text-brand-gradient">main character</span>{" "}
              of your craft.
            </h1>

            <div
              className="mt-6 md:mt-8 text-white/85 text-xl md:text-2xl font-light lowercase opacity-0 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <span>we create apps that make you </span>
              <span className="relative inline-block min-w-[180px] md:min-w-[260px] align-baseline">
                {CYCLING_WORDS.map((word, i) => (
                  <span
                    key={i}
                    ref={(el) => (wordRefs.current[i] = el)}
                    className="absolute left-0 top-0 text-brand-gradient font-medium whitespace-nowrap"
                    style={{
                      opacity: 0,
                      transform: "translateY(12px)",
                      willChange: "opacity, transform",
                    }}
                  >
                    {word}
                  </span>
                ))}
                {/* invisible spacer keeps line height stable */}
                <span aria-hidden="true" className="invisible">
                  {CYCLING_WORDS[0]}
                </span>
              </span>
            </div>

            <div
              className="mt-10 md:mt-12 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              <button
                type="button"
                onClick={handleCTA}
                className="bg-brand-gradient text-white font-medium px-9 py-4 text-sm rounded-full hover:brightness-110 hover:shadow-lg hover:shadow-[#ec4899]/25 active:scale-[0.97] transition-all lowercase tracking-wide cursor-pointer inline-flex items-center gap-2"
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

          {/* Right column — animated character */}
          <div className="relative h-[60vh] lg:h-[80vh] flex items-center justify-center">
            <canvas
              ref={canvasRef}
              className="w-full h-full"
              aria-hidden="true"
            />
            {!loaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-white/15 border-t-white/70 rounded-full animate-spin" />
              </div>
            )}
          </div>
        </div>

        {/* Bottom blend gradient for seamless transition into next section */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none"
        />
      </div>
    </section>
  );
}
