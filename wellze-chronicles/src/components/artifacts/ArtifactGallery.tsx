import { useState, type CSSProperties } from 'react';
import type { Artifact, Element } from '../../types';
import { artifacts } from '../../data/artifacts';
import ArtifactCard from './ArtifactCard';
import ArtifactDetail from './ArtifactDetail';
import Modal from '../common/Modal';
import Button from '../common/Button';

const elements: (Element | null)[] = [null, 'fire', 'water', 'earth', 'air', 'void', 'light'];

const elementLabels: Record<string, string> = {
  fire: 'Fire',
  water: 'Water',
  earth: 'Earth',
  air: 'Air',
  void: 'Void',
  light: 'Light',
};

function ArtifactGallery() {
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);
  const [selectedArtifact, setSelectedArtifact] = useState<Artifact | null>(null);

  const filteredArtifacts = artifacts.filter((a) => {
    if (selectedElement && a.element !== selectedElement) return false;
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

  const tabsStyle: CSSProperties = {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '28px',
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
      <h1 style={titleStyle}>Artifacts of Wellze</h1>
      <p style={subtitleStyle}>Relics of power, lost and found</p>

      <div style={tabsStyle}>
        {elements.map((el) => (
          <Button
            key={el ?? 'all'}
            variant={selectedElement === el ? 'primary' : 'ghost'}
            size="sm"
            onClick={() => setSelectedElement(el)}
          >
            {el ? elementLabels[el] : 'All'}
          </Button>
        ))}
      </div>

      <div style={gridStyle}>
        {filteredArtifacts.length === 0 ? (
          <div style={emptyStyle}>No artifacts found for this element.</div>
        ) : (
          filteredArtifacts.map((artifact) => (
            <ArtifactCard
              key={artifact.id}
              artifact={artifact}
              onClick={() => setSelectedArtifact(artifact)}
            />
          ))
        )}
      </div>

      {selectedArtifact && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedArtifact(null)}
          title={selectedArtifact.name}
        >
          <ArtifactDetail
            artifact={selectedArtifact}
            onClose={() => setSelectedArtifact(null)}
          />
        </Modal>
      )}
    </div>
  );
}

export default ArtifactGallery;
