import styles from "./Lightbox.module.scss";
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
import exitIcon from "../../assets/images/icon-close.svg";

const images = [productImage1, productImage2, productImage3, productImage4];

type Props = {
  setLightboxOpen: React.Dispatch<React.SetStateAction<boolean>>;
  imageIndex: number;
  setImageIndex: React.Dispatch<React.SetStateAction<number>>;
};

export default function Lightbox({
  setLightboxOpen,
  imageIndex,
  setImageIndex,
}: Props) {
  return (
    <div className={styles.background}>
      <div className={styles.gallery}>
        <div className={styles.cont__product__img}>
          <img
            className={styles.product__img}
            src={images[imageIndex]}
            alt="product image"
          />
          <button
            className={styles.btn__prev}
            disabled={imageIndex === 0}
            onClick={() => {
              setImageIndex((prev) => prev - 1);
            }}>
            <img src={leftArrow} alt="previous image" />
          </button>
          <button
            className={styles.btn__next}
            disabled={imageIndex === images.length - 1}
            onClick={() => {
              setImageIndex((prev) => prev + 1);
            }}>
            <img src={rightArrow} alt="next image" />
          </button>
          <button
            className={styles.btn__exit}
            onClick={() => {
              setLightboxOpen(false);
            }}>
            <img src={exitIcon} alt="exit icon" />
          </button>
        </div>
        <div className={styles.thumbnails}>
          <img
            src={productThum1}
            onClick={() => {
              setImageIndex(0);
            }}
            alt="product image thumbnail"
          />
          <img
            src={productThum2}
            onClick={() => {
              setImageIndex(1);
            }}
            alt="product image thumbnail"
          />
          <img
            src={productThum3}
            onClick={() => {
              setImageIndex(2);
            }}
            alt="product image thumbnail"
          />
          <img
            src={productThum4}
            onClick={() => {
              setImageIndex(3);
            }}
            alt="product image thumbnail"
          />
        </div>
      </div>
    </div>
  );
}