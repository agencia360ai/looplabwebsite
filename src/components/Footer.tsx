export default function Footer() {
  return (
    <footer className="bg-hero-bg border-t border-white/5 px-6 md:px-10 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-foreground text-sm font-semibold tracking-tight">
          LOOPLAB<span className="text-primary">.</span>
        </p>
        <p className="text-muted-foreground/70 text-xs tracking-wide">
          People don't want to learn. They want to{" "}
          <span className="text-foreground/85">become.</span>
        </p>
        <p className="text-muted-foreground/50 text-xs">
          © {new Date().getFullYear()} Looplab Studio
        </p>
      </div>
    </footer>
  );
}
