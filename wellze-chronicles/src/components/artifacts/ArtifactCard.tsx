import { type CSSProperties } from 'react';
import type { Artifact, Element } from '../../types';
import Card from '../common/Card';

interface ArtifactCardProps {
  artifact: Artifact;
  onClick: () => void;
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

function ArtifactCard({ artifact, onClick }: ArtifactCardProps) {
  const accentColor = elementColors[artifact.element];

  const wrapperStyle: CSSProperties = {
    borderTop: `3px solid ${accentColor}`,
    borderRadius: '10px',
  };

  const headerStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '12px',
  };

  const elementIconStyle: CSSProperties = {
    fontSize: '1.8rem',
    lineHeight: 1,
  };

  const nameStyle: CSSProperties = {
    color: '#d4a574',
    fontSize: '1.05rem',
    margin: 0,
    fontFamily: "'Georgia', serif",
  };

  const dangerBarContainerStyle: CSSProperties = {
    width: '100%',
    height: '6px',
    backgroundColor: '#12122a',
    borderRadius: '3px',
    marginTop: '12px',
    marginBottom: '8px',
    overflow: 'hidden',
  };

  const dangerBarFillStyle: CSSProperties = {
    height: '100%',
    width: `${(artifact.dangerLevel / 10) * 100}%`,
    borderRadius: '3px',
    background:
      artifact.dangerLevel >= 7
        ? 'linear-gradient(90deg, #EF4444, #7F1D1D)'
        : artifact.dangerLevel >= 4
          ? 'linear-gradient(90deg, #EAB308, #EF4444)'
          : 'linear-gradient(90deg, #10B981, #84CC16)',
    transition: 'width 0.3s ease',
  };

  const dangerLabelStyle: CSSProperties = {
    color: '#8888aa',
    fontSize: '0.75rem',
    display: 'flex',
    justifyContent: 'space-between',
  };

  const lostBadgeStyle: CSSProperties = {
    display: 'inline-block',
    padding: '3px 10px',
    borderRadius: '12px',
    fontSize: '0.75rem',
    marginTop: '8px',
    backgroundColor: artifact.isLost ? 'rgba(156, 39, 176, 0.15)' : 'rgba(16, 185, 129, 0.15)',
    color: artifact.isLost ? '#CE93D8' : '#10B981',
    border: `1px solid ${artifact.isLost ? '#9c27b044' : '#10B98144'}`,
  };

  return (
    <div style={wrapperStyle}>
      <Card onClick={onClick}>
        <div style={headerStyle}>
          <span style={elementIconStyle}>{elementEmojis[artifact.element]}</span>
          <h3 style={nameStyle}>{artifact.name}</h3>
        </div>

        <div style={dangerBarContainerStyle}>
          <div style={dangerBarFillStyle} />
        </div>
        <div style={dangerLabelStyle}>
          <span>Danger</span>
          <span>{artifact.dangerLevel}/10</span>
        </div>

        <span style={lostBadgeStyle}>{artifact.isLost ? 'Lost' : 'Located'}</span>
      </Card>
    </div>
  );
}

export default ArtifactCard;
