import "./App.scss";
import { useState } from "react";
import ProductInfo from "./components/product-page/ProductInfo";
import ProductGallery from "./components/product-page/ProductGallery";

function App() {
  const [qty, setQty] = useState(0);

  return (
    <div className="cont__product">
      <ProductGallery />
      <ProductInfo qty={qty} setQty={setQty} />
    </div>
  );
}

export default App;
