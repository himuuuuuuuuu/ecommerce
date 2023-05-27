import React from "react";
import "./AddressCard.css";
import ActionButton from "../../Action/ActionButton";

function AddressCard(props) {
  console.log(props);
  const {
    _id,
    addressFormName,
    addressFormNumber,
    addressFormPin,
    addressFormCity,
    addressFormAddress,
    addressFormAlternateNumber,
    addressFormState,
  } = props;
  return (
    <div className="address_card">
      <div className="address_card_body">
        <p className="address_card_body_item">
          <span className="address_card_body_item_key">Name:</span>
          <span className="address_card_body_item_value">
            {addressFormName}
          </span>
        </p>
        <p className="address_card_body_item">
          <span className="address_card_body_item_key">Mobile Number:</span>
          <span className="address_card_body_item_value">
            {addressFormNumber}
          </span>
        </p>
        <p className="address_card_body_item">
          <span className="address_card_body_item_key">Pincode:</span>
          <span className="address_card_body_item_value">{addressFormPin}</span>
        </p>
        <p className="address_card_body_item">
          <span className="address_card_body_item_key">Alternate Number:</span>
          <span className="address_card_body_item_value">
            {addressFormAlternateNumber}
          </span>
        </p>
        <p className="address_card_body_item">
          <span className="address_card_body_item_key">State:</span>
          <span className="address_card_body_item_value">
            {addressFormCity}
          </span>
        </p>
        <p className="address_card_body_item">
          <span className="address_card_body_item_key">Address:</span>
          <span className="address_card_body_item_value">
            {addressFormAddress}
          </span>
        </p>
      </div>
      <div className="address_card_actions">
        <ActionButton className="address_card_edit">Edit</ActionButton>
        <ActionButton className="address_card_delete">Delete</ActionButton>
      </div>
    </div>
  );
}

export default AddressCard;
