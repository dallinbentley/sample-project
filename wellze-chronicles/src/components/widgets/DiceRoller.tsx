import { useState, useRef, useCallback, type CSSProperties } from 'react';

interface DieConfig {
  sides: number;
  label: string;
  color: string;
}

const diceTypes: DieConfig[] = [
  { sides: 4, label: 'd4', color: '#4caf50' },
  { sides: 6, label: 'd6', color: '#4fc3f7' },
  { sides: 8, label: 'd8', color: '#ff9800' },
  { sides: 10, label: 'd10', color: '#e91e63' },
  { sides: 12, label: 'd12', color: '#9c27b0' },
  { sides: 20, label: 'd20', color: '#d4a574' },
  { sides: 100, label: 'd100', color: '#ef5350' },
];

interface RollRecord {
  id: number;
  die: string;
  result: number;
  color: string;
}

function DiceRoller() {
  const [rolling, setRolling] = useState(false);
  const [activeDie, setActiveDie] = useState<DieConfig | null>(null);
  const [displayValue, setDisplayValue] = useState<number | null>(null);
  const [history, setHistory] = useState<RollRecord[]>([]);
  const rollIdRef = useRef(0);

  const rollDie = useCallback(
    (die: DieConfig) => {
      if (rolling) return;

      setRolling(true);
      setActiveDie(die);
      const finalResult = Math.floor(Math.random() * die.sides) + 1;
      const startTime = Date.now();

      const interval = setInterval(() => {
        setDisplayValue(Math.floor(Math.random() * die.sides) + 1);

        if (Date.now() - startTime >= 500) {
          clearInterval(interval);
          setDisplayValue(finalResult);
          setRolling(false);

          rollIdRef.current += 1;
          setHistory((prev) => {
            const next = [
              { id: rollIdRef.current, die: die.label, result: finalResult, color: die.color },
              ...prev,
            ];
            return next.slice(0, 10);
          });
        }
      }, 50);
    },
    [rolling],
  );

  const containerStyle: CSSProperties = {
    backgroundColor: '#0a0a1a',
    border: '1px solid #2a2a4e',
    borderRadius: '12px',
    padding: '24px',
    fontFamily: "'Georgia', serif",
    maxWidth: '420px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
  };

  const headerStyle: CSSProperties = {
    color: '#d4a574',
    fontSize: '1.3rem',
    marginTop: 0,
    marginBottom: '16px',
    letterSpacing: '1px',
    textAlign: 'center',
    borderBottom: '1px solid #2a2a4e',
    paddingBottom: '12px',
  };

  const diceGridStyle: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    justifyContent: 'center',
    marginBottom: '20px',
  };

  const dieButtonStyle = (die: DieConfig): CSSProperties => ({
    backgroundColor: activeDie?.sides === die.sides && rolling ? die.color : '#1a1a2e',
    color: activeDie?.sides === die.sides && rolling ? '#0a0a1a' : die.color,
    border: `2px solid ${die.color}`,
    borderRadius: '8px',
    padding: '10px 16px',
    fontFamily: "'Georgia', serif",
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: rolling ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease',
    minWidth: '52px',
  });

  const resultContainerStyle: CSSProperties = {
    backgroundColor: '#1a1a2e',
    borderRadius: '12px',
    padding: '24px',
    textAlign: 'center',
    marginBottom: '20px',
    border: '1px solid #2a2a4e',
    minHeight: '100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const resultValueStyle: CSSProperties = {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    color: activeDie?.color || '#d4a574',
    textShadow: `0 0 16px ${activeDie?.color || '#d4a574'}80, 0 0 32px ${activeDie?.color || '#d4a574'}40`,
    transition: rolling ? 'none' : 'all 0.3s ease',
    transform: rolling ? 'scale(1.05)' : 'scale(1)',
  };

  const resultLabelStyle: CSSProperties = {
    color: '#a0a0b8',
    fontSize: '0.85rem',
    marginTop: '4px',
  };

  const placeholderStyle: CSSProperties = {
    color: '#4a4a6e',
    fontSize: '1rem',
    fontStyle: 'italic',
  };

  const historyHeaderStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  };

  const historyTitleStyle: CSSProperties = {
    color: '#a0a0b8',
    fontSize: '0.9rem',
  };

  const clearButtonStyle: CSSProperties = {
    backgroundColor: 'transparent',
    color: '#ef5350',
    border: '1px solid #ef5350',
    borderRadius: '6px',
    padding: '4px 12px',
    fontFamily: "'Georgia', serif",
    fontSize: '0.8rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  };

  const historyListStyle: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
  };

  const historyItemStyle = (record: RollRecord): CSSProperties => ({
    backgroundColor: '#1a1a2e',
    border: `1px solid ${record.color}40`,
    borderRadius: '6px',
    padding: '4px 10px',
    fontSize: '0.85rem',
    color: record.color,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
  });

  return (
    <div style={containerStyle}>
      <h3 style={headerStyle}>Arcane Dice Roller</h3>
      <div style={diceGridStyle}>
        {diceTypes.map((die) => (
          <button key={die.sides} style={dieButtonStyle(die)} onClick={() => rollDie(die)}>
            {die.label}
          </button>
        ))}
      </div>
      <div style={resultContainerStyle}>
        {displayValue !== null ? (
          <>
            <div style={resultValueStyle}>{displayValue}</div>
            <div style={resultLabelStyle}>
              {rolling ? 'Rolling...' : `Rolled ${activeDie?.label}`}
            </div>
          </>
        ) : (
          <div style={placeholderStyle}>Choose a die to cast your fate...</div>
        )}
      </div>
      {history.length > 0 && (
        <div>
          <div style={historyHeaderStyle}>
            <span style={historyTitleStyle}>Roll History</span>
            <button style={clearButtonStyle} onClick={() => setHistory([])}>
              Clear
            </button>
          </div>
          <div style={historyListStyle}>
            {history.map((record) => (
              <span key={record.id} style={historyItemStyle(record)}>
                <strong>{record.die}</strong>: {record.result}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default DiceRoller;
