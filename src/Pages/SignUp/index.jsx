import React from "react";
import "./SignUp.css";
import PageContainer from "../../Component/Layout/PageContainer";
import SectionContainer from "../../Component/Layout/SectionContainer";
import LoginImg from "../../Asset/Login/LoginLogo.png";
import ActionButton from "../../Component/Action/ActionButton";
import SignUpForm from "../../Component/Form/SignUpForm";

function SignUp() {
  return (
    <PageContainer>
      <SectionContainer className="signup_section">
        <div className="signup_section_wrap">
          <h1 className="signup_head">
            <span>SIGN UP</span>
            <img src={LoginImg} alt="login_img" />
          </h1>
          <div className="signup_body">
            <SignUpForm />
          </div>
        </div>
      </SectionContainer>
    </PageContainer>
  );
}

export default SignUp;
