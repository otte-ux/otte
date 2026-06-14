import ScrollReveal from "./ScrollReveal";

const TESTIMONIALS = [
  { name: "Ali Younis", role: "Investor", initials: "AY", text: "All thanks and appreciation to ESAS Homes for my experience with them more than once. Credibility to continue at the forefront." },
  { name: "Hamoud Al-Shabami", role: "Investor", initials: "HS", text: "May God bless you with ease of dealing and speed of completion. Highly recommended for anyone looking to invest in Istanbul." },
  { name: "Mustafa Abed", role: "Entrepreneur", initials: "MA", text: "After my experience with more than one company, I chose ESAS Homes. Thank God, it was a successful investment. Thank you for the after-sales services." },
];

function StarIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="#C8A96E" stroke="#C8A96E" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
}

export default function Testimonials() {
  return (
    <section style={{ padding: "6rem 0" }}>
      <div className="container">
        <ScrollReveal>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", marginBottom: "3rem", textAlign: "center" }}>
            <span style={{ color: "#C8A96E", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>Testimonials</span>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 300, letterSpacing: "-0.02em" }}>
              What Our Clients Say
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid-3">
          {TESTIMONIALS.map((tc, i) => (
            <ScrollReveal key={tc.name} delay={i * 150}>
              <div className="testimonial-card">
                <div style={{ display: "flex", gap: "0.25rem", marginBottom: "1.25rem" }}>
                  {Array.from({ length: 5 }).map((_, j) => <StarIcon key={j} />)}
                </div>
                <p style={{ color: "#d1d5db", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.5rem", fontStyle: "italic" }}>
                  &ldquo;{tc.text}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(200,169,110,0.15)", border: "1px solid rgba(200,169,110,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", fontWeight: 600, color: "#C8A96E" }}>
                    {tc.initials}
                  </div>
                  <div>
                    <div style={{ fontWeight: 500, fontSize: "0.9rem" }}>{tc.name}</div>
                    <div style={{ color: "#6b7280", fontSize: "0.75rem" }}>{tc.role}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
