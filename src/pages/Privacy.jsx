import { Link } from "react-router-dom";

export function Privacy() {
  return (
    <div
      style={{
        paddingTop: 24,
        paddingInline: "clamp(16px, 4vw, 46px)",
        textAlign: "left",
        maxWidth: 920,
        marginInline: "auto",
      }}
    >
      <h1 style={{ marginBottom: 10 }}>Privacy Policy</h1>
      <p style={{ marginBottom: 18 }}>
        Placeholder privacy policy for the landing site. Replace this with your actual policy.
      </p>

      <h2>Data we collect</h2>
      <p>
        If you add forms/analytics, describe what’s collected, why, and retention periods.
      </p>

      <h2 style={{ marginTop: 18 }}>Contact</h2>
      <p>
        Questions? Email <code>privacy@fluxid.example</code>.
      </p>

      <p style={{ marginTop: 24 }}>
        <Link to="/" style={{ color: "var(--accent)", textDecoration: "none" }}>
          ← Back to home
        </Link>
      </p>
    </div>
  );
}

