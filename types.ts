export interface LineageNode {
  name: string;
  translation?: string;
  period?: string;
  description?: string;
  keyFigures?: string[];
  coreThemes?: string[];
  locations?: string[];
  children?: LineageNode[];
  color?: string; // Hex code for visualization grouping
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
