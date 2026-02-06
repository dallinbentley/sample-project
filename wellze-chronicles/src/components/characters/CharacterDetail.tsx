import { type CSSProperties } from 'react';
import type { Character } from '../../types';

interface CharacterDetailProps {
  character: Character;
  onClose: () => void;
}

function CharacterDetail({ character }: CharacterDetailProps) {
  const portraitStyle: CSSProperties = {
    fontSize: '5rem',
    textAlign: 'center',
    marginBottom: '16px',
    lineHeight: 1,
  };

  const nameStyle: CSSProperties = {
    color: '#d4a574',
    fontSize: '1.6rem',
    margin: '0 0 4px',
    textAlign: 'center',
    fontFamily: "'Georgia', serif",
    letterSpacing: '0.5px',
  };

  const titleTextStyle: CSSProperties = {
    color: '#9999bb',
    fontSize: '1rem',
    textAlign: 'center',
    margin: '0 0 20px',
    fontStyle: 'italic',
  };

  const descriptionStyle: CSSProperties = {
    color: '#c8c8d4',
    lineHeight: 1.7,
    fontSize: '0.95rem',
    marginBottom: '20px',
    padding: '16px',
    backgroundColor: '#12122a',
    borderRadius: '8px',
    border: '1px solid #2a2a4e',
  };

  const sectionTitleStyle: CSSProperties = {
    color: '#d4a574',
    fontSize: '0.9rem',
    marginBottom: '10px',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
  };

  const abilitiesContainerStyle: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '20px',
  };

  const abilityBadgeStyle: CSSProperties = {
    padding: '5px 14px',
    backgroundColor: 'rgba(79, 195, 247, 0.12)',
    border: '1px solid #4fc3f744',
    borderRadius: '20px',
    color: '#4fc3f7',
    fontSize: '0.85rem',
    fontFamily: "'Georgia', serif",
    boxShadow: '0 0 6px rgba(79, 195, 247, 0.15)',
  };

  const metaGridStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
    marginBottom: '16px',
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

  const statusStyle: CSSProperties = {
    display: 'inline-block',
    padding: '4px 12px',
    borderRadius: '12px',
    fontSize: '0.85rem',
    fontWeight: 600,
    backgroundColor: character.isAlive ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
    color: character.isAlive ? '#10B981' : '#EF4444',
    border: `1px solid ${character.isAlive ? '#10B98144' : '#EF444444'}`,
  };

  return (
    <div>
      <div style={portraitStyle}>{character.portraitEmoji}</div>
      <h2 style={nameStyle}>{character.name}</h2>
      <p style={titleTextStyle}>{character.title}</p>

      <p style={descriptionStyle}>{character.description}</p>

      <h4 style={sectionTitleStyle}>Abilities</h4>
      <div style={abilitiesContainerStyle}>
        {character.abilities.map((ability, i) => (
          <span key={i} style={abilityBadgeStyle}>
            {ability}
          </span>
        ))}
      </div>

      <div style={metaGridStyle}>
        <div style={metaItemStyle}>
          <div style={metaLabelStyle}>Region</div>
          <div style={metaValueStyle}>{character.region}</div>
        </div>
        <div style={metaItemStyle}>
          <div style={metaLabelStyle}>Era</div>
          <div style={metaValueStyle}>{character.era}</div>
        </div>
        <div style={metaItemStyle}>
          <div style={metaLabelStyle}>Allegiance</div>
          <div style={metaValueStyle}>{character.allegiance}</div>
        </div>
        <div style={metaItemStyle}>
          <div style={metaLabelStyle}>Status</div>
          <div>
            <span style={statusStyle}>{character.isAlive ? 'Alive' : 'Deceased'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetail;
