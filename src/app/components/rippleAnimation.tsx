"use client"
import React, { useEffect, useState } from "react";

interface Ripple {
  x: number;
  y: number;
  id: number;
}

const GlobalClickRipple = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (e: MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;
    const newRipple: Ripple = { x, y, id: Date.now() };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[9999] pointer-events-none">
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute w-6 h-6 rounded-full animate-ripple"
          style={{
            top: ripple.y - 12,
            left: ripple.x - 12,
            background: "linear-gradient(to right, #00157F, #4C5F97)",
          }}
        ></span>
      ))}
    </div>
  );
};

export default GlobalClickRipple;