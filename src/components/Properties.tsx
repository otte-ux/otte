import ScrollReveal from "./ScrollReveal";

const PROPERTIES = [
  { name: "Yaka Park Kartal", img: "https://esashomes.com/wp-content/uploads/2024/08/6-1247-x-1247-1024x1024.jpg", loc: "Kartal, Istanbul", status: "Ready To Move", tags: ["Sea View", "Investment", "Luxury Apartments"] },
  { name: "Referans Loca Kartal", img: "https://esashomes.com/wp-content/uploads/2024/08/LOCA-3-1024x512.jpg", loc: "Kartal, Istanbul", status: "Under Construction", tags: ["Sea View", "Investment", "Luxury Apartments"] },
  { name: "Pega Kartal", img: "https://esashomes.com/wp-content/uploads/2024/08/PEGA-KARTAL-1-7-1024x576.jpg", loc: "Kartal, Istanbul", status: "Ready To Move", tags: ["Sea View", "Investment", "Luxury Apartments"] },
  { name: "Nouvel Maltepe", img: "https://esashomes.com/wp-content/uploads/2024/08/4-6-933x1024.jpg", loc: "Maltepe, Istanbul", status: "Ready To Move", tags: ["Sea View", "Investment", "Luxury Apartments"] },
  { name: "Toskana Vadisi", img: "https://esashomes.com/wp-content/uploads/2024/08/Toskana-Vadisi-Orrizonte-7-1024x493.jpg", loc: "Buyukcekmece, Istanbul", status: "Ready To Move", tags: ["Luxury Villas", "Sea View", "1.7M m²"] },
  { name: "Niva Vita Villas", img: "https://esashomes.com/wp-content/uploads/2024/08/16-2-1024x576.jpg", loc: "Buyukcekmece, Istanbul", status: "Ready To Move", tags: ["Luxury Villas", "Citizenship", "Investment"] },
];

export default function Properties() {
  return (
    <section id="properties" style={{ padding: "6rem 0" }}>
      <div className="container">
        <ScrollReveal>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "1rem", marginBottom: "3rem", flexWrap: "wrap" }}>
            <div>
              <span style={{ color: "#C8A96E", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>Properties</span>
              <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 300, marginTop: "0.5rem", letterSpacing: "-0.02em" }}>
                Recently Added Properties
              </h2>
            </div>
            <a href="https://esashomes.com/properties/" target="_blank" rel="noopener noreferrer" className="gold-link" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.9rem", fontWeight: 500, color: "#C8A96E" }}>
              View All <ArrowUpRightIcon />
            </a>
          </div>
        </ScrollReveal>

        <div className="grid-3">
          {PROPERTIES.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 100}>
              <div className="property-card" style={{ cursor: "pointer" }}>
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <img src={p.img} alt={p.name} className="prop-img" style={{ width: "100%", height: 220, objectFit: "cover" }} />
                  <span
                    style={{
                      position: "absolute", top: 12, left: 12, fontSize: "0.7rem", fontWeight: 500, padding: "4px 10px", borderRadius: 6,
                      ...(p.status === "Ready To Move"
                        ? { background: "rgba(34,197,94,0.15)", color: "#22c55e", border: "1px solid rgba(34,197,94,0.2)" }
                        : { background: "rgba(234,179,8,0.15)", color: "#eab308", border: "1px solid rgba(234,179,8,0.2)" })
                    }}
                  >
                    {p.status}
                  </span>
                </div>
                <div style={{ padding: "1.25rem" }}>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 500, marginBottom: "0.35rem" }}>{p.name}</h3>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "#6b7280", fontSize: "0.8rem", marginBottom: "0.75rem" }}>
                    <MapPinIcon /> {p.loc}
                  </div>
                  <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                    {p.tags.map((tag) => <span key={tag} className="tag-pill">{tag}</span>)}
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

function MapPinIcon() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
}
function ArrowUpRightIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>;
}
