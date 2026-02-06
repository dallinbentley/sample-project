import { useState, useEffect, type CSSProperties } from 'react';

interface MoonPhase {
  emoji: string;
  name: string;
  effect: string;
}

const moonPhases: MoonPhase[] = [
  {
    emoji: '\uD83C\uDF11',
    name: 'New Moon',
    effect: 'Shadow magic is strongest. The void whispers secrets to those who dare listen.',
  },
  {
    emoji: '\uD83C\uDF12',
    name: 'Waxing Crescent',
    effect: 'Crystal resonance begins to build. Alchemists prepare their reagents.',
  },
  {
    emoji: '\uD83C\uDF13',
    name: 'First Quarter',
    effect: 'Elemental spirits grow restless. The winds carry distant battle cries.',
  },
  {
    emoji: '\uD83C\uDF14',
    name: 'Waxing Gibbous',
    effect: 'Healing magic amplifies. Temples overflow with pilgrims seeking restoration.',
  },
  {
    emoji: '\uD83C\uDF15',
    name: 'Full Moon',
    effect: 'Lycans grow restless. All magic surges with untamed power across Wellze.',
  },
  {
    emoji: '\uD83C\uDF16',
    name: 'Waning Gibbous',
    effect: 'Divination is most clear. Seers peer through the veil of time with ease.',
  },
  {
    emoji: '\uD83C\uDF17',
    name: 'Last Quarter',
    effect: 'The barrier between realms thins. Ancestral spirits walk among the living.',
  },
  {
    emoji: '\uD83C\uDF18',
    name: 'Waning Crescent',
    effect: 'Enchantments fade and curses weaken. A time of rest before the dark returns.',
  },
];

function MoonPhaseWidget() {
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setPhaseIndex((prev) => (prev + 1) % moonPhases.length);
        setFading(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [paused]);

  const phase = moonPhases[phaseIndex];

  const containerStyle: CSSProperties = {
    backgroundColor: '#0a0a1a',
    border: '1px solid #2a2a4e',
    borderRadius: '12px',
    padding: '24px',
    fontFamily: "'Georgia', serif",
    maxWidth: '380px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
    textAlign: 'center',
  };

  const headerStyle: CSSProperties = {
    color: '#d4a574',
    fontSize: '1.3rem',
    marginTop: 0,
    marginBottom: '20px',
    letterSpacing: '1px',
    borderBottom: '1px solid #2a2a4e',
    paddingBottom: '12px',
  };

  const phaseDisplayStyle: CSSProperties = {
    transition: 'all 0.3s ease',
    opacity: fading ? 0 : 1,
    transform: fading ? 'translateY(-8px)' : 'translateY(0)',
  };

  const emojiStyle: CSSProperties = {
    fontSize: '5rem',
    display: 'block',
    marginBottom: '12px',
    filter: 'drop-shadow(0 0 12px rgba(201, 169, 110, 0.6))',
  };

  const nameStyle: CSSProperties = {
    color: '#c9a96e',
    fontSize: '1.4rem',
    fontWeight: 'bold',
    marginBottom: '12px',
    textShadow: '0 0 8px rgba(201, 169, 110, 0.4)',
  };

  const effectStyle: CSSProperties = {
    color: '#a0a0c0',
    fontSize: '0.95rem',
    lineHeight: 1.6,
    fontStyle: 'italic',
    marginBottom: '20px',
    padding: '0 8px',
  };

  const phaseTrackStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    gap: '6px',
    marginBottom: '16px',
  };

  const dotStyle = (index: number): CSSProperties => ({
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: index === phaseIndex ? '#d4a574' : '#2a2a4e',
    transition: 'all 0.3s ease',
    boxShadow: index === phaseIndex ? '0 0 6px rgba(212, 165, 116, 0.6)' : 'none',
  });

  const buttonStyle: CSSProperties = {
    backgroundColor: paused ? '#1a3a2e' : '#2e1a1a',
    color: paused ? '#4caf50' : '#ef5350',
    border: `1px solid ${paused ? '#4caf50' : '#ef5350'}`,
    borderRadius: '8px',
    padding: '8px 20px',
    fontFamily: "'Georgia', serif",
    fontSize: '0.9rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={containerStyle}>
      <h3 style={headerStyle}>Wellzian Moon Phase</h3>
      <div style={phaseDisplayStyle}>
        <span style={emojiStyle}>{phase.emoji}</span>
        <div style={nameStyle}>{phase.name}</div>
        <div style={effectStyle}>{phase.effect}</div>
      </div>
      <div style={phaseTrackStyle}>
        {moonPhases.map((_, i) => (
          <div key={i} style={dotStyle(i)} />
        ))}
      </div>
      <button style={buttonStyle} onClick={() => setPaused((p) => !p)}>
        {paused ? '\u25B6 Resume Cycle' : '\u23F8 Pause Cycle'}
      </button>
    </div>
  );
}

export default MoonPhaseWidget;
