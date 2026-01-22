import { useEffect, useState } from "react";

export function useMediaQuery(query: string): {
  matches: boolean;
  loading: boolean;
} {
  const [matches, setMatches] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    function updateMatches(event: MediaQueryListEvent | MediaQueryList) {
      setMatches(event.matches);
      setLoading(false);
    }

    updateMatches(mediaQueryList);

    mediaQueryList.addEventListener("change", updateMatches);
    return () => {
      mediaQueryList.removeEventListener("change", updateMatches);
    };
  }, [query]);

  return {
    matches,
    loading,
  };
}
