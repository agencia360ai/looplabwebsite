import { useState } from "react";

type Project = {
  id: string;
  emoji: string;
  title: string;
  status: string;
  statusTone: "live" | "dev" | "concept" | "next";
  screen: string | null;
  mascot: string | null;
  alt: string | null;
};

const PROJECTS: Project[] = [
  {
    id: "taekwondo",
    emoji: "🥋",
    title: "taekwondo.",
    status: "almost ready",
    statusTone: "live",
    screen: "/screens/taekwondo-home.png",
    mascot: "/mascots/sensei-fight.png",
    alt: "Taekwondo app home screen",
  },
  {
    id: "boxing",
    emoji: "🥊",
    title: "boxing.",
    status: "in development",
    statusTone: "dev",
    screen: "/screens/boxing-home.png",
    mascot: "/mascots/boxer-jab.png",
    alt: "Boxing app",
  },
  {
    id: "chef",
    emoji: "🍳",
    title: "chef training.",
    status: "in concept",
    statusTone: "concept",
    screen: "/screens/chef-home.png",
    mascot: "/mascots/baker-flame.png",
    alt: "Chef training app",
  },
  {
    id: "next",
    emoji: "✦",
    title: "next loops.",
    status: "rapper · racer · baker · coming soon",
    statusTone: "next",
    screen: null,
    mascot: null,
    alt: null,
  },
];

const TONE_CLASSES: Record<Project["statusTone"], string> = {
  live: "bg-emerald-500/15 text-emerald-700 border-emerald-500/30",
  dev: "bg-amber-500/15 text-amber-700 border-amber-500/30",
  concept: "bg-sky-500/15 text-sky-700 border-sky-500/30",
  next: "bg-ink/5 text-ink-muted border-cream-border",
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
          a glimpse at the loops in flight.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [screenFailed, setScreenFailed] = useState(false);
  const showScreen = project.screen && !screenFailed;
  const showMascot = !showScreen && project.mascot;

  return (
    <div className="group relative bg-cream border border-cream-border rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-ink/5 hover:-translate-y-1 transition-all">
      <div className="aspect-[3/4] relative flex items-end justify-center bg-gradient-to-b from-cream-elevated to-cream overflow-hidden">
        <span className="absolute top-5 left-5 text-3xl opacity-60 select-none z-10">
          {project.emoji}
        </span>
        {showScreen && (
          <img
            src={project.screen!}
            alt={project.alt ?? project.title}
            loading="lazy"
            onError={() => setScreenFailed(true)}
            className="absolute inset-x-0 top-6 mx-auto h-[94%] w-auto object-contain object-top transition-transform duration-500 group-hover:scale-[1.03] drop-shadow-xl"
          />
        )}
        {showMascot && (
          <img
            src={project.mascot!}
            alt={project.alt ?? project.title}
            loading="lazy"
            className="h-[88%] w-auto object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.05]"
          />
        )}
        {!showScreen && !showMascot && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[6rem] text-ink/[0.06] font-bold leading-none select-none">
              ?
            </span>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-ink text-lg font-semibold tracking-tight mb-2 lowercase">
          {project.title}
        </h3>
        <span
          className={`inline-block px-2.5 py-1 text-[10px] tracking-[0.15em] uppercase rounded-full border ${
            TONE_CLASSES[project.statusTone]
          }`}
        >
          {project.status}
        </span>
      </div>
    </div>
  );
}
