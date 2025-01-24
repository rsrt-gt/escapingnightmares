import { create } from "zustand";
import { persist } from "zustand/middleware";
interface IOptions {
  hack: boolean;
  climb: boolean;
}
interface IClue {
  description: string;
  label: string;
  location: "Left" | "Right" | "Forward" | "Back";
}
export interface ILevel {
  name: string;
  level: number;
  optionsAllowed: IOptions;
  pin: string;
  items: {
    label: "Food" | "Scaffolding" | "Pills";
    location: "Left" | "Right" | "Forward" | "Back";
  }[];
  clues: IClue[];
}
interface ILevels {
  level: ILevel;
  setLevel: (level: ILevel) => void;
}

export const levels: ILevel[] = [
  {
    level: 1,
    items: [
      {
        label: "Food",
        location: "Right",
      },
    ],
    clues: [
      {
        label: "A dream or Night Mare",
        location: "Forward",
        description:
          "At FIRST, I didn't really know where I was comming from. It all felt like a daze, but I hope itll be just 1 night.",
      },
      {
        label: "Two Blocks",
        location: "Left",
        description:
          "When you realized there are TWO people and the exact same 2 people that haunted you that night.",
      },
      {
        label: "3 Grains",
        location: "Right",
        description:
          "You remember the THREE grains of rice you had on Janurary 3?",
      },
      {
        label: "4 Cards in a Suit",
        location: "Back",
        description:
          "The fact that there was only FOUR cards in a suit and I had 4 aces!",
      },
    ],
    name: "The Culprit",
    optionsAllowed: {
      climb: false,
      hack: false,
    },
    pin: "1234",
  },

  {
    items: [
      {
        label: "Food",
        location: "Left",
      },
      {
        label: "Scaffolding",
        location: "Right",
      },
    ],
    level: 2,
    clues: [
      {
        label: "A Shimmering Door",
        location: "Forward",
        description:
          "The shimmering door seems to pulse. You notice a number TWO carved into the wood.",
      },
      {
        label: "Two Echoes",
        location: "Left",
        description:
          "The two echoes resonate, and one of them sounds like a soft TWO.",
      },
      {
        label: "Three Shadows",
        location: "Right",
        description:
          "Three shadows loom in the distance. The center one casts a number THREE on the ground.",
      },
      {
        label: "Four Locks",
        location: "Back",
        description:
          "Four locks appear on the door behind you. The third one has a faint FOUR etched into it.",
      },
    ],
    name: "The Forgotten Key",
    optionsAllowed: {
      climb: false,
      hack: true,
    },
    pin: "2344",
  },
  {
    items: [
      {
        label: "Pills",
        location: "Forward",
      },
    ],
    level: 3,
    clues: [
      {
        label: "A Clock Tower",
        location: "Forward",
        description:
          "The clock tower is spinning, but its hands stop on the number FOUR.",
      },
      {
        label: "Two Faces",
        location: "Left",
        description:
          "The two faces in the mirror slowly reveal the number ONE as they blink.",
      },
      {
        label: "Three Ticks",
        location: "Right",
        description:
          "Three distinct ticks echo, and the third one forms the number SIX.",
      },
      {
        label: "Four Hourglasses",
        location: "Back",
        description: "The four hourglasses behind you flash a quick NINE.",
      },
    ],
    name: "The Time Weaver",
    optionsAllowed: {
      climb: false,
      hack: false,
    },
    pin: "4169",
  },
  {
    items: [
      {
        label: "Food",
        location: "Right",
      },
    ],
    level: 4,
    clues: [
      {
        label: "A Reflection",
        location: "Forward",
        description:
          "Your reflection is warped, but a faint THREE appears in its eyes.",
      },
      {
        label: "Two Doors",
        location: "Left",
        description:
          "The two doors stand side by side, and one of them has the number EIGHT written on it.",
      },
      {
        label: "Three Faces",
        location: "Right",
        description:
          "Three faces appear and quickly disappear, leaving behind a ONE.",
      },
      {
        label: "Four Fractures",
        location: "Back",
        description:
          "The mirrors crack, and the number FIVE emerges from the center of the fracture.",
      },
    ],
    name: "The Mirror Maze",
    optionsAllowed: {
      climb: true,
      hack: false,
    },
    pin: "3815",
  },
  {
    items: [
      {
        label: "Scaffolding",
        location: "Back",
      },
    ],
    level: 5,
    clues: [
      {
        label: "A Tall Tree",
        location: "Forward",
        description:
          "The tall tree in front of you has a deep cut, where the number SEVEN is carved.",
      },
      {
        label: "Two Owls",
        location: "Left",
        description:
          "The two owls stare at you from a branch. One has a number FOUR etched in its feathers.",
      },
      {
        label: "Three Footprints",
        location: "Right",
        description:
          "Three glowing footprints are left behind. The last one fades but leaves a TWO.",
      },
      {
        label: "Four Branches",
        location: "Back",
        description:
          "Four branches twist behind you, forming the shape of a ONE.",
      },
    ],
    name: "The Dreaming Forest",
    optionsAllowed: {
      climb: true,
      hack: true,
    },
    pin: "7421",
  },
  {
    items: [
      {
        label: "Food",
        location: "Right",
      },
    ],
    level: 6,
    clues: [
      {
        label: "A Golden Pyramid",
        location: "Forward",
        description:
          "A glowing golden pyramid stands before you. It glimmers with the number NINE.",
      },
      {
        label: "Two Suns",
        location: "Left",
        description:
          "The two suns in the sky seem to point directly at the number THREE.",
      },
      {
        label: "Three Mirage Figures",
        location: "Right",
        description:
          "Three figures appear in the distance, their outlines casting the number SIX.",
      },
      {
        label: "Four Vortexes",
        location: "Back",
        description:
          "Behind you, four vortexes spin and briefly form the number FOUR.",
      },
    ],
    name: "The Shifting Sands",
    optionsAllowed: {
      climb: false,
      hack: false,
    },
    pin: "9364",
  },
  {
    items: [
      {
        label: "Scaffolding",
        location: "Back",
      },
    ],
    level: 7,
    clues: [
      {
        label: "A Distant Bell",
        location: "Forward",
        description: "A distant bell tolls, and you hear it ring TWO.",
      },
      {
        label: "Two Statues",
        location: "Left",
        description:
          "The two statues stare at you. Their eyes flash a number SEVEN.",
      },
      {
        label: "Three Windows",
        location: "Right",
        description:
          "Three windows flicker in the distance. The last one shows a number FIVE.",
      },
      {
        label: "Four Streets",
        location: "Back",
        description:
          "The four streets behind you seem to pulse with the number ONE.",
      },
    ],
    name: "The Silent City",
    optionsAllowed: {
      climb: false,
      hack: true,
    },
    pin: "2751",
  },
  {
    items: [
      {
        label: "Pills",
        location: "Left",
      },
    ],
    level: 8,
    clues: [
      {
        label: "A Black Sky",
        location: "Forward",
        description:
          "The endless black sky above glimmers with the number EIGHT.",
      },
      {
        label: "Two Moons",
        location: "Left",
        description:
          "The two moons above glow softly, and one casts a THREE onto the ground.",
      },
      {
        label: "Three Lanterns",
        location: "Right",
        description:
          "Three lanterns flicker in the distance, and one casts the number SIX.",
      },
      {
        label: "Four Stars",
        location: "Back",
        description:
          "Four stars appear and align in the sky, forming the number FOUR.",
      },
    ],
    name: "The Endless Night",
    optionsAllowed: {
      climb: false,
      hack: false,
    },
    pin: "8364",
  },
];

export const useLevelStore = create<ILevels>((set) => ({
  level: levels[0],
  setLevel: (level: ILevel) => set({ level: level }),
}));
