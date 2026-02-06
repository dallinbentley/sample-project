import ArtifactGallery from '../components/artifacts/ArtifactGallery';

export default function Artifacts() {
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
          Artifacts of Power
        </h1>
        <p style={{ fontSize: 18, color: '#a0a0c0', marginTop: 16, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
          Relics of immense magical potency, scattered across the realms of Wellze
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
          Throughout the ages, the crystal magic of Wellze has been channeled, condensed, and bound into
          objects of extraordinary power. Some were forged deliberately by master artificers; others formed
          spontaneously at sites of great magical convergence. These artifacts carry the echoes of the ages
          within them — the resonance of the Prime Crystal, the fury of the Schism, and the desperate hope
          of the Restoration. Many remain hidden, waiting in forgotten ruins and sealed vaults for those
          bold or foolish enough to seek them.
        </p>
      </section>

      {/* Artifact Gallery */}
      <section style={{ marginBottom: 60 }}>
        <ArtifactGallery />
      </section>

      {/* Danger Warning */}
      <section
        style={{
          background: 'rgba(255, 87, 34, 0.06)',
          border: '2px solid rgba(255, 87, 34, 0.5)',
          borderRadius: 10,
          padding: '24px 28px',
          display: 'flex',
          gap: 16,
          alignItems: 'flex-start',
        }}
      >
        <div
          style={{
            fontSize: 32,
            lineHeight: 1,
            flexShrink: 0,
            marginTop: 2,
          }}
        >
          ⚠
        </div>
        <div>
          <div
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: '#ff7043',
              marginBottom: 8,
              textTransform: 'uppercase',
              letterSpacing: 2,
            }}
          >
            Warning
          </div>
          <p style={{ margin: 0, color: '#e0a090', fontSize: 15, lineHeight: 1.7 }}>
            Handling artifacts without proper training may result in crystallization, temporal displacement,
            or spontaneous combustion. The Wellzian Artificers' Guild assumes no liability for injuries,
            dimensional shifts, or existential crises resulting from unauthorized artifact interaction.
          </p>
        </div>
      </section>
    </div>
  );
}
