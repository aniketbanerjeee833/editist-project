'use client';

import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorOutlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.animate({
          left: `${clientX}px`,
          top: `${clientY}px`
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
      <div ref={cursorOutlineRef} className="cursor-outline"></div>
    </>
  );
};

export default CustomCursor;
