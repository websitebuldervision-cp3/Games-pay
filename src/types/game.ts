export type GameCategory = 
  | 'Action' 
  | 'Racing' 
  | 'Adventure' 
  | 'Puzzle' 
  | 'Sports' 
  | 'Strategy' 
  | 'Simulation';

export interface Game {
  id: string;
  name: string;
  category: GameCategory;
  rewardUSD: number;
  image: string;
  description: string;
  conditions: string;
  gameplayBrief: string;
  isFeatured?: boolean;
  isNew?: boolean;
  active: boolean;
  publishDate: string;
  playCount: number;
  difficulty: 'Rahisi' | 'Wastani' | 'Ngumu';
}

export type MobileNetwork = 'M-Pesa' | 'Tigo Pesa' | 'HaloPesa' | 'Azam Pesa' | 'Airtel Money';

export interface Transaction {
  id: string;
  name: string;
  amountUSD: number;
  amountTZS: number;
  gameName: string;
  network: MobileNetwork;
  date: string;
  time: string;
  status: 'Imelipwa' | 'Inashughulikiwa';
  referenceId: string;
}

export interface NetworkInfo {
  name: MobileNetwork;
  provider: string;
  brandColor: string;
  accentBg: string;
  badgeTextColor: string;
  speed: string;
  description: string;
  codePrefix: string;
}
