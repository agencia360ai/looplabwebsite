import { useState } from "react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Apps", href: "#apps" },
  { label: "Studio", href: "#studio" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
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
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 lg:px-16 py-4 md:py-5 bg-hero-bg/80 backdrop-blur-xl border-b border-white/5">
      <a href="#top" className="flex items-center text-xl">
        <LooplabMark className="h-7 md:h-8 w-auto" />
      </a>

      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest"
          >
            {link.label}
          </a>
        ))}
      </div>

      <Button
        variant="navCta"
        size="lg"
        className="hidden md:inline-flex rounded-lg uppercase text-xs tracking-widest px-6"
        onClick={() => {
          const el = document.querySelector("#contact");
          el?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Partner
      </Button>
    </nav>
  );
}
