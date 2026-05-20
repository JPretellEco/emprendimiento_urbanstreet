export interface Product {
  id: string;
  name: string;
  category: 'polos' | 'shorts' | 'hoodies';
  price: number;
  colors: ProductColor[];
  sizes: ProductSize[];
  images: string[];
  description: string;
  slug: string;
}

export interface ProductColor {
  name: string;
  hex: string;
  available: boolean;
}

export interface ProductSize {
  size: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
  available: boolean;
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  color: string;
  size: string;
  quantity: number;
  imageUrl: string;
}

export interface CartContextType {
  items: CartItem[];
  totalItems: number;
  cartTotal: number;
  addItem: (item: Omit<CartItem, 'id'>) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}
