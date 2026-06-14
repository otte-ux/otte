"use client";
import { useState } from "react";

const NAV_LINKS = ["Home", "About Us", "Properties", "Contact Us", "Blog"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav style={{ position: "relative", zIndex: 50, padding: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: 1280, margin: "0 auto" }}>
          {/* Logo */}
          <div className="animate-blur-fade-up" style={{ animationDelay: "0ms", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <img src="/esas-logo-inner.png" alt="ESAS Homes" style={{ width: 36, height: 36, filter: "drop-shadow(0 1px 4px rgba(0,0,0,0.4))" }} />
            <span style={{ letterSpacing: "0.2em", fontWeight: 700, fontSize: "clamp(1rem, 2.5vw, 1.3rem)" }}>ESAS HOMES</span>
          </div>

          {/* Desktop links */}
          <div style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="hide-lg">
            {NAV_LINKS.map((l, i) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
                className="nav-link animate-blur-fade-up"
                style={{ fontSize: "0.875rem", letterSpacing: "0.05em", animationDelay: `${100 + i * 60}ms` }}
              >
                {l}
              </a>
            ))}
            <div className="animate-blur-fade-up" style={{ animationDelay: "420ms" }}>
              <button className="nav-link" style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.875rem", letterSpacing: "0.05em", background: "none", border: "none", cursor: "pointer" }}>
                <GlobeIcon /> EN <ChevronDownIcon />
              </button>
            </div>
          </div>

          {/* Right actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <button className="liquid-glass animate-blur-fade-up" style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1.25rem", borderRadius: "9999px", fontSize: "0.875rem", animationDelay: "350ms", cursor: "pointer", color: "#fff", background: "none", border: "none", fontFamily: "inherit" }}>
              <SearchIcon /><span>Search</span>
            </button>
            <button
              className="liquid-glass animate-blur-fade-up show-lg"
              onClick={() => setOpen(!open)}
              style={{ width: 40, height: 40, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", animationDelay: "350ms", background: "none", border: "none", color: "#fff", cursor: "pointer", fontFamily: "inherit" }}
            >
              <div style={{ transition: "transform 0.5s ease", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
                {open ? <XIcon /> : <MenuIcon />}
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className="show-lg"
        style={{
          position: "absolute",
          top: 72,
          left: 0,
          right: 0,
          zIndex: 40,
          background: "rgba(0,0,0,0.95)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid #1a1a1a",
          padding: open ? "1.5rem" : "0 1.5rem",
          maxHeight: open ? 420 : 0,
          overflow: "hidden",
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(-16px)",
          pointerEvents: open ? "auto" : "none",
          transition: "all 0.4s ease",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[...NAV_LINKS, "Language"].map((l) => (
            <a key={l} href="#" className="nav-link" style={{ fontSize: "0.95rem", padding: "0.25rem 0" }}>
              {l}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

function GlobeIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
    </svg>
  );
}
function ChevronDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
    </svg>
  );
}
function MenuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18" /><path d="m6 6 12 12" />
    </svg>
  );
}
