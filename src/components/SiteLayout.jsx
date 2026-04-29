import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobileNav, setIsMobileNav] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 840px)");
    const sync = () => setIsMobileNav(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 841px)");
    const onChange = () => {
      if (mq.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeNav = () => setMenuOpen(false);

  return (
    <>
      <header
        className={menuOpen ? "topbar topbar--menuOpen" : "topbar"}
      >
        <Link to="/" className="topbar__logo" aria-label="Fluxid home">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Fluxid"
            className="topbar__logo-image"
          />
        </Link>

        <nav
          id="topbar-menu"
          className={`topbar__nav ${menuOpen ? "topbar__nav--open" : ""}`}
          aria-label="Main navigation"
          aria-hidden={isMobileNav ? !menuOpen : undefined}
        >
          <Link
            to="/#who-we-are"
            className="topbar__link"
            onClick={closeNav}
            tabIndex={isMobileNav && !menuOpen ? -1 : undefined}
          >
            Who we are
          </Link>
          <Link
            to="/#what-we-are-solving"
            className="topbar__link"
            onClick={closeNav}
            tabIndex={isMobileNav && !menuOpen ? -1 : undefined}
          >
            What are we solving
          </Link>
          <Link
            to="/#pricing"
            className="topbar__link"
            onClick={closeNav}
            tabIndex={isMobileNav && !menuOpen ? -1 : undefined}
          >
            Pricing
          </Link>
          <Link
            to="/#contact"
            className="topbar__link"
            onClick={closeNav}
            tabIndex={isMobileNav && !menuOpen ? -1 : undefined}
          >
            Get in Touch
          </Link>
        </nav>

        <div className="topbar__end">
          <Link
            to="/#try-it-now"
            className="topbar__tryBtn"
            onClick={closeNav}
          >
            Get Started Today
          </Link>
          <button
            type="button"
            className={`topbar__burger ${menuOpen ? "topbar__burger--open" : ""}`}
            aria-expanded={menuOpen}
            aria-controls="topbar-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="topbar__burgerLine" />
            <span className="topbar__burgerLine" />
            <span className="topbar__burgerLine" />
          </button>
        </div>
      </header>
      <div
        className={menuOpen ? "topbar__backdrop topbar__backdrop--visible" : "topbar__backdrop"}
        aria-hidden
        onClick={closeNav}
      />

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

