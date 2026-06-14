import ScrollReveal from "./ScrollReveal";

const ARTICLES = [
  { title: "5 Steps Before Getting Turkish Nationality", desc: "Essential steps and requirements for Turkish citizenship through investment.", url: "https://esashomes.com/5-steps-before-getting-turkish-nationality/", cat: "Citizenship", icon: <GlobeIcon /> },
  { title: "Title Deed Taxes in Turkey", desc: "Understanding property taxes and title deed costs in Turkish real estate.", url: "https://esashomes.com/title-deed-taxes-in-turkey/", cat: "Legal", icon: <ScaleIcon /> },
  { title: "Learn About Turkish Passports", desc: "Everything about obtaining a Turkish passport and its benefits.", url: "https://esashomes.com/learn-about-turkish-passports/", cat: "Guide", icon: <BookOpenIcon /> },
];

export default function Blog() {
  return (
    <section id="blog" style={{ padding: "6rem 0" }}>
      <div className="container">
        <ScrollReveal>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "1rem", marginBottom: "3rem", flexWrap: "wrap" }}>
            <div>
              <span style={{ color: "#C8A96E", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>Our Blog</span>
              <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 300, marginTop: "0.5rem", letterSpacing: "-0.02em" }}>
                Latest News & Articles
              </h2>
            </div>
          </div>
        </ScrollReveal>
        <div className="grid-3">
          {ARTICLES.map((a, i) => (
            <ScrollReveal key={a.title} delay={i * 150}>
              <a href={a.url} target="_blank" rel="noopener noreferrer" className="blog-card">
                <div style={{ height: 180, background: "linear-gradient(135deg, rgba(200,169,110,0.15) 0%, rgba(200,169,110,0.05) 100%)", display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  {a.icon}
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "#C8A96E", textTransform: "uppercase", letterSpacing: "0.1em" }}>{a.cat}</span>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 500, margin: "0.5rem 0", lineHeight: 1.4 }}>{a.title}</h3>
                  <p style={{ color: "#6b7280", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: "1rem" }}>{a.desc}</p>
                  <span className="gold-link" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.85rem", fontWeight: 500, color: "#C8A96E" }}>
                    Read More <ArrowUpRightIcon />
                  </span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function GlobeIcon() {
  return <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(200,169,110,0.35)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>;
}
function ScaleIcon() {
  return <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(200,169,110,0.35)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>;
}
function BookOpenIcon() {
  return <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(200,169,110,0.35)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>;
}
function ArrowUpRightIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>;
}
