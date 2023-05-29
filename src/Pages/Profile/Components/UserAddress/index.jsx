import React, { useState } from "react";

import "./UserAddress.css";
import ActionButton from "../../../../Component/Action/ActionButton";
import AddressCard from "../../../../Component/Card/AddressCard";
import AddressForm from "../../../../Component/Form/AddressForm";
import { useData } from "../../../../Context/DataContext";

function UserAddress() {
  const [isNewAddress, setIsNewAddress] = useState(false);
  const [isEditAddress, setIsEditAddress] = useState(false);
  const { state } = useData();

  return (
    <div className="address">
      {!isNewAddress && (
        <ActionButton
          style={{ backgroundColor: "lightgreen" }}
          handleClick={() => setIsNewAddress(true)}
        >
          ADD NEW ADDRESS
        </ActionButton>
      )}
      {isNewAddress && <AddressForm closeAddressForm={setIsNewAddress} />}
      <div className="address_list">
        {state.addressList.map((currentAddress, index) => {
          return <AddressCard {...currentAddress} key={index} />;
        })}
      </div>
    </div>
  );
}

export default UserAddress;
