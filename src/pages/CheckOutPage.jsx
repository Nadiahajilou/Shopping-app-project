import React from "react";

import BasketCard from "../components/BasketCard";
import BasketSideBar from "../components/BasketSideBar";
import { useSelector } from "react-redux";

function CheckOutPage() {
  const state = useSelector((store) => store.carts);

  if (!state.itemsCounter) return <p>empty</p>;
  return (
    <div style={{ display: "flex" }}>
      <div>
        <BasketSideBar state={state} />
      </div>
      <div style={{ width: "100%" }}>
        {state.selectedItems.map((product) => (
          <BasketCard key={product.id} data={product} state={state} />
        ))}
      </div>
    </div>
  );
}

export default CheckOutPage;
