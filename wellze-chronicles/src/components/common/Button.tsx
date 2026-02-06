import { useState, type ReactNode, type CSSProperties } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
  disabled?: boolean;
  size?: ButtonSize;
}

const variantColors: Record<ButtonVariant, { bg: string; border: string; glow: string; text: string }> = {
  primary: { bg: '#d4a574', border: '#c9a96e', glow: 'rgba(212, 165, 116, 0.6)', text: '#0a0a1a' },
  secondary: { bg: '#4fc3f7', border: '#4fc3f7', glow: 'rgba(79, 195, 247, 0.6)', text: '#0a0a1a' },
  danger: { bg: '#e53935', border: '#e53935', glow: 'rgba(229, 57, 53, 0.6)', text: '#fff' },
  ghost: { bg: 'transparent', border: '#2a2a4e', glow: 'rgba(212, 165, 116, 0.3)', text: '#d4a574' },
};

const sizePadding: Record<ButtonSize, string> = {
  sm: '6px 14px',
  md: '10px 22px',
  lg: '14px 32px',
};

const sizeFontSize: Record<ButtonSize, string> = {
  sm: '0.8rem',
  md: '0.95rem',
  lg: '1.1rem',
};

function Button({ children, variant = 'primary', onClick, disabled = false, size = 'md' }: ButtonProps) {
  const [hovered, setHovered] = useState(false);

  const colors = variantColors[variant];

  const baseStyle: CSSProperties = {
    padding: sizePadding[size],
    fontSize: sizeFontSize[size],
    fontFamily: "'Georgia', serif",
    fontWeight: 600,
    color: colors.text,
    backgroundColor: colors.bg,
    border: `1px solid ${colors.border}`,
    borderRadius: '6px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'all 0.3s ease',
    letterSpacing: '0.5px',
    boxShadow: hovered && !disabled ? `0 0 12px ${colors.glow}, 0 0 24px ${colors.glow}` : 'none',
    transform: hovered && !disabled ? 'translateY(-1px)' : 'none',
  };

  return (
    <button
      style={baseStyle}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </button>
  );
}

export default Button;
