import { type CSSProperties } from 'react';
import type { Artifact, Element } from '../../types';

interface ArtifactDetailProps {
  artifact: Artifact;
  onClose: () => void;
}

const elementEmojis: Record<Element, string> = {
  fire: '\uD83D\uDD25',
  water: '\uD83D\uDCA7',
  earth: '\uD83C\uDF3F',
  air: '\uD83D\uDCA8',
  void: '\uD83C\uDF00',
  light: '\u2728',
};

const elementColors: Record<Element, string> = {
  fire: '#EF4444',
  water: '#4fc3f7',
  earth: '#10B981',
  air: '#94A3B8',
  void: '#9c27b0',
  light: '#d4a574',
};

function ArtifactDetail({ artifact }: ArtifactDetailProps) {
  const accentColor = elementColors[artifact.element];

  const headerStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    marginBottom: '20px',
  };

  const elementIconStyle: CSSProperties = {
    fontSize: '3rem',
    lineHeight: 1,
  };

  const nameStyle: CSSProperties = {
    color: '#d4a574',
    fontSize: '1.5rem',
    margin: 0,
    fontFamily: "'Georgia', serif",
    letterSpacing: '0.5px',
  };

  const originStyle: CSSProperties = {
    color: '#9999bb',
    fontSize: '0.9rem',
    margin: '4px 0 0',
    fontStyle: 'italic',
  };

  const sectionTitleStyle: CSSProperties = {
    color: '#d4a574',
    fontSize: '0.9rem',
    marginBottom: '8px',
    marginTop: '20px',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
  };

  const descriptionStyle: CSSProperties = {
    color: '#c8c8d4',
    lineHeight: 1.7,
    fontSize: '0.95rem',
    padding: '14px',
    backgroundColor: '#12122a',
    borderRadius: '8px',
    border: '1px solid #2a2a4e',
  };

  const powerStyle: CSSProperties = {
    color: accentColor,
    lineHeight: 1.6,
    fontSize: '0.95rem',
    padding: '14px',
    backgroundColor: `${accentColor}10`,
    borderRadius: '8px',
    border: `1px solid ${accentColor}33`,
  };

  const dangerMeterContainerStyle: CSSProperties = {
    width: '100%',
    height: '14px',
    backgroundColor: '#12122a',
    borderRadius: '7px',
    overflow: 'hidden',
    marginBottom: '6px',
    border: '1px solid #2a2a4e',
  };

  const dangerMeterFillStyle: CSSProperties = {
    height: '100%',
    width: `${(artifact.dangerLevel / 10) * 100}%`,
    borderRadius: '7px',
    background:
      artifact.dangerLevel >= 7
        ? 'linear-gradient(90deg, #EF4444 0%, #7F1D1D 100%)'
        : artifact.dangerLevel >= 4
          ? 'linear-gradient(90deg, #EAB308 0%, #EF4444 100%)'
          : 'linear-gradient(90deg, #10B981 0%, #84CC16 100%)',
    transition: 'width 0.5s ease',
    boxShadow:
      artifact.dangerLevel >= 7
        ? '0 0 8px rgba(239, 68, 68, 0.5)'
        : 'none',
  };

  const dangerLabelsStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#8888aa',
    fontSize: '0.75rem',
  };

  const metaGridStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
    marginTop: '20px',
  };

  const metaItemStyle: CSSProperties = {
    padding: '10px 14px',
    backgroundColor: '#12122a',
    border: '1px solid #2a2a4e',
    borderRadius: '8px',
  };

  const metaLabelStyle: CSSProperties = {
    color: '#8888aa',
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '4px',
  };

  const metaValueStyle: CSSProperties = {
    color: '#c8c8d4',
    fontSize: '0.95rem',
  };

  const lostBannerStyle: CSSProperties = {
    marginTop: '20px',
    padding: '14px 18px',
    backgroundColor: 'rgba(156, 39, 176, 0.1)',
    border: '1px solid #9c27b044',
    borderRadius: '8px',
    color: '#CE93D8',
    textAlign: 'center',
    fontSize: '1rem',
    fontFamily: "'Georgia', serif",
    fontStyle: 'italic',
    boxShadow: '0 0 12px rgba(156, 39, 176, 0.15)',
  };

  const locatedBannerStyle: CSSProperties = {
    marginTop: '20px',
    padding: '14px 18px',
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    border: '1px solid #10B98144',
    borderRadius: '8px',
    color: '#10B981',
    textAlign: 'center',
    fontSize: '0.95rem',
    fontFamily: "'Georgia', serif",
  };

  return (
    <div>
      <div style={headerStyle}>
        <span style={elementIconStyle}>{elementEmojis[artifact.element]}</span>
        <div>
          <h2 style={nameStyle}>{artifact.name}</h2>
          <p style={originStyle}>Origin: {artifact.origin}</p>
        </div>
      </div>

      <h4 style={sectionTitleStyle}>Power</h4>
      <div style={powerStyle}>{artifact.power}</div>

      <h4 style={sectionTitleStyle}>Description</h4>
      <div style={descriptionStyle}>{artifact.description}</div>

      <h4 style={sectionTitleStyle}>Danger Level</h4>
      <div style={dangerMeterContainerStyle}>
        <div style={dangerMeterFillStyle} />
      </div>
      <div style={dangerLabelsStyle}>
        <span>Safe</span>
        <span>{artifact.dangerLevel}/10</span>
        <span>Deadly</span>
      </div>

      <div style={metaGridStyle}>
        <div style={metaItemStyle}>
          <div style={metaLabelStyle}>Element</div>
          <div style={metaValueStyle}>
            {elementEmojis[artifact.element]}{' '}
            {artifact.element.charAt(0).toUpperCase() + artifact.element.slice(1)}
          </div>
        </div>
        <div style={metaItemStyle}>
          <div style={metaLabelStyle}>Current Location</div>
          <div style={metaValueStyle}>{artifact.currentLocation}</div>
        </div>
      </div>

      {artifact.isLost ? (
        <div style={lostBannerStyle}>
          This artifact has been lost to the ages... its whereabouts remain unknown.
        </div>
      ) : (
        <div style={locatedBannerStyle}>
          This artifact has been located and is currently secured.
        </div>
      )}
    </div>
  );
}

export default ArtifactDetail;
