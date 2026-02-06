import type { Quest } from '../types';

export const quests: Quest[] = [
  {
    id: 'quest-001',
    title: 'Fragments of the Heart',
    description:
      "Glowing crystal fragments have been spotted scattered across Ysolde's Garden, pulsing in synchronization as if drawn to each other. Collect the fragments before they fully reassemble on their own -- scholars fear what an uncontrolled reformation of the Crystal Heart could trigger.",
    difficulty: 5,
    reward: 'Crystal Heart Fragment (inert) and the gratitude of the Crystal Peaks Enclave',
    isComplete: false,
    region: 'Crystal Peaks',
  },
  {
    id: 'quest-002',
    title: 'The Whispering Path',
    description:
      'The Wandering Path in the Whispering Woods has begun leading travelers to the same location: a clearing that did not exist last season, containing a stone door sealed with ancient runes. Linnara Dewsong asks you to follow the Path and discover what the forest is trying to reveal.',
    difficulty: 3,
    reward: 'A leaf from the Parliament of Boughs that grants one truthful answer to any question',
    isComplete: false,
    region: 'Whispering Woods',
  },
  {
    id: 'quest-003',
    title: 'Shadows Beneath the Temple',
    description:
      'The protective seals around the Voidstone in the Drowned Temple are flickering. Fenrik Bogstrider needs someone brave enough to descend into the flooded lower chambers, reinforce the seals, and report on the state of the artifact. Bring waterproofing supplies and a strong stomach.',
    difficulty: 4,
    reward: 'Marsh Crown blessing: the ability to breathe underwater for one lunar cycle',
    isComplete: false,
    region: 'Thornveil Marshes',
  },
  {
    id: 'quest-004',
    title: 'The Singing Lighthouse Grows Silent',
    description:
      'The crystal lantern atop the Singing Lighthouse has gone quiet for the first time in centuries, and ships are struggling to navigate the harbor at night. Captain Corwin Saltbreeze suspects the lantern crystal has cracked and needs a skilled crystal mage to repair it before the trading season begins.',
    difficulty: 2,
    reward: "Free passage on any Sapphire Fleet vessel for one year and a custom-fitted sailor's coat",
    isComplete: false,
    region: 'Azure Coast',
  },
  {
    id: 'quest-005',
    title: 'Embercradle Expedition',
    description:
      'Morwyn Ashveil is organizing an expedition into the Embercradle Caldera to harvest fire-attuned crystals for the reconstruction effort. The caldera is more active than usual, and her scouts report seeing shapes moving in the magma. She needs experienced adventurers to protect the mining team.',
    difficulty: 4,
    reward: 'A fire-attuned crystal of your choosing and honorary membership in the Cinderwatch Clan',
    isComplete: false,
    region: 'Obsidian Wastes',
  },
  {
    id: 'quest-006',
    title: 'The Lost Pages',
    description:
      "Several pages have gone missing from Malachar's Grimoire in the Archive of All Things, and the tree storing the book is exhibiting signs of distress. Thessaly Rootwarden needs someone to track down the pages before the dangerous knowledge they contain falls into the wrong hands.",
    difficulty: 5,
    reward: 'Access to the restricted section of the Archive and a memory-leaf containing a spell of your choice',
    isComplete: false,
    region: 'Verdant Hollows',
  },
  {
    id: 'quest-007',
    title: 'Tides of Memory',
    description:
      'The Glowmere Pool in the Verdant Hollows has begun showing not past memories but future ones, and the visions are troubling. The Pool shows a great darkness rising from the south and a crystal singing a note that shatters the sky. The Council of Renewal needs witnesses to confirm and interpret these visions.',
    difficulty: 3,
    reward: 'A vial of Glowmere water that reveals the true nature of anything submerged in it',
    isComplete: false,
    region: 'Verdant Hollows',
  },
  {
    id: 'quest-008',
    title: 'The Glass Bridge Crossing',
    description:
      'The natural obsidian bridge spanning the great lava lake in the Obsidian Wastes has developed cracks, threatening to cut off the only safe route between the northern and southern settlements. A team of earth mages and engineers is needed to reinforce the bridge before the next volcanic tremor.',
    difficulty: 3,
    reward: 'A shard of the Glass Bridge itself, naturally enchanted with fire resistance',
    isComplete: false,
    region: 'Obsidian Wastes',
  },
  {
    id: 'quest-009',
    title: 'The Windweaver Hunt',
    description:
      'New clues about the location of the lost Windweaver Cloak have surfaced. A trader from the Canopy Market claims to have seen a shimmering garment drifting through the upper canopy of the Whispering Woods on windy nights. Retrieve this legendary artifact before it drifts beyond reach forever.',
    difficulty: 4,
    reward: 'If found, the Council will grant you one boon and the right to wear the Cloak for a single day',
    isComplete: false,
    region: 'Whispering Woods',
  },
  {
    id: 'quest-010',
    title: 'Festival of Tides Preparation',
    description:
      "The annual Festival of Tides is approaching, and the Azure Coast needs help preparing the grand celebration. Tasks include decorating the Coral Palace, rehearsing the ceremonial sounding of the Tidecaller's Horn, and ensuring the ocean spirits' tribute is properly assembled. A lighter quest, but vital for coastal morale.",
    difficulty: 1,
    reward: 'An invitation to the private Coral Palace feast and a pearl blessed by ocean spirits',
    isComplete: false,
    region: 'Azure Coast',
  },
];
