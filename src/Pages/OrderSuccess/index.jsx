import React from "react";
import "./OrderSuccess.css";

import { PageContainer, SectionContainer } from "../../Component";

function OrderSuccess() {
  return (
    <PageContainer>
      <SectionContainer className="order_success_section">
        <h3 className="order_success_head">ORDER PLACED</h3>
        <div className="order_success_body">
          <p>Your payment is complete</p>
          <p>Sending you to Order Details</p>
        </div>
      </SectionContainer>
    </PageContainer>
  );
}

export default OrderSuccess;
