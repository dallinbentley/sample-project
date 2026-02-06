import { useState, type CSSProperties } from 'react';

const runeMap: Record<string, string> = {
  a: '\u16A0',
  b: '\u16A2',
  c: '\u16A6',
  d: '\u16A8',
  e: '\u16B1',
  f: '\u16B2',
  g: '\u16B7',
  h: '\u16B9',
  i: '\u16BA',
  j: '\u16BE',
  k: '\u16C1',
  l: '\u16C3',
  m: '\u16C7',
  n: '\u16C8',
  o: '\u16C9',
  p: '\u16CA',
  q: '\u16CF',
  r: '\u16B1',
  s: '\u16CB',
  t: '\u16CF',
  u: '\u16A2',
  v: '\u16DE',
  w: '\u16B9',
  x: '\u16DC',
  y: '\u16DD',
  z: '\u16DF',
};

function translateToRunes(text: string): string {
  return text
    .toLowerCase()
    .split('')
    .map((char) => {
      if (char === ' ') return '  ';
      return runeMap[char] || char;
    })
    .join('');
}

function RuneTranslator() {
  const [input, setInput] = useState('');
  const [copied, setCopied] = useState(false);

  const runeOutput = translateToRunes(input);

  const handleCopy = async () => {
    if (!runeOutput) return;
    await navigator.clipboard.writeText(runeOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerStyle: CSSProperties = {
    backgroundColor: '#0a0a1a',
    border: '1px solid #2a2a4e',
    borderRadius: '12px',
    padding: '24px',
    fontFamily: "'Georgia', serif",
    maxWidth: '450px',
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

  const labelStyle: CSSProperties = {
    color: '#a0a0b8',
    fontSize: '0.85rem',
    marginBottom: '6px',
    display: 'block',
  };

  const inputStyle: CSSProperties = {
    width: '100%',
    padding: '12px 14px',
    backgroundColor: '#1a1a2e',
    color: '#c8c8d4',
    border: '1px solid #3a3a5e',
    borderRadius: '8px',
    fontFamily: "'Georgia', serif",
    fontSize: '1rem',
    outline: 'none',
    marginBottom: '20px',
    boxSizing: 'border-box',
  };

  const outputContainerStyle: CSSProperties = {
    backgroundColor: '#1a1a2e',
    border: '1px solid #3a3a5e',
    borderRadius: '10px',
    padding: '20px',
    minHeight: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px',
  };

  const runeOutputStyle: CSSProperties = {
    fontSize: '2rem',
    color: '#d4a574',
    letterSpacing: '4px',
    textAlign: 'center',
    textShadow: '0 0 12px rgba(212, 165, 116, 0.6), 0 0 24px rgba(212, 165, 116, 0.3)',
    lineHeight: 1.8,
    wordBreak: 'break-all',
  };

  const placeholderStyle: CSSProperties = {
    color: '#4a4a6e',
    fontSize: '1rem',
    fontStyle: 'italic',
  };

  const buttonStyle: CSSProperties = {
    width: '100%',
    padding: '10px',
    backgroundColor: copied ? '#1a3a2e' : '#1a1a2e',
    color: copied ? '#4caf50' : '#c9a96e',
    border: `1px solid ${copied ? '#4caf50' : '#c9a96e'}`,
    borderRadius: '8px',
    fontFamily: "'Georgia', serif",
    fontSize: '0.95rem',
    cursor: runeOutput ? 'pointer' : 'not-allowed',
    transition: 'all 0.3s ease',
    opacity: runeOutput ? 1 : 0.5,
  };

  return (
    <div style={containerStyle}>
      <h3 style={headerStyle}>Ancient Rune Translator</h3>
      <label style={labelStyle}>Enter text in Common Tongue:</label>
      <input
        style={inputStyle}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
      />
      <label style={labelStyle}>Runic Translation:</label>
      <div style={outputContainerStyle}>
        {runeOutput ? (
          <div style={runeOutputStyle}>{runeOutput}</div>
        ) : (
          <div style={placeholderStyle}>Awaiting your words, traveler...</div>
        )}
      </div>
      <button style={buttonStyle} onClick={handleCopy} disabled={!runeOutput}>
        {copied ? '\u2713 Copied to Scroll!' : '\uD83D\uDCDC Copy Runes'}
      </button>
    </div>
  );
}

export default RuneTranslator;
