import React from "react";

import "./UserAddress.css";
import ActionButton from "../../../../Component/Action/ActionButton";
import AddressCard from "../../../../Component/Card/AddressCard";
import AddressForm from "../../../../Component/Form/AddressForm";
import { useData } from "../../../../Context/DataContext";

function UserAddress() {
const {state} = useData();

  return (
    <div className="address">
      <ActionButton style={{ backgroundColor: "lightgreen" }}>
        ADD NEW ADDRESS
      </ActionButton>
      <AddressForm />
      <div className="address_list">
        {state.addressList.map((currentAddress, index) => {
          return <AddressCard {...currentAddress} key={index}/>
        })}
      </div>
    </div>
  );
}

export default UserAddress;
