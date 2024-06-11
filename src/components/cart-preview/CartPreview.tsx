import styles from "./CartPreview.module.scss";

export default function CartPreview() {
  return (
    <div className={styles.cart__cont}>
      <h3>Cart</h3>
      <ul>cart items...</ul>
      <button>Checkout</button>
    </div>
  );
}
