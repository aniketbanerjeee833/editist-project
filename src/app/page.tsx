"use client";

import { useEffect, useState } from "react";
import { WHATSAPP_NUMBER } from "@/config";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [sunbeams, setSunbeams] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    
    const createSunbeams = () => {
      const beams = Array.from({ length: 12 }).map((_, i) => {
        const style = {
          transform: `rotate(${i * 15 - 82.5}deg)`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${Math.random() * 5 + 10}s`,
        };
        return <div key={i} className="sunbeam" style={style}></div>;
      });
      setSunbeams(beams);
    };

    createSunbeams();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const text = "Coming Soon";
  return (
    <main
      className="flex items-center justify-center min-h-screen animated-grid p-4 relative overflow-hidden"
      style={{
        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, hsla(var(--primary) / 0.15), transparent 80%)`,
      }}
    >
      <div className="sunbeams">{sunbeams}</div>
      <h1
        className="glitch-text text-5xl md:text-8xl lg:text-9xl text-center select-none"
        data-text={text}
      >
        {text}
      </h1>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 select-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          className="h-7 w-7"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.672.15-.197.297-.768.967-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.1-.198.05-.373-.025-.521-.075-.148-.672-1.611-.922-2.207-.242-.579-.487-.501-.672-.51l-.57-.01c-.198 0-.52.074-.792.373s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.1 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.617h-.001a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.65-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.84 9.84 0 0 1 6.986 2.897 9.824 9.824 0 0 1 2.896 6.987c-.003 5.45-4.437 9.884-9.889 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05.001C5.495 0 .16 5.336.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.445h.005c6.554 0 11.891-5.336 11.894-11.892a11.82 11.82 0 0 0-3.484-8.412"/>
        </svg>
        <span className="sr-only">Contact on WhatsApp</span>
      </a>
    </main>
  );
}
