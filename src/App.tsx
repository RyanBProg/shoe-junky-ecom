import "./App.scss";
import { useState } from "react";
import ProductDescription from "./components/product-page/ProductDescription";
import CartButton from "./components/product-page/CartButton";
import ProductQuantity from "./components/product-page/ProductQuantity";

function App() {
  const [qty, setQty] = useState(0);

  return (
    <>
      <div>
        <ProductDescription />
        <ProductQuantity qty={qty} setQty={setQty} />
        <CartButton />
      </div>
    </>
  );
}

export default App;
