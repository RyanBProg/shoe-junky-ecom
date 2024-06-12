type ProductImage = {
  full: string;
  thumb: string;
};

export type ProductType = {
  sku: number;
  title: string;
  description: string;
  brand: string;
  price: number;
  salePrice: number;
  images: ProductImage[];
};

export type CartItem = {
  id: number;
  qty: number;
  product: ProductType;
};

export type CartAction = {
  type: CartActionType;
  id: number;
  price?: number;
  title?: string;
  qty?: number;
};

type CartActionType = "added_item" | "removed_item";
