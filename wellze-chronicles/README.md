import CharacterList from '../components/characters/CharacterList';
import RuneTranslator from '../components/widgets/RuneTranslator';

export default function Characters() {
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
          Heroes & Villains of Wellze
        </h1>
        <p style={{ fontSize: 18, color: '#a0a0c0', marginTop: 16, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
          The notable figures whose deeds echoed across the ages — from legendary champions to feared tyrants
        </p>
        <div style={{ fontSize: 24, color: '#d4a574', margin: '24px 0 0', letterSpacing: 8, opacity: 0.7 }}>
          ── ✦ ──
        </div>
      </section>

      {/* Character List */}
      <section style={{ marginBottom: 60 }}>
        <CharacterList />
      </section>

      {/* Rune Translator */}
      <section
        style={{
          background: 'linear-gradient(135deg, #1a1a2e, #0f0f24)',
          border: '1px solid rgba(79, 195, 247, 0.2)',
          borderRadius: 10,
          padding: '32px',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: 24,
            color: '#4fc3f7',
            textShadow: '0 0 10px rgba(79, 195, 247, 0.3)',
            margin: '0 0 8px',
          }}
        >
          Ancient Wellzian Script
        </h2>
        <p style={{ color: '#a0a0c0', fontSize: 15, marginBottom: 24 }}>
          Translate your name to Ancient Wellzian and discover your runic identity
        </p>
        <RuneTranslator />
      </section>
    </div>
  );
}
