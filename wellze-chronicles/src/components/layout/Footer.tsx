import { type CSSProperties } from 'react';

function Footer() {
  const footerStyle: CSSProperties = {
    backgroundColor: '#0a0a1a',
    borderTop: '1px solid #2a2a4e',
    padding: '24px 32px',
    textAlign: 'center',
    fontFamily: "'Georgia', serif",
  };

  const separatorStyle: CSSProperties = {
    color: '#c9a96e',
    fontSize: '0.85rem',
    marginBottom: '12px',
    letterSpacing: '4px',
    opacity: 0.6,
  };

  const messageStyle: CSSProperties = {
    color: '#c9a96e',
    fontSize: '0.95rem',
    marginBottom: '8px',
    fontStyle: 'italic',
    opacity: 0.8,
  };

  const yearStyle: CSSProperties = {
    color: '#8888a8',
    fontSize: '0.8rem',
    margin: 0,
    letterSpacing: '0.5px',
  };

  return (
    <footer style={footerStyle}>
      <div style={separatorStyle}>&#10022; &#9472;&#9472;&#9472; &#10022; &#9472;&#9472;&#9472; &#10022;</div>
      <p style={messageStyle}>The chronicles continue...</p>
      <p style={yearStyle}>Wellze Year 3847 &middot; Age of Renewal</p>
    </footer>
  );
}

export default Footer;
