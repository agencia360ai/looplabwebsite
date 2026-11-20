import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import CapyMathPrivacy from "./pages/CapyMathPrivacy";
import FitBuddyPrivacy from "./pages/FitBuddyPrivacy";
import NotFound from "./pages/NotFound";

// The SPA renders its sections after the browser's own fragment scroll has
// already given up, so jump to the anchor ourselves (e.g. /#apps arriving
// from a legal page, or /privacy#capypray from a store listing).
function ScrollToHash() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/capymath/privacy" element={<CapyMathPrivacy />} />
        <Route path="/fitbuddy/privacy" element={<FitBuddyPrivacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
