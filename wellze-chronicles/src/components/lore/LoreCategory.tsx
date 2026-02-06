import { type CSSProperties } from 'react';
import Button from '../common/Button';

interface LoreCategoryProps {
  category: string;
  isActive: boolean;
  onClick: () => void;
  count: number;
}

function LoreCategory({ category, isActive, onClick, count }: LoreCategoryProps) {
  const wrapperStyle: CSSProperties = {
    width: '100%',
  };

  const innerStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    gap: '8px',
  };

  const countBadgeStyle: CSSProperties = {
    display: 'inline-block',
    minWidth: '20px',
    padding: '1px 6px',
    backgroundColor: isActive ? 'rgba(10, 10, 26, 0.4)' : 'rgba(212, 165, 116, 0.1)',
    borderRadius: '10px',
    fontSize: '0.7rem',
    textAlign: 'center',
    color: isActive ? '#0a0a1a' : '#8888aa',
  };

  return (
    <div style={wrapperStyle}>
      <Button
        variant={isActive ? 'primary' : 'ghost'}
        size="sm"
        onClick={onClick}
      >
        <span style={innerStyle}>
          <span>{category}</span>
          <span style={countBadgeStyle}>{count}</span>
        </span>
      </Button>
    </div>
  );
}

export default LoreCategory;
