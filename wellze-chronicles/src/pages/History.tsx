import Timeline from '../components/timeline/Timeline';

const funFacts = [
  'The Age of Dawn lasted over 3,000 years — longer than all other ages combined.',
  'The Crystal Schism was triggered by a single miscast spell from Archmage Velorath, shattering the Prime Crystal into seven shards.',
  'During the Age of Twilight, the sun did not fully set for 47 consecutive days, an event still unexplained by modern Wellzian scholars.',
  'The runic alphabet used by early Wellzians contained 64 symbols, each corresponding to a different harmonic frequency of crystal resonance.',
];

export default function History() {
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
          The Ages of Wellze
        </h1>
        <p style={{ fontSize: 18, color: '#a0a0c0', marginTop: 16, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
          A chronicle of time itself — from the first spark of crystal magic to the present day
        </p>
        <div style={{ fontSize: 24, color: '#d4a574', margin: '24px 0 0', letterSpacing: 8, opacity: 0.7 }}>
          ── ✦ ──
        </div>
      </section>

      {/* Intro */}
      <section
        style={{
          background: '#1a1a2e',
          border: '1px solid rgba(212, 165, 116, 0.2)',
          borderRadius: 10,
          padding: '28px 32px',
          marginBottom: 48,
          lineHeight: 1.8,
          color: '#c0c0d8',
          fontSize: 16,
        }}
      >
        <p style={{ margin: 0 }}>
          The history of Wellze is divided into five great ages, each defined by the rise and fall of
          crystal magic, the forging of alliances, and the deeds of extraordinary individuals. From the
          primordial Age of Dawn — when the land itself was shaped by raw magical forces — through the
          cataclysmic Crystal Schism, the turbulent Age of Conflict, the hopeful Restoration, and into the
          uncertain present of the Age of Twilight, Wellze's story is one of resilience, wonder, and
          ever-shifting destiny.
        </p>
      </section>

      {/* Timeline */}
      <section style={{ marginBottom: 60 }}>
        <Timeline />
      </section>

      {/* Fun Facts */}
      <section
        style={{
          background: 'linear-gradient(135deg, #1a1a2e, #0f0f24)',
          border: '1px solid rgba(79, 195, 247, 0.2)',
          borderRadius: 10,
          padding: '32px',
        }}
      >
        <h2
          style={{
            fontSize: 24,
            color: '#4fc3f7',
            textShadow: '0 0 10px rgba(79, 195, 247, 0.3)',
            margin: '0 0 24px',
          }}
        >
          Did You Know?
        </h2>
        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {funFacts.map((fact, i) => (
            <li
              key={i}
              style={{
                padding: '16px 20px',
                background: 'rgba(79, 195, 247, 0.05)',
                borderLeft: '3px solid #4fc3f7',
                borderRadius: '0 8px 8px 0',
                color: '#c0c0d8',
                fontSize: 15,
                lineHeight: 1.6,
              }}
            >
              {fact}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
