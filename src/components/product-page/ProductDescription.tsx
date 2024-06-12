import styles from "./ProductInfo.module.scss";
import { ProductType } from "../../utils/types/types";

type Props = {
  productData: ProductType;
};

function SalePrice({ productData }: Props) {
  return (
    <>
      <div>
        <span className={styles.price}>{`$${productData.salePrice}.00`}</span>
        <span className={styles.discount}>{`${
          (productData.salePrice / productData.price) * 100
        }%`}</span>
      </div>
      <span className={styles.total}>{`$${productData.price}.00`}</span>
    </>
  );
}

function Price({ productData }: Props) {
  return <span className={styles.total}>{`$${productData.price}.00`}</span>;
}

export default function ProductDescription({ productData }: Props) {
  return (
    <div className={styles.cont__text}>
      <h2>{productData.brand}</h2>
      <h1>{productData.title}</h1>
      <p>{productData.description}</p>
      <div className={styles.price_detail}>
        {productData.salePrice ? (
          <SalePrice productData={productData} />
        ) : (
          <Price productData={productData} />
        )}
      </div>
    </div>
  );
}
