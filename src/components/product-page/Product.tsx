import { useState } from "react";
import useMediaQuery from "../../utils/useMediaQuery";
import styles from "./Product.module.scss";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import Lightbox from "./Lightbox";
import { ProductType, CartAction } from "../../utils/types/types";

type Props = {
  productData: ProductType;
  cartDispatch: React.Dispatch<CartAction>;
};

export default function Product({ productData, cartDispatch }: Props) {
  const [qty, setQty] = useState(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const isMobile = useMediaQuery("(max-width: 700px)");

  const handleCartAdd = () => {
    qty < 1 && alert("Select a quantity higher than 0");
    cartDispatch({ type: "added_item", id: productData.sku, qty: qty });
  };

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
        <ProductInfo
          qty={qty}
          setQty={setQty}
          productData={productData}
          handleCartAdd={handleCartAdd}
        />
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
