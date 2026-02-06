import type { Region } from '../types';

export const regions: Region[] = [
  {
    id: 'reg-001',
    name: 'Crystal Peaks',
    description:
      'Towering mountains shot through with veins of luminous crystal that pulse with arcane energy. The air is thin and charged with static magic, and on clear nights the peaks glow in shifting hues of violet and blue. The Crystal Peaks are home to the oldest schools of magic in Wellze, where scholars study in halls carved directly from living rock.',
    climate: 'Alpine tundra with magical thermal vents that create pockets of unexpected warmth',
    population: 45000,
    dangerLevel: 6,
    color: '#8B5CF6',
    landmarks: [
      'The Resonance Spire - a single crystal column a thousand feet tall that hums with the heartbeat of the earth',
      'Hall of Echoing Truths - an amphitheater where spoken lies shatter into visible sparks',
      'The Frostfire Falls - a waterfall that flows upward, carrying molten crystal to the summit',
    ],
  },
  {
    id: 'reg-002',
    name: 'Verdant Hollows',
    description:
      'An immense basin of ancient forest where the canopy is so thick that permanent twilight reigns on the forest floor. Bioluminescent fungi and flowering vines provide gentle illumination, and the trees are so old that some have developed rudimentary consciousness. Settlements here are built into the trunks and branches of the largest trees.',
    climate: 'Temperate rainforest with perpetual mist and gentle, warm rains',
    population: 82000,
    dangerLevel: 3,
    color: '#10B981',
    landmarks: [
      'The Archive of All Things - a living library encoded in the growth rings of ancient oaks',
      'Elderroot Throne - a natural clearing where the oldest tree in Wellze holds silent court',
      'The Glowmere Pool - a still pond whose waters reflect not the present, but memories of the past',
      'Canopy Market - a sprawling bazaar strung between the treetops on bridges of woven vine',
    ],
  },
  {
    id: 'reg-003',
    name: 'Obsidian Wastes',
    description:
      'A brutal volcanic desert where rivers of magma carve channels through fields of black glass. The ground cracks and shifts unpredictably, and geysers of superheated steam erupt without warning. Despite its hostility, the Wastes are rich in rare minerals and fire-attuned crystals, drawing the hardiest miners and most daring adventurers.',
    climate: 'Extreme arid heat with volcanic activity and toxic gas pockets',
    population: 18000,
    dangerLevel: 9,
    color: '#EF4444',
    landmarks: [
      'The Obsidian Citadel - a ruined fortress of black glass, partially reclaimed after the Shadow War',
      'Embercradle Caldera - an active volcano where fire elementals are said to be born',
      'The Glass Bridge - a natural arch of cooled obsidian spanning a mile-wide lava lake',
      'Ashfall Oasis - the single source of fresh water, fiercely guarded by the Cinderwatch clan',
    ],
  },
  {
    id: 'reg-004',
    name: 'Azure Coast',
    description:
      'A sweeping crescent of white-sand beaches and turquoise waters protected by ancient coral reefs. The Azure Coast enjoys eternal mild weather thanks to the Tide Pact sworn with ocean spirits centuries ago. Its harbor cities are centers of trade, culture, and celebration, and its people are known for their hospitality and love of music.',
    climate: 'Mediterranean with supernaturally calm seas and consistent warm breezes',
    population: 120000,
    dangerLevel: 2,
    color: '#06B6D4',
    landmarks: [
      'The Singing Lighthouse - a tower whose crystal lantern produces audible melodies that guide ships safely to port',
      'Coral Palace - the seat of coastal governance, grown from living coral over three centuries',
      'Tidecaller\'s Grotto - a sea cave where the original Tide Pact was signed, now a site of pilgrimage',
    ],
  },
  {
    id: 'reg-005',
    name: 'Whispering Woods',
    description:
      'Unlike the Verdant Hollows, the Whispering Woods are eerily sentient. Every tree, shrub, and blade of grass is connected to a vast root network that forms a collective consciousness. Visitors report hearing faint voices on the wind offering cryptic guidance or gentle warnings. The woods reshape their paths to welcome the worthy and confound the wicked.',
    climate: 'Temperate with an uncanny stillness; weather seems to respond to the mood of the forest',
    population: 31000,
    dangerLevel: 5,
    color: '#84CC16',
    landmarks: [
      'The Parliament of Boughs - a ring of ancient sentient oaks that serve on the Council of Renewal',
      'Mirrorleaf Glade - a clearing where the leaves reflect your true self rather than your physical form',
      'The Wandering Path - a trail that never leads to the same place twice but always to where you need to be',
      'Rootsong Caverns - underground tunnels formed by roots, where the forest\'s deepest memories are kept',
    ],
  },
  {
    id: 'reg-006',
    name: 'Thornveil Marshes',
    description:
      'A vast expanse of misty wetlands choked with thorny vegetation and dotted with crumbling ruins from a forgotten civilization. Will-o-wisps drift through the fog, and the water hides both treacherous depths and unexpected beauty. The Marsh folk are fiercely independent and possess unique water magic passed down through oral tradition.',
    climate: 'Humid subtropical with near-constant fog, seasonal flooding, and heavy rainfall',
    population: 27000,
    dangerLevel: 7,
    color: '#A855F7',
    landmarks: [
      'The Drowned Temple - a half-submerged stone temple covered in luminescent moss, origin unknown',
      'Misthaven - the largest Marsh settlement, built entirely on stilts above the waterline',
      'The Thornwall - a miles-long barrier of magically reinforced briars that marks the marshes\' border',
    ],
  },
];
