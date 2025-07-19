'use client';

import React, { useState, useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      if (cursorDotRef.current && cursorOutlineRef.current) {
        cursorDotRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`;
        cursorOutlineRef.current.animate({
          transform: `translate(${clientX - 20}px, ${clientY - 20}px)`
        }, { duration: 500, fill: "forwards" });
      }

      const target = e.target as HTMLElement;
      if (target.closest('a, button')) {
        cursorOutlineRef.current?.classList.add('cursor-hover');
      } else {
        cursorOutlineRef.current?.classList.remove('cursor-hover');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={cursorDotRef} className="cursor-dot"></div>
      <div ref={cursorOutlineRef} className="cursor-outline"></div>
    </>
  );
};

export default CustomCursor;
