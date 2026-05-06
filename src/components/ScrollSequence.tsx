import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 65;
const FRAME_PATH = "/frames/boxer/frame-";
const POSTER_FRAME = 32; // mid-pose for static fallback

const OVERLAYS = [
  { start: 0.0, end: 0.28, text: "your craft.", sub: "powered by play." },
  { start: 0.34, end: 0.62, text: "every rep counts.", sub: "xp for real-world effort." },
  { start: 0.68, end: 0.95, text: "level up.", sub: "consistency becomes mastery." },
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

export default function ScrollSequence() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);
  const hintRef = useRef<HTMLDivElement>(null);
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
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const isMobile = useMediaQuery("(max-width: 767px)");

  // Use static fallback if reduced motion OR mobile (saves ~1.8MB on cellular)
  const useStatic = prefersReducedMotion || isMobile;

  // Preload all frames (only on desktop with motion enabled)
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
      img.onerror = onDone; // continue even if some fail
      images.push(img);
    }
    imagesRef.current = images;

    return () => {
      cancelled = true;
    };
  }, [useStatic]);

  // Set up canvas size — runs once and on resize, not on every frame
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
      lastFrameRef.current = -1; // force redraw on next scroll
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    return () => ro.disconnect();
  }, [useStatic, loaded]);

  // Scroll handler — uses refs for direct DOM updates (no React re-renders)
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

    const updateOverlays = (progress: number) => {
      OVERLAYS.forEach((overlay, i) => {
        const node = overlayRefs.current[i];
        if (!node) return;
        const inRange = progress >= overlay.start && progress <= overlay.end;
        if (!inRange) {
          node.style.opacity = "0";
          node.style.transform = "translateY(20px)";
          return;
        }
        const local = (progress - overlay.start) / (overlay.end - overlay.start);
        const fadeIn = Math.min(1, local * 4);
        const fadeOut = Math.min(1, (1 - local) * 4);
        const opacity = Math.min(fadeIn, fadeOut);
        node.style.opacity = String(opacity);
        node.style.transform = `translateY(${(1 - fadeIn) * 20}px)`;
      });

      // Show scroll hint only at very start
      if (hintRef.current) {
        hintRef.current.style.opacity = progress < 0.04 ? "1" : "0";
      }
      // Subtle glow ramps in once you scroll past the start
      if (glowRef.current) {
        glowRef.current.style.opacity = String(Math.min(1, progress * 3));
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
        updateOverlays(progress);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial paint
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [useStatic, loaded]);

  // Static fallback: mobile and reduced-motion users see a single hero shot
  if (useStatic) {
    return (
      <section
        className="relative bg-black py-20 md:py-28 px-6 overflow-hidden"
        aria-label="Looplab mascot showcase"
      >
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full blur-[120px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.18), rgba(236,72,153,0.12), transparent)",
          }}
        />
        <div className="relative max-w-md mx-auto">
          <img
            src={`${FRAME_PATH}${String(POSTER_FRAME).padStart(3, "0")}.jpg`}
            alt="Looplab boxer mascot in fighting stance"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
        <div className="relative max-w-2xl mx-auto text-center mt-8">
          <p className="text-white text-[clamp(1.75rem,5vw,2.75rem)] font-bold tracking-[-0.035em] lowercase leading-tight">
            every rep counts.
          </p>
          <p className="text-white/60 text-base md:text-lg font-light mt-2 lowercase">
            xp for real-world effort.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative bg-black"
      style={{ height: "260vh" }}
      aria-label="Scroll-animated mascot showcase"
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Canvas — frame rendering layer */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          aria-hidden="true"
        />

        {/* Brand-gradient glow behind character (ramps in with scroll) */}
        <div
          ref={glowRef}
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] h-[55%] rounded-full blur-[140px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.18), rgba(236,72,153,0.12), transparent)",
            opacity: 0,
            willChange: "opacity",
            transition: "opacity 0.2s linear",
          }}
        />

        {/* Loading state */}
        {!loaded && (
          <div className="relative z-10 flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-2 border-white/15 border-t-white/70 rounded-full animate-spin" />
            <p className="text-white/40 text-xs tracking-[0.2em] uppercase">
              loading
            </p>
          </div>
        )}

        {/* Parallax text overlays (using <p> — they're decorative, not section headings) */}
        {loaded &&
          OVERLAYS.map((overlay, i) => (
            <div
              key={i}
              ref={(el) => (overlayRefs.current[i] = el)}
              className="absolute z-20 pointer-events-none w-full px-6"
              style={{
                bottom: "10%",
                left: 0,
                opacity: 0,
                transform: "translateY(20px)",
                willChange: "opacity, transform",
              }}
            >
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-white text-[clamp(1.75rem,5vw,3.75rem)] font-bold tracking-[-0.035em] lowercase leading-[1.1]">
                  {overlay.text}
                </p>
                <p className="text-white/60 text-base md:text-xl font-light mt-2 lowercase">
                  {overlay.sub}
                </p>
              </div>
            </div>
          ))}

        {/* Scroll hint */}
        {loaded && (
          <div
            ref={hintRef}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
            style={{
              opacity: 1,
              willChange: "opacity",
              transition: "opacity 0.3s ease-out",
            }}
          >
            <p className="text-white/40 text-[10px] tracking-[0.25em] uppercase">
              scroll
            </p>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-white/40 animate-bounce"
              aria-hidden="true"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        )}

        {/* Section blending gradients — keep edges fully black for seamless transitions */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"
        />
      </div>
    </section>
  );
}
