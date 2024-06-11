export type ProductImage = {
  full: string;
  thumb: string;
};

export type CartItem = {
  id: number;
  title: string;
  price: number;
  qty: number;
};

export type CartAction = {
  type: CartActionType;
  id: number;
};

type CartActionType = "added_item" | "removed_item";
