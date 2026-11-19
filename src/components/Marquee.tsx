// Brand-gradient ticker between the hero and the apps. Purely decorative:
// it repeats the hero's cycling words, so screen readers skip it.
const PHRASES = [
  "become a master",
  "become a champion",
  "become limitless",
  "become unstoppable",
];

export default function Marquee() {
  // Each half is long enough to cover a wide screen on its own.
  const half = [...PHRASES, ...PHRASES];
  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden bg-brand-gradient py-4 md:py-5 font-readex"
    >
      <div className="marquee-track flex w-max">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {half.map((phrase, i) => (
              <li
                key={i}
                className="flex items-center whitespace-nowrap text-black text-2xl md:text-4xl font-semibold lowercase tracking-[-0.03em]"
              >
                <span className="px-6 md:px-10">{phrase}</span>
                <span className="text-black/50 text-lg md:text-2xl">✦</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
