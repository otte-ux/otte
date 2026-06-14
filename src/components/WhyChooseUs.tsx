import ScrollReveal from "./ScrollReveal";

const CARDS = [
  { icon: <SearchIcon />, title: "Search Property", desc: "Filter properties by location, budget, property type, and citizenship eligibility to find your perfect match." },
  { icon: <UsersIcon />, title: "Meet Your Agent", desc: "Get personalized guidance from our experienced agents who understand your unique requirements and goals." },
  { icon: <CheckCircleIcon />, title: "Close The Deal", desc: "Enjoy a smooth and transparent closing process with full legal support and documentation assistance." },
];

export default function WhyChooseUs() {
  return (
    <section style={{ padding: "6rem 0" }}>
      <div className="container">
        <ScrollReveal>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", marginBottom: "3rem", textAlign: "center" }}>
            <span style={{ color: "#C8A96E", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>Why Choose Us</span>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 300, letterSpacing: "-0.02em" }}>
              We Are Committed To Taking Care Of Our Clients
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid-3">
          {CARDS.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 150}>
              <div className="why-card" style={{ background: "#111", borderRadius: 16, padding: "2.5rem 2rem", textAlign: "center" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(200,169,110,0.1)", border: "1px solid rgba(200,169,110,0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                  {c.icon}
                </div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 500, marginBottom: "0.75rem" }}>{c.title}</h3>
                <p style={{ color: "#6b7280", fontSize: "0.875rem", lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SearchIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>;
}
function UsersIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
}
function CheckCircleIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>;
}
