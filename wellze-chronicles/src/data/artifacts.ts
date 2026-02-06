import type { Artifact } from '../types';

export const artifacts: Artifact[] = [
  {
    id: 'art-001',
    name: 'The Crystal Heart',
    origin: 'Crafted by Seraphine in the Crystal Peaks during the Age of Crystals',
    power:
      'Amplifies any magical ability a hundredfold and can harmonize disparate crystal frequencies into a single devastating beam',
    description:
      'A flawless gem the size of a human fist that shifts color depending on the type of magic near it. It was used by Ysolde to seal the Void Rift and was thought destroyed in the process, but fragments have been found glowing in Ysolde\'s Garden, suggesting it may be slowly reassembling itself.',
    dangerLevel: 10,
    currentLocation: "Ysolde's Garden (fragments)",
    isLost: true,
    element: 'light',
  },
  {
    id: 'art-002',
    name: 'Shadowbane Blade',
    origin: 'Forged in the Embercradle Caldera by Tharion Ironfist during the Shadow War',
    power:
      'Cuts through shadow matter as easily as steel cuts cloth, and its blade ignites with white fire when void creatures are near',
    description:
      'A longsword of black obsidian edged with crystal that Tharion wielded during the Last Stand at Luminara. The blade absorbed so much shadow energy during the war that it occasionally whispers in a language no living scholar can translate. It is kept under heavy guard in the rebuilt Obsidian Citadel.',
    dangerLevel: 7,
    currentLocation: 'Obsidian Citadel',
    isLost: false,
    element: 'fire',
  },
  {
    id: 'art-003',
    name: "Tidecaller's Horn",
    origin: 'Given to the coastal peoples by ocean spirits during the Tide Pact ceremony',
    power:
      'When blown, it can summon or calm ocean waves, call marine creatures to the surface, and create a barrier of living water impervious to attack',
    description:
      'A spiraling conch shell of iridescent pearl that is warm to the touch and faintly damp no matter how long it stays on dry land. The Horn is the physical embodiment of the Tide Pact and is sounded once a year during the Festival of Tides. If it were ever destroyed, the Pact would dissolve.',
    dangerLevel: 5,
    currentLocation: "Tidecaller's Grotto, Azure Coast",
    isLost: false,
    element: 'water',
  },
  {
    id: 'art-004',
    name: 'The Voidstone',
    origin: 'Pulled from the Void Rift by Malachar before the rift was sealed',
    power:
      'Opens small tears in reality that allow glimpses into other planes of existence, and can drain magical energy from any source within its radius',
    description:
      'A perfectly smooth sphere of absolute black that seems to swallow light. Malachar used it to maintain his connection to the Void Plane. After his defeat it was buried in the deepest chamber of the Drowned Temple, sealed behind layers of protective magic. Some say the seals are weakening.',
    dangerLevel: 10,
    currentLocation: 'Drowned Temple, Thornveil Marshes (sealed)',
    isLost: false,
    element: 'void',
  },
  {
    id: 'art-005',
    name: 'Windweaver Cloak',
    origin: 'Woven by wind spirits from threads of solidified air during the Age of Dawn',
    power:
      'Grants the wearer the ability to fly, become intangible as a breeze, and speak across vast distances by whispering into the wind',
    description:
      'A shimmering garment that appears to be made of flowing air given visible form. It ripples constantly as though caught in a perpetual breeze. The Cloak was worn by the first messenger who united the scattered tribes during the Age of Dawn and has been missing since the Age of Kingdoms, last seen in the Whispering Woods.',
    dangerLevel: 3,
    currentLocation: 'Unknown - last seen in the Whispering Woods',
    isLost: true,
    element: 'air',
  },
  {
    id: 'art-006',
    name: 'Rootmother Seed',
    origin: 'Fell from the first tree to grow in the Verdant Hollows during the Age of Dawn',
    power:
      'Can grow an entire forest in a single day, heal blighted land, and commune with every plant in Wellze simultaneously',
    description:
      'A walnut-sized seed of deep emerald green that pulses with a slow, rhythmic glow like a heartbeat. The Rootmother Seed is kept in a crystal reliquary at the Elderroot Throne and is tended by Thessaly Rootwarden. It has only been planted once, to regrow the forests destroyed during the Shadow War.',
    dangerLevel: 4,
    currentLocation: 'Elderroot Throne, Verdant Hollows',
    isLost: false,
    element: 'earth',
  },
  {
    id: 'art-007',
    name: "Solara's Ember",
    origin: 'A fragment of the original First Sunrise, preserved by an unknown entity',
    power:
      'Produces infinite warmth and light, can reignite any extinguished flame including magical ones, and is said to be able to restart life in the recently deceased',
    description:
      'A tiny orb of captured sunlight that floats gently above any surface it is placed on. It cannot be extinguished, contained, or dimmed by any known means. It was discovered in a sealed chamber beneath the Crystal Peaks and is currently studied by the Enclave, though they have made little progress understanding its true nature.',
    dangerLevel: 6,
    currentLocation: 'Crystal Peaks Enclave',
    isLost: false,
    element: 'light',
  },
  {
    id: 'art-008',
    name: 'The Marsh Crown',
    origin: 'Crafted by the forgotten civilization that built the Drowned Temple',
    power:
      'Grants dominion over all water within a mile radius, allows breathing underwater indefinitely, and reveals things hidden beneath any liquid surface',
    description:
      'A circlet of tarnished silver entwined with living marsh reeds that never wilt. Whoever wears it can feel the pulse of every waterway in the Thornveil Marshes. The Crown was found by Fenrik Bogstrider in the upper chambers of the Drowned Temple and is the source of much of his mysterious power.',
    dangerLevel: 5,
    currentLocation: 'Worn by Fenrik Bogstrider',
    isLost: false,
    element: 'water',
  },
  {
    id: 'art-009',
    name: "Malachar's Grimoire",
    origin: 'Written by Malachar over twenty years of Void research in the Thornveil Marshes',
    power:
      'Contains the complete theory and instructions for opening rifts to the Void Plane, as well as spells for binding shadow creatures to mortal will',
    description:
      'A thick tome bound in dark leather that seems to absorb ink from nearby documents. Its pages are written in a cipher that shifts each time the book is closed. The Council of Renewal debated destroying it but ultimately chose to preserve it in the Archive of All Things under maximum security, arguing that understanding the Void is the best defense against it.',
    dangerLevel: 9,
    currentLocation: 'Archive of All Things, Verdant Hollows (restricted)',
    isLost: false,
    element: 'void',
  },
];
