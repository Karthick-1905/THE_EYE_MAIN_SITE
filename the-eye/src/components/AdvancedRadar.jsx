import React, { useEffect, useState } from "react";

const CyberRadar = ({ size = 200, className = "" }) => {
  const [sweepAngle, setSweepAngle] = useState(0);
  const [dots, setDots] = useState([]);

  const BEAM_WIDTH = 20; // degrees (matches sweep arc)
  const R = 47; // sweep radius

  const toRad = (deg) => (deg * Math.PI) / 180;
  const angleDiff = (a, b) => {
    const d = Math.abs(a - b) % 360;
    return d > 180 ? 360 - d : d;
  };

  // Sweep rotation (same speed)
  useEffect(() => {
    const interval = setInterval(() => {
      setSweepAngle((prev) => (prev + 2) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Initial dots (3–5)
  useEffect(() => {
    const dotCount = Math.floor(Math.random() * 3) + 3;
    const newDots = [];
    for (let i = 0; i < dotCount; i++) {
      const angle = Math.random() * 360;
      const distance = Math.random() * 40 + 8;
      const x = 50 + distance * Math.cos(toRad(angle));
      const y = 50 + distance * Math.sin(toRad(angle));
      newDots.push({ x, y, id: i });
    }
    setDots(newDots);
  }, []);

  // Blink/respawn only some dots randomly
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) =>
        prevDots.map((dot) => {
          if (Math.random() < 0.3) {
            const angle = Math.random() * 360;
            const distance = Math.random() * 40 + 8;
            const x = 50 + distance * Math.cos(toRad(angle));
            const y = 50 + distance * Math.sin(toRad(angle));
            return { ...dot, x, y };
          }
          return dot;
        })
      );
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const startAngle = sweepAngle - BEAM_WIDTH / 2;
  const endAngle = sweepAngle + BEAM_WIDTH / 2;

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        {/* Background */}
        <circle cx="50" cy="50" r="49" fill="black" stroke="white" strokeWidth="0.2" />

        {/* Grid rings */}
        {[15, 30, 45].map((r) => (
          <circle
            key={r}
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="0.3"
          />
        ))}

        {/* Cross lines */}
        <line x1="2" y1="50" x2="98" y2="50" stroke="rgba(255,255,255,0.2)" strokeWidth="0.3" />
        <line x1="50" y1="2" x2="50" y2="98" stroke="rgba(255,255,255,0.2)" strokeWidth="0.3" />

        /* Sweep gradient */
          <defs>
            <radialGradient id="beamFade" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
              <stop offset="70%" stopColor="rgba(255,255,255,0.25)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
          </defs>

          {/* Sweep beam as arc sector */}
        <path
          d={`M 50 50 
              L ${50 + R * Math.cos(toRad(startAngle))} ${50 + R * Math.sin(toRad(startAngle))} 
              A ${R} ${R} 0 0 1 ${50 + R * Math.cos(toRad(endAngle))} ${50 + R * Math.sin(toRad(endAngle))} 
              Z`}
          fill="url(#beamFade)"
          opacity="1"
        />

        {/* Dots: bright when under sweep, otherwise faint glow */}
        {dots.map((dot) => {
          const ang = (Math.atan2(dot.y - 50, dot.x - 50) * 180) / Math.PI;
          const dotAngle = (ang + 360) % 360;
          const underSweep = angleDiff(dotAngle, sweepAngle) <= BEAM_WIDTH / 2;

          return (
            <circle
              key={dot.id}
              cx={dot.x}
              cy={dot.y}
              r={underSweep ? 1.8 : 1.2}
              fill="white"
              opacity={underSweep ? 1 : 0.2}
            />
          );
        })}

        {/* Center core */}
        <circle cx="50" cy="50" r="1.6" fill="white" />
      </svg>
    </div>
  );
};

export default CyberRadar;
