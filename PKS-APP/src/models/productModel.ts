export interface ICardItem {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface IProduct {
  id: string;
  title: string;
  description: string;
  category?: string;
  image: string;
  url?: string;
}

export interface IFeed {
  id: string;
  title: string;
  image: string;
  url?: string;
}

export interface ICards{
  id: number
  name: string
  description: string
  image: string
}