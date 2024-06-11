import { CartItem, CartAction } from "../types/types";

export function cartReducer(state: CartItem[], action: CartAction) {
  if (action.type === "added_item") {
    // check if item is already in cart
    state.forEach((current) => {
      if (current.id === action.id) {
        // item is in cart increase qty
      }
    });

    // add new item to cart
    return { ...state };
  }
  if (action.type === "removed_item") {
    return state.filter((current) => {
      current.id !== action.id;
    });
  }

  return state;
}
