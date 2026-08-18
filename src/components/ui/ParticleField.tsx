"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

interface Particle {
  id: number;
  left: number;
  drift: number;
  duration: number;
  delay: number;
  size: number;
  symbol: string;
}

const SYMBOLS = ["✦", "🎉", "✧", "🎈"];

export function ParticleField() {
  const reduced = useReducedMotion();
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (reduced) {
      setParticles([]);
      return;
    }
    const list: Particle[] = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      drift: Math.random() * 60 - 30,
      duration: 14 + Math.random() * 10,
      delay: Math.random() * 14,
      size: 0.7 + Math.random() * 0.7,
      symbol: SYMBOLS[i % SYMBOLS.length],
    }));
    setParticles(list);
  }, [reduced]);

  if (reduced || particles.length === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-[-10%] text-gold opacity-35"
          style={{
            left: `${p.left}vw`,
            fontSize: `${p.size}rem`,
            animation: `floatUp linear infinite`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            // @ts-expect-error custom property for keyframe
            "--drift": `${p.drift}px`,
          }}
        >
          {p.symbol}
        </span>
      ))}
    </div>
  );
}