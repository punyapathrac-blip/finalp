export type FlavorType = 'sweet' | 'sour' | 'salty' | 'bitter' | 'spicy' | 'umami';

export interface Character {
  id: string;
  name: string;
  flavor: FlavorType;
  color: string;
  bgColor: string;
  lore: string;
  image: string;
  scale?: number;
}

export type Page = 'home' | 'collection' | 'about' | 'contact' | 'process';
