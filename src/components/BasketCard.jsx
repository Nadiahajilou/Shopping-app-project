import React from "react";
import { shortenText } from "../helper/helper";
import { MdDelete } from "react-icons/md";
import styles from "./basketcard.module.css";
import { useDispatch } from "react-redux";
import { decrease, increase, removeItem } from "../features/carts/cartsSlice";

function BasketCard({ data }) {
  const dispatch = useDispatch();
  return (
    <div className={styles.card}>
      <img src={data.image} alt={data.title} />
      <p>{shortenText(data.title)}</p>
      <div className={styles.action}>
        {data.quantity === 1 && (
          <button onClick={() => dispatch(removeItem(data))}>
            <MdDelete />
          </button>
        )}

        {data.quantity > 1 && (
          <button onClick={() => dispatch(decrease(data))}>-</button>
        )}
        <span>{data.quantity}</span>
        <button onClick={() => dispatch(increase(data))}>+</button>
      </div>
    </div>
  );
}

export default BasketCard;
