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

function HeroLottieLoaded({ data, prefersReducedMotion }) {
  const { View } = useLottie(
    {
      animationData: data,
      loop: !prefersReducedMotion,
      autoplay: true,
      className: "hero__lottie",
    },
    { width: "100%", height: "100%" },
  );

  return View;
}

export function HeroLottie({ embed = false }) {
  const [data, setData] = useState(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const healthLottieUrl = `${import.meta.env.BASE_URL}Health.json`;

  useEffect(() => {
    let cancelled = false;
    fetch(healthLottieUrl)
      .then((res) => res.json())
      .then((json) => {
        if (!cancelled) setData(json);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [healthLottieUrl]);

  const wrapClass = [
    "hero__lottieWrap",
    embed ? "hero__lottieWrap--embed" : "",
    data ? "hero__lottieWrap--ready" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapClass} aria-hidden="true">
      {data ? (
        <HeroLottieLoaded
          data={data}
          prefersReducedMotion={prefersReducedMotion}
        />
      ) : null}
    </div>
  );
}
