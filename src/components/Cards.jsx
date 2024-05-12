import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";
import { TbShoppingBagCheck } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { productQuantity, shortenText } from "../helper/helper";
import styles from "./cards.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decrease,
  increase,
  removeItem,
} from "../features/carts/cartsSlice";

function Cards({ data }) {
  const { title, image, price, id } = data;

  const state = useSelector((store) => store.carts);
  console.log(state);
  const dispatch = useDispatch();
  const quantity = productQuantity(state, id);

  return (
    <div className={styles.cards}>
      <img src={image} alt={title} />
      <h3>{shortenText(title)}</h3>
      <p>{price} $</p>

      <div className={styles.action}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <div>
          {quantity === 1 && (
            <button onClick={() => dispatch(removeItem(data))}>
              <MdDelete />
            </button>
          )}

          {quantity > 1 && (
            <button onClick={() => dispatch(decrease(data))}>-</button>
          )}
          {!!quantity && <span>{quantity}</span>}
          {quantity === 0 ? (
            <button onClick={() => dispatch(addItem(data))}>
              <TbShoppingBagCheck />
            </button>
          ) : (
            <button onClick={() => dispatch(increase(data))}>+</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cards;
