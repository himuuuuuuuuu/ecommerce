import React from "react";

import "./UserOrders.css";
import { useData } from "../../../../Context/DataContext";
import { OrderCard } from "../../../../Component";

function UserOrders() {
  const { state } = useData();

  return (
    <div className="orders">
      <h3 className="orders_head">ORDER SUMMARY</h3>
      {state.orderList.length === 0 && <h3>No Order Placed</h3>}
      {state.orderList.length > 0 &&
        state.orderList.map((current) => {
          return <OrderCard {...current} key={current.id} />;
        })}
    </div>
  );
}

export default UserOrders;
