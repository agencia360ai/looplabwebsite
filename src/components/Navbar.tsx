import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Apps", href: "#apps" },
  { label: "Studio", href: "#studio" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16 py-5 bg-hero-bg/80 backdrop-blur-xl border-b border-white/5">
      {/* Logo */}
      <a
        href="#top"
        className="text-foreground text-xl font-semibold tracking-tight"
      >
        LOOPLAB
        <span className="text-primary">.</span>
      </a>

      {/* Center nav */}
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

      {/* CTA */}
      <Button
        variant="navCta"
        size="lg"
        className="hidden md:inline-flex rounded-lg uppercase text-xs tracking-widest px-6"
        onClick={() => {
          const el = document.querySelector("#contact");
          el?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Invest
      </Button>
    </nav>
  );
}
