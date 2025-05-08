
export interface Review {
  id: number;
  userId: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface ProductDetails {
  id: number;
  name: {
    en: string;
    fr: string;
  };
  price: number;
  image: string;
  category: string;
  rating: number;
  description: string;
  features: string[];
  specifications: Record<string, string>;
  reviews: Review[];
}

export interface Product {
  id: number;
  name: {
    en: string;
    fr: string;
  };
  price: number;
  image: string;
  category: string;
  rating: number;
}
