import { useEffect, useRef } from "react";

type Position = {
  x: number;
  y: number;
};

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  const mouse = useRef<Position>({ x: 0, y: 0 });
  const ring = useRef<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    window.addEventListener("mousemove", move);

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.15;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
  <>
    {/* Dot */}
    <div
      ref={dotRef}
      className="
        fixed top-0 left-0 z-9999
        w-2 h-2
        bg-white
        rounded-full
        pointer-events-none
        -translate-x-1/2 -translate-y-1/2
      "
    />

    {/* Ring */}
    <div
      ref={ringRef}
      className="
        fixed top-0 left-0 z-9998
        w-10 h-10
        rounded-full
        pointer-events-none
        -translate-x-1/2 -translate-y-1/2

        border border-white/20
        bg-white/5

        shadow-[0_0_25px_rgba(255,255,255,0.08)]

        mix-blend-difference
      "
    />
  </>
);
}