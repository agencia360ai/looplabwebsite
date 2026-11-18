type StoreLink = { store: "App Store" | "Google Play"; href: string };

type App = {
  name: string;
  category: string;
  tagline: string;
  icon: string;
  shot: string;
  shotAlt: string;
  // Shown behind the screenshot while it loads.
  tint: string;
  links: StoreLink[];
};

// Taglines and screenshots come from each app's store listing.
const APPS: App[] = [
  {
    name: "TaeFlow",
    category: "taekwondo",
    tagline:
      "master taekwondo with daily routines, video lessons and a personal sensei.",
    icon: "/apps/taeflow-icon.webp",
    shot: "/apps/taeflow-shot.webp",
    shotAlt: "TaeFlow home screen: your daily taekwondo coach",
    tint: "#14141f",
    links: [
      {
        store: "App Store",
        href: "https://apps.apple.com/us/app/taeflow-train-like-a-master/id6795224616",
      },
      {
        store: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.looplab.taeflow",
      },
    ],
  },
  {
    name: "MMAFlow",
    category: "mixed martial arts",
    tagline: "your MMA journey, from your first stance to a complete fighter.",
    icon: "/apps/mmaflow-icon.webp",
    shot: "/apps/mmaflow-shot.webp",
    shotAlt: "MMAFlow home screen: your daily MMA coach",
    tint: "#121214",
    links: [
      {
        store: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.looplab.mmaflow",
      },
    ],
  },
  {
    name: "CapyPray",
    category: "prayer",
    tagline:
      "a few calm minutes with God, every day — Capy, a laid-back capybara, prays with you.",
    icon: "/apps/capypray-icon.webp",
    shot: "/apps/capypray-shot.webp",
    shotAlt: "CapyPray: meet Capy, your prayer companion",
    tint: "#f4ecd8",
    links: [
      {
        store: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.looplab.capypray",
      },
    ],
  },
];

export default function AppsSection() {
  return (
    <section
      id="apps"
      className="relative py-24 md:py-32 px-6 md:px-10 bg-cream-elevated border-t border-cream-border"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-brand-gradient text-xs font-semibold tracking-[0.3em] uppercase mb-4">
          our apps
        </p>
        <h2 className="text-ink text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.035em] lowercase mb-6 max-w-3xl">
          built in the <span className="text-brand-gradient">lab.</span>
        </h2>
        <p className="text-ink-muted text-lg md:text-xl font-light max-w-2xl mb-12 md:mb-16 leading-relaxed lowercase">
          each one turns a craft into a loop you actually want to come back to.
        </p>

        {/* Mobile: swipeable row that bleeds to the screen edges.
            md+: a regular grid. */}
        <ul className="-mx-6 px-6 md:mx-0 md:px-0 flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-px-6 pb-2 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {APPS.map((app) => (
            <li
              key={app.name}
              className="snap-start shrink-0 w-[82%] sm:w-[60%] md:w-auto flex"
            >
              <AppCard app={app} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function AppCard({ app }: { app: App }) {
  return (
    <article className="group flex w-full flex-col overflow-hidden rounded-3xl border border-cream-border bg-cream transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10">
      <div
        className="relative aspect-[4/5] overflow-hidden"
        style={{ backgroundColor: app.tint }}
      >
        <img
          src={app.shot}
          alt={app.shotAlt}
          loading="lazy"
          width={720}
          height={900}
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={app.icon}
            alt=""
            aria-hidden="true"
            loading="lazy"
            width={56}
            height={56}
            className="h-14 w-14 rounded-2xl shadow-md shadow-ink/10"
          />
          <div>
            <h3 className="text-ink text-xl font-semibold tracking-tight">
              {app.name}
            </h3>
            <p className="text-ink-muted text-[11px] tracking-[0.18em] uppercase">
              {app.category}
            </p>
          </div>
        </div>

        <p className="text-ink/75 text-base font-light leading-relaxed">
          {app.tagline}
        </p>

        <div className="mt-auto pt-6 flex flex-wrap gap-2">
          {app.links.map((link) => (
            <a
              key={link.store}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Get ${app.name} on ${link.store}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2.5 text-xs font-semibold text-cream transition-all hover:brightness-125 active:scale-[0.97]"
            >
              {link.store}
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 17 17 7" />
                <path d="M8 7h9v9" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
