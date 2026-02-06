import { useState, type ReactNode, type CSSProperties } from 'react';

interface CardProps {
  children: ReactNode;
  title?: string;
  glowing?: boolean;
  onClick?: () => void;
}

function Card({ children, title, glowing = false, onClick }: CardProps) {
  const [hovered, setHovered] = useState(false);

  const containerStyle: CSSProperties = {
    backgroundColor: '#1a1a2e',
    border: '1px solid #2a2a4e',
    borderRadius: '10px',
    padding: '24px',
    cursor: onClick ? 'pointer' : 'default',
    transition: 'all 0.3s ease',
    boxShadow: glowing
      ? hovered
        ? '0 0 20px rgba(212, 165, 116, 0.5), 0 0 40px rgba(212, 165, 116, 0.2)'
        : '0 0 10px rgba(212, 165, 116, 0.3), 0 0 20px rgba(212, 165, 116, 0.1)'
      : hovered
        ? '0 4px 16px rgba(0, 0, 0, 0.4)'
        : '0 2px 8px rgba(0, 0, 0, 0.3)',
    borderColor: glowing ? '#d4a574' : '#2a2a4e',
  };

  const titleStyle: CSSProperties = {
    fontFamily: "'Georgia', serif",
    fontSize: '1.2rem',
    color: '#d4a574',
    marginTop: 0,
    marginBottom: '16px',
    paddingBottom: '10px',
    borderBottom: '1px solid #2a2a4e',
    letterSpacing: '0.5px',
  };

  const bodyStyle: CSSProperties = {
    color: '#c8c8d4',
    fontFamily: "'Georgia', serif",
    lineHeight: 1.6,
  };

  return (
    <div
      style={containerStyle}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {title && <h3 style={titleStyle}>{title}</h3>}
      <div style={bodyStyle}>{children}</div>
    </div>
  );
}

export default Card;
