
export type AppScreen = 'PLAYER_SELECT' | 'MODE_SELECT' | 'MIXOLOGY' | 'GAME_MENU' | 'PLAYING' | 'CUSTOM_MANAGER';

export interface GameRule {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detailedSteps: string[];
  minPlayers: number;
  icon: string;
  isWheel?: boolean;
}

export interface Ingredient {
  name: string;
  ratio: number; // Changed to number for visual bar calculation
}

export interface Cocktail {
  id: string;
  name: string;
  engName: string;
  ingredients: Ingredient[];
  description: string;
  tags: string[];
}

export type ContentType = 'DARE' | 'TRUTH';

export interface GameContent {
  id: string | number;
  text: string;
  engText?: string;
  type: ContentType;
  category: 'mild' | 'wild' | 'drinking' | 'custom' | 'r18';
  isCustom?: boolean;
}

// Legacy type alias if needed, but we will move to GameContent
export type Dare = GameContent; 

export interface GameState {
  playerCount: number;
  currentScreen: AppScreen;
  selectedGame: GameRule | null;
}
