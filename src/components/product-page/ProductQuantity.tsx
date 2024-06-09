import styles from "./ProductQuantity.module.scss";
import minusIcon from "../../assets/images/icon-minus.svg";
import plusIcon from "../../assets/images/icon-plus.svg";

type Props = {
  qty: number;
  setQty: React.Dispatch<React.SetStateAction<number>>;
};

export default function ProductQuantity({ qty, setQty }: Props) {
  return (
    <div className={styles.container}>
      <button
        className="minus"
        onClick={() => {
          setQty((prev) => prev - 1);
        }}
        disabled={qty === 0}>
        <img src={minusIcon} alt="minus icon" />
      </button>
      <span className="quantity">{qty}</span>
      <button
        className="plus"
        onClick={() => {
          setQty((prev) => prev + 1);
        }}>
        <img src={plusIcon} alt="plus icon" />
      </button>
    </div>
  );
}
