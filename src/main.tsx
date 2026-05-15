import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Don't let the browser (iOS Safari / iOS Chrome especially) restore a
// previous scroll position when the user reopens the tab — they'd land
// mid-page on the next section instead of the hero.
//
// scrollRestoration = "manual" is the official switch, but iOS WebKit
// sometimes still restores scroll AFTER our JS runs (around `pageshow`).
// So we also forcibly scroll-to-top on the events where restoration can
// happen, but only for the FIRST few moments — after that the user is
// in control of their scroll position.
if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

const forceScrollTop = () => window.scrollTo(0, 0);
forceScrollTop();
window.addEventListener("pageshow", forceScrollTop);
window.addEventListener("load", forceScrollTop);

// Once React mounts + the page has had a moment to paint, stop fighting
// the user's scroll. requestAnimationFrame chain guarantees we run after
// the first layout/paint.
requestAnimationFrame(() => {
  forceScrollTop();
  requestAnimationFrame(() => {
    forceScrollTop();
    setTimeout(() => {
      forceScrollTop();
      window.removeEventListener("pageshow", forceScrollTop);
      window.removeEventListener("load", forceScrollTop);
    }, 300);
  });
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
