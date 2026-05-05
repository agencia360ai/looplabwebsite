# Looplab — Landing Site

Full-screen dark hero landing page for Looplab. Vite + React + TypeScript + Tailwind + shadcn/ui Button + an embedded Spline 3D scene.

## Run locally

```bash
cd site
npm install
npm run dev
```

Then open http://localhost:5173.

## Build

```bash
npm run build
npm run preview
```

## Notes

- Spline scene URL: `https://prod.spline.design/Slk6b8kz3LRlKiyk/scene.splinecode` (swap in `src/components/HeroSection.tsx` to use a custom scene).
- Theme tokens live in `src/index.css` as HSL CSS custom properties; mapped in `tailwind.config.ts`.
- Sora font is preloaded in `index.html` and applied via `font-sora` on `body`.
- Hero content is anchored to the bottom-left, with `pointer-events-none` on the wrapper so the Spline scene stays interactable; CTAs re-enable clicks via `pointer-events-auto`.
