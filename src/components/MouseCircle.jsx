import React, { useEffect, useState } from "react";

function MouseCircle() {
  const [sparkles, setSparkles] = useState([]);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const sparkle = {
        id: Date.now() + Math.random(),
        x: e.clientX + Math.random() * 20 - 10,
        y: e.clientY + Math.random() * 20 - 10,
      };

      setSparkles((prev) => [...prev.slice(-15), sparkle]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="fixed w-1.5 h-1.5 bg-emerald-200 rounded-full opacity-70 animate-ping pointer-events-none"
          style={{
            top: `${s.y}px`,
            left: `${s.x}px`,
            zIndex: 9999,
          }}
        />
      ))}

      <div
        className="fixed w-2.5 h-2.5 bg-emerald-500 rounded-full pointer-events-none"
        style={{
          top: `${position.y - 12}px`,
          left: `${position.x - 5}px`,
          zIndex: 9999,
        }}
      />
    </>
  );
}

export default MouseCircle;