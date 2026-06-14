"use client";
import { useRef, useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

const STATS = [
  { n: 420, label: "Trusted Partners" },
  { n: 850, label: "Properties Built" },
  { n: 1200, label: "Happy Clients" },
  { n: 15, label: "Years Experience" },
];

function CountUp({ target, duration = 2000 }: { target: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const ran = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !ran.current) {
          ran.current = true;
          obs.disconnect();
          const t0 = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - t0) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setCount(Math.floor(eased * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count.toLocaleString()}+</span>;
}

export default function Stats() {
  return (
    <section>
      <div className="section-separator" />
      <div className="container" style={{ padding: "4rem 1rem" }}>
        <ScrollReveal>
          <div className="grid-4" style={{ textAlign: "center" }}>
            {STATS.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 100}>
                <div>
                  <div style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 300, color: "#C8A96E", marginBottom: "0.5rem" }}>
                    <CountUp target={s.n} />
                  </div>
                  <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#6b7280" }}>{s.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
      <div className="section-separator" />
    </section>
  );
}
