import { useState, type CSSProperties } from 'react';
import type { Region } from '../../types';
import Tooltip from '../common/Tooltip';

interface MapRegionProps {
  region: Region;
  isSelected: boolean;
  onClick: () => void;
  style: CSSProperties;
}

function getRegionSize(population: number): number {
  if (population >= 100000) return 60;
  if (population >= 50000) return 50;
  if (population >= 30000) return 42;
  return 36;
}

function MapRegion({ region, isSelected, onClick, style }: MapRegionProps) {
  const [hovered, setHovered] = useState(false);

  const size = getRegionSize(region.population);

  const pulseKeyframes = isSelected
    ? `@keyframes pulse-${region.id} { 0% { box-shadow: 0 0 8px ${region.color}88; } 50% { box-shadow: 0 0 20px ${region.color}cc, 0 0 30px ${region.color}66; } 100% { box-shadow: 0 0 8px ${region.color}88; } }`
    : '';

  const regionStyle: CSSProperties = {
    position: 'absolute',
    ...style,
    transform: 'translate(-50%, -50%)',
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: '50%',
    backgroundColor: `${region.color}33`,
    border: `2px solid ${region.color}`,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    boxShadow: isSelected
      ? `0 0 16px ${region.color}aa, 0 0 30px ${region.color}55`
      : hovered
        ? `0 0 12px ${region.color}88`
        : `0 0 6px ${region.color}44`,
    animation: isSelected ? `pulse-${region.id} 2s ease-in-out infinite` : 'none',
    zIndex: isSelected ? 10 : hovered ? 5 : 1,
  };

  const labelStyle: CSSProperties = {
    position: 'absolute',
    bottom: '-20px',
    left: '50%',
    transform: 'translateX(-50%)',
    whiteSpace: 'nowrap',
    color: hovered || isSelected ? region.color : '#8888aa',
    fontSize: '0.7rem',
    fontFamily: "'Georgia', serif",
    letterSpacing: '0.5px',
    textShadow: '0 0 4px rgba(0, 0, 0, 0.8)',
    transition: 'color 0.3s ease',
  };

  const innerDotStyle: CSSProperties = {
    width: `${size * 0.35}px`,
    height: `${size * 0.35}px`,
    borderRadius: '50%',
    backgroundColor: region.color,
    opacity: isSelected ? 1 : 0.7,
    transition: 'opacity 0.3s ease',
  };

  return (
    <>
      {pulseKeyframes && <style>{pulseKeyframes}</style>}
      <Tooltip text={`${region.name} - Danger: ${region.dangerLevel}/10`}>
        <div
          style={regionStyle}
          onClick={onClick}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div style={innerDotStyle} />
          <span style={labelStyle}>{region.name}</span>
        </div>
      </Tooltip>
    </>
  );
}

export default MapRegion;
