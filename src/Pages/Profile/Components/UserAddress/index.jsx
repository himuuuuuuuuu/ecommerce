import React, { useState } from "react";

import "./UserAddress.css";
import ActionButton from "../../../../Component/Action/ActionButton";
import AddressCard from "../../../../Component/Card/AddressCard";
import AddressForm from "../../../../Component/Form/AddressForm";
import { useData } from "../../../../Context/DataContext";
import { Modal } from "@mui/material";

function UserAddress() {
  const [isAddAddress, setIsAddAddress] = React.useState(false);
  const handleAddAddressOpen = () => setIsAddAddress(true);
  const handleAddAddressClose = () => setIsAddAddress(false);
  const { state } = useData();

  const styleOut = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    backgroundColor: "#2b2b2b",
    border: "2px solid #000",
    boxShadow: 24,
    padding: "16px",
  };

  return (
    <div className="address">
      <ActionButton
        style={{ backgroundColor: "lightgreen" }}
        handleClick={() => handleAddAddressOpen(true)}
      >
        ADD NEW ADDRESS
      </ActionButton>

      <Modal
        open={isAddAddress}
        onClose={handleAddAddressClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={styleOut}>
          <AddressForm closeAdd={handleAddAddressClose}/>
        </div>
      </Modal>

      <div className="address_list">
        {state.addressList.map((currentAddress, index) => {
          return (
            <AddressCard
              {...currentAddress}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default UserAddress;
