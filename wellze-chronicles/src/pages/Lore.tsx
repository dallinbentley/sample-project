import LoreBook from '../components/lore/LoreBook';
import QuestBoard from '../components/widgets/QuestBoard';

export default function Lore() {
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
          The Great Lore Book of Wellze
        </h1>
        <p style={{ fontSize: 18, color: '#a0a0c0', marginTop: 16, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
          Collected wisdom, forbidden knowledge, and the oral traditions of a thousand generations
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
          The Lore Book is the collective memory of Wellze — a living document maintained by generations
          of scholars, seers, and chroniclers. Within its pages you will find accounts of the crystal
          magic system, the political structures of each age, the philosophies of the great mages, and
          the folk tales whispered around hearthfires in every corner of the realm. Some entries are
          well-attested historical record; others are myth, rumor, or deliberate misinformation planted
          by long-dead spymasters. Discerning which is which is left as an exercise for the reader.
        </p>
      </section>

      {/* Lore Book */}
      <section style={{ marginBottom: 60 }}>
        <LoreBook />
      </section>

      {/* Quest Board */}
      <section>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <div style={{ fontSize: 24, color: '#d4a574', letterSpacing: 8, opacity: 0.7, marginBottom: 20 }}>
            ── ✦ ──
          </div>
          <h2
            style={{
              fontSize: 28,
              color: '#d4a574',
              textShadow: '0 0 10px rgba(212, 165, 116, 0.3)',
              margin: '0 0 8px',
            }}
          >
            Active Quests
          </h2>
          <p style={{ color: '#a0a0c0', fontSize: 15, margin: 0 }}>
            Tasks and mysteries awaiting brave adventurers
          </p>
        </div>
        <QuestBoard />
      </section>
    </div>
  );
}
