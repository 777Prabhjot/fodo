import { create } from "zustand";
import { foodsData } from "./data/foodsData";

export const useFoodsStore = create((set) => ({
  foods: foodsData,
  addFood: (food) => set((state) => ({ foods: [...state.foods, food] })),
}));

export const useCartStore = create((set) => ({
  cartItems: [],
  addToCart: (food) =>
    set((state) => ({ cartItems: [food, ...state.cartItems] })),
  removeCartItem: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),
  updateItem: (updatedItem) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      ),
    })),
}));
