export type Difficulty = "Easy" | "Medium" | "Hard";
export type Light = "Low" | "Medium" | "Bright";
export type Water = "Low" | "Moderate" | "Frequent";
export type Rarity = "Common" | "Uncommon" | "Rare";

export type Plant = {
  id: number;
  name: string;
  scientific?: string;
  difficulty: Difficulty;
  light: Light;
  water: Water;
  rarity?: Rarity;
  description: string;
};

// This is the type WITHOUT id (used for Add Plant form)
export type NewPlant = {
  name: string;
  scientific?: string;
  difficulty: Difficulty;
  light: Light;
  water: Water;
  rarity?: Rarity;
  description: string;
};
