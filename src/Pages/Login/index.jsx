import React from "react";
import "./Login.css";
import PageContainer from "../../Component/Layout/PageContainer";
import SectionContainer from "../../Component/Layout/SectionContainer";
import LoginImg from "../../Asset/Login/LoginLogo.png";
import ActionButton from "../../Component/Action/ActionButton";
import ModalWrap from "../../Component/ModalWrap";
import SignUpForm from "../../Component/Form/SignUpForm";
import LogInForm from "../../Component/Form/LogInForm";

function Login() {
  return (
    <PageContainer>
      <SectionContainer className="login_section">
        <div className="login_section_wrap">
          <h1 className="login_head">
            <span>LOGIN</span>
            <img src={LoginImg} alt="login_img" />
          </h1>
          <div className="login_body">
            <div className="login_dialog">
              <h3 className="login_dialog_title">You are not logged in!</h3>
              <ModalWrap actionIcon={"LOG IN"}>
                <LogInForm />
              </ModalWrap>
            </div>
            <div className="signup_dialog">
              <h3 className="signup_dialog_title">Not have an account?</h3>
              <ModalWrap actionIcon={"SIGN UP"}>
                <SignUpForm />
              </ModalWrap>
            </div>
          </div>
        </div>
      </SectionContainer>
    </PageContainer>
  );
}

export default Login;
