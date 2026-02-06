import { type CSSProperties } from 'react';
import type { LoreEntry as LoreEntryType, LoreCategory } from '../../types';

interface LoreEntryProps {
  entry: LoreEntryType;
  isExpanded: boolean;
  onToggle: () => void;
}

const categoryColors: Record<LoreCategory, string> = {
  myth: '#9c27b0',
  history: '#4fc3f7',
  prophecy: '#d4a574',
  legend: '#10B981',
  spell: '#EF4444',
};

const categoryLabels: Record<LoreCategory, string> = {
  myth: 'Myth',
  history: 'History',
  prophecy: 'Prophecy',
  legend: 'Legend',
  spell: 'Spell',
};

function LoreEntry({ entry, isExpanded, onToggle }: LoreEntryProps) {
  const badgeColor = categoryColors[entry.category];

  const containerStyle: CSSProperties = {
    backgroundColor: '#1a1a2e',
    border: '1px solid #2a2a4e',
    borderRadius: '8px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'border-color 0.3s ease',
    borderLeftColor: badgeColor,
    borderLeftWidth: '3px',
  };

  const headerStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '14px 18px',
  };

  const titleStyle: CSSProperties = {
    color: '#d4a574',
    fontSize: '1.05rem',
    margin: 0,
    fontFamily: "'Georgia', serif",
    flex: 1,
  };

  const badgeStyle: CSSProperties = {
    display: 'inline-block',
    padding: '3px 10px',
    backgroundColor: `${badgeColor}20`,
    border: `1px solid ${badgeColor}44`,
    borderRadius: '12px',
    color: badgeColor,
    fontSize: '0.75rem',
    marginLeft: '12px',
    whiteSpace: 'nowrap',
  };

  const chevronStyle: CSSProperties = {
    color: '#8888aa',
    fontSize: '0.9rem',
    marginLeft: '12px',
    transition: 'transform 0.3s ease',
    transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
  };

  const bodyStyle: CSSProperties = {
    maxHeight: isExpanded ? '500px' : '0',
    overflow: 'hidden',
    transition: 'max-height 0.4s ease',
  };

  const bodyInnerStyle: CSSProperties = {
    padding: '0 18px 18px',
  };

  const contentStyle: CSSProperties = {
    color: '#c8c8d4',
    lineHeight: 1.7,
    fontSize: '0.95rem',
    marginBottom: '14px',
  };

  const relatedTitleStyle: CSSProperties = {
    color: '#9999bb',
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '8px',
  };

  const relatedTagsStyle: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
  };

  const relatedTagStyle: CSSProperties = {
    padding: '3px 10px',
    backgroundColor: '#12122a',
    border: '1px solid #2a2a4e',
    borderRadius: '12px',
    color: '#8888aa',
    fontSize: '0.8rem',
  };

  return (
    <div style={containerStyle} onClick={onToggle}>
      <div style={headerStyle}>
        <h3 style={titleStyle}>{entry.title}</h3>
        <span style={badgeStyle}>{categoryLabels[entry.category]}</span>
        <span style={chevronStyle}>{'\u25BC'}</span>
      </div>

      <div style={bodyStyle}>
        <div style={bodyInnerStyle}>
          <p style={contentStyle}>{entry.content}</p>

          {entry.relatedCharacters.length > 0 && (
            <>
              <div style={relatedTitleStyle}>Related Characters</div>
              <div style={relatedTagsStyle}>
                {entry.relatedCharacters.map((name, i) => (
                  <span key={i} style={relatedTagStyle}>
                    {name}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoreEntry;
