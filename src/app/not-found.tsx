
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
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

  const text = "404";
  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen animated-grid p-4 relative overflow-hidden"
      style={{
        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, hsla(var(--primary) / 0.15), transparent 80%)`,
      }}
    >
      <div className="sunbeams">{sunbeams}</div>
      <div className="text-center z-10">
        <h1
          className="glitch-text text-5xl md:text-8xl lg:text-9xl text-center select-none"
          data-text={text}
        >
          {text}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-foreground">Page Not Found</p>
        <Button asChild className="mt-8">
            <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </main>
  );
}
