import { useRef } from "react";

export default function HeroCard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    const overlay = overlayRef.current;

    if (!container || !overlay) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (-1 / 5) * x + 20;
    const rotateX = (4 / 30) * y - 20;

    overlay.style.backgroundPosition = `${x / 5 + y / 5}%`;
    overlay.style.filter = `opacity(${x / 200}) brightness(1.2)`;

    container.style.transform = `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseOut = () => {
    const container = containerRef.current;
    const overlay = overlayRef.current;
    if (!container || !overlay) return;

    overlay.style.filter = "opacity(0)";
    container.style.transform =
      "perspective(350px) rotateY(0deg) rotateX(0deg)";
  };

  return (
    <div
      ref={containerRef}
      className="relative w-[220px] h-[310px] transition-all"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseOut}
    >
      <div
        ref={overlayRef}
        className="absolute w-full h-full transition-all mix-blend-color-dodge"
        style={{
          background: `linear-gradient(105deg,
            transparent 40%,
            rgba(255, 219, 112, 0.8) 45%,
            rgba(132, 50, 255 ,0.6) 50%,
            transparent 54%)`,
          backgroundSize: "150% 150%",
          backgroundPosition: "100%",
          filter: "brightness(1.1) opacity(0.8)",
        }}
      />
      <div
        className="w-full h-full bg-cover"
        style={{ backgroundImage: `url(/pika.webp)` }}
      />
    </div>
  );
}
