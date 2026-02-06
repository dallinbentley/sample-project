import { useState, type CSSProperties } from 'react';
import type { Quest } from '../../types';
import { quests } from '../../data/quests';

type DifficultyFilter = 'all' | 1 | 2 | 3 | 4 | 5;

function QuestBoard() {
  const [questStates, setQuestStates] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(quests.map((q) => [q.id, q.isComplete])),
  );
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyFilter>('all');
  const [hoveredQuest, setHoveredQuest] = useState<string | null>(null);

  const toggleQuest = (id: string) => {
    setQuestStates((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredQuests = quests.filter(
    (q) => difficultyFilter === 'all' || q.difficulty === difficultyFilter,
  );

  const completedCount = Object.values(questStates).filter(Boolean).length;
  const totalCount = quests.length;

  const containerStyle: CSSProperties = {
    backgroundColor: '#0a0a1a',
    border: '1px solid #2a2a4e',
    borderRadius: '12px',
    padding: '24px',
    fontFamily: "'Georgia', serif",
    maxWidth: '520px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
  };

  const headerStyle: CSSProperties = {
    color: '#d4a574',
    fontSize: '1.3rem',
    marginTop: 0,
    marginBottom: '4px',
    letterSpacing: '1px',
    textAlign: 'center',
  };

  const counterStyle: CSSProperties = {
    color: '#a0a0b8',
    fontSize: '0.85rem',
    textAlign: 'center',
    marginBottom: '16px',
    paddingBottom: '12px',
    borderBottom: '1px solid #2a2a4e',
  };

  const filterBarStyle: CSSProperties = {
    display: 'flex',
    gap: '6px',
    justifyContent: 'center',
    marginBottom: '16px',
    flexWrap: 'wrap',
  };

  const filterButtonStyle = (active: boolean): CSSProperties => ({
    backgroundColor: active ? '#2a1a3e' : '#1a1a2e',
    color: active ? '#d4a574' : '#6a6a8e',
    border: `1px solid ${active ? '#d4a574' : '#2a2a4e'}`,
    borderRadius: '6px',
    padding: '6px 12px',
    fontFamily: "'Georgia', serif",
    fontSize: '0.8rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  });

  const questCardStyle = (quest: Quest, isComplete: boolean, isHovered: boolean): CSSProperties => ({
    backgroundColor: isHovered ? '#1e1e38' : '#1a1a2e',
    border: `1px solid ${isComplete ? '#4caf5060' : '#2a2a4e'}`,
    borderRadius: '10px',
    padding: '16px',
    marginBottom: '10px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    opacity: isComplete ? 0.7 : 1,
    transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
    borderLeft: `3px solid ${isComplete ? '#4caf50' : getDifficultyColor(quest.difficulty)}`,
  });

  const questTitleStyle = (isComplete: boolean): CSSProperties => ({
    color: isComplete ? '#6a8a6a' : '#c9a96e',
    fontSize: '1.05rem',
    fontWeight: 'bold',
    marginBottom: '6px',
    textDecoration: isComplete ? 'line-through' : 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  });

  const questDescStyle: CSSProperties = {
    color: '#8a8aa8',
    fontSize: '0.85rem',
    lineHeight: 1.5,
    marginBottom: '10px',
  };

  const questMetaStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '6px',
  };

  const tagStyle = (color: string): CSSProperties => ({
    backgroundColor: `${color}20`,
    color,
    border: `1px solid ${color}40`,
    borderRadius: '4px',
    padding: '2px 8px',
    fontSize: '0.75rem',
  });

  const emptyStyle: CSSProperties = {
    color: '#4a4a6e',
    textAlign: 'center',
    padding: '24px',
    fontStyle: 'italic',
  };

  return (
    <div style={containerStyle}>
      <h3 style={headerStyle}>Quest Board</h3>
      <div style={counterStyle}>
        {completedCount}/{totalCount} Quests Completed
      </div>
      <div style={filterBarStyle}>
        <button
          style={filterButtonStyle(difficultyFilter === 'all')}
          onClick={() => setDifficultyFilter('all')}
        >
          All
        </button>
        {[1, 2, 3, 4, 5].map((d) => (
          <button
            key={d}
            style={filterButtonStyle(difficultyFilter === d)}
            onClick={() => setDifficultyFilter(d as DifficultyFilter)}
          >
            {'\u2694\uFE0F'.repeat(d)}
          </button>
        ))}
      </div>
      <div>
        {filteredQuests.length === 0 ? (
          <div style={emptyStyle}>No quests match this difficulty level.</div>
        ) : (
          filteredQuests.map((quest) => {
            const isComplete = questStates[quest.id] || false;
            const isHovered = hoveredQuest === quest.id;
            return (
              <div
                key={quest.id}
                style={questCardStyle(quest, isComplete, isHovered)}
                onClick={() => toggleQuest(quest.id)}
                onMouseEnter={() => setHoveredQuest(quest.id)}
                onMouseLeave={() => setHoveredQuest(null)}
              >
                <div style={questTitleStyle(isComplete)}>
                  {isComplete && <span>\u2705</span>}
                  {quest.title}
                </div>
                <div style={questDescStyle}>{quest.description}</div>
                <div style={questMetaStyle}>
                  <span style={tagStyle('#4fc3f7')}>{quest.region}</span>
                  <span style={tagStyle(getDifficultyColor(quest.difficulty))}>
                    {'\u2694\uFE0F'.repeat(quest.difficulty)}
                  </span>
                  <span style={tagStyle('#d4a574')}>{quest.reward}</span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

function getDifficultyColor(difficulty: number): string {
  const colors: Record<number, string> = {
    1: '#4caf50',
    2: '#8bc34a',
    3: '#ff9800',
    4: '#ff5722',
    5: '#f44336',
  };
  return colors[difficulty] || '#d4a574';
}

export default QuestBoard;
