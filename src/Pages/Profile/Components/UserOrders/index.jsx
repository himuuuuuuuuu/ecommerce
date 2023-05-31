import React from "react";

import "./UserOrders.css";
import { useAuth } from "../../../../Context/AuthContext";
import { useData } from "../../../../Context/DataContext";

function UserOrders() {
  // const {state} = useAuth();
  const { state } = useData();
  console.log(state.orderList, "10");
  return (
    <div className="orders">
      {state.orderList.length === 0 && <h3>No Order Placed</h3>}
      {state.orderList.length > 0 &&
        state.orderList.map((current) => {
          return (
            <div key={current.id}>
              <p>
                <span>Payment ID</span>
                <span>{current.id}</span>
              </p>
              <p>
                <span>Amount Paid</span>
                <span>{current.amount}</span>
              </p>
              <p>
                <span>Address</span>
                <span>{current.address.addressFormAddress}</span>
              </p>
              <p>
                <span>Mobile</span>
                <span>{current.address.addressFormNumber}</span>
              </p>
            </div>
          );
        })}
    </div>
  );
}

export default UserOrders;
