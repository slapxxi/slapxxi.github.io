import { useEffect, useState } from 'react';

export function useMediaQuery(query: string): boolean {
  let [matches, setMatches] = useState<boolean>(getMatches(query));

  function handleChange() {
    setMatches(getMatches(query));
  }

  useEffect(() => {
    let matchMedia = window.matchMedia(query);
    handleChange();

    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener('change', handleChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener('change', handleChange);
      }
    };
  }, [query]);

  return matches;
}

function getMatches(query: string): boolean {
  if (typeof window !== 'undefined') {
    return window.matchMedia(query).matches;
  }
  return false;
}

export default useMediaQuery;
