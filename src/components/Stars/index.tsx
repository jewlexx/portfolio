"use client";

import { useEffect, useRef } from "react";

import { Stars as StarsHandler } from "$/stars/index";

import styles from "./index.module.scss";

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

  return <canvas className={styles.stars} ref={canvas} />;
}
