import { useState, type CSSProperties } from 'react';
import type { Character, Age } from '../../types';
import { characters } from '../../data/characters';
import CharacterCard from './CharacterCard';
import CharacterDetail from './CharacterDetail';
import Modal from '../common/Modal';

const eras: (Age | null)[] = [
  null,
  'Age of Dawn',
  'Age of Crystals',
  'Age of Kingdoms',
  'Age of Shadows',
  'Age of Renewal',
];

function CharacterList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEra, setSelectedEra] = useState<Age | null>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const filteredCharacters = characters.filter((c) => {
    if (searchQuery && !c.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    if (selectedEra && c.era !== selectedEra) return false;
    return true;
  });

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

  const controlsStyle: CSSProperties = {
    display: 'flex',
    gap: '12px',
    marginBottom: '28px',
    flexWrap: 'wrap',
    alignItems: 'center',
  };

  const searchInputStyle: CSSProperties = {
    flex: 1,
    minWidth: '200px',
    padding: '10px 16px',
    backgroundColor: '#12122a',
    border: '1px solid #2a2a4e',
    borderRadius: '8px',
    color: '#c8c8d4',
    fontFamily: "'Georgia', serif",
    fontSize: '0.95rem',
    outline: 'none',
  };

  const selectStyle: CSSProperties = {
    padding: '10px 16px',
    backgroundColor: '#12122a',
    border: '1px solid #2a2a4e',
    borderRadius: '8px',
    color: '#c8c8d4',
    fontFamily: "'Georgia', serif",
    fontSize: '0.95rem',
    outline: 'none',
    cursor: 'pointer',
  };

  const gridStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
  };

  const emptyStyle: CSSProperties = {
    textAlign: 'center',
    color: '#8888aa',
    padding: '60px 20px',
    fontSize: '1.1rem',
    gridColumn: '1 / -1',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Characters of Wellze</h1>
      <p style={subtitleStyle}>Heroes, villains, and legends of every age</p>

      <div style={controlsStyle}>
        <input
          style={searchInputStyle}
          type="text"
          placeholder="Search characters by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          style={selectStyle}
          value={selectedEra ?? ''}
          onChange={(e) => setSelectedEra((e.target.value || null) as Age | null)}
        >
          {eras.map((era) => (
            <option key={era ?? 'all'} value={era ?? ''}>
              {era ?? 'All Eras'}
            </option>
          ))}
        </select>
      </div>

      <div style={gridStyle}>
        {filteredCharacters.length === 0 ? (
          <div style={emptyStyle}>No characters match your search.</div>
        ) : (
          filteredCharacters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              onClick={() => setSelectedCharacter(character)}
            />
          ))
        )}
      </div>

      {selectedCharacter && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedCharacter(null)}
          title={selectedCharacter.name}
        >
          <CharacterDetail
            character={selectedCharacter}
            onClose={() => setSelectedCharacter(null)}
          />
        </Modal>
      )}
    </div>
  );
}

export default CharacterList;
