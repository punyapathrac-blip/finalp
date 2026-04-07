export type FlavorType = 'sweet' | 'sour' | 'salty' | 'bitter' | 'spicy' | 'umami';

export interface Character {
  id: string;
  name: string;
  flavor: FlavorType;
  color: string;
  bgColor: string;
  lore: string;
  image: string;
}

export type Page = 'home' | 'collection' | 'about' | 'contact' | 'process';
