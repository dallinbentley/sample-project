import { useState, type CSSProperties } from 'react';
import type { Character } from '../../types';
import Card from '../common/Card';

interface CharacterCardProps {
  character: Character;
  onClick: () => void;
}

const allegianceColors: Record<string, string> = {
  'Crystal Enclave': '#8B5CF6',
  'Forest Council': '#10B981',
  'Cinderwatch': '#EF4444',
  'Coastal Alliance': '#06B6D4',
  'Whispering Court': '#84CC16',
  'Marsh Folk': '#A855F7',
  'Council of Renewal': '#d4a574',
  'Shadow Legion': '#555577',
};

function CharacterCard({ character, onClick }: CharacterCardProps) {
  const [hovered, setHovered] = useState(false);

  const borderColor = allegianceColors[character.allegiance] ?? '#2a2a4e';

  const wrapperStyle: CSSProperties = {
    transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
    transition: 'transform 0.3s ease',
    borderLeft: `3px solid ${borderColor}`,
    borderRadius: '10px',
  };

  const portraitStyle: CSSProperties = {
    fontSize: '3rem',
    textAlign: 'center',
    marginBottom: '12px',
    lineHeight: 1,
  };

  const nameStyle: CSSProperties = {
    color: '#d4a574',
    fontSize: '1.1rem',
    margin: '0 0 4px',
    textAlign: 'center',
    fontFamily: "'Georgia', serif",
  };

  const titleTextStyle: CSSProperties = {
    color: '#9999bb',
    fontSize: '0.85rem',
    textAlign: 'center',
    margin: '0 0 12px',
    fontStyle: 'italic',
  };

  const metaRowStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '8px',
    flexWrap: 'wrap',
  };

  const metaTagStyle: CSSProperties = {
    padding: '3px 10px',
    backgroundColor: '#12122a',
    border: '1px solid #2a2a4e',
    borderRadius: '12px',
    color: '#8888aa',
    fontSize: '0.75rem',
  };

  return (
    <div
      style={wrapperStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Card onClick={onClick}>
        <div style={portraitStyle}>{character.portraitEmoji}</div>
        <h3 style={nameStyle}>{character.name}</h3>
        <p style={titleTextStyle}>{character.title}</p>
        <div style={metaRowStyle}>
          <span style={metaTagStyle}>{character.era}</span>
          <span style={metaTagStyle}>{character.region}</span>
        </div>
      </Card>
    </div>
  );
}

export default CharacterCard;
