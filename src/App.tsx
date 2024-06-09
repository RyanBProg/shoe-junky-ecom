import "./App.scss";
import CartButton from "./components/product-page/CartButton";
import ProductQuantity from "./components/product-page/ProductQuantity";
import { useState } from "react";

function App() {
  const [qty, setQty] = useState(0);

  return (
    <>
      <div>
        <h1>test</h1>
        <ProductQuantity qty={qty} setQty={setQty} />
        <CartButton />
      </div>
    </>
  );
}

export default App;
