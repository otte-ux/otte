"use client";

import { useRef, useEffect, useState } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onCanPlay = () => {
      setVideoLoaded(true);
      video.play().catch(() => {});
    };

    video.addEventListener("canplay", onCanPlay, { once: true });
    video.load();

    return () => video.removeEventListener("canplay", onCanPlay);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${videoLoaded ? "opacity-100" : "opacity-0"}`}
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero-poster.webp"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {!videoLoaded && (
        <div className="absolute inset-0 bg-neutral-900" />
      )}

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block">Welcome to</span>
          <span className="mt-2 block text-[--color-brand]">ESAS HOMES</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/80 sm:text-xl">
          Exceptional properties. Unparalleled service. Your dream home awaits.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#properties"
            className="rounded-md bg-[--color-brand] px-8 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-[--color-brand-dark]"
          >
            View Properties
          </a>
          <a
            href="#contact"
            className="rounded-md border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
          >
            Contact Us
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="h-6 w-6 text-white/60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
