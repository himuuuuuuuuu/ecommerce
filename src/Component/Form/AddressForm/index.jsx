import React from "react";
import ActionButton from "../../Action/ActionButton";

import "./AddressForm.css";

function AddressForm() {
  return (
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
        <ActionButton className="address_form_reset_btn">RESET</ActionButton>
        <ActionButton className="address_form_random_btn">RANDOM</ActionButton>
        <ActionButton className="address_form_cancel_btn">CANCEL</ActionButton>
      </div>
    </form>
  );
}

export default AddressForm;
