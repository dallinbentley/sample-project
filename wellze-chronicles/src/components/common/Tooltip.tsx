import { useState, type ReactNode, type CSSProperties } from 'react';

interface TooltipProps {
  text: string;
  children: ReactNode;
}

function Tooltip({ text, children }: TooltipProps) {
  const [visible, setVisible] = useState(false);

  const wrapperStyle: CSSProperties = {
    position: 'relative',
    display: 'inline-block',
  };

  const tooltipStyle: CSSProperties = {
    position: 'absolute',
    bottom: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    marginBottom: '8px',
    padding: '8px 14px',
    backgroundColor: '#0a0a1a',
    border: '1px solid #2a2a4e',
    borderRadius: '6px',
    color: '#d4a574',
    fontFamily: "'Georgia', serif",
    fontSize: '0.8rem',
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
    opacity: visible ? 1 : 0,
    transition: 'opacity 0.2s ease',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
    zIndex: 999,
  };

  const arrowStyle: CSSProperties = {
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: 0,
    height: 0,
    borderLeft: '6px solid transparent',
    borderRight: '6px solid transparent',
    borderTop: '6px solid #2a2a4e',
  };

  return (
    <span
      style={wrapperStyle}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      <span style={tooltipStyle}>
        {text}
        <span style={arrowStyle} />
      </span>
    </span>
  );
}

export default Tooltip;
