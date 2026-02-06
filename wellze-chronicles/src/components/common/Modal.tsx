import { useState, type ReactNode, type CSSProperties } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const [closeHovered, setCloseHovered] = useState(false);

  if (!isOpen) return null;

  const overlayStyle: CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  };

  const panelStyle: CSSProperties = {
    backgroundColor: '#1a1a2e',
    border: '1px solid #2a2a4e',
    borderRadius: '12px',
    minWidth: '400px',
    maxWidth: '600px',
    maxHeight: '80vh',
    overflow: 'auto',
    boxShadow: '0 0 30px rgba(0, 0, 0, 0.6), 0 0 15px rgba(212, 165, 116, 0.15)',
  };

  const headerStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '18px 24px',
    borderBottom: '1px solid #d4a574',
    background: 'linear-gradient(180deg, #1e1e36 0%, #1a1a2e 100%)',
    borderRadius: '12px 12px 0 0',
  };

  const titleStyle: CSSProperties = {
    fontFamily: "'Georgia', serif",
    fontSize: '1.25rem',
    color: '#d4a574',
    margin: 0,
    letterSpacing: '0.5px',
  };

  const closeButtonStyle: CSSProperties = {
    background: 'none',
    border: 'none',
    color: closeHovered ? '#e53935' : '#c8c8d4',
    fontSize: '1.4rem',
    cursor: 'pointer',
    padding: '4px 8px',
    lineHeight: 1,
    transition: 'color 0.2s ease',
  };

  const bodyStyle: CSSProperties = {
    padding: '24px',
    color: '#c8c8d4',
    fontFamily: "'Georgia', serif",
    lineHeight: 1.6,
  };

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={panelStyle} onClick={(e) => e.stopPropagation()}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>{title}</h2>
          <button
            style={closeButtonStyle}
            onClick={onClose}
            onMouseEnter={() => setCloseHovered(true)}
            onMouseLeave={() => setCloseHovered(false)}
          >
            ✕
          </button>
        </div>
        <div style={bodyStyle}>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
