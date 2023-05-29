import React, { useState } from "react";

import "./UserAddress.css";
import ActionButton from "../../../../Component/Action/ActionButton";
import AddressCard from "../../../../Component/Card/AddressCard";
import AddressForm from "../../../../Component/Form/AddressForm";
import { useData } from "../../../../Context/DataContext";
import { Modal } from "@mui/material";

function UserAddress() {
  const [isAddressForm, setIsAddressForm] = React.useState(false);
  const handleAddressOpen = () => setIsAddressForm(true);
  const handleAddressClose = () => setIsAddressForm(false);
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
        handleClick={() => handleAddressOpen(true)}
      >
        ADD NEW ADDRESS
      </ActionButton>

      <Modal
        open={isAddressForm}
        onClose={handleAddressClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={styleOut}>
          <AddressForm closeForm={handleAddressClose} />
        </div>
      </Modal>

      <div className="address_list">
        {state.addressList.map((currentAddress, index) => {
          return (
            <AddressCard
              {...currentAddress}
              key={index}
              closeEditForm={handleAddressClose}
              openEditForm={handleAddressOpen}
              isEdit={isAddressForm}
            />
          );
        })}
      </div>
    </div>
  );
}

export default UserAddress;
