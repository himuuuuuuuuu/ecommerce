import React from "react";

import "./Cart.css";
import PageContainer from "../../Component/Layout/PageContainer";
import SectionContainer from "../../Component/Layout/SectionContainer";
import EmptyCart from "../../Component/Card/EmptyCart";
import ModalWrap from "../../Component/ModalWrap";

function Cart() {
  return (
    <PageContainer>
      <SectionContainer>
        <EmptyCart />
      </SectionContainer>
    </PageContainer>
  );
}

export default Cart;
