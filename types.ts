
export enum Section {
  HOME = 'HOME',
  WHATSAPP = 'WHATSAPP',
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM_TIKTOK = 'INSTAGRAM_TIKTOK',
  LINKEDIN = 'LINKEDIN',
  TRIGGERS = 'TRIGGERS'
}

export interface StrategyCard {
  title: string;
  content: string;
  extendedContent?: string;
}

export interface NetworkStrategy {
  id: Section;
  name: string;
  imageUrl: string;
  cards: StrategyCard[];
  goldenRule: StrategyCard;
}
