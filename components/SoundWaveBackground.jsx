"use client";

import { useEffect, useRef } from "react";

export default function SoundWaveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width, height;
    let t = 0;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    function draw() {
      ctx.clearRect(0, 0, width, height);

      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgba(139, 92, 246, 0.35)";

      ctx.beginPath();

      for (let x = 0; x < width; x += 6) {
        const y =
          height / 2 +
          Math.sin(x * 0.01 + t) * 40 +
          Math.sin(x * 0.02 + t * 1.5) * 20;

        ctx.lineTo(x, y);
      }

      ctx.stroke();
      t += 0.02;

      requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 opacity-60"
    />
  );
}
