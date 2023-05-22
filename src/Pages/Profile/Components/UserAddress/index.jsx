import React from "react";

import "./UserAddress.css";
import ActionButton from "../../../../Component/Action/ActionButton";
import AddressCard from "../../../../Component/Card/AddressCard";
import AddressForm from "../../../../Component/Form/AddressForm";

function UserAddress() {
  return (
    <div className="address">
      <ActionButton style={{ backgroundColor: "lightgreen" }}>
        ADD NEW ADDRESS
      </ActionButton>
      <AddressForm />
      <div className="address_list">
        <AddressCard />
      </div>
    </div>
  );
}

export default UserAddress;
