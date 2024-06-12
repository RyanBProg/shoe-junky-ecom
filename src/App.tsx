import "./App.scss";
import { useReducer, useState } from "react";
import NavBar from "./components/nav-bar/NavBar";
import Product from "./components/product-page/Product";
import CartPreview from "./components/cart-preview/CartPreview";
import { CartItem, ProductType } from "./utils/types/types";
import { cartReducer } from "./utils/state/cartState";
import productsData from "./utils/data/productsData.json";

const testCart: CartItem[] = [
  {
    id: 1,
    qty: 10,
    product: productsData[0] as ProductType,
  },
];

function App() {
  const [cartState, cartDispatch] = useReducer(cartReducer, testCart);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <NavBar setCartOpen={setCartOpen} />
      {cartOpen && (
        <CartPreview cartState={cartState} cartDispatch={cartDispatch} />
      )}
      <Product productData={productsData[0]} cartDispatch={cartDispatch} />
    </>
  );
}

export default App;
