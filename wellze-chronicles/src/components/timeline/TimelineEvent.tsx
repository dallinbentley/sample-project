import { useState, type CSSProperties } from 'react';
import type { TimelineEvent as TimelineEventType } from '../../types';
import Card from '../common/Card';

interface TimelineEventProps {
  event: TimelineEventType;
  side: 'left' | 'right';
}

const significanceColors: Record<string, { glow: string; dot: string; border: string }> = {
  legendary: {
    glow: '0 0 12px rgba(212, 165, 116, 0.6), 0 0 24px rgba(212, 165, 116, 0.3)',
    dot: '#d4a574',
    border: '#d4a574',
  },
  major: {
    glow: '0 0 10px rgba(79, 195, 247, 0.5), 0 0 20px rgba(79, 195, 247, 0.2)',
    dot: '#4fc3f7',
    border: '#4fc3f7',
  },
  minor: {
    glow: 'none',
    dot: '#555577',
    border: '#2a2a4e',
  },
};

function TimelineEvent({ event, side }: TimelineEventProps) {
  const [hovered, setHovered] = useState(false);

  const colors = significanceColors[event.significance];

  const rowStyle: CSSProperties = {
    display: 'flex',
    justifyContent: side === 'left' ? 'flex-start' : 'flex-end',
    alignItems: 'center',
    marginBottom: '32px',
    position: 'relative',
  };

  const cardWrapperStyle: CSSProperties = {
    width: '42%',
    transform: hovered ? 'scale(1.03)' : 'scale(1)',
    transition: 'transform 0.3s ease',
  };

  const dotStyle: CSSProperties = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    backgroundColor: colors.dot,
    border: `3px solid ${colors.border}`,
    boxShadow: colors.glow,
    zIndex: 2,
  };

  const yearBadgeStyle: CSSProperties = {
    display: 'inline-block',
    padding: '2px 10px',
    backgroundColor: 'rgba(212, 165, 116, 0.15)',
    border: '1px solid #d4a57444',
    borderRadius: '12px',
    color: '#c9a96e',
    fontSize: '0.8rem',
    marginBottom: '8px',
    letterSpacing: '0.5px',
  };

  const ageBadgeStyle: CSSProperties = {
    display: 'inline-block',
    padding: '2px 8px',
    backgroundColor: 'rgba(79, 195, 247, 0.1)',
    border: '1px solid #4fc3f733',
    borderRadius: '12px',
    color: '#4fc3f7',
    fontSize: '0.75rem',
    marginLeft: '8px',
  };

  const descriptionStyle: CSSProperties = {
    color: '#9999bb',
    fontSize: '0.9rem',
    lineHeight: 1.6,
    marginTop: '8px',
  };

  return (
    <div
      style={rowStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={dotStyle} />

      <div style={cardWrapperStyle}>
        <Card glowing={event.significance === 'legendary'}>
          <div>
            <span style={yearBadgeStyle}>Year {event.year}</span>
            <span style={ageBadgeStyle}>{event.age}</span>
          </div>
          <h3
            style={{
              color: colors.border,
              margin: '10px 0 4px',
              fontSize: '1.05rem',
              fontFamily: "'Georgia', serif",
            }}
          >
            {event.title}
          </h3>
          <p style={descriptionStyle}>{event.description}</p>
        </Card>
      </div>
    </div>
  );
}

export default TimelineEvent;
