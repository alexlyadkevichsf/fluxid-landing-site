import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      return;
    }

    const id = decodeURIComponent(location.hash.replace(/^#/, ""));
    const el = document.getElementById(id);
    if (!el) return;
    const block = id === "try-it-now" ? "center" : "start";
    el.scrollIntoView({ behavior: "smooth", block });
  }, [location.pathname, location.hash]);

  return null;
}

