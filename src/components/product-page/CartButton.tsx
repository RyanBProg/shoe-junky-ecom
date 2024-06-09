import cartImage from "../../assets/images/icon-cart.svg";
import styles from "./ProductInfo.module.scss";

export default function CartButton() {
  return (
    <button className={styles.btn__cart}>
      <img src={cartImage} alt="cart icon" />
      Add to cart
    </button>
  );
}
