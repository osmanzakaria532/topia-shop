import { useState } from "react";

const TERMS = [
  {
    id: "intro",
    title: "Introduction",
    body: "These Terms and Conditions (Terms) govern your use of our services.",
  },
  {
    id: "privacy",
    title: "Privacy",
    body: "We care about your privacy. Read our policy for details.",
  },
  {
    id: "contact",
    title: "Contact",
    body: "For any questions, reach us at support@example.com.",
  },
];

export default function Terms() {
  const [query, setQuery] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [acceptedAt, setAcceptedAt] = useState(null);

  const filtered = TERMS.filter(
    (t) =>
      t.title.toLowerCase().includes(query.toLowerCase()) ||
      t.body.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        background: "#fafafa",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          background: "white",
          borderBottom: "1px solid #ddd",
          padding: "10px 20px",
        }}
      >
        <h2 style={{ margin: 0 }}>Terms & Conditions</h2>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          style={{ marginTop: 8, padding: 6, width: "100%", maxWidth: 300 }}
        />
        <label style={{ display: "flex", alignItems: "center", marginTop: 8 }}>
          <input
            type="checkbox"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
          />
          <span style={{ marginLeft: 6 }}>I accept</span>
        </label>
      </header>

      <main style={{ maxWidth: 700, margin: "20px auto", padding: "0 16px" }}>
        {accepted && (
          <div
            style={{
              padding: 10,
              background: "#e7fbe7",
              border: "1px solid #b2e5b2",
              marginBottom: 16,
            }}
          >
            Accepted {acceptedAt && `on ${acceptedAt.toLocaleString()}`}
          </div>
        )}

        <div
          style={{
            background: "white",
            border: "1px solid #ddd",
            borderRadius: 6,
            padding: 20,
          }}
        >
          {filtered.length === 0 ? (
            <p style={{ color: "#888" }}>No results found.</p>
          ) : (
            filtered.map((t) => (
              <section
                key={t.id}
                style={{ marginBottom: 20 }}
              >
                <h3 style={{ marginBottom: 6 }}>{t.title}</h3>
                <p style={{ margin: 0, color: "#555" }}>{t.body}</p>
              </section>
            ))
          )}
        </div>

        <button
          onClick={() => setAcceptedAt(new Date())}
          disabled={!accepted}
          style={{
            marginTop: 20,
            padding: "8px 16px",
            background: accepted ? "black" : "#999",
            color: "white",
            border: "none",
            borderRadius: 4,
            cursor: accepted ? "pointer" : "not-allowed",
          }}
        >
          Confirm acceptance
        </button>

        <p style={{ fontSize: 12, color: "#777", marginTop: 20 }}>
          Last updated: Oct 25, 2025
        </p>
      </main>

      <footer
        style={{
          textAlign: "center",
          padding: 20,
          fontSize: 12,
          color: "#777",
        }}
      >
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </footer>
    </div>
  );
}
