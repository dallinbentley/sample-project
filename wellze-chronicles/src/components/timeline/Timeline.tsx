import { useState, type CSSProperties } from 'react';
import type { TimelineEvent as TimelineEventType, Age, Significance } from '../../types';
import { timeline } from '../../data/timeline';
import TimelineEvent from './TimelineEvent';
import TimelineFilter from './TimelineFilter';

function Timeline() {
  const [selectedAge, setSelectedAge] = useState<Age | null>(null);
  const [selectedSignificance, setSelectedSignificance] = useState<Significance | null>(null);

  const filteredEvents = timeline.filter((event) => {
    if (selectedAge && event.age !== selectedAge) return false;
    if (selectedSignificance && event.significance !== selectedSignificance) return false;
    return true;
  });

  const containerStyle: CSSProperties = {
    padding: '40px 20px',
    maxWidth: '900px',
    margin: '0 auto',
    fontFamily: "'Georgia', serif",
  };

  const titleStyle: CSSProperties = {
    textAlign: 'center',
    color: '#d4a574',
    fontSize: '2rem',
    marginBottom: '8px',
    letterSpacing: '1px',
  };

  const subtitleStyle: CSSProperties = {
    textAlign: 'center',
    color: '#8888aa',
    fontSize: '0.95rem',
    marginBottom: '32px',
  };

  const timelineWrapperStyle: CSSProperties = {
    position: 'relative',
    paddingTop: '20px',
  };

  const lineStyle: CSSProperties = {
    position: 'absolute',
    left: '50%',
    top: 0,
    bottom: 0,
    width: '4px',
    transform: 'translateX(-50%)',
    background: 'linear-gradient(180deg, #d4a574 0%, #c9a96e 40%, #d4a574 70%, #c9a96e 100%)',
    borderRadius: '2px',
    boxShadow: '0 0 8px rgba(212, 165, 116, 0.4), 0 0 16px rgba(212, 165, 116, 0.2)',
  };

  const eventsStyle: CSSProperties = {
    position: 'relative',
    zIndex: 1,
  };

  const emptyStyle: CSSProperties = {
    textAlign: 'center',
    color: '#8888aa',
    padding: '60px 20px',
    fontSize: '1.1rem',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Timeline of Wellze</h1>
      <p style={subtitleStyle}>A chronicle of ages past and present</p>

      <TimelineFilter
        selectedAge={selectedAge}
        onAgeChange={setSelectedAge}
        selectedSignificance={selectedSignificance}
        onSignificanceChange={setSelectedSignificance}
      />

      <div style={timelineWrapperStyle}>
        <div style={lineStyle} />
        <div style={eventsStyle}>
          {filteredEvents.length === 0 ? (
            <div style={emptyStyle}>No events match the selected filters.</div>
          ) : (
            filteredEvents.map((event: TimelineEventType, index: number) => (
              <TimelineEvent
                key={event.id}
                event={event}
                side={index % 2 === 0 ? 'left' : 'right'}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
