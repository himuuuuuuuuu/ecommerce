import React from "react";

import "./UserOrders.css";
import { useAuth } from "../../../../Context/AuthContext";
import { useData } from "../../../../Context/DataContext";
import OrderCard from "../../../../Component/Card/OrderCard";

function UserOrders() {
  // const {state} = useAuth();
  const { state } = useData();
  console.log(state.orderList, "10");
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
