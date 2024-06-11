import { CartItem, CartAction } from "../../utils/types/types";
import styles from "./CartPreview.module.scss";
import deleteIcon from "../../assets/images/icon-delete.svg";
import productThumb from "../../assets/images/image-product-1-thumbnail.jpg";

type CartItemProps = {
  cartItem: CartItem;
  cartDispatch: React.Dispatch<CartAction>;
};

function Item({ cartItem, cartDispatch }: CartItemProps) {
  return (
    <li>
      <img src={productThumb} alt="cart item thumbnail" />
      <div>
        <span className={styles.product__title}>{cartItem.title}</span>
        <div>
          <span>${cartItem.price}.00</span>
          <span>x{cartItem.qty}</span>
          <span>$350.00</span>
        </div>
      </div>
      <button
        onClick={() => {
          cartDispatch({ type: "removed_item", id: cartItem.id });
        }}>
        <img src={deleteIcon} alt="delete icon" />
      </button>
    </li>
  );
}

type CartPreviewProps = {
  cartState: CartItem[];
  cartDispatch: React.Dispatch<CartAction>;
};

export default function CartPreview({
  cartState,
  cartDispatch,
}: CartPreviewProps) {
  return (
    <div className={styles.cart__cont}>
      <h3>Cart</h3>
      {cartState.length > 0 ? (
        <>
          <ul>
            {cartState.map((item) => {
              return <Item cartItem={item} cartDispatch={cartDispatch} />;
            })}
          </ul>
          <button>Checkout</button>
        </>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
}
