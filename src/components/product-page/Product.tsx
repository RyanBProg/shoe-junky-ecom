import { useState } from "react";
import styles from "./Product.module.scss";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import Lightbox from "./Lightbox";

export default function Product() {
  const [qty, setQty] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div>
      <div className={styles.cont__product}>
        <ProductGallery
          setLightboxOpen={setLightboxOpen}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
        />
        <ProductInfo qty={qty} setQty={setQty} />
      </div>
      {lightboxOpen && (
        <Lightbox
          setLightboxOpen={setLightboxOpen}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
        />
      )}
    </div>
  );
}
