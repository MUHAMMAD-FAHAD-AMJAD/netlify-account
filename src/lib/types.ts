export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  images: string[];
  rating: number;
  reviews: number;
  isSoldOut?: boolean;
  imageHint?: string;
}

export interface Category {
  name: string;
  description: string;
  imageUrl: string;
  imageHint: string;
}

export interface CartItem {
    id: string;
    product: Product;
    quantity: number;
}
