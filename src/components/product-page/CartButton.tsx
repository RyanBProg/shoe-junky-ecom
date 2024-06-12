import cartImage from "../../assets/images/icon-cart.svg";
import styles from "./ProductInfo.module.scss";

type Props = {
  handleCartAdd: () => void;
};

export default function CartButton({ handleCartAdd }: Props) {
  return (
    <button className={styles.btn__cart} onClick={handleCartAdd}>
      <img src={cartImage} alt="cart icon" />
      Add to cart
    </button>
  );
}
