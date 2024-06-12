import ProductDescription from "./ProductDescription";
import CartButton from "./CartButton";
import ProductQuantity from "./ProductQuantity";
import styles from "./ProductInfo.module.scss";
import { ProductType } from "../../utils/types/types";

type Props = {
  qty: number;
  setQty: React.Dispatch<React.SetStateAction<number>>;
  productData: ProductType;
};

export default function ProductInfo({ qty, setQty, productData }: Props) {
  return (
    <>
      <div className={styles.cont__description}>
        <ProductDescription productData={productData} />
        <div className={styles.cont__controls}>
          <ProductQuantity qty={qty} setQty={setQty} />
          <CartButton />
        </div>
      </div>
    </>
  );
}
