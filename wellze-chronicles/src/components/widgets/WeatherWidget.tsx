import { useState, type CSSProperties } from 'react';

interface RegionWeather {
  condition: string;
  tempRange: [number, number];
  description: string;
  bgGradient: string;
}

const regionWeatherMap: Record<string, RegionWeather> = {
  'Crystal Peaks': {
    condition: 'Crystal Snow \u2744\uFE0F\u2728',
    tempRange: [-15, 5],
    description:
      'Shimmering ice crystals drift lazily through the air, refracting light into rainbow prisms. The peaks hum softly with arcane resonance.',
    bgGradient: 'linear-gradient(135deg, #1a1a3e 0%, #2a3a5e 50%, #4fc3f7 100%)',
  },
  'Verdant Hollows': {
    condition: 'Enchanted Rain \uD83C\uDF27\uFE0F\uD83D\uDD2E',
    tempRange: [15, 28],
    description:
      'Warm rain infused with nature magic falls in golden droplets. The ancient trees drink deeply and their leaves glow a gentle emerald.',
    bgGradient: 'linear-gradient(135deg, #1a2e1a 0%, #2e4a2e 50%, #4caf50 100%)',
  },
  'Obsidian Wastes': {
    condition: 'Volcanic Ash Storm \uD83C\uDF0B',
    tempRange: [40, 72],
    description:
      'Scorching winds carry clouds of black ash across the blasted landscape. Rivers of lava pulse beneath cracked obsidian plains.',
    bgGradient: 'linear-gradient(135deg, #1a0a0a 0%, #4a1a0a 50%, #ff5722 100%)',
  },
  'Azure Coast': {
    condition: 'Sea Breeze \u2600\uFE0F\uD83C\uDF0A',
    tempRange: [22, 35],
    description:
      'A gentle ocean breeze carries the salt-sweet scent of tidebloom flowers. The waters shimmer in impossible shades of blue and turquoise.',
    bgGradient: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a5e 50%, #00bcd4 100%)',
  },
  'Whispering Woods': {
    condition: 'Whispering Mist \uD83C\uDF2B\uFE0F\uD83C\uDF43',
    tempRange: [8, 18],
    description:
      'A sentient fog weaves between the ancient trunks, carrying fragments of forgotten conversations. The trees murmur secrets to those who listen.',
    bgGradient: 'linear-gradient(135deg, #1a1a2e 0%, #2e2e4a 50%, #9c27b0 100%)',
  },
  'Thornveil Marshes': {
    condition: 'Toxic Fog \u2620\uFE0F\uD83C\uDF2B\uFE0F',
    tempRange: [18, 30],
    description:
      'Thick greenish fog oozes from the swamp, carrying the faint scent of decay and strange phosphorescent spores that glow in the gloom.',
    bgGradient: 'linear-gradient(135deg, #0a1a0a 0%, #1a2e1a 50%, #8bc34a 100%)',
  },
};

const regions = Object.keys(regionWeatherMap);

function getTemperature(range: [number, number]): number {
  return Math.floor(range[0] + Math.random() * (range[1] - range[0]));
}

function WeatherWidget() {
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);
  const [transitioning, setTransitioning] = useState(false);

  const weather = regionWeatherMap[selectedRegion];
  const temp = getTemperature(weather.tempRange);

  const handleRegionChange = (region: string) => {
    setTransitioning(true);
    setTimeout(() => {
      setSelectedRegion(region);
      setTransitioning(false);
    }, 300);
  };

  const containerStyle: CSSProperties = {
    backgroundColor: '#0a0a1a',
    border: '1px solid #2a2a4e',
    borderRadius: '12px',
    padding: '24px',
    fontFamily: "'Georgia', serif",
    maxWidth: '420px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
  };

  const headerStyle: CSSProperties = {
    color: '#d4a574',
    fontSize: '1.3rem',
    marginTop: 0,
    marginBottom: '16px',
    letterSpacing: '1px',
    textAlign: 'center',
    borderBottom: '1px solid #2a2a4e',
    paddingBottom: '12px',
  };

  const selectStyle: CSSProperties = {
    width: '100%',
    padding: '10px 14px',
    backgroundColor: '#1a1a2e',
    color: '#c8c8d4',
    border: '1px solid #3a3a5e',
    borderRadius: '8px',
    fontFamily: "'Georgia', serif",
    fontSize: '0.95rem',
    cursor: 'pointer',
    outline: 'none',
    marginBottom: '16px',
  };

  const weatherDisplayStyle: CSSProperties = {
    background: weather.bgGradient,
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    opacity: transitioning ? 0 : 1,
    transform: transitioning ? 'scale(0.95)' : 'scale(1)',
  };

  const conditionStyle: CSSProperties = {
    fontSize: '1.5rem',
    color: '#ffffff',
    marginBottom: '8px',
    fontWeight: 'bold',
  };

  const tempStyle: CSSProperties = {
    fontSize: '2.5rem',
    color: '#d4a574',
    fontWeight: 'bold',
    margin: '12px 0',
    textShadow: '0 0 10px rgba(212, 165, 116, 0.5)',
  };

  const tempLabelStyle: CSSProperties = {
    fontSize: '0.85rem',
    color: '#a0a0b8',
    marginBottom: '12px',
  };

  const descriptionStyle: CSSProperties = {
    fontSize: '0.9rem',
    color: '#c8c8d4',
    lineHeight: 1.6,
    fontStyle: 'italic',
  };

  return (
    <div style={containerStyle}>
      <h3 style={headerStyle}>Wellzian Weather Oracle</h3>
      <select
        style={selectStyle}
        value={selectedRegion}
        onChange={(e) => handleRegionChange(e.target.value)}
      >
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
      <div style={weatherDisplayStyle}>
        <div style={conditionStyle}>{weather.condition}</div>
        <div style={tempStyle}>{temp}\u00B0W</div>
        <div style={tempLabelStyle}>Wellzian Degrees</div>
        <div style={descriptionStyle}>{weather.description}</div>
      </div>
    </div>
  );
}

export default WeatherWidget;
