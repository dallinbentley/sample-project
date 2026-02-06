export type Age =
  | 'Age of Dawn'
  | 'Age of Crystals'
  | 'Age of Kingdoms'
  | 'Age of Shadows'
  | 'Age of Renewal';

export type Significance = 'major' | 'minor' | 'legendary';

export type Element = 'fire' | 'water' | 'earth' | 'air' | 'void' | 'light';

export type LoreCategory = 'myth' | 'history' | 'prophecy' | 'legend' | 'spell';

export interface TimelineEvent {
  id: string;
  year: number;
  age: Age;
  title: string;
  description: string;
  significance: Significance;
}

export interface Region {
  id: string;
  name: string;
  description: string;
  climate: string;
  population: number;
  dangerLevel: number;
  color: string;
  landmarks: string[];
}

export interface Character {
  id: string;
  name: string;
  title: string;
  region: string;
  era: Age;
  description: string;
  abilities: string[];
  allegiance: string;
  isAlive: boolean;
  portraitEmoji: string;
}

export interface Artifact {
  id: string;
  name: string;
  origin: string;
  power: string;
  description: string;
  dangerLevel: number;
  currentLocation: string;
  isLost: boolean;
  element: Element;
}

export interface LoreEntry {
  id: string;
  category: LoreCategory;
  title: string;
  content: string;
  relatedCharacters: string[];
  era: Age;
}

export interface Quest {
  id: string;
  title: string;
  description: string;
  difficulty: number;
  reward: string;
  isComplete: boolean;
  region: string;
}
