import styles from "./Lightbox.module.scss";
import { ProductImage } from "../../utils/types/types";

type Props = {
  setLightboxOpen: React.Dispatch<React.SetStateAction<boolean>>;
  imageIndex: number;
  setImageIndex: React.Dispatch<React.SetStateAction<number>>;
  images: ProductImage[];
};

export default function Lightbox({
  setLightboxOpen,
  imageIndex,
  setImageIndex,
  images,
}: Props) {
  return (
    <div className={styles.background}>
      <div className={styles.gallery}>
        <div className={styles.cont__product__img}>
          <img
            className={styles.product__img}
            src={images[imageIndex].full}
            alt="product image"
          />
          <button
            className={`${styles.btn__prev} ${styles.btn__arrow}`}
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
            className={`${styles.btn__next} ${styles.btn__arrow}`}
            disabled={imageIndex === images.length - 1}
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
          <button
            className={styles.btn__exit}
            onClick={() => {
              setLightboxOpen(false);
            }}>
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#69707D"
                fill-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className={styles.thumbnails}>
          {images.map((item, index) => {
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
    </div>
  );
}
