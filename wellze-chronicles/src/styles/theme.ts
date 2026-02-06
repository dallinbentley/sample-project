export interface Theme {
  colors: {
    bg: string;
    bgCard: string;
    bgHover: string;
    gold: string;
    goldLight: string;
    crystalBlue: string;
    purple: string;
    danger: string;
    success: string;
    text: string;
    textMuted: string;
    border: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
  borderRadius: {
    sm: number;
    md: number;
    lg: number;
    round: number;
  };
  shadows: {
    glow: string;
    crystalGlow: string;
    subtle: string;
  };
}

const theme: Theme = {
  colors: {
    bg: '#0a0a1a',
    bgCard: '#1a1a2e',
    bgHover: '#2a2a4e',
    gold: '#d4a574',
    goldLight: '#e8c99b',
    crystalBlue: '#4fc3f7',
    purple: '#9c27b0',
    danger: '#ef5350',
    success: '#66bb6a',
    text: '#e0d5c1',
    textMuted: '#8a8070',
    border: '#2a2a4e',
  },
  fonts: {
    heading: 'Georgia, serif',
    body: 'system-ui, sans-serif',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 16,
    round: 999,
  },
  shadows: {
    glow: '0 0 15px rgba(212, 165, 116, 0.4), 0 0 30px rgba(212, 165, 116, 0.2)',
    crystalGlow: '0 0 15px rgba(79, 195, 247, 0.4), 0 0 30px rgba(79, 195, 247, 0.2)',
    subtle: '0 2px 8px rgba(0, 0, 0, 0.4)',
  },
};

export default theme;
