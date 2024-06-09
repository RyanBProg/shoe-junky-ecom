import ProductDescription from "./ProductDescription";
import CartButton from "./CartButton";
import ProductQuantity from "./ProductQuantity";
import styles from "./ProductInfo.module.scss";

type Props = {
  qty: number;
  setQty: React.Dispatch<React.SetStateAction<number>>;
};

export default function ProductInfo({ qty, setQty }: Props) {
  return (
    <>
      <div className={styles.cont__description}>
        <ProductDescription />
        <div className={styles.cont__controls}>
          <ProductQuantity qty={qty} setQty={setQty} />
          <CartButton />
        </div>
      </div>
    </>
  );
}
