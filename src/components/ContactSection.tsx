export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 px-6 md:px-10 bg-hero-bg border-t border-cream-border"
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">
          Join the journey
        </p>
        <h2 className="text-foreground text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.1] tracking-[-0.035em] uppercase mb-6">
          Want to <span className="text-primary">become</span> with us?
        </h2>
        <p className="text-foreground/70 text-lg md:text-xl font-light max-w-xl mx-auto mb-12 leading-relaxed">
          Curious about what we're building, want to follow along, or build
          something with us — drop us a line.
        </p>
        <a
          href="mailto:hello@looplab.studio"
          className="inline-block bg-primary text-primary-foreground px-10 py-4 text-sm rounded-sm hover:brightness-110 transition-all active:scale-[0.97] uppercase tracking-widest font-bold"
        >
          hello@looplab.studio
        </a>
        <p className="text-muted-foreground/60 text-xs font-light mt-12 tracking-wider">
          Looplab Studio — Panama City
        </p>
      </div>
    </section>
  );
}
