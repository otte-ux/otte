import ScrollReveal from "./ScrollReveal";

const IMGS = [
  { src: "https://esashomes.com/wp-content/uploads/2024/08/6-1247-x-1247-1024x1024.jpg", alt: "Yaka Park" },
  { src: "https://esashomes.com/wp-content/uploads/2024/08/PEGA-KARTAL-1-7-1024x576.jpg", alt: "Pega Kartal" },
  { src: "https://esashomes.com/wp-content/uploads/2024/08/LOCA-3-1024x512.jpg", alt: "Referans Loca" },
  { src: "https://esashomes.com/wp-content/uploads/2024/08/4-6-933x1024.jpg", alt: "Nouvel Maltepe" },
];

const FEATURES = [
  { icon: <BadgeCheckIcon />, title: "Low Home Taxes", desc: "Turkey offers significantly lower property taxes compared to many European countries." },
  { icon: <ShieldCheckIcon />, title: "Government Guarantee", desc: "Properties backed by Turkish government regulations and guarantees." },
  { icon: <FileCheckIcon />, title: "Property Insurance", desc: "Comprehensive insurance coverage for all our listed properties." },
  { icon: <ZapIcon />, title: "Easy & Quick Process", desc: "Streamlined buying process from selection to key handover." },
];

export default function About() {
  return (
    <section id="about-us" style={{ padding: "6rem 0" }}>
      <div className="container">
        <div className="about-layout">
          <ScrollReveal>
            <div className="about-images">
              <div>
                <img src={IMGS[0].src} alt={IMGS[0].alt} style={{ marginBottom: "1rem" }} />
                <img src={IMGS[2].src} alt={IMGS[2].alt} />
              </div>
              <div className="img-col-2">
                <img src={IMGS[1].src} alt={IMGS[1].alt} style={{ marginBottom: "1rem" }} />
                <img src={IMGS[3].src} alt={IMGS[3].alt} />
              </div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal delay={100}>
              <span style={{ color: "#C8A96E", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                About ESAS Homes
              </span>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 300, letterSpacing: "-0.02em", margin: "0.75rem 0 1.25rem", lineHeight: 1.2 }}>
                We Provide The Simple Ways To Invest in Real Estate
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p style={{ color: "#9ca3af", lineHeight: 1.7, fontSize: "0.95rem", marginBottom: "2rem" }}>
                Whether you're looking to maximize your financial future or seeking the perfect home in Istanbul, ESAS Homes provides expert guidance and curated portfolios to match your vision.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2rem" }}>
                {FEATURES.map((f) => (
                  <div key={f.title} className="feature-card" style={{ background: "#111", borderRadius: 12, padding: "1.25rem" }}>
                    <div style={{ width: 40, height: 40, borderRadius: 8, background: "rgba(200,169,110,0.12)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.75rem" }}>
                      {f.icon}
                    </div>
                    <h4 style={{ fontSize: "0.9rem", fontWeight: 500, marginBottom: "0.3rem" }}>{f.title}</h4>
                    <p style={{ fontSize: "0.75rem", color: "#6b7280", lineHeight: 1.5 }}>{f.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={500}>
              <a href="https://esashomes.com/about-us/" target="_blank" rel="noopener noreferrer" className="gold-link" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", fontWeight: 500, color: "#C8A96E" }}>
                More About Us <ArrowUpRightIcon />
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function BadgeCheckIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.77 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/></svg>;
}
function ShieldCheckIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>;
}
function FileCheckIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m9 15 2 2 4-4"/></svg>;
}
function ZapIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
}
function ArrowUpRightIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>;
}
