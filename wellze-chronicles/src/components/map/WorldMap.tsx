import { useState, type CSSProperties } from 'react';
import type { Region } from '../../types';
import { regions } from '../../data/regions';
import MapRegion from './MapRegion';
import MapLegend from './MapLegend';

const regionPositions: Record<string, CSSProperties> = {
  'reg-001': { top: '15%', left: '60%' },
  'reg-002': { top: '40%', left: '35%' },
  'reg-003': { top: '70%', left: '70%' },
  'reg-004': { top: '75%', left: '20%' },
  'reg-005': { top: '30%', left: '15%' },
  'reg-006': { top: '55%', left: '55%' },
};

function WorldMap() {
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);

  const containerStyle: CSSProperties = {
    padding: '40px 20px',
    maxWidth: '1000px',
    margin: '0 auto',
    fontFamily: "'Georgia', serif",
  };

  const titleStyle: CSSProperties = {
    textAlign: 'center',
    color: '#d4a574',
    fontSize: '2rem',
    marginBottom: '8px',
    letterSpacing: '1px',
  };

  const subtitleStyle: CSSProperties = {
    textAlign: 'center',
    color: '#8888aa',
    fontSize: '0.95rem',
    marginBottom: '32px',
  };

  const mapContainerStyle: CSSProperties = {
    position: 'relative',
    width: '100%',
    maxWidth: '700px',
    height: '450px',
    margin: '0 auto',
    background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #0a0a1a 70%, #050510 100%)',
    border: '2px solid #2a2a4e',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 0 30px rgba(0, 0, 0, 0.6), inset 0 0 60px rgba(10, 10, 26, 0.5)',
  };

  const gridOverlayStyle: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage:
      'linear-gradient(rgba(42, 42, 78, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(42, 42, 78, 0.15) 1px, transparent 1px)',
    backgroundSize: '40px 40px',
    pointerEvents: 'none',
  };

  const detailPanelStyle: CSSProperties = {
    marginTop: '24px',
    padding: '24px',
    backgroundColor: '#1a1a2e',
    border: '1px solid #2a2a4e',
    borderRadius: '10px',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.4)',
  };

  const detailTitleStyle: CSSProperties = {
    color: selectedRegion?.color ?? '#d4a574',
    fontSize: '1.4rem',
    margin: '0 0 12px',
    letterSpacing: '0.5px',
  };

  const detailTextStyle: CSSProperties = {
    color: '#c8c8d4',
    lineHeight: 1.7,
    fontSize: '0.95rem',
    marginBottom: '12px',
  };

  const detailMetaStyle: CSSProperties = {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    marginBottom: '16px',
  };

  const metaItemStyle: CSSProperties = {
    padding: '6px 14px',
    backgroundColor: '#12122a',
    border: '1px solid #2a2a4e',
    borderRadius: '8px',
    color: '#9999bb',
    fontSize: '0.85rem',
  };

  const landmarkStyle: CSSProperties = {
    color: '#9999bb',
    fontSize: '0.9rem',
    lineHeight: 1.6,
    marginTop: '12px',
  };

  const landmarkTitleStyle: CSSProperties = {
    color: '#d4a574',
    fontSize: '1rem',
    marginBottom: '8px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>World of Wellze</h1>
      <p style={subtitleStyle}>Explore the realms and their secrets</p>

      <div style={{ position: 'relative' }}>
        <div style={mapContainerStyle}>
          <div style={gridOverlayStyle} />
          {regions.map((region) => (
            <MapRegion
              key={region.id}
              region={region}
              isSelected={selectedRegion?.id === region.id}
              onClick={() =>
                setSelectedRegion(selectedRegion?.id === region.id ? null : region)
              }
              style={regionPositions[region.id] ?? { top: '50%', left: '50%' }}
            />
          ))}
        </div>
        <MapLegend />
      </div>

      {selectedRegion && (
        <div style={detailPanelStyle}>
          <h2 style={detailTitleStyle}>{selectedRegion.name}</h2>
          <p style={detailTextStyle}>{selectedRegion.description}</p>
          <div style={detailMetaStyle}>
            <span style={metaItemStyle}>Climate: {selectedRegion.climate}</span>
            <span style={metaItemStyle}>
              Population: {selectedRegion.population.toLocaleString()}
            </span>
            <span style={metaItemStyle}>Danger Level: {selectedRegion.dangerLevel}/10</span>
          </div>
          <h4 style={landmarkTitleStyle}>Landmarks</h4>
          <ul style={landmarkStyle}>
            {selectedRegion.landmarks.map((landmark, i) => (
              <li key={i} style={{ marginBottom: '6px' }}>
                {landmark}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default WorldMap;
