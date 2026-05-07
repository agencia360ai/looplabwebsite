import { useRef, useState } from "react";

type Status = "testing" | "dev" | "concept" | "soon";

type Project = {
  id: string;
  name: string;
  tagline: string;
  status: Status;
  mascot: string;
  alt: string;
};

const FEATURED = {
  id: "taeflow",
  name: "TaeFlow.",
  tagline: "become a martial arts expert.",
  description:
    "daily drills, sparring xp, and a path from white belt to black. our first loop in the wild.",
  status: "testing" as Status,
  screen: "/screens/taekwondo-home.png",
  mascot: "/mascots/sensei-fight.png",
  alt: "TaeFlow martial arts app",
};

const PROJECTS: Project[] = [
  {
    id: "boxit",
    name: "BoxIt.",
    tagline: "every round, sharper.",
    status: "dev",
    mascot: "/mascots/boxer-jab.png",
    alt: "BoxIt boxing app",
  },
  {
    id: "bakerii",
    name: "Bakerii.",
    tagline: "the chef's path, gamified.",
    status: "concept",
    mascot: "/mascots/baker-flame.png",
    alt: "Bakerii cooking app",
  },
  {
    id: "racer",
    name: "Racer.",
    tagline: "podium chasers only.",
    status: "soon",
    mascot: "/mascots/racer-trophy.png",
    alt: "Racer driving app",
  },
  {
    id: "rapper",
    name: "Mic Drop.",
    tagline: "bars, flow, & followers.",
    status: "soon",
    mascot: "/mascots/rapper-mic.png",
    alt: "Mic Drop rap app",
  },
];

const STATUS_LABELS: Record<Status, string> = {
  testing: "testing",
  dev: "in development",
  concept: "in concept",
  soon: "coming soon",
};

const STATUS_TONES: Record<Status, string> = {
  testing: "bg-emerald-500/15 text-emerald-700 border-emerald-500/30",
  dev: "bg-amber-500/15 text-amber-700 border-amber-500/30",
  concept: "bg-sky-500/15 text-sky-700 border-sky-500/30",
  soon: "bg-ink/5 text-ink-muted border-cream-border",
};

export default function LabSection() {
  return (
    <section
      id="lab"
      className="relative py-24 md:py-32 px-6 md:px-10 bg-cream-elevated border-t border-cream-border"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-brand-gradient text-xs font-semibold tracking-[0.3em] uppercase mb-4">
          in the lab
        </p>
        <h2 className="text-ink text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.035em] lowercase mb-6 max-w-3xl">
          what we're <span className="text-brand-gradient">building.</span>
        </h2>
        <p className="text-ink-muted text-lg md:text-xl font-light max-w-2xl mb-16 leading-relaxed lowercase">
          one loop at a time — each one earning its expertise.
        </p>

        {/* Featured project — TaeFlow */}
        <FeaturedProject />

        {/* Smaller projects grid */}
        <div className="mt-20">
          <p className="text-ink-muted text-sm font-medium tracking-[0.2em] uppercase mb-6">
            next on the bench
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROJECTS.map((p) => (
              <ProjectTile key={p.id} project={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedProject() {
  const [screenFailed, setScreenFailed] = useState(false);
  const phoneRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Reset to default tilt when not hovering
  const RESTING_TRANSFORM =
    "rotateY(-18deg) rotateX(8deg) rotateZ(-2deg) translateZ(0)";

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const phone = phoneRef.current;
    const wrapper = wrapperRef.current;
    if (!phone || !wrapper) return;
    const rect = wrapper.getBoundingClientRect();
    // Normalize cursor position to [-1, 1] relative to wrapper center
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    // Mix interactive tilt with the resting pose
    const rotY = -18 + nx * 12; // -30 to -6
    const rotX = 8 - ny * 10; // 18 to -2
    const rotZ = -2 + nx * 1.5;
    phone.style.transform = `rotateY(${rotY}deg) rotateX(${rotX}deg) rotateZ(${rotZ}deg) translateZ(0)`;
  };

  const handleMouseLeave = () => {
    if (phoneRef.current) {
      phoneRef.current.style.transform = RESTING_TRANSFORM;
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-cream to-cream-elevated border border-cream-border rounded-3xl overflow-hidden">
      {/* Soft brand glow accent */}
      <div
        aria-hidden="true"
        className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gradient-to-br from-[#a855f7]/15 via-[#ec4899]/10 to-transparent blur-3xl pointer-events-none"
      />

      <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 p-6 sm:p-10 md:p-14 items-center">
        {/* Phone mockup — tilted, with frame, swivels on hover */}
        <div
          ref={wrapperRef}
          className="lg:col-span-2 relative flex justify-center perspective-[1500px]"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={phoneRef}
            className="relative w-full max-w-[260px] sm:max-w-[300px]"
            style={{
              transform: RESTING_TRANSFORM,
              transformStyle: "preserve-3d",
              transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              willChange: "transform",
            }}
          >
            {/* Phone frame */}
            <div
              className="relative bg-neutral-900 rounded-[2.75rem] p-2.5 shadow-2xl"
              style={{
                boxShadow:
                  "0 30px 60px -15px rgba(168,85,247,0.35), 0 20px 40px -10px rgba(236,72,153,0.25), 0 0 0 1px rgba(255,255,255,0.08) inset",
              }}
            >
              {/* Screen */}
              <div className="relative bg-black rounded-[2.25rem] overflow-hidden">
                {/* Notch */}
                <div
                  aria-hidden="true"
                  className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-neutral-900 rounded-full z-10"
                />
                {!screenFailed ? (
                  <img
                    src={FEATURED.screen}
                    alt={FEATURED.alt}
                    loading="lazy"
                    onError={() => setScreenFailed(true)}
                    className="w-full h-auto block"
                  />
                ) : (
                  <img
                    src={FEATURED.mascot}
                    alt={FEATURED.alt}
                    loading="lazy"
                    className="w-full h-auto block"
                  />
                )}
              </div>
              {/* Side button highlight */}
              <div
                aria-hidden="true"
                className="absolute right-[-2px] top-24 w-1 h-12 bg-neutral-700 rounded-r"
              />
            </div>
          </div>
        </div>

        {/* Project content */}
        <div className="lg:col-span-3">
          <div className="flex items-center gap-3 mb-5">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 text-[10px] tracking-[0.18em] uppercase rounded-full border ${STATUS_TONES[FEATURED.status]}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {STATUS_LABELS[FEATURED.status]}
            </span>
            <span className="text-ink-muted text-xs tracking-[0.15em] uppercase font-medium">
              flagship
            </span>
          </div>
          <h3 className="text-ink text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.035em] mb-3 lowercase">
            {FEATURED.name}
          </h3>
          <p className="text-ink text-xl md:text-2xl font-medium tracking-tight mb-5 lowercase">
            <span className="text-brand-gradient">{FEATURED.tagline}</span>
          </p>
          <p className="text-ink-muted text-base md:text-lg font-light leading-relaxed lowercase max-w-xl">
            {FEATURED.description}
          </p>
        </div>
      </div>
    </div>
  );
}

function ProjectTile({ project }: { project: Project }) {
  return (
    <div className="group relative bg-cream border border-cream-border rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-ink/5 hover:-translate-y-1 transition-all cursor-pointer p-5">
      <div className="aspect-square relative flex items-end justify-center mb-4 overflow-hidden">
        <img
          src={project.mascot}
          alt={project.alt}
          loading="lazy"
          className="h-full w-auto object-contain object-bottom transition-transform duration-500 group-hover:scale-110 drop-shadow-lg"
        />
      </div>
      <div>
        <div className="flex items-center justify-between mb-2 gap-2">
          <h4 className="text-ink text-base font-semibold tracking-tight lowercase truncate">
            {project.name}
          </h4>
        </div>
        <p className="text-ink-muted text-sm font-light leading-snug mb-3 lowercase">
          {project.tagline}
        </p>
        <span
          className={`inline-block px-2 py-0.5 text-[9px] tracking-[0.15em] uppercase rounded-full border ${STATUS_TONES[project.status]}`}
        >
          {STATUS_LABELS[project.status]}
        </span>
      </div>
    </div>
  );
}
