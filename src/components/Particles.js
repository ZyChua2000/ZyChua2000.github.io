import { useEffect, useState } from "react";
import "./Particles.css"

export default function Particles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    let animationFrameId = null;
    let mousePos = { x: 0, y: 0 };
    let moved = false;

    const handleMove = (e) => {
        mousePos = { x: e.clientX, y: e.clientY };
        moved = true;
    };

    const update = () => {
        if (moved) {
        setParticles(prev => [...prev.slice(-30), { id: Math.random(), ...mousePos }]);
        moved = false;
        }
        animationFrameId = requestAnimationFrame(update);
    };

    window.addEventListener("mousemove", handleMove);
    animationFrameId = requestAnimationFrame(update);

    return () => {
        window.removeEventListener("mousemove", handleMove);
        cancelAnimationFrame(animationFrameId);
    };
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