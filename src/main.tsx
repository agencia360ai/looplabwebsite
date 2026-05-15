import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Don't let the browser (iOS Safari especially) restore a previous scroll
// position when the user reopens the tab — they'd land mid-page on the
// next section instead of the hero. We control scroll explicitly.
if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}
window.scrollTo(0, 0);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
