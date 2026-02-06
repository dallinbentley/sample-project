import { Link } from 'react-router-dom';
import WeatherWidget from '../components/widgets/WeatherWidget';
import MoonPhaseWidget from '../components/widgets/MoonPhaseWidget';
import DiceRoller from '../components/widgets/DiceRoller';

const stats = [
  { label: 'Ages', value: '5', icon: '⏳' },
  { label: 'Regions', value: '6', icon: '🗺' },
  { label: 'Heroes', value: '10+', icon: '⚔' },
  { label: 'Artifacts', value: '8+', icon: '💎' },
];

const journeyLinks = [
  { to: '/history', label: 'The Ages of Wellze', desc: 'Explore the timeline' },
  { to: '/regions', label: 'Realms & Regions', desc: 'Discover the world' },
  { to: '/characters', label: 'Heroes & Villains', desc: 'Meet the legends' },
  { to: '/artifacts', label: 'Artifacts of Power', desc: 'Uncover relics' },
  { to: '/lore', label: 'The Great Lore Book', desc: 'Read the histories' },
];

export default function Home() {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
      {/* Hero Section */}
      <section
        style={{
          textAlign: 'center',
          padding: '80px 20px',
          background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #0a0a1a 70%)',
          borderRadius: 12,
          border: '1px solid rgba(212, 165, 116, 0.2)',
          marginBottom: 60,
        }}
      >
        <h1
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: '#d4a574',
            textShadow: '0 0 20px rgba(212, 165, 116, 0.6), 0 0 40px rgba(212, 165, 116, 0.3), 0 0 80px rgba(212, 165, 116, 0.1)',
            margin: 0,
            letterSpacing: 4,
            lineHeight: 1.2,
          }}
        >
          Chronicles of Wellze
        </h1>
        <p
          style={{
            fontSize: 20,
            color: '#a0a0c0',
            marginTop: 24,
            maxWidth: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.6,
          }}
        >
          Explore the mystical history of a land where crystal magic shapes destiny
        </p>
        <div
          style={{
            fontSize: 24,
            color: '#d4a574',
            margin: '32px 0',
            letterSpacing: 8,
            opacity: 0.7,
          }}
        >
          ── ✦ ──
        </div>
      </section>

      {/* Quick Stats */}
      <section style={{ marginBottom: 60 }}>
        <h2
          style={{
            textAlign: 'center',
            fontSize: 28,
            color: '#d4a574',
            textShadow: '0 0 10px rgba(212, 165, 116, 0.3)',
            marginBottom: 32,
          }}
        >
          The World at a Glance
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 20,
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              style={{
                background: '#1a1a2e',
                border: '1px solid rgba(212, 165, 116, 0.25)',
                borderRadius: 10,
                padding: '28px 20px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: 36, marginBottom: 8 }}>{stat.icon}</div>
              <div
                style={{
                  fontSize: 36,
                  fontWeight: 700,
                  color: '#4fc3f7',
                  textShadow: '0 0 12px rgba(79, 195, 247, 0.4)',
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: 14, color: '#a0a0c0', marginTop: 6, letterSpacing: 2, textTransform: 'uppercase' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Widgets Row */}
      <section style={{ marginBottom: 60 }}>
        <h2
          style={{
            textAlign: 'center',
            fontSize: 28,
            color: '#d4a574',
            textShadow: '0 0 10px rgba(212, 165, 116, 0.3)',
            marginBottom: 32,
          }}
        >
          Mystical Instruments
        </h2>
        <div
          style={{
            display: 'flex',
            gap: 20,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <div style={{ flex: '1 1 300px', maxWidth: 400 }}>
            <WeatherWidget />
          </div>
          <div style={{ flex: '1 1 300px', maxWidth: 400 }}>
            <MoonPhaseWidget />
          </div>
          <div style={{ flex: '1 1 300px', maxWidth: 400 }}>
            <DiceRoller />
          </div>
        </div>
      </section>

      {/* Begin Your Journey */}
      <section style={{ marginBottom: 40 }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div
            style={{
              fontSize: 24,
              color: '#d4a574',
              letterSpacing: 8,
              opacity: 0.7,
              marginBottom: 24,
            }}
          >
            ── ✦ ──
          </div>
          <h2
            style={{
              fontSize: 28,
              color: '#d4a574',
              textShadow: '0 0 10px rgba(212, 165, 116, 0.3)',
              marginBottom: 8,
            }}
          >
            Begin Your Journey
          </h2>
          <p style={{ color: '#a0a0c0', fontSize: 16 }}>Choose your path through the chronicles</p>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 16,
          }}
        >
          {journeyLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                display: 'block',
                background: '#1a1a2e',
                border: '1px solid rgba(212, 165, 116, 0.25)',
                borderRadius: 10,
                padding: '24px 20px',
                textAlign: 'center',
                textDecoration: 'none',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(212, 165, 116, 0.6)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(212, 165, 116, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(212, 165, 116, 0.25)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ fontSize: 18, fontWeight: 600, color: '#d4a574', marginBottom: 6 }}>
                {link.label}
              </div>
              <div style={{ fontSize: 13, color: '#a0a0c0' }}>{link.desc}</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
