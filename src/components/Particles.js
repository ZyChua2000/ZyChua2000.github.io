import { useEffect, useState } from "react";
import "./Particles.css"

export default function Particles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleMove = (e) => {
      setParticles((prev) => [
        ...prev.slice(-30),
        {
          id: Math.random(),
          x: e.clientX,
          y: e.clientY,
        },
      ]);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.x,
            top: p.y,
          }}
        />
      ))}
    </>
  );
}