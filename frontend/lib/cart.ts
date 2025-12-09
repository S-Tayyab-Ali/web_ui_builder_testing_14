"use client";

import { Comic } from "./comics-data";

export interface CartItem {
  comic: Comic;
  quantity: number;
  addedAt: number;
}

const CART_STORAGE_KEY = "dc-comics-cart";

export const getCart = (): CartItem[] => {
  if (typeof window === "undefined") return [];
  
  try {
    const cart = localStorage.getItem(CART_STORAGE_KEY);
    return cart ? JSON.parse(cart) : [];
  } catch {
    return [];
  }
};

export const saveCart = (cart: CartItem[]): void => {
  if (typeof window === "undefined") return;
  
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    window.dispatchEvent(new Event("cart-updated"));
  } catch (error) {
    console.error("Failed to save cart:", error);
  }
};

export const addToCart = (comic: Comic): void => {
  const cart = getCart();
  const existingItem = cart.find(item => item.comic.id === comic.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      comic,
      quantity: 1,
      addedAt: Date.now()
    });
  }

  saveCart(cart);
};

export const removeFromCart = (comicId: string): void => {
  const cart = getCart();
  const updatedCart = cart.filter(item => item.comic.id !== comicId);
  saveCart(updatedCart);
};

export const updateQuantity = (comicId: string, quantity: number): void => {
  if (quantity < 1) {
    removeFromCart(comicId);
    return;
  }

  const cart = getCart();
  const item = cart.find(item => item.comic.id === comicId);
  
  if (item) {
    item.quantity = quantity;
    saveCart(cart);
  }
};

export const clearCart = (): void => {
  saveCart([]);
};

export const getCartTotal = (): number => {
  const cart = getCart();
  return cart.reduce((total, item) => total + (item.comic.price * item.quantity), 0);
};

export const getCartItemCount = (): number => {
  const cart = getCart();
  return cart.reduce((count, item) => count + item.quantity, 0);
};
