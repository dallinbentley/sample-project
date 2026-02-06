import { type CSSProperties } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/history', label: 'History' },
  { path: '/regions', label: 'Regions' },
  { path: '/characters', label: 'Characters' },
  { path: '/artifacts', label: 'Artifacts' },
  { path: '/lore', label: 'Lore' },
];

function Header() {
  const location = useLocation();

  const headerStyle: CSSProperties = {
    backgroundColor: '#0a0a1a',
    borderBottom: '1px solid #2a2a4e',
    padding: '0 32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '64px',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  };

  const titleContainerStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  };

  const titleStyle: CSSProperties = {
    fontFamily: "'Georgia', serif",
    fontSize: '1.4rem',
    color: '#d4a574',
    margin: 0,
    letterSpacing: '1.5px',
    fontWeight: 700,
  };

  const sparkleStyle: CSSProperties = {
    fontSize: '1.1rem',
  };

  const navStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  };

  const linkStyle = (path: string): CSSProperties => {
    const isActive = location.pathname === path;
    return {
      color: isActive ? '#d4a574' : '#8888a8',
      textDecoration: 'none',
      fontFamily: "'Georgia', serif",
      fontSize: '0.9rem',
      padding: '8px 14px',
      borderRadius: '6px',
      backgroundColor: isActive ? 'rgba(212, 165, 116, 0.1)' : 'transparent',
      borderBottom: isActive ? '2px solid #d4a574' : '2px solid transparent',
      transition: 'all 0.2s ease',
      letterSpacing: '0.3px',
    };
  };

  return (
    <header style={headerStyle}>
      <div style={titleContainerStyle}>
        <span style={sparkleStyle}>&#10024;</span>
        <h1 style={titleStyle}>Chronicles of Wellze</h1>
        <span style={sparkleStyle}>&#10024;</span>
      </div>
      <nav>
        <ul style={navStyle}>
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <Link to={path} style={linkStyle(path)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
