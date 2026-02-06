import { useState, type CSSProperties } from 'react';
import type { LoreEntry as LoreEntryType, LoreCategory } from '../../types';
import { lore } from '../../data/lore';
import LoreEntry from './LoreEntry';
import LoreCategoryFilter from './LoreCategory';

const categories: (LoreCategory | null)[] = [null, 'myth', 'history', 'prophecy', 'legend', 'spell'];

const categoryLabels: Record<string, string> = {
  myth: 'Myths',
  history: 'History',
  prophecy: 'Prophecies',
  legend: 'Legends',
  spell: 'Spells',
};

function LoreBook() {
  const [selectedCategory, setSelectedCategory] = useState<LoreCategory | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredLore = lore.filter((entry) => {
    if (selectedCategory && entry.category !== selectedCategory) return false;
    return true;
  });

  const getCategoryCount = (cat: LoreCategory | null): number => {
    if (!cat) return lore.length;
    return lore.filter((e) => e.category === cat).length;
  };

  const containerStyle: CSSProperties = {
    padding: '40px 20px',
    maxWidth: '1000px',
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

  const layoutStyle: CSSProperties = {
    display: 'flex',
    gap: '24px',
    alignItems: 'flex-start',
  };

  const sidebarStyle: CSSProperties = {
    width: '200px',
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  };

  const sidebarTitleStyle: CSSProperties = {
    color: '#d4a574',
    fontSize: '0.9rem',
    marginBottom: '12px',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    borderBottom: '1px solid #2a2a4e',
    paddingBottom: '8px',
  };

  const contentAreaStyle: CSSProperties = {
    flex: 1,
    minHeight: '400px',
    padding: '24px',
    backgroundColor: '#2a2a1e',
    border: '1px solid #3a3a2e',
    borderRadius: '10px',
    boxShadow: 'inset 0 0 30px rgba(0, 0, 0, 0.3)',
  };

  const emptyStyle: CSSProperties = {
    textAlign: 'center',
    color: '#8888aa',
    padding: '60px 20px',
    fontSize: '1.1rem',
  };

  const entriesStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Lore Book of Wellze</h1>
      <p style={subtitleStyle}>Ancient knowledge preserved through the ages</p>

      <div style={layoutStyle}>
        <div style={sidebarStyle}>
          <h4 style={sidebarTitleStyle}>Categories</h4>
          {categories.map((cat) => (
            <LoreCategoryFilter
              key={cat ?? 'all'}
              category={cat ? categoryLabels[cat] : 'All'}
              isActive={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
              count={getCategoryCount(cat)}
            />
          ))}
        </div>

        <div style={contentAreaStyle}>
          {filteredLore.length === 0 ? (
            <div style={emptyStyle}>No lore entries found in this category.</div>
          ) : (
            <div style={entriesStyle}>
              {filteredLore.map((entry: LoreEntryType) => (
                <LoreEntry
                  key={entry.id}
                  entry={entry}
                  isExpanded={expandedId === entry.id}
                  onToggle={() =>
                    setExpandedId(expandedId === entry.id ? null : entry.id)
                  }
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoreBook;
