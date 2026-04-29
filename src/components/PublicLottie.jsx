import { useEffect, useState } from "react";
import { useLottie } from "lottie-react";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

function PublicLottieLoaded({ data, prefersReducedMotion }) {
  const { View } = useLottie(
    {
      animationData: data,
      loop: !prefersReducedMotion,
      autoplay: true,
      className: "home-block__lottie",
    },
    { width: "100%", height: "100%" },
  );

  return View;
}

/**
 * Fetches a Lottie JSON from `public/` (e.g. encodeURI("/My File.json")).
 */
export function PublicLottie({ src }) {
  const [data, setData] = useState(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    let cancelled = false;
    fetch(src)
      .then((res) => res.json())
      .then((json) => {
        if (!cancelled) setData(json);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [src]);

  return (
    <div className="home-block__lottieWrap" aria-hidden="true">
      {data ? (
        <PublicLottieLoaded
          data={data}
          prefersReducedMotion={prefersReducedMotion}
        />
      ) : null}
    </div>
  );
}
