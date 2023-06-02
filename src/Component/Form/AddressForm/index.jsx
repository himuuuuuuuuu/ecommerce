import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import ActionButton from "../../Action/ActionButton";

import "./AddressForm.css";
import { PostAddress, UpdateAddress } from "../../../Service/AddressService";
import { useAuth } from "../../../Context/AuthContext";
import { useData } from "../../../Context/DataContext";
function AddressForm(props) {
  const {
    _id,
    addressFormName: name,
    addressFormNumber: number,
    addressFormPin: pin,
    addressFormCity: city,
    addressFormAddress: address,
    addressFormAlternateNumber: alternate,
    addressFormState: state,
    isEdit,
    closeForm,
    closeAdd,
    closeEdit,
  } = props;
  const { token } = useAuth();
  const { dispatch } = useData();

  const [addressFormData, setAddressFormData] = useState({
    addressFormName: name ? name : "",
    addressFormNumber: number ? number : "",
    addressFormPin: pin ? pin : "",
    addressFormCity: city ? city : "",
    addressFormAddress: address ? address : "",
    addressFormAlternateNumber: alternate ? alternate : "",
    addressFormState: state ? state : "",
  });

  const stateList = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const handleEditAddress = async () => {
    try {
      const editAddressResponse = await UpdateAddress({
        address: { _id, ...addressFormData },
        addressId: _id,
        encodedToken: token,
      });
      console.log(editAddressResponse, "68");
      if (editAddressResponse.status == 201) {
        dispatch({
          type: "GET_ADDRESS",
          payload: editAddressResponse.data.address,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddressFormData = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setAddressFormData((prevAddressFormData) => {
      return { ...prevAddressFormData, [name]: value };
    });
  };

  const handleAddAddress = async () => {
    try {
      const addAddressResponse = await PostAddress({
        address: { _id: uuid(), ...addressFormData },
        encodedToken: token,
      });
      if (addAddressResponse.status == 201) {
        dispatch({
          type: "GET_ADDRESS",
          payload: addAddressResponse.data.address,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const submitAddressFormData = (event) => {
    event.preventDefault();
    isEdit ? closeEdit() : closeAdd();
    isEdit ? handleEditAddress() : handleAddAddress();
  };

  return (
    <form className="address_form" onSubmit={submitAddressFormData}>
      <input
        placeholder="Name"
        className="name_input"
        name="addressFormName"
        value={addressFormData.addressFormName}
        onChange={handleAddressFormData}
        required
      />
      <input
        placeholder="Contact Number"
        className="contact_input"
        name="addressFormNumber"
        value={addressFormData.addressFormNumber}
        onChange={handleAddressFormData}
        required
      />
      <input
        placeholder="Pin Code"
        className="pin_input"
        name="addressFormPin"
        value={addressFormData.addressFormPin}
        onChange={handleAddressFormData}
        required
      />
      <input
        placeholder="City"
        className="city_input"
        name="addressFormCity"
        value={addressFormData.addressFormCity}
        onChange={handleAddressFormData}
        required
      />
      <textarea
        placeholder="Address"
        className="address_input"
        name="addressFormAddress"
        value={addressFormData.addressFormAddress}
        onChange={handleAddressFormData}
        required
      />
      <input
        placeholder="Alternate Number"
        className="alternate_input"
        name="addressFormAlternateNumber"
        value={addressFormData.addressFormAlternateNumber}
        onChange={handleAddressFormData}
        required
      />
      <select
        className="state_input"
        name="addressFormState"
        value={addressFormData.addressFormState}
        onChange={handleAddressFormData}
      >
        <option defaultChecked style={{ textAlign: "center" }}>
          --- CHOOSE STATE ---
        </option>
        {stateList.map((currentState, index) => {
          return (
            <option
              value={currentState}
              key={index}
              style={{ textAlign: "center" }}
            >
              {currentState}
            </option>
          );
        })}
      </select>
      <div className="address_form_actions">
        <ActionButton
          className="address_form_add_btn"
          type="submit"
          value="SUBMIT"
        >
          ADD
        </ActionButton>

        <ActionButton
          className="address_form_reset_btn"
          btnType="reset"
          handleClick={() => {
            setAddressFormData({
              addressFormName: "",
              addressFormNumber: "",
              addressFormPin: "",
              addressFormCity: "",
              addressFormAddress: "",
              addressFormAlternateNumber: "",
              addressFormState: "",
            });
          }}
        >
          RESET
        </ActionButton>
        <ActionButton
          className="address_form_random_btn"
          btnType="button"
          handleClick={() => {
            setAddressFormData({
              addressFormName: "Vivek Bhatt",
              addressFormNumber: "8958399976",
              addressFormPin: "263153",
              addressFormCity: "Rudrapur",
              addressFormAddress: "Alliance",
              addressFormAlternateNumber: "9997654921",
              addressFormState: "Uttarakhand",
            });
          }}
        >
          RANDOM
        </ActionButton>
        <ActionButton
          className="address_form_cancel_btn"
          btnType="button"
          handleClick={() => (isEdit ? closeEdit() : closeAdd())}
        >
          CANCEL
        </ActionButton>
      </div>
    </form>
  );
}

export default AddressForm;
