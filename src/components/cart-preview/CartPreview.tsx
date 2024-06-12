import { CartItem, CartAction } from "../../utils/types/types";
import styles from "./CartPreview.module.scss";
import deleteIcon from "../../assets/images/icon-delete.svg";

type CartItemProps = {
  cartItem: CartItem;
  cartDispatch: React.Dispatch<CartAction>;
};

function Item({ cartItem, cartDispatch }: CartItemProps) {
  return (
    <li>
      <img
        src="/images/image-product-1-thumbnail.jpg"
        alt="cart item thumbnail"
      />
      <div>
        <span className={styles.product__title}>{cartItem.product.title}</span>
        <div>
          <span>${cartItem.product.salePrice}.00</span>
          <span>x{cartItem.qty}</span>
          <span>${cartItem.product.price}.00</span>
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
              return (
                <Item
                  cartItem={item}
                  key={item.id}
                  cartDispatch={cartDispatch}
                />
              );
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
