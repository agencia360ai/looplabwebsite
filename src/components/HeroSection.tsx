import { lazy, Suspense } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-end bg-hero-bg overflow-hidden"
    >
      {/* Spline 3D Background */}
      <div className="absolute inset-0">
        <Suspense
          fallback={<div className="absolute inset-0 bg-hero-bg" />}
        >
          <Spline
            scene="https://prod.spline.design/Slk6b8kz3LRlKiyk/scene.splinecode"
            className="w-full h-full"
          />
        </Suspense>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-[1] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 pointer-events-none w-full max-w-[90%] sm:max-w-md lg:max-w-2xl px-6 md:px-10 pb-10 md:pb-10 pt-32">
        {/* Heading */}
        <h1
          className="opacity-0 animate-fade-up text-[clamp(3rem,8vw,6rem)] font-bold leading-[1.05] tracking-[-0.05em] text-foreground mb-2 md:mb-4 uppercase"
          style={{ animationDelay: "0.2s" }}
        >
          RUN THE <span className="text-primary">LOOP</span>
        </h1>

        {/* Subheading */}
        <p
          className="opacity-0 animate-fade-up text-foreground/80 text-[clamp(1.125rem,2.5vw,1.875rem)] font-light mb-3 md:mb-6"
          style={{ animationDelay: "0.4s" }}
        >
          Self-RPG Apps. Your real-life progression is the game.
        </p>

        {/* Description */}
        <p
          className="opacity-0 animate-fade-up text-muted-foreground text-[clamp(0.875rem,1.5vw,1.25rem)] font-light mb-4 md:mb-8"
          style={{ animationDelay: "0.55s" }}
        >
          A new mobile category for people who don't want to learn — they want to become. A boxer. A rapper. A baker. A martial artist. Built on fourteen years of mobile shipping and one refined production loop.
        </p>

        {/* CTAs */}
        <div
          className="opacity-0 animate-fade-up flex flex-wrap gap-3 font-bold"
          style={{ animationDelay: "0.7s" }}
        >
          <button
            type="button"
            className="pointer-events-auto bg-primary text-primary-foreground px-6 py-3 md:px-8 md:py-4 text-sm rounded-sm cursor-pointer hover:brightness-110 transition-all active:scale-[0.97] uppercase tracking-widest"
            onClick={() => {
              const el = document.querySelector("#contact");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Invest
          </button>
          <button
            type="button"
            className="pointer-events-auto bg-white text-background px-6 py-3 md:px-8 md:py-4 text-sm rounded-sm cursor-pointer hover:brightness-90 transition-all active:scale-[0.97] uppercase tracking-widest"
            onClick={() => {
              const el = document.querySelector("#apps");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            See the Apps
          </button>
        </div>

        {/* Trust line */}
        <p
          className="opacity-0 animate-fade-up text-muted-foreground/60 text-xs font-light mt-4 md:mt-6"
          style={{ animationDelay: "0.85s" }}
        >
          Mobile studio. Panama City. 14 years, 200+ prototypes, 44M+ downloads.
        </p>
      </div>
    </section>
  );
}
