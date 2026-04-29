/** Shared with WhoWeAreDecorCurve (vertically flipped there). */
export const HERO_DECOR_PATH_D =
  "M 2.5 54 C 10 44, 18 32, 28 24 C 36 17, 40 14, 44 8 C 48 2, 56 3, 56 12 C 56 20, 48 28, 52 32 C 58 36, 64 28, 72 24 C 80 19, 88 12, 94 6 C 97 3, 98.5 1.2, 99.5 0.2";

/**
 * Decorative curve behind hero headline + Lottie — continuous motion along path.
 */
export function HeroDecorCurve() {
  return (
    <svg
      className="hero__decorSvg"
      viewBox="0 0 100 62"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="hero__decorPath"
        pathLength="1"
        d={HERO_DECOR_PATH_D}
      />
    </svg>
  );
}
