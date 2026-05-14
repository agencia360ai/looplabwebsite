import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Props = {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
};

export default function LegalLayout({
  eyebrow,
  title,
  lastUpdated,
  children,
}: Props) {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main className="bg-cream pt-32 md:pt-40 pb-20 md:pb-28 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-ink-muted hover:text-ink text-sm transition-colors mb-10 lowercase tracking-wide"
          >
            ← back to looplab
          </Link>

          <p className="text-brand-gradient text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            {eyebrow}
          </p>
          <h1 className="text-ink text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.03em] lowercase mb-3">
            {title}
          </h1>
          <p className="text-ink-muted text-sm tracking-wide mb-12">
            Last updated: {lastUpdated}
          </p>

          <div className="prose-content text-ink/85 text-base md:text-lg font-light leading-relaxed space-y-6">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
