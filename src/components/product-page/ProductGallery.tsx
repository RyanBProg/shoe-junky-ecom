import styles from "./ProductGallery.module.scss";
import { ProductImage } from "../../utils/types/productPage";
import leftArrow from "../../assets/images/icon-previous.svg";
import rightArrow from "../../assets/images/icon-next.svg";

type Props = {
  setLightboxOpen: React.Dispatch<React.SetStateAction<boolean>>;
  imageIndex: number;
  setImageIndex: React.Dispatch<React.SetStateAction<number>>;
  images: ProductImage[];
};

export default function ProductGallery({
  setLightboxOpen,
  imageIndex,
  setImageIndex,
  images,
}: Props) {
  return (
    <div className={styles.cont__gallery}>
      <img
        className={styles.product__img}
        src={images[imageIndex].full}
        alt="product image"
        onClick={() => {
          setLightboxOpen(true);
        }}
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
  );
}
