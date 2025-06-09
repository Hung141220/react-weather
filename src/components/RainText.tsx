import React, { useEffect, useRef } from "react";

const letters = [
  "Anh yêu Em",
  "Yêu thương em",
  "Nhớ em",
  "Yêu em",
  "Anh yêu thương em",
  "🌟",
  "⭐",
  "✨",
  "💕",
  "❤️",
];
const COUNT = 30; // Số lượng chữ rơi

function getRandomLetter() {
  return letters[Math.floor(Math.random() * letters.length)];
}

function getRandomLeft() {
  return Math.random() * 100; // %
}

function getRandomDuration() {
  return 2 + Math.random() * 3; // giây
}

const RainText = ({ children }: { children?: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    for (let i = 0; i < COUNT; i++) {
      const span = document.createElement("span");
      span.innerText = getRandomLetter();
      span.style.position = "absolute";
      span.style.left = getRandomLeft() + "%";
      span.style.top = "-5%";
      span.style.fontSize = "2rem";
      span.style.color = "#fff";
    //   span.style.background = "#000";
      span.style.padding = "10px";
      span.style.borderRadius = "50%";
      span.style.opacity = "0.8";
      span.style.pointerEvents = "none";
      span.style.transition = "all";
      span.style.animation = `fall ${getRandomDuration()}s linear infinite`;
      if (container) {
        container.appendChild(span);
      }
    }
    return () => {
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 999,
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
};
export default RainText;
