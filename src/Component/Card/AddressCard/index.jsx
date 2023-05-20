import React from "react";
import "./AddressCard.css";
import ActionButton from "../../Action/ActionButton";

function AddressCard() {
  return (
    <div className="address_card">
      <div className="address_card_body">
        <p className="address_card_body_item">
          <span className="address_card_body_item_key">Name:</span>
          <span className="address_card_body_item_value">Vivek Bhatt</span>
        </p>
        <p className="address_card_body_item">
          <span className="address_card_body_item_key">Mobile Number:</span>
          <span className="address_card_body_item_value">9997339912</span>
        </p>
        <p className="address_card_body_item">
          <span className="address_card_body_item_key">Pincode:</span>
          <span className="address_card_body_item_value">263153</span>
        </p>
        <p className="address_card_body_item">
          <span className="address_card_body_item_key">Alternate Number:</span>
          <span className="address_card_body_item_value">9058068465</span>
        </p>
        <p className="address_card_body_item">
          <span className="address_card_body_item_key">State:</span>
          <span className="address_card_body_item_value">Uttarakhand</span>
        </p>
        <p className="address_card_body_item">
          <span className="address_card_body_item_key">Address:</span>
          <span className="address_card_body_item_value">
            Rudrapur, Udham Singh Nagar
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
