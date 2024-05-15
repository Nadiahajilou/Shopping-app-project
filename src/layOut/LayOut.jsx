import React from "react";
import { Link } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

import styles from "./layout.module.css";
import { useSelector } from "react-redux";

function LayOut({ children }) {
  
  const state = useSelector((store) => store.carts);
  return (
    <>
      <header className={styles.header}>
        <Link to="/products">botoshop</Link>
        <Link to="/checkout">
          <div>
            <PiShoppingCartSimpleBold />
            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>developed by Nadia with ❤️</p>
      </footer>
    </>
  );
}

export default LayOut;
