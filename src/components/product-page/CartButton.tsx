import cartImage from "../../assets/images/icon-cart.svg";
import styles from "./CartButton.module.scss";

export default function CartButton() {
  return (
    <button className={styles.btn}>
      <img src={cartImage} alt="cart icon" />
      Add to cart
    </button>
  );
}
