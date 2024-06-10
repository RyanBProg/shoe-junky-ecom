import { useState } from "react";
import useMediaQuery from "../../utils/useMediaQuery";
import styles from "./Product.module.scss";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import Lightbox from "./Lightbox";
import productImage1 from "../../assets/images/image-product-1.jpg";
import productThum1 from "../../assets/images/image-product-1-thumbnail.jpg";
import productImage2 from "../../assets/images/image-product-2.jpg";
import productThum2 from "../../assets/images/image-product-2-thumbnail.jpg";
import productImage3 from "../../assets/images/image-product-3.jpg";
import productThum3 from "../../assets/images/image-product-3-thumbnail.jpg";
import productImage4 from "../../assets/images/image-product-4.jpg";
import productThum4 from "../../assets/images/image-product-4-thumbnail.jpg";

const images = [
  { full: productImage1, thumb: productThum1 },
  { full: productImage2, thumb: productThum2 },
  { full: productImage3, thumb: productThum3 },
  { full: productImage4, thumb: productThum4 },
];

export default function Product() {
  const [qty, setQty] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const isMobile = useMediaQuery("(max-width: 700px)");

  return (
    <div>
      <div className={styles.cont__product}>
        <ProductGallery
          setLightboxOpen={setLightboxOpen}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
          images={images}
          isMobile={isMobile}
        />
        <ProductInfo qty={qty} setQty={setQty} />
      </div>
      {!isMobile && lightboxOpen && (
        <Lightbox
          setLightboxOpen={setLightboxOpen}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
          images={images}
        />
      )}
    </div>
  );
}
