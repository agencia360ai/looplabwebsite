export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 px-6 md:px-10 border-t border-border/40 bg-background"
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">
          Contact
        </p>
        <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.04em] uppercase mb-6">
          Build the <span className="text-primary">bridge</span> with us.
        </h2>
        <p className="text-foreground/70 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed">
          We're shipping six Self-RPG Apps in the next twelve months and
          owning the category in twenty-four. If you back category-defining
          mobile, let's talk.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="mailto:invest@looplab.studio"
            className="bg-primary text-primary-foreground px-8 py-4 text-sm rounded-sm hover:brightness-110 transition-all active:scale-[0.97] uppercase tracking-widest font-bold"
          >
            invest@looplab.studio
          </a>
          <a
            href="mailto:hello@looplab.studio"
            className="bg-white/[0.05] border border-white/15 text-foreground px-8 py-4 text-sm rounded-sm hover:bg-white/[0.08] transition-all active:scale-[0.97] uppercase tracking-widest font-bold"
          >
            General contact
          </a>
        </div>
        <p className="text-muted-foreground/60 text-xs font-light mt-12 tracking-wider">
          Looplab Studio — Panama City
        </p>
      </div>
    </section>
  );
}
