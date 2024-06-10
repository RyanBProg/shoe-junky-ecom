import React from "react";
import styles from "./ProductGallery.module.scss";
import productImage1 from "../../assets/images/image-product-1.jpg";
import productThum1 from "../../assets/images/image-product-1-thumbnail.jpg";
import productImage2 from "../../assets/images/image-product-2.jpg";
import productThum2 from "../../assets/images/image-product-2-thumbnail.jpg";
import productImage3 from "../../assets/images/image-product-3.jpg";
import productThum3 from "../../assets/images/image-product-3-thumbnail.jpg";
import productImage4 from "../../assets/images/image-product-4.jpg";
import productThum4 from "../../assets/images/image-product-4-thumbnail.jpg";
import leftArrow from "../../assets/images/icon-previous.svg";
import rightArrow from "../../assets/images/icon-next.svg";

type Props = {
  setLightboxOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ProductGallery({ setLightboxOpen }: Props) {
  return (
    <div className={styles.cont__gallery}>
      <img
        className={styles.product__img}
        src={productImage1}
        alt="product image"
        onClick={() => {
          setLightboxOpen(true);
        }}
      />
      <button className={styles.btn__prev}>
        <img src={leftArrow} alt="previous image" />
      </button>
      <button className={styles.btn__next}>
        <img src={rightArrow} alt="next image" />
      </button>
      <div className={styles.thumbnails}>
        <img src={productThum1} alt="product image thumbnail" />
        <img src={productThum2} alt="product image thumbnail" />
        <img src={productThum3} alt="product image thumbnail" />
        <img src={productThum4} alt="product image thumbnail" />
      </div>
    </div>
  );
}
