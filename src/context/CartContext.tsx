import React, { createContext, useContext, useState, useEffect } from 'react';
import { Phone, PHONES } from '../data/phones';

export interface CartItem {
  phone: Phone;
  quantity: number;
  selectedColor?: string;
  selectedStorage?: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (phone: Phone, quantity?: number, color?: string, storage?: string) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalCount: number;
  subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'fonebooth_concierge_bag_v1';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Ignore JSON error
    }
    // Default seed item so bag showcases luxury presentation immediately
    return [
      {
        phone: PHONES[0],
        quantity: 1,
        selectedColor: PHONES[0].color,
        selectedStorage: '512GB'
      }
    ];
  });

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Ignore write error
    }
  }, [items]);

  const addItem = (phone: Phone, quantity = 1, color?: string, storage?: string) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.phone.id === phone.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity
        };
        return updated;
      }
      return [
        ...prev,
        {
          phone,
          quantity,
          selectedColor: color || phone.color,
          selectedStorage: storage || '256GB'
        }
      ];
    });
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.phone.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.phone.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = items.reduce((acc, item) => acc + item.phone.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalCount,
        subtotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
