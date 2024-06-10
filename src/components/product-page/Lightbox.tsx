import styles from "./Lightbox.module.scss";
import { ProductImage } from "../../utils/types/productPage";
import leftArrow from "../../assets/images/icon-previous.svg";
import rightArrow from "../../assets/images/icon-next.svg";
import exitIcon from "../../assets/images/icon-close.svg";

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
