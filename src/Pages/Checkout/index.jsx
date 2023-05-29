import React from "react";
import { Modal } from "@mui/material";

import "./Checkout.css";
import PageContainer from "../../Component/Layout/PageContainer";
import SectionContainer from "../../Component/Layout/SectionContainer";
import ActionButton from "../../Component/Action/ActionButton";
import { useData } from "../../Context/DataContext";
import { SelectAddressCard } from "../../Component/Card";
import AddressForm from "../../Component/Form/AddressForm";

function Checkout() {
  const { state, dispatch } = useData();

  const [isAddAddress, setIsAddAddress] = React.useState(false);
  const handleAddAddressOpen = () => setIsAddAddress(true);
  const handleAddAddressClose = () => setIsAddAddress(false);

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
    <PageContainer>
      <SectionContainer className="checkout_section">
        <h1 className="cart_section_head">CHECKOUT</h1>(
        <div className="cart_section_body">
          {/* CART PRICE */}
          <div className="cart_price">
            <h2 className="cart_price_title">Price Details</h2>
            <div className="cart_price_body">
              <p className="cart_price_body_item">
                <span className="cart_price_body_item_key">Price</span>
                <span className="cart_price_body_item_value">₹8,499</span>
              </p>
              <p className="cart_price_body_item">
                <span className="cart_price_body_item_key">Discount</span>
                <span className="cart_price_body_item_value">− ₹6,500</span>
              </p>
            </div>
            <div className="cart_price_footer">
              <p className="cart_price_footer_wrap">
                <span className="cart_price_footer_key">Total Amount</span>
                <span className="cart_price_footer_value">₹1,999</span>
              </p>
            </div>
            <div className="cart_price_action">
              <ActionButton>PLACE ORDER</ActionButton>
            </div>
          </div>
          {/* <EmptyCart /> */}
          <div className="cart_wrap">
            <h2 className="cart_list_head">ADDRESS DETAILS</h2>

            <div className="cart_list">
              {state.addressList.map((currentAddress) => {
                console.log(currentAddress);
                return (
                  <SelectAddressCard
                    {...currentAddress}
                    key={currentAddress._id}
                  />
                );
              })}
            </div>
            <ActionButton handleClick={() => handleAddAddressOpen(true)}>
              ADD NEW ADDRESS
            </ActionButton>
            <Modal
              open={isAddAddress}
              onClose={handleAddAddressClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <div style={styleOut}>
                <AddressForm closeAdd={handleAddAddressClose} />
              </div>
            </Modal>
          </div>
        </div>
        )
      </SectionContainer>
    </PageContainer>
  );
}

export default Checkout;
