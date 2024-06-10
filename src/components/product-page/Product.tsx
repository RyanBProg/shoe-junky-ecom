import { useState } from "react";
import styles from "./Product.module.scss";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";

export default function Product() {
  const [qty, setQty] = useState(0);

  return (
    <div className={styles.cont__product}>
      <ProductGallery />
      <ProductInfo qty={qty} setQty={setQty} />
    </div>
  );
}
