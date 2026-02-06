import { type CSSProperties } from 'react';
import { regions } from '../../data/regions';

function MapLegend() {
  const containerStyle: CSSProperties = {
    position: 'absolute',
    top: '12px',
    right: '12px',
    padding: '14px 16px',
    backgroundColor: 'rgba(10, 10, 26, 0.92)',
    border: '1px solid #2a2a4e',
    borderRadius: '8px',
    fontFamily: "'Georgia', serif",
    zIndex: 20,
    minWidth: '160px',
  };

  const legendTitleStyle: CSSProperties = {
    color: '#d4a574',
    fontSize: '0.85rem',
    marginTop: 0,
    marginBottom: '10px',
    letterSpacing: '0.5px',
    borderBottom: '1px solid #2a2a4e',
    paddingBottom: '8px',
  };

  const regionItemStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '6px',
  };

  const dangerLabelStyle: CSSProperties = {
    color: '#d4a574',
    fontSize: '0.75rem',
    marginTop: '12px',
    marginBottom: '6px',
    letterSpacing: '0.5px',
  };

  const dangerBarStyle: CSSProperties = {
    width: '100%',
    height: '10px',
    borderRadius: '5px',
    background: 'linear-gradient(90deg, #10B981 0%, #84CC16 25%, #EAB308 50%, #EF4444 75%, #7F1D1D 100%)',
    marginBottom: '4px',
  };

  const dangerLabelsStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#8888aa',
    fontSize: '0.65rem',
  };

  return (
    <div style={containerStyle}>
      <h4 style={legendTitleStyle}>Regions</h4>
      {regions.map((region) => (
        <div key={region.id} style={regionItemStyle}>
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: region.color,
              flexShrink: 0,
            }}
          />
          <span style={{ color: '#c8c8d4', fontSize: '0.75rem' }}>{region.name}</span>
        </div>
      ))}

      <div style={dangerLabelStyle}>Danger Level</div>
      <div style={dangerBarStyle} />
      <div style={dangerLabelsStyle}>
        <span>1 Safe</span>
        <span>5</span>
        <span>10 Deadly</span>
      </div>
    </div>
  );
}

export default MapLegend;
