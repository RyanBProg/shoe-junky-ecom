import styles from "./ProductInfo.module.scss";

export default function ProductDescription() {
  return (
    <div className={styles.cont__text}>
      <h2>Sneaker Company</h2>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className={styles.price_detail}>
        <div>
          <span className={styles.price}>$125.00</span>
          <span className={styles.discount}>50%</span>
        </div>
        <span className={styles.total}>$250.00</span>
      </div>
    </div>
  );
}
