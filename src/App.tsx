import "./App.scss";
import { useReducer, useState } from "react";
import NavBar from "./components/nav-bar/NavBar";
import Product from "./components/product-page/Product";
import CartPreview from "./components/cart-preview/CartPreview";
import { cartReducer } from "./utils/state/cartState";
import productsData from "./utils/data/productsData.json";

function App() {
  const [cartState, cartDispatch] = useReducer(cartReducer, []);
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
