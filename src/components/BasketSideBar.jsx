import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa6";
import { BsPatchCheck } from "react-icons/bs";
import styles from "./basketsidebar.module.css";
import { useDispatch } from "react-redux";
import { chechOut } from "../features/carts/cartsSlice";

function BasketSideBar({ state }) {
  const dispatch=useDispatch()
  return (

      <div className={styles.sidebar}>
        <div>
          <TbChecklist />
          <p>total:</p>
          <span>{state.totalPrice} $</span>
        </div>
        <div>
          <FaHashtag />
          <p>quantity:</p>
          <span>{state.itemsCounter}</span>
        </div>
        <div>
          <BsPatchCheck />
          <p>status:</p>
          <span>{!state.checkOut && <p>pending...</p>}</span>
        </div>
        <button onClick={() => dispatch(chechOut())}> chechout</button>
      </div>
   
  );
}

export default BasketSideBar;
