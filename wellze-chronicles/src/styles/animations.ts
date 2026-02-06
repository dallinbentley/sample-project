import type { CSSProperties } from 'react';

export const fadeIn: CSSProperties = {
  opacity: 1,
  transition: 'opacity 0.6s ease-in-out',
};

export const slideUp: CSSProperties = {
  opacity: 1,
  transform: 'translateY(0)',
  transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
};

export const slideUpHidden: CSSProperties = {
  opacity: 0,
  transform: 'translateY(20px)',
  transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
};

export const pulse: CSSProperties = {
  transform: 'scale(1)',
  transition: 'transform 0.3s ease-in-out',
};

export const pulseActive: CSSProperties = {
  transform: 'scale(1.03)',
  transition: 'transform 0.3s ease-in-out',
};

export function glow(color: string): CSSProperties {
  return {
    boxShadow: `0 0 10px ${color}66, 0 0 20px ${color}33, 0 0 40px ${color}1a`,
    transition: 'box-shadow 0.4s ease-in-out',
  };
}

export const shimmer: CSSProperties = {
  backgroundImage: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 50%, transparent 100%)',
  backgroundSize: '200% 100%',
  animation: 'shimmer 2s infinite linear',
};
