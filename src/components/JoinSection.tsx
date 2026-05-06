export default function JoinSection() {
  return (
    <section
      id="join"
      className="relative py-24 md:py-32 px-6 md:px-10 bg-black border-t border-cream-border overflow-hidden"
    >
      {/* Background — soft brand-gradient glow */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-[#ec4899]/15 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="text-brand-gradient text-xs font-semibold tracking-[0.3em] uppercase mb-5">
          join the journey
        </p>
        <h2 className="text-white text-[clamp(2rem,5.5vw,4.25rem)] font-bold leading-[1.05] tracking-[-0.035em] lowercase mb-6">
          want to follow along?{" "}
          <span className="text-brand-gradient">collaborate?</span>
        </h2>
        <p className="text-white/70 text-lg md:text-xl font-light max-w-xl mx-auto mb-10 leading-relaxed lowercase">
          we're building the future of skill-building apps — where becoming
          better feels like playing a game.
        </p>
        <a
          href="mailto:hello@looplab.gg"
          className="inline-block bg-brand-gradient text-white px-10 py-4 text-sm rounded-full hover:brightness-110 hover:shadow-lg hover:shadow-[#ec4899]/25 active:scale-[0.97] transition-all uppercase tracking-widest font-semibold cursor-pointer"
        >
          hello@looplab.gg
        </a>
        <p className="text-white/40 text-xs font-light mt-12 tracking-wider lowercase">
          looplab studio · panama city
        </p>
      </div>
    </section>
  );
}
