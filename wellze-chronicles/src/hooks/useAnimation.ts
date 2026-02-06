import { useState, useEffect, useMemo, type CSSProperties } from 'react';

interface AnimationUtils {
  isVisible: boolean;
  fadeIn: CSSProperties;
  pulseStyle: CSSProperties;
}

function useAnimation(delay: number = 0): AnimationUtils {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const fadeIn = useMemo<CSSProperties>(
    () => ({
      opacity: isVisible ? 1 : 0,
      transition: `opacity 0.6s ease-in-out ${delay}ms`,
    }),
    [isVisible, delay],
  );

  const pulseStyle = useMemo<CSSProperties>(
    () => ({
      transform: isVisible ? 'scale(1)' : 'scale(0.97)',
      transition: `transform 0.4s ease-in-out ${delay}ms`,
    }),
    [isVisible, delay],
  );

  return { isVisible, fadeIn, pulseStyle };
}

export default useAnimation;
