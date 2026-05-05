export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 px-6 md:px-10 bg-hero-bg border-t border-cream-border"
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">
          Partner
        </p>
        <h2 className="text-foreground text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.1] tracking-[-0.035em] uppercase mb-6">
          Build the studio behind the{" "}
          <span className="text-primary">next generation of experts.</span>
        </h2>
        <p className="text-foreground/70 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed">
          Six Self-RPG Apps in twelve months. Talking to investors,
          publishers, and SMEs.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="mailto:invest@looplab.studio"
            className="bg-primary text-primary-foreground px-8 py-4 text-sm rounded-sm hover:brightness-110 transition-all active:scale-[0.97] uppercase tracking-widest font-bold"
          >
            Investors
          </a>
          <a
            href="mailto:partner@looplab.studio"
            className="bg-white/[0.06] border border-white/15 text-foreground px-8 py-4 text-sm rounded-sm hover:bg-white/[0.1] transition-all active:scale-[0.97] uppercase tracking-widest font-bold"
          >
            Publishers / SMEs
          </a>
          <a
            href="mailto:hello@looplab.studio"
            className="text-foreground/70 hover:text-foreground px-4 py-4 text-sm transition-colors uppercase tracking-widest font-bold"
          >
            General
          </a>
        </div>
        <p className="text-muted-foreground/60 text-xs font-light mt-12 tracking-wider">
          Looplab Studio — Panama City
        </p>
      </div>
    </section>
  );
}
