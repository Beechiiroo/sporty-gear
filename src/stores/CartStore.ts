
import { create } from 'zustand';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  total: number;
}

export const useCart = create<CartStore>((set) => ({
  items: [],
  addItem: (item) =>
    set((state) => {
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
          total: state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
        };
      }
      return {
        items: [...state.items, item],
        total: state.items.reduce((sum, item) => sum + item.price * item.quantity, 0) + item.price,
      };
    }),
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((i) => i.id !== id),
      total: state.items
        .filter((i) => i.id !== id)
        .reduce((sum, item) => sum + item.price * item.quantity, 0),
    })),
  updateQuantity: (id, quantity) =>
    set((state) => ({
      items: state.items.map((i) => (i.id === id ? { ...i, quantity } : i)),
      total: state.items
        .map((i) => (i.id === id ? { ...i, quantity } : i))
        .reduce((sum, item) => sum + item.price * item.quantity, 0),
    })),
  total: 0,
}));
