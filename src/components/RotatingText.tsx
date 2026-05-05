import { useEffect, useState } from "react";

const WORDS = [
  "a master.",
  "a champion.",
  "unstoppable.",
  "legendary.",
  "the protagonist.",
];

const LONGEST = WORDS.reduce((a, b) => (a.length >= b.length ? a : b));

export default function RotatingText({ className = "" }: { className?: string }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setI((n) => (n + 1) % WORDS.length),
      2400,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <span
      className={`relative inline-block whitespace-nowrap align-baseline ${className}`}
    >
      {WORDS.map((w, idx) => (
        <span
          key={w}
          aria-hidden={idx !== i}
          className={`absolute left-0 top-0 transition-all duration-700 ease-out ${
            idx === i
              ? "opacity-100 translate-y-0 blur-0"
              : "opacity-0 translate-y-3 blur-sm"
          }`}
        >
          {w}
        </span>
      ))}
      <span aria-hidden className="invisible">
        {LONGEST}
      </span>
      <span className="sr-only" aria-live="polite">
        {WORDS[i]}
      </span>
    </span>
  );
}
