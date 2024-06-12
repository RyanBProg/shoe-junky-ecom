import { useState } from "react";
import useMediaQuery from "../../utils/useMediaQuery";
import styles from "./Product.module.scss";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import Lightbox from "./Lightbox";
import { ProductType } from "../../utils/types/types";

type Props = {
  productData: ProductType;
};

export default function Product({ productData }: Props) {
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
          isMobile={isMobile}
          productData={productData}
        />
        <ProductInfo qty={qty} setQty={setQty} productData={productData} />
      </div>
      {!isMobile && lightboxOpen && (
        <Lightbox
          setLightboxOpen={setLightboxOpen}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
          productData={productData}
        />
      )}
    </div>
  );
}
