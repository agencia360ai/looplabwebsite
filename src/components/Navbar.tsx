import { useState } from "react";

const NAV_LINKS = [
  { label: "genre", href: "#genre" },
  { label: "what we make", href: "#what" },
  { label: "playbook", href: "#process" },
  { label: "lab", href: "#lab" },
];

export function LooplabMark({ className = "" }: { className?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <span
        className={`bg-gradient-to-r from-[#A855F7] via-[#EC4899] to-[#FB923C] bg-clip-text text-transparent font-bold tracking-tight ${className}`}
      >
        looplab
      </span>
    );
  }
  return (
    <img
      src="/looplab-logo.svg"
      alt="Looplab"
      onError={() => setFailed(true)}
      className={className}
      width="120"
      height="24"
    />
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-10 pt-4 md:pt-6">
      <div className="flex items-center justify-between gap-3">
        {/* Left pill: logo */}
        <a
          href="#top"
          className="flex items-center gap-2 bg-neutral-900/90 backdrop-blur rounded-full pl-4 pr-5 py-2.5 hover:bg-neutral-800/90 transition-colors cursor-pointer"
        >
          <LooplabMark className="h-7 md:h-9 w-auto" />
        </a>

        {/* Center pill: nav (desktop) */}
        <div className="hidden md:flex items-center gap-1 bg-neutral-900/90 backdrop-blur rounded-full px-2 py-1.5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-neutral-300 hover:text-white transition-colors text-sm px-4 py-2 rounded-full lowercase cursor-pointer hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="md:hidden flex items-center justify-center w-10 h-10 bg-neutral-900/90 backdrop-blur rounded-full hover:bg-neutral-800/90 transition-colors cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="text-white"
            >
              {mobileOpen ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </>
              ) : (
                <>
                  <path d="M4 8h16" />
                  <path d="M4 16h16" />
                </>
              )}
            </svg>
          </button>

          {/* Right button */}
          <button
            type="button"
            className="bg-white text-black text-sm font-medium rounded-full px-5 md:px-6 py-2.5 md:py-3 hover:bg-neutral-200 transition-colors lowercase cursor-pointer"
            onClick={() => {
              const el = document.querySelector("#join");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            say hi
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden mt-3 bg-neutral-900/95 backdrop-blur-lg rounded-2xl px-3 py-3 animate-fade-up border border-white/10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-neutral-300 hover:text-white hover:bg-white/5 transition-colors text-sm px-4 py-3 rounded-xl lowercase cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
