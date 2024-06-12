import { CartItem, CartAction } from "../types/types";
import productsData from "../data/productsData.json";

export function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case "added_item":
      // check for qty
      if (action.qty === undefined || action.qty === 0) {
        return state;
      }

      const existingItemIndex = state.findIndex(
        (item) => item.id === action.id
      );

      if (existingItemIndex !== -1) {
        // Item is in the cart, update its quantity
        return state.map((item, index) =>
          index === existingItemIndex
            ? { ...item, qty: action.qty ? item.qty + action.qty : item.qty }
            : item
        );
      } else {
        // Item is not in the cart, add it
        const matchedProduct = productsData.find(
          (current) => current.sku === action.id
        );

        // cant find matching product
        if (!matchedProduct) {
          console.error("no matching product found in product data");
          return state;
        }

        const newItem: CartItem = {
          id: action.id,
          qty: action.qty,
          product: matchedProduct,
        };

        return [...state, newItem];
      }

    case "removed_item":
      return state.filter((current) => current.id !== action.id);

    default:
      return state;
  }
}
