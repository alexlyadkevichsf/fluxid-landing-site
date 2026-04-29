import { Link, Outlet } from "react-router-dom";

export function SiteLayout() {
  return (
    <>
      <header className="topbar">
        <Link to="/" className="topbar__logo" aria-label="Fluxid home">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Fluxid"
            className="topbar__logo-image"
          />
        </Link>

        <nav className="topbar__nav" aria-label="Main navigation">
          <Link to="/#who-we-are" className="topbar__link">
            Who we are
          </Link>
          <Link to="/#what-we-are-solving" className="topbar__link">
            What are we solving
          </Link>
          <Link to="/#pricing" className="topbar__link">
            Pricing
          </Link>
          <Link to="/#contact" className="topbar__link">
            Get in Touch
          </Link>
        </nav>

        <Link to="/#try-it-now" className="topbar__tryBtn">
          Get Started Today
        </Link>
      </header>

      <main style={{ flex: 1, paddingBottom: 48 }}>
        <Outlet />
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Fluxid</span>
        <span className="footer__links">
          <Link to="/privacy" className="footer__link">
            Privacy
          </Link>
          <Link to="/terms" className="footer__link">
            Terms
          </Link>
        </span>
      </footer>
    </>
  );
}

