import { useEffect, useState } from "react";

// Custom hook for lazy loading
const useOnScreen = (ref) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIsIntersecting(entry.isIntersecting)
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, []);
  return isIntersecting;
};

export default useOnScreen;