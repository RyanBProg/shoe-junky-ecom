import "./App.scss";
import { useState } from "react";
import ProductInfo from "./components/product-page/ProductInfo";

function App() {
  const [qty, setQty] = useState(0);

  return (
    <>
      <ProductInfo qty={qty} setQty={setQty} />
    </>
  );
}

export default App;
