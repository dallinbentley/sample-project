import { useState, type CSSProperties } from 'react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const loreFacts = [
  'The Crystal Spire of Aethon has stood for over 12,000 years, predating every known civilization in Wellze.',
  'The Whispering Tides of Lake Velrun are said to carry the voices of fallen seers from the Age of Fracture.',
  'Shadowmeld ore can only be mined during a lunar eclipse, making it the rarest metal in all the realms.',
  'The Treaty of Five Crowns was signed in invisible ink that only reveals itself under starlight.',
  'Deep beneath the Thornveil Forest, a network of living roots connects every ancient tree in a sentient web.',
  'The legendary Emberheart Phoenix has been reborn exactly 777 times since the First Dawn.',
];

function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const sidebarStyle: CSSProperties = {
    width: isOpen ? '280px' : '0px',
    minWidth: isOpen ? '280px' : '0px',
    backgroundColor: '#0f0f23',
    borderRight: isOpen ? '1px solid #2a2a4e' : 'none',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
  };

  const contentStyle: CSSProperties = {
    padding: isOpen ? '20px' : '0px',
    opacity: isOpen ? 1 : 0,
    transition: 'opacity 0.2s ease',
  };

  const headingStyle: CSSProperties = {
    fontFamily: "'Georgia', serif",
    fontSize: '1rem',
    color: '#4fc3f7',
    marginTop: 0,
    marginBottom: '16px',
    letterSpacing: '1px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  };

  const factStyle = (index: number): CSSProperties => ({
    color: '#c8c8d4',
    fontFamily: "'Georgia', serif",
    fontSize: '0.8rem',
    lineHeight: 1.5,
    padding: '12px',
    marginBottom: '10px',
    backgroundColor: hoveredIndex === index ? '#1a1a2e' : '#12122a',
    borderRadius: '6px',
    borderLeft: '3px solid #4fc3f7',
    transition: 'background-color 0.2s ease',
    cursor: 'default',
  });

  const toggleButtonStyle: CSSProperties = {
    position: 'absolute',
    left: isOpen ? '280px' : '0px',
    top: '80px',
    backgroundColor: '#1a1a2e',
    border: '1px solid #2a2a4e',
    borderLeft: 'none',
    borderRadius: '0 6px 6px 0',
    color: '#4fc3f7',
    padding: '10px 6px',
    cursor: 'pointer',
    fontFamily: "'Georgia', serif",
    fontSize: '0.85rem',
    transition: 'left 0.3s ease',
    zIndex: 50,
    writingMode: 'vertical-rl',
    letterSpacing: '1px',
  };

  return (
    <>
      <button style={toggleButtonStyle} onClick={onToggle}>
        {isOpen ? '< Lore' : 'Lore >'}
      </button>
      <aside style={sidebarStyle}>
        <div style={contentStyle}>
          <h3 style={headingStyle}>
            <span style={{ fontSize: '1rem' }}>&#128302;</span> Quick Lore
          </h3>
          {loreFacts.map((fact, index) => (
            <div
              key={index}
              style={factStyle(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {fact}
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
