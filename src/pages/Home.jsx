import { useEffect, useState } from "react";
import { HeroDecorCurve } from "../components/HeroDecorCurve";
import { HomeBlockDecorCurve } from "../components/HomeBlockDecorCurve";
import { HeroLottie } from "../components/HeroLottie";
import { PublicLottie } from "../components/PublicLottie";

const HERO_TEXT = "Fluxid - We measure\nwhat truly\nmatters";
const BASE_URL = import.meta.env.BASE_URL;
const QR_IMAGE_SRC = `${BASE_URL}qr_code_PNG33.png`;

const BADGE_APP_STORE_DARK = encodeURI(
  `${BASE_URL}Store=App Store, Type=Dark, Language=English@3x.png`,
);
const BADGE_GOOGLE_PLAY_DARK = encodeURI(
  `${BASE_URL}Store=Google Play, Type=Dark, Language=English@3x.png`,
);

const MOBILE_SHOWCASE_LOTTIE = encodeURI(`${BASE_URL}Mobile App Showcase.json`);
const HERO_SUBTITLE =
  "A mobile app that measures your body parameters and alerts you to potential health issues.";
const BODY_METRICS_ITEMS = [
  "Body Mass Index",
  "Pignet Index",
  "Broca’s Index",
  "Ponderal Index",
  "Lean Body Mass",
  "Waist-to-Hip Ratio",
  "Waist-to-Height Ratio",
  "Waist-to-Thigh Ratio",
  "A Body Shape Index",
  "Basal Metabolic Rate",
  "Total Daily Energy Expenditure",
  "Ideal Body Weight",
  "Somatotype Assessment",
  "Shoulder-to-Waist Ratio",
  "Female Body Shape Categorization",
  "Neck Circumference",
  "Shoulder Circumference",
  "Chest/Bust Circumference",
  "Bicep Circumference (Relaxed and Flexed)",
  "Forearm Circumference",
  "Waist Circumference (Narrowest point)",
  "Abdominal Circumference (At the navel)",
  "Hip Circumference (Widest point)",
  "Thigh Circumference (Mid-thigh)",
  "Calf Circumference",
];

const WHAT_WE_SOLVE_TITLE = (
  <>
    The Heavy Truth:
    <br />
    The Silent Pandemic of Our Century
  </>
);

const PRICING_PLANS = [
  {
    key: "spark",
    name: "Spark",
    teaser: "Lightweight tracking for busy days",
    monthly: 6.99,
    yearly: 59,
    features: [
      "Daily weigh-in & mood",
      "Simple trend charts",
      "One home-screen widget",
    ],
  },
  {
    key: "stride",
    name: "Stride",
    teaser: "Where most members find their rhythm",
    monthly: 16.99,
    yearly: 139,
    highlight: true,
    features: [
      "Everything in Spark",
      "Challenges & streak savers",
      "Metabolic-friendly insights",
      "All widgets + focus modes",
    ],
  },
  {
    key: "apex",
    name: "Apex",
    teaser: "For power users and deep dives",
    monthly: 29.99,
    yearly: 249,
    features: [
      "Everything in Stride",
      "Weekly recap briefings",
      "CSV export & history",
      "Early access experiments",
    ],
  },
];

export function Home() {
  const [typed, setTyped] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const [qrShown, setQrShown] = useState(false);
  const [pricingYearly, setPricingYearly] = useState(false);

  useEffect(() => {
    let i = 0;
    let intervalId;
    const startId = setTimeout(() => {
      intervalId = setInterval(() => {
        i += 1;
        setTyped(HERO_TEXT.slice(0, i));
        if (i >= HERO_TEXT.length) {
          clearInterval(intervalId);
          intervalId = undefined;
          setTypingDone(true);
        }
      }, 42);
    }, 220);

    return () => {
      clearTimeout(startId);
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const id = setTimeout(() => setQrShown(true), 420);
    return () => clearTimeout(id);
  }, []);

  return (
    <>
      <section className="hero" aria-label="Introduction">
        <HeroDecorCurve />
        <div className="hero__layout">
          <div className="hero__textCol">
            <h1
              className="hero__title"
              aria-label="Fluxid — We measure what truly matters"
            >
              <span className="hero__sizer" aria-hidden="true">
                {HERO_TEXT}
              </span>
              <span className="hero__overlay">
                <span className="hero__typed">{typed}</span>
                <span
                  className={
                    typingDone
                      ? "hero__cursor hero__cursor--done"
                      : "hero__cursor"
                  }
                  aria-hidden="true"
                >
                  |
                </span>
              </span>
            </h1>
            <p className="hero__subtitle">{HERO_SUBTITLE}</p>
            <div
              className={
                typingDone
                  ? "hero__storeRow hero__storeRow--visible"
                  : "hero__storeRow"
              }
              aria-label="Download the app"
            >
              <a className="storeButton" href="#contact">
                <img
                  className="storeButton__badge"
                  src={BADGE_APP_STORE_DARK}
                  alt="Download on the App Store"
                />
              </a>
              <a className="storeButton" href="#contact">
                <img
                  className="storeButton__badge"
                  src={BADGE_GOOGLE_PLAY_DARK}
                  alt="Get it on Google Play"
                />
              </a>
            </div>
          </div>
          <HeroLottie />
        </div>
      </section>

      <section className="metrics-carousel" aria-label="Body metrics overview">
        <h2 className="metrics-carousel__title">Calories are not always the answer</h2>
        <div className="metrics-carousel__track" aria-hidden="true">
          {[...BODY_METRICS_ITEMS, ...BODY_METRICS_ITEMS].map((item, index) => (
            <span key={`${item}-${index}`} className="metrics-carousel__item">
              {item}
            </span>
          ))}
        </div>
      </section>

      <div className="home__below">
        <HomeBlock
          id="who-we-are"
          title="Hey — we're glad you're here. Let's get acquainted."
          titleTone="sentence"
          layout="left"
          decorCurve={{ tone: "orange", flip: true }}
          splitTextMedia
        >
          <div className="home-block__textStack">
            <p>
              Fluxid is the weight-loss companion for people who are tired of shame,
              crash diets, and apps that only obsess over calories and the number on
              the scale. We focus on the metrics that actually reflect your progress
              and your health — so every step forward feels real, not arbitrary.
            </p>
            <p>
              We turn slimming down into something you&apos;ll want to come back to:
              bite-sized challenges, timely nudges when you need them, and fresh
              insights you won&apos;t get from a generic tracker. Pin what matters to
              your home screen with widgets — stay in the game, stay on track, and
              make the journey feel rewarding instead of punishing.
            </p>
          </div>
          <PublicLottie src={MOBILE_SHOWCASE_LOTTIE} />
        </HomeBlock>

        <HomeBlock
          id="what-we-are-solving"
          title={WHAT_WE_SOLVE_TITLE}
          titleTone="sentence"
          layout="left"
          decorCurve={{ tone: "blue", flip: false }}
          splitTextMedia
          splitMediaFirst
        >
          <div className="home-block__textStack">
            <p>
              The world is facing a new kind of crisis, and it isn&apos;t a virus
              — it&apos;s the weight we carry. Today,{" "}
              <strong>
                excess body fat has become the number one global health threat
              </strong>
              , claiming more lives than ever before. What used to be a sign of
              prosperity is now a <strong>silent killer</strong>, spreading through
              every continent and affecting people of all ages. We are living in an
              era where{" "}
              <strong>
                metabolic health is no longer a luxury, but a survival necessity
              </strong>
              .
            </p>
            <p>
              The numbers are staggering: obesity is linked to{" "}
              <strong>over 200 chronic diseases</strong>, including{" "}
              <strong>type 2 diabetes</strong>,{" "}
              <strong>cardiovascular complications</strong>, and{" "}
              <strong>various types of cancer</strong>.{" "}
              <strong>Since 1975</strong>, global obesity rates have{" "}
              <strong>nearly tripled</strong>, and if current trends continue, it
              is estimated that <strong>half of the world&apos;s population</strong>{" "}
              will be <strong>overweight or obese by 2035</strong>. This isn&apos;t
              just a matter of aesthetics; it&apos;s a{" "}
              <strong>global emergency</strong> that is accelerating faster than our
              healthcare systems can handle.
            </p>
          </div>
          <HeroLottie embed />
        </HomeBlock>

        <HomeBlock
          id="pricing"
          title="Pricing"
          decorCurve={{ tone: "orange", flip: true }}
        >
          <div className="pricing">
            <div
              className="pricing__billing"
              role="group"
              aria-label="Billing period"
            >
              <button
                type="button"
                className={
                  !pricingYearly
                    ? "pricing__seg pricing__seg--active"
                    : "pricing__seg"
                }
                aria-pressed={!pricingYearly}
                onClick={() => setPricingYearly(false)}
              >
                Monthly
              </button>
              <button
                type="button"
                className={
                  pricingYearly
                    ? "pricing__seg pricing__seg--active"
                    : "pricing__seg"
                }
                aria-pressed={pricingYearly}
                onClick={() => setPricingYearly(true)}
              >
                Yearly
              </button>
            </div>
            <ul className="pricing__grid">
              {PRICING_PLANS.map((plan) => (
                <li
                  key={plan.key}
                  className={
                    plan.highlight
                      ? "pricing__card pricing__card--highlight"
                      : "pricing__card"
                  }
                >
                  {plan.highlight ? (
                    <span className="pricing__badge">Popular</span>
                  ) : null}
                  <h3 className="pricing__name">{plan.name}</h3>
                  <p className="pricing__teaser">{plan.teaser}</p>
                  <div className="pricing__priceBlock">
                    {pricingYearly ? (
                      <>
                        <span className="pricing__amount">
                          ${plan.yearly}
                          <span className="pricing__period">/year</span>
                        </span>
                        <span className="pricing__equiv">
                          ~$
                          {(plan.yearly / 12).toFixed(2)}
                          /mo effective
                        </span>
                      </>
                    ) : (
                      <span className="pricing__amount">
                        ${plan.monthly.toFixed(2)}
                        <span className="pricing__period">/month</span>
                      </span>
                    )}
                  </div>
                  <ul className="pricing__features">
                    {plan.features.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                  <a className="pricing__cta" href="#contact">
                    Get {plan.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </HomeBlock>

        <HomeBlock
          id="contact"
          title="Contact Us"
          decorCurve={{ tone: "blue", flip: false }}
        >
          <p>
            Email: <code>hello@fluxid.example</code>
          </p>
        </HomeBlock>
      </div>

      <section
        id="try-it-now"
        className={
          qrShown
            ? "home__qrStrip home__qrStrip--shown home__qrStrip--decorCurve"
            : "home__qrStrip home__qrStrip--decorCurve"
        }
        aria-labelledby="try-it-now-heading"
      >
        <HomeBlockDecorCurve tone="orange" flip={true} />
        <h2 id="try-it-now-heading" className="home-block__title">
          Try it Now
        </h2>
        <div className="home__qrStrip__codes">
          <div className="qr-item">
            <img
              className="qr-item__img"
              src={QR_IMAGE_SRC}
              alt="QR code for the App Store"
            />
            <a className="qr-item__badgeLink" href="#contact">
              <img
                className="qr-item__badge"
                src={BADGE_APP_STORE_DARK}
                alt="Download on the App Store"
              />
            </a>
          </div>

          <div className="qr-item">
            <img
              className="qr-item__img"
              src={QR_IMAGE_SRC}
              alt="QR code for Google Play"
            />
            <a className="qr-item__badgeLink" href="#contact">
              <img
                className="qr-item__badge"
                src={BADGE_GOOGLE_PLAY_DARK}
                alt="Get it on Google Play"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function HomeBlock({
  id,
  title,
  children,
  titleTone,
  layout,
  decorCurve,
  splitTextMedia,
  splitMediaFirst,
}) {
  const titleClassName =
    titleTone === "sentence"
      ? "home-block__title home-block__title--sentence"
      : "home-block__title";

  const sectionClassName = [
    layout === "left" ? "home-block home-block--left" : "home-block",
    decorCurve ? "home-block--decorCurve" : "",
    splitTextMedia ? "home-block--split" : "",
    splitTextMedia && splitMediaFirst ? "home-block--splitMediaFirst" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={sectionClassName}>
      {decorCurve ? (
        <HomeBlockDecorCurve tone={decorCurve.tone} flip={decorCurve.flip} />
      ) : null}
      <h2 className={titleClassName}>{title}</h2>
      <div className="home-block__content">{children}</div>
    </section>
  );
}
