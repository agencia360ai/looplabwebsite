import { lazy, Suspense } from "react";
import RotatingText from "./RotatingText";

const Spline = lazy(() => import("@splinetool/react-spline"));

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-end bg-hero-bg overflow-hidden"
    >
      {/* Spline 3D Background */}
      <div className="absolute inset-0">
        <Suspense fallback={<div className="absolute inset-0 bg-hero-bg" />}>
          <Spline
            scene="https://prod.spline.design/Slk6b8kz3LRlKiyk/scene.splinecode"
            className="w-full h-full"
          />
        </Suspense>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-[1] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 pointer-events-none w-full max-w-[92%] sm:max-w-2xl lg:max-w-4xl px-6 md:px-10 pb-12 md:pb-16 pt-32">
        {/* Eyebrow */}
        <p
          className="opacity-0 animate-fade-up text-primary text-xs md:text-sm font-semibold tracking-[0.4em] uppercase mb-5"
          style={{ animationDelay: "0.1s" }}
        >
          Run the loop.
        </p>

        {/* Heading w/ rotating word */}
        <h1
          className="opacity-0 animate-fade-up text-[clamp(2.25rem,7vw,5.25rem)] font-bold leading-[1.05] tracking-[-0.045em] text-foreground mb-3 md:mb-5 uppercase"
          style={{ animationDelay: "0.2s" }}
        >
          We help users become
          <br />
          <span className="text-primary">
            <RotatingText />
          </span>
        </h1>

        {/* Subheading */}
        <p
          className="opacity-0 animate-fade-up text-foreground/85 text-[clamp(1.125rem,2.2vw,1.625rem)] font-light mb-3 md:mb-6 max-w-2xl"
          style={{ animationDelay: "0.45s" }}
        >
          Self-RPG Apps. Your real-life progression is the game.
        </p>

        {/* CTAs */}
        <div
          className="opacity-0 animate-fade-up flex flex-wrap gap-3 font-bold mt-6 md:mt-8"
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
            Partner with us
          </button>
          <button
            type="button"
            className="pointer-events-auto bg-white text-background px-6 py-3 md:px-8 md:py-4 text-sm rounded-sm cursor-pointer hover:brightness-90 transition-all active:scale-[0.97] uppercase tracking-widest"
            onClick={() => {
              const el = document.querySelector("#apps");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            See the apps
          </button>
        </div>

        {/* Trust line */}
        <p
          className="opacity-0 animate-fade-up text-muted-foreground/70 text-xs font-light mt-6 md:mt-8 tracking-wide"
          style={{ animationDelay: "0.85s" }}
        >
          Mobile studio. Panama City. 14 years, 200+ prototypes, 44M+ downloads.
        </p>
      </div>
    </section>
  );
}
