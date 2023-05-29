import React from "react";

import "./SelectAddressCard.css";
import { Radio } from "@mui/material";

const SelectAddressCard = (props) => {
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
    <article className="select_address_card">
      <fieldset>
        <label className="select_address_wrap">
          <Radio
            // checked={selectedValue === "a"}
            // onChange={handleChange}
            // value="a"
            // name="radio-buttons"
            // inputProps={{ "aria-label": "A" }}
            sx={{
              color: "#fcaf17",
              "&.Mui-checked": {
                color: "#fcaf17",
              },
            }}
          />
          <div className="select_address_content">
            <h2 className="select_address_name">{addressFormName}</h2>
            <p className="select_address_location">
              {addressFormAddress}, {addressFormCity}, {addressFormState}
            </p>
            <p className="select_address_number">
              Mobile Number : +91{addressFormNumber}, +91
              {addressFormAlternateNumber}
            </p>
          </div>
        </label>
      </fieldset>
    </article>
  );
};

export default SelectAddressCard;
