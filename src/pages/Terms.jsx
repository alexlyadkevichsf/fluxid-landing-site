import { Link } from "react-router-dom";

export function Terms() {
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
      <h1 style={{ marginBottom: 10 }}>Terms of Service</h1>
      <p style={{ marginBottom: 18 }}>
        Placeholder terms for the landing site. Replace this with your actual terms.
      </p>

      <h2>Use of the site</h2>
      <p>Define acceptable use, limitations, and disclaimers here.</p>

      <h2 style={{ marginTop: 18 }}>Contact</h2>
      <p>
        Questions? Email <code>legal@fluxid.example</code>.
      </p>

      <p style={{ marginTop: 24 }}>
        <Link to="/" style={{ color: "var(--accent)", textDecoration: "none" }}>
          ← Back to home
        </Link>
      </p>
    </div>
  );
}

