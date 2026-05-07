import { LooplabMark } from "./Navbar";

export default function Footer() {
  return (
    <footer className="bg-hero-bg border-t border-white/5 px-6 md:px-10 py-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 w-full">
          <LooplabMark className="h-7 w-auto" />
          <p className="text-muted-foreground/70 text-xs tracking-wide text-center">
            People don't want to learn. They want to{" "}
            <span className="text-foreground/85">become.</span>
          </p>
          <p className="text-muted-foreground/50 text-xs">
            © {new Date().getFullYear()} Looplab Studio
          </p>
        </div>

        {/* Backed by — small */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/5 w-full justify-center">
          <span className="text-muted-foreground/50 text-[10px] tracking-[0.2em] uppercase">
            backed by
          </span>
          <a
            href="https://fivebits.co"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Five Bits"
            className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
          >
            <img
              src="/fivebits-logo.png"
              alt="Five Bits"
              className="h-4 md:h-5 w-auto"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
