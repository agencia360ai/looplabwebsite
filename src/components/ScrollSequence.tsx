import { useEffect, useRef, useState, useCallback } from "react";

const FRAME_COUNT = 65;
const FRAME_PATH = "/frames/boxer/frame-";

const OVERLAYS = [
  { start: 0.0, end: 0.25, text: "your craft.", sub: "powered by play." },
  { start: 0.3, end: 0.55, text: "every rep counts.", sub: "xp for real-world effort." },
  { start: 0.6, end: 0.85, text: "level up.", sub: "consistency becomes mastery." },
];

export default function ScrollSequence() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const rafRef = useRef<number>(0);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check reduced motion preference
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Preload all frames
  useEffect(() => {
    if (prefersReducedMotion) return;

    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = `${FRAME_PATH}${String(i).padStart(3, "0")}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setLoaded(true);
          drawFrame(0);
        }
      };
      images.push(img);
    }
    imagesRef.current = images;
  }, [prefersReducedMotion]);

  const drawFrame = useCallback(
    (index: number) => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      const img = imagesRef.current[index];
      if (!canvas || !ctx || !img) return;

      // Set canvas size to match container (retina-aware)
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      // Clear and draw centered
      ctx.clearRect(0, 0, rect.width, rect.height);
      const scale = Math.min(
        rect.width / img.naturalWidth,
        rect.height / img.naturalHeight
      );
      const w = img.naturalWidth * scale;
      const h = img.naturalHeight * scale;
      const x = (rect.width - w) / 2;
      const y = (rect.height - h) / 2;
      ctx.drawImage(img, x, y, w, h);
    },
    []
  );

  // Scroll handler — maps scroll position to frame index
  useEffect(() => {
    if (!loaded || prefersReducedMotion) return;

    const handleScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const sectionHeight = section.offsetHeight - window.innerHeight;
        const scrolled = -rect.top;
        const rawProgress = Math.max(0, Math.min(1, scrolled / sectionHeight));

        setProgress(rawProgress);
        const frameIndex = Math.min(
          FRAME_COUNT - 1,
          Math.floor(rawProgress * (FRAME_COUNT - 1))
        );
        drawFrame(frameIndex);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial draw
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [loaded, prefersReducedMotion, drawFrame]);

  // Handle resize
  useEffect(() => {
    if (!loaded) return;
    const handleResize = () => {
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(progress * (FRAME_COUNT - 1))
      );
      drawFrame(frameIndex);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [loaded, progress, drawFrame]);

  // Reduced motion fallback: show static image
  if (prefersReducedMotion) {
    return (
      <section className="relative bg-black py-24 px-6">
        <div className="max-w-md mx-auto">
          <img
            src={`${FRAME_PATH}032.jpg`}
            alt="Animated boxer mascot"
            className="w-full h-auto"
          />
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative bg-black"
      style={{ height: "300vh" }}
      aria-label="Scroll-animated mascot showcase"
    >
      {/* Sticky viewport container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Canvas for frame rendering */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          aria-hidden="true"
        />

        {/* Subtle gradient glows behind character */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] rounded-full blur-[140px] transition-opacity duration-700"
            style={{
              background:
                "radial-gradient(circle, rgba(168,85,247,0.15), rgba(236,72,153,0.1), transparent)",
              opacity: progress > 0.05 ? 1 : 0,
            }}
          />
        </div>

        {/* Loading indicator */}
        {!loaded && (
          <div className="relative z-10 flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-2 border-white/20 border-t-white/80 rounded-full animate-spin" />
            <p className="text-white/40 text-xs tracking-wider uppercase">
              loading animation
            </p>
          </div>
        )}

        {/* Parallax text overlays */}
        {loaded &&
          OVERLAYS.map((overlay, i) => {
            const isVisible =
              progress >= overlay.start && progress <= overlay.end;
            const localProgress =
              (progress - overlay.start) / (overlay.end - overlay.start);
            const fadeIn = Math.min(1, localProgress * 4);
            const fadeOut = Math.min(1, (1 - localProgress) * 4);
            const opacity = isVisible
              ? Math.min(fadeIn, fadeOut)
              : 0;
            const translateY = isVisible
              ? (1 - fadeIn) * 30
              : 30;

            return (
              <div
                key={i}
                className="absolute z-20 pointer-events-none w-full px-6"
                style={{
                  bottom: "8%",
                  left: 0,
                  opacity,
                  transform: `translateY(${translateY}px)`,
                  transition: "opacity 0.1s ease-out",
                  willChange: "opacity, transform",
                }}
              >
                <div className="max-w-5xl mx-auto text-center">
                  <h3 className="text-white text-[clamp(2rem,5vw,4rem)] font-bold tracking-[-0.035em] lowercase leading-tight">
                    {overlay.text}
                  </h3>
                  <p className="text-white/60 text-lg md:text-xl font-light mt-2 lowercase">
                    {overlay.sub}
                  </p>
                </div>
              </div>
            );
          })}

        {/* Scroll hint at top of section */}
        {loaded && progress < 0.05 && (
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-pulse"
          >
            <p className="text-white/30 text-xs tracking-widest uppercase">
              scroll to animate
            </p>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-white/30"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        )}

        {/* Top/bottom gradients for seamless section blending */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"
        />
      </div>
    </section>
  );
}
