export default function JoinSection() {
  return (
    <section
      id="join"
      className="relative py-24 md:py-32 px-6 md:px-10 bg-black overflow-clip-safe"
    >
      {/* Gradient-bordered card: 1px of brand gradient around a near-black
          panel, with a soft pink bloom underneath. */}
      <div className="reveal relative max-w-4xl mx-auto rounded-[2.5rem] bg-brand-gradient p-px shadow-[0_40px_120px_-40px_rgba(236,72,153,0.55)]">
        <div className="relative overflow-hidden rounded-[calc(2.5rem-1px)] bg-[#07070a] px-6 py-16 md:px-16 md:py-20 text-center">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-1/3 -left-1/4 w-[60%] h-[70%] rounded-full bg-[#a855f7]/25 blur-[120px]" />
            <div className="absolute -bottom-1/3 -right-1/4 w-[60%] h-[70%] rounded-full bg-[#fb923c]/20 blur-[120px]" />
          </div>

          <div className="relative">
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
              href="mailto:joe@fivebits.gs"
              className="inline-flex items-center gap-2 bg-brand-gradient text-white px-10 py-4 text-sm rounded-full hover:brightness-110 hover:shadow-lg hover:shadow-[#ec4899]/30 active:scale-[0.97] transition-all uppercase tracking-widest font-semibold cursor-pointer"
            >
              say hey!
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <p className="text-white/40 text-xs font-light mt-12 tracking-wider lowercase">
              looplab studio · panama city
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
