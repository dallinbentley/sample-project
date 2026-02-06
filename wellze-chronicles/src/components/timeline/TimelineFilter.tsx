import { type CSSProperties } from 'react';
import type { Age, Significance } from '../../types';
import Button from '../common/Button';

interface TimelineFilterProps {
  selectedAge: Age | null;
  onAgeChange: (age: Age | null) => void;
  selectedSignificance: Significance | null;
  onSignificanceChange: (significance: Significance | null) => void;
}

const ages: (Age | null)[] = [
  null,
  'Age of Dawn',
  'Age of Crystals',
  'Age of Kingdoms',
  'Age of Shadows',
  'Age of Renewal',
];

const significances: (Significance | null)[] = [null, 'legendary', 'major', 'minor'];

function ageLabel(age: Age | null): string {
  return age ?? 'All Ages';
}

function significanceLabel(sig: Significance | null): string {
  if (!sig) return 'All';
  return sig.charAt(0).toUpperCase() + sig.slice(1);
}

function TimelineFilter({
  selectedAge,
  onAgeChange,
  selectedSignificance,
  onSignificanceChange,
}: TimelineFilterProps) {
  const barStyle: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    alignItems: 'center',
    padding: '16px 20px',
    backgroundColor: '#12122a',
    border: '1px solid #2a2a4e',
    borderRadius: '10px',
    marginBottom: '32px',
  };

  const labelStyle: CSSProperties = {
    color: '#d4a574',
    fontFamily: "'Georgia', serif",
    fontSize: '0.85rem',
    marginRight: '4px',
    letterSpacing: '0.5px',
  };

  const dividerStyle: CSSProperties = {
    width: '1px',
    height: '28px',
    backgroundColor: '#2a2a4e',
    margin: '0 12px',
  };

  return (
    <div style={barStyle}>
      <span style={labelStyle}>Age:</span>
      {ages.map((age) => (
        <Button
          key={age ?? 'all-age'}
          variant={selectedAge === age ? 'primary' : 'ghost'}
          size="sm"
          onClick={() => onAgeChange(age)}
        >
          {ageLabel(age)}
        </Button>
      ))}

      <div style={dividerStyle} />

      <span style={labelStyle}>Significance:</span>
      {significances.map((sig) => (
        <Button
          key={sig ?? 'all-sig'}
          variant={selectedSignificance === sig ? 'secondary' : 'ghost'}
          size="sm"
          onClick={() => onSignificanceChange(sig)}
        >
          {significanceLabel(sig)}
        </Button>
      ))}
    </div>
  );
}

export default TimelineFilter;
