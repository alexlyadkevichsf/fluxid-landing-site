import { HERO_DECOR_PATH_D } from "./HeroDecorCurve";

/**
 * Hero path as stroke: `flip` mirrors vertically (top↔bottom flow vs hero).
 * `tone` matches hero blue or who-we-are orange.
 */
export function HomeBlockDecorCurve({ tone, flip }) {
  const pathClass = `home-block__decorPath home-block__decorPath--${tone}`;
  const path = (
    <path className={pathClass} pathLength="1" d={HERO_DECOR_PATH_D} />
  );

  return (
    <svg
      className="home-block__decorSvg"
      viewBox="0 0 100 62"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      {flip ? <g transform="translate(0 62) scale(1 -1)">{path}</g> : path}
    </svg>
  );
}
