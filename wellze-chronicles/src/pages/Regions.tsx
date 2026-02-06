import WorldMap from '../components/map/WorldMap';
import WeatherWidget from '../components/widgets/WeatherWidget';

export default function Regions() {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
      {/* Page Header */}
      <section style={{ textAlign: 'center', marginBottom: 48 }}>
        <h1
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: '#d4a574',
            textShadow: '0 0 20px rgba(212, 165, 116, 0.5), 0 0 40px rgba(212, 165, 116, 0.2)',
            margin: 0,
            letterSpacing: 2,
          }}
        >
          Realms of Wellze
        </h1>
        <p style={{ fontSize: 18, color: '#a0a0c0', marginTop: 16, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
          Six distinct realms, each shaped by the primal forces of crystal magic
        </p>
        <div style={{ fontSize: 24, color: '#d4a574', margin: '24px 0 0', letterSpacing: 8, opacity: 0.7 }}>
          ── ✦ ──
        </div>
      </section>

      {/* World Map */}
      <section style={{ marginBottom: 48 }}>
        <WorldMap />
      </section>

      {/* Weather Widget */}
      <section style={{ marginBottom: 48, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
        <h2
          style={{
            fontSize: 24,
            color: '#d4a574',
            textShadow: '0 0 10px rgba(212, 165, 116, 0.3)',
            textAlign: 'center',
            marginBottom: 20,
          }}
        >
          Current Regional Conditions
        </h2>
        <WeatherWidget />
      </section>

      {/* Age of Dawn Description */}
      <section
        style={{
          background: 'linear-gradient(135deg, #1a1a2e, #0f0f24)',
          border: '1px solid rgba(212, 165, 116, 0.2)',
          borderRadius: 10,
          padding: '32px',
        }}
      >
        <h2
          style={{
            fontSize: 24,
            color: '#d4a574',
            textShadow: '0 0 10px rgba(212, 165, 116, 0.3)',
            margin: '0 0 16px',
          }}
        >
          The Shaping of the Realms
        </h2>
        <div style={{ color: '#c0c0d8', fontSize: 16, lineHeight: 1.8 }}>
          <p style={{ margin: '0 0 16px' }}>
            During the Age of Dawn, the raw forces of crystal magic surged through the bedrock of the world,
            carving valleys, raising mountain ranges, and flooding basins with luminous waters. The six regions
            of Wellze were not drawn by mortal hands — they were sculpted by the resonance patterns of the
            Prime Crystal itself, each realm attuned to a different harmonic frequency.
          </p>
          <p style={{ margin: '0 0 16px' }}>
            The Crystalspire Peaks formed where the highest-frequency vibrations shattered stone into towering
            crystalline formations. The Shadowmere Marshes pooled in the low-frequency dampening zones, where
            magic moves sluggishly and the air hangs thick with mist. Between these extremes, the Verdant
            Heartlands, Ashen Wastes, Frozen Reaches, and Celestial Shores each took shape according to their
            unique harmonic signatures.
          </p>
          <p style={{ margin: 0 }}>
            To this day, the borders between regions are not merely geographic — they are magical boundaries
            where one frequency gives way to another, sometimes causing strange phenomena at the crossings.
          </p>
        </div>
      </section>
    </div>
  );
}
