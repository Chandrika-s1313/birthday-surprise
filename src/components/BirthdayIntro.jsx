import React, { useEffect, useState } from "react";
import "./BirthdayIntro.css";

const BirthdayIntro = ({ onComplete }) => {
  const [count, setCount] = useState(3);
  const [hearts, setHearts] = useState([]);

  // Countdown effect
  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      const finish = setTimeout(onComplete, 1000);
      return () => clearTimeout(finish);
    }
  }, [count, onComplete]);

  // Heart spawning effect
  useEffect(() => {
    const interval = setInterval(() => {
      const newHearts = Array.from({ length: 5 }).map(() => {
        const id = Date.now() + Math.random();
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const size = Math.random() * 0.5 + 0.8; // smaller range
        return { id, left, top, size };
      });

      setHearts((prev) => [...prev, ...newHearts]);

      newHearts.forEach((h) => {
        setTimeout(() => {
          setHearts((prev) => prev.filter((heart) => heart.id !== h.id));
        }, 4000);
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="magic-background">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="heart"
          style={{
            left: `${h.left}%`,
            top: `${h.top}%`,
            transform: `scale(${h.size})`
          }}
        >
          ♥
        </span>
      ))}
      <div className="count-circle">{count}</div>
      <p className="intro-text">Crafting your special moment...</p>
    </div>
  );
};

export default BirthdayIntro;
