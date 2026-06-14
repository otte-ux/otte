"use client";
import { useRef, useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [waHovered, setWaHovered] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onCanPlay = () => { setVideoLoaded(true); video.play().catch(() => {}); };
    video.addEventListener("canplay", onCanPlay, { once: true });
    video.load();
    return () => video.removeEventListener("canplay", onCanPlay);
  }, []);

  return (
    <section id="home" style={{ height: "100vh", position: "relative", display: "flex", flexDirection: "column", overflow: "hidden", background: "#000" }}>
      {/* Video background */}
      <video
        ref={videoRef}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0, transition: "opacity 0.7s ease", opacity: videoLoaded ? 1 : 0 }}
        muted loop playsInline preload="metadata"
        poster="/images/hero-poster.webp"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {!videoLoaded && <div style={{ position: "absolute", inset: 0, background: "#111", zIndex: 0 }} />}

      {/* Gradient overlay */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.08) 40%, rgba(0,0,0,0.08) 55%, rgba(0,0,0,0.5) 100%)", pointerEvents: "none" }} />

      {/* Bottom branding bar */}
      <div className="animate-blur-fade-up" style={{ animationDelay: "600ms", position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 9, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "0.6rem 2rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", fontWeight: 500 }}>
          ESAS HOMES · Istanbul · Premium Real Estate · Since 2009 · Trusted by 420+ Partners
        </span>
      </div>

      {/* WhatsApp Widget */}
      <div className="animate-blur-fade-up" style={{ animationDelay: "1000ms", position: "fixed", bottom: 24, right: 24, zIndex: 100 }}>
        <a
          href="https://wa.me/905533333295"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setWaHovered(true)}
          onMouseLeave={() => setWaHovered(false)}
          style={{
            display: "flex", alignItems: "center", gap: waHovered ? "0.75rem" : "0",
            background: waHovered ? "#25D366" : "rgba(37,211,102,0.9)",
            padding: waHovered ? "0.75rem 1.5rem 0.75rem 1rem" : "0.875rem",
            borderRadius: waHovered ? "9999px" : "50%",
            boxShadow: waHovered ? "0 8px 32px rgba(37,211,102,0.4), 0 0 60px rgba(37,211,102,0.15)" : "0 4px 16px rgba(37,211,102,0.3)",
            transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
            transform: waHovered ? "scale(1.05)" : "scale(1)",
            color: "#fff", overflow: "hidden", whiteSpace: "nowrap",
          }}
        >
          <WhatsAppIcon />
          <div style={{ maxWidth: waHovered ? "200px" : "0", opacity: waHovered ? 1 : 0, transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)", overflow: "hidden" }}>
            <div style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.05em", marginBottom: 1 }}>Contact Us</div>
            <div style={{ fontSize: "0.8rem", fontWeight: 500 }}>+90 553 333 32 95</div>
          </div>
        </a>
        <div
          className={waHovered ? "" : "animate-wa-pulse"}
          style={{ position: "absolute", inset: -6, borderRadius: "50%", border: "2px solid rgba(37,211,102,0.3)", pointerEvents: "none", opacity: waHovered ? 0 : 1, transition: "opacity 0.3s ease" }}
        />
      </div>

      <Navbar />

      {/* Hero content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", position: "relative", zIndex: 10, textAlign: "center", padding: "0 1.5rem" }}>
        <div className="animate-blur-fade-up" style={{ animationDelay: "300ms", marginBottom: "1rem" }}>
          <span style={{ color: "#C8A96E", fontSize: "clamp(0.7rem, 1.5vw, 0.85rem)", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Premium Real Estate · Istanbul
          </span>
        </div>

        <h1 className="animate-blur-fade-up" style={{ animationDelay: "450ms", fontSize: "clamp(2.5rem, 7vw, 6rem)", fontWeight: 300, letterSpacing: "-0.03em", lineHeight: 1.05, textShadow: "0 4px 40px rgba(0,0,0,0.5)", marginBottom: "1.5rem" }}>
          Where Luxury<br />Meets Legacy
        </h1>

        <p className="animate-blur-fade-up" style={{ animationDelay: "600ms", color: "rgba(255,255,255,0.75)", maxWidth: "36rem", fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)", fontWeight: 300, lineHeight: 1.7, textShadow: "0 2px 12px rgba(0,0,0,0.4)", marginBottom: "2.5rem" }}>
          Curated ultra-luxury residences and bespoke developments in Istanbul's most prestigious locations.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
          <a
            href="#properties"
            className="animate-blur-fade-up"
            style={{ animationDelay: "750ms", display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 2rem", borderRadius: "9999px", fontWeight: 500, fontSize: "0.9rem", background: "#fff", color: "#000", transition: "background 0.2s ease, transform 0.2s ease" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#e5e5e5"; (e.currentTarget as HTMLElement).style.transform = "scale(1.02)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#fff"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
          >
            Explore Estates <ArrowUpRightIcon />
          </a>
          <a
            href="#contact"
            className="animate-blur-fade-up liquid-glass"
            style={{ animationDelay: "850ms", display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 2rem", borderRadius: "9999px", fontWeight: 500, fontSize: "0.9rem", color: "#fff" }}
          >
            Schedule Consultation
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="animate-blur-fade-up" style={{ animationDelay: "1100ms", display: "flex", flexDirection: "column", alignItems: "center", paddingBottom: "3.5rem", gap: "0.5rem", position: "relative", zIndex: 10 }}>
        <span style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>Scroll</span>
        <div className="animate-bounce-y">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="white" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 7h10v10" /><path d="M7 17 17 7" />
    </svg>
  );
}
