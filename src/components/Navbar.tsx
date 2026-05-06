import { useState } from "react";

const NAV_LINKS = [
  { label: "apps", href: "#apps" },
  { label: "studio", href: "#studio" },
  { label: "process", href: "#process" },
  { label: "contact", href: "#contact" },
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
      src="/looplab-logo.png"
      alt="Looplab"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between gap-3 px-4 md:px-10 pt-4 md:pt-6">
      {/* Left pill: logo */}
      <a
        href="#top"
        className="flex items-center gap-2 bg-neutral-900/90 backdrop-blur rounded-full pl-4 pr-5 py-2.5 hover:bg-neutral-800/90 transition-colors"
      >
        <LooplabMark className="h-5 md:h-6 w-auto" />
      </a>

      {/* Center pill: nav */}
      <div className="hidden md:flex items-center gap-1 bg-neutral-900/90 backdrop-blur rounded-full px-2 py-1.5">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-neutral-300 hover:text-white transition-colors text-sm px-4 py-2 rounded-full lowercase"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Right button */}
      <button
        type="button"
        className="bg-white text-black text-sm font-medium rounded-full px-5 md:px-6 py-2.5 md:py-3 hover:bg-neutral-200 transition-colors lowercase"
        onClick={() => {
          const el = document.querySelector("#contact");
          el?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        say hi
      </button>
    </nav>
  );
}
