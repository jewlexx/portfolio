"use client";

import { useEffect, useState } from "react";

export function checkPortrait(): boolean {
  return window.innerWidth < window.innerHeight;
}

export function usePortrait() {
  const [isPortrait, setIsPortrait] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function updateIsPortrait() {
      setIsPortrait(checkPortrait());
      setLoading(false);
    }

    updateIsPortrait();

    window.addEventListener("resize", updateIsPortrait);
    return () => {
      window.removeEventListener("resize", updateIsPortrait);
    };
  }, []);

  return { isPortrait, loading };
}
