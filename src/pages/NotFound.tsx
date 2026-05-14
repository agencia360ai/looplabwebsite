import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-6 py-32 text-center">
        <div className="max-w-xl">
          <p className="text-brand-gradient text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            404
          </p>
          <h1 className="text-white text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.035em] lowercase mb-6">
            this loop doesn't exist.
          </h1>
          <p className="text-white/70 text-lg md:text-xl font-light mb-10 lowercase">
            the page you're looking for isn't here. let's get you back to
            the lab.
          </p>
          <Link
            to="/"
            className="inline-block bg-brand-gradient text-white px-8 py-3.5 text-sm rounded-full hover:brightness-110 active:scale-[0.97] transition-all lowercase tracking-wide font-medium"
          >
            back to looplab
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
