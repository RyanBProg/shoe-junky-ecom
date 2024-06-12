import styles from "./ProductGallery.module.scss";
import { ProductType } from "../../utils/types/types";

type Props = {
  setLightboxOpen: React.Dispatch<React.SetStateAction<boolean>>;
  imageIndex: number;
  setImageIndex: React.Dispatch<React.SetStateAction<number>>;
  isMobile: boolean;
  productData: ProductType;
};

export default function ProductGallery({
  setLightboxOpen,
  imageIndex,
  setImageIndex,
  isMobile,
  productData,
}: Props) {
  return (
    <div className={styles.cont__gallery}>
      <img
        className={`${styles.product__img} ${
          !isMobile && styles.img__clickable
        }`}
        src={productData.images[imageIndex].full}
        alt="product image"
        onClick={() => {
          !isMobile && setLightboxOpen(true);
        }}
      />
      <button
        className={styles.btn__prev}
        disabled={imageIndex === 0}
        onClick={() => {
          setImageIndex((prev) => prev - 1);
        }}>
        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 1 3 9l8 8"
            stroke="#1D2026"
            stroke-width="3"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      </button>
      <button
        className={styles.btn__next}
        disabled={imageIndex === productData.images.length - 1}
        onClick={() => {
          setImageIndex((prev) => prev + 1);
        }}>
        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m2 1 8 8-8 8"
            stroke="#1D2026"
            stroke-width="3"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      </button>
      <div className={styles.thumbnails}>
        {productData.images.map((item, index) => {
          return (
            <img
              key={index}
              className={imageIndex === index ? styles.img__active : ""}
              src={item.thumb}
              onClick={() => {
                setImageIndex(index);
              }}
              alt="product image thumbnail"
            />
          );
        })}
      </div>
    </div>
  );
}
