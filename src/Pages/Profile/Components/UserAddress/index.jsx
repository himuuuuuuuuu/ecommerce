import React from "react";

import "./UserAddress.css";
import ActionButton from "../../../../Component/Action/ActionButton";
import ModalWrap from "../../../../Component/ModalWrap";
import AddressCard from "../../../../Component/Card/AddressCard";

function UserAddress() {
  return (
    <div className="address">
      <ModalWrap actionIcon={"ADD NEW ADDRESS"} bgColor="lightgreen">
        <form className="address_form">
          <input placeholder="Name" className="name_input" />
          <input placeholder="Contact Number" className="contact_input" />
          <input placeholder="Pin Code" className="pin_input" />
          <input placeholder="City" className="city_input" />
          <textarea placeholder="Address" className="address_input" />
          <input placeholder="Alternate Number" className="alternate_input" />
          <select className="state_input">
            <option>Uttarakhand</option>
            <option>Rajasthan</option>
            <option>Maharastra</option>
            <option>Gujrat</option>
          </select>
          <div className="address_form_actions">
            <ActionButton className="address_form_add_btn">ADD</ActionButton>
            <ActionButton className="address_form_reset_btn">
              RESET
            </ActionButton>
            <ActionButton className="address_form_random_btn">
              RANDOM
            </ActionButton>
            <ActionButton className="address_form_cancel_btn">
              CANCEL
            </ActionButton>
          </div>
        </form>
      </ModalWrap>
      <div className="address_list">
        <AddressCard />
      </div>
    </div>
  );
}

export default UserAddress;
