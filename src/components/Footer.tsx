import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #1a1a1a", padding: "4rem 0 0" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2.5rem", paddingBottom: "3rem" }}>
          <ScrollReveal>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <img src="/esas-logo-inner.png" alt="ESAS Homes" style={{ width: 32, height: 32 }} />
                <span style={{ letterSpacing: "0.2em", fontWeight: 700, fontSize: "1.1rem" }}>ESAS HOMES</span>
              </div>
              <p style={{ color: "#6b7280", fontSize: "0.875rem", lineHeight: 1.7, maxWidth: "24rem", marginBottom: "1.5rem" }}>
                Leading luxury real estate company based in Istanbul, Turkey. We specialize in premium properties, investment opportunities, and citizenship programs.
              </p>
              <div style={{ display: "flex", gap: "0.75rem" }}>
                <a href="https://www.facebook.com/esashomes" target="_blank" rel="noopener noreferrer" className="social-icon"><FacebookIcon /></a>
                <a href="https://www.instagram.com/esas_homes/" target="_blank" rel="noopener noreferrer" className="social-icon"><InstagramIcon /></a>
                <a href="https://www.youtube.com/channel/UCFLqFZ6Uk-5X7bLzq5n5boQ" target="_blank" rel="noopener noreferrer" className="social-icon"><YoutubeIcon /></a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div>
              <h4 style={{ fontWeight: 600, fontSize: "0.9rem", marginBottom: "1.25rem" }}>Quick Links</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {["Home", "About Us", "Properties", "Contact", "Blog"].map((l) => (
                  <a key={l} href="#" className="nav-link" style={{ fontSize: "0.875rem", color: "#6b7280" }}>{l}</a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div>
              <h4 style={{ fontWeight: 600, fontSize: "0.9rem", marginBottom: "1.25rem" }}>Contact</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", color: "#6b7280", fontSize: "0.875rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                  <MapPinIcon />
                  <span>Beylikduzu Osb, Esenyurt, Istanbul</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <MailIcon />
                  <span>info@esashomes.com</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <PhoneIcon />
                  <span>(+90) 553 333 32 95</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div style={{ borderTop: "1px solid #1a1a1a", padding: "1.5rem 0", textAlign: "center" }}>
          <p style={{ color: "#4b5563", fontSize: "0.8rem" }}>© {new Date().getFullYear()} ESAS Homes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function MapPinIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
}
function MailIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
}
function PhoneIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
}
function FacebookIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
}
function InstagramIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
}
function YoutubeIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>;
}
