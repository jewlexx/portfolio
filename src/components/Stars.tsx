"use client";

import { useEffect, useRef } from "react";

import { Stars as StarsHandler } from "$/stars/index";

export default function Stars() {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvas.current) {
      return;
    }

    const stars = new StarsHandler(canvas.current);

    stars.beginDrawing();

    return () => {
      stars.stop();
    };
  }, []);

  return (
    <canvas
      className="fixed top-0 left-0 -z-1 h-screen w-screen"
      ref={canvas}
    />
  );
}
