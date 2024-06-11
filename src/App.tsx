import "./App.scss";
import { useState } from "react";
import NavBar from "./components/nav-bar/NavBar";
import Product from "./components/product-page/Product";
import CartPreview from "./components/cart-preview/CartPreview";

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <NavBar setCartOpen={setCartOpen} />
      {cartOpen && <CartPreview />}
      <Product />
    </>
  );
}

export default App;
