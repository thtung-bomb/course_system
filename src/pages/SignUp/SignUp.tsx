import React from "react";
import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import logo from "@assets/images/logo.svg";
import mainlogo from "@assets/images/main_logo.svg";
import signbackground from "@assets/images/sign.svg";
// Styled Components

const GlobalStyle = createGlobalStyle`
  body {
    width: 100% !important;
    font-family: 'Roboto', sans-serif !important;
    display: contents !important;
    align-items: center !important;
    justify-content: center !important;
    min-height: 100vh;
    margin: 0;
    color-scheme: #ffffff !important;
  }
`;

const MainLogo = styled.div`
  margin: auto !important;
  padding: 50px 0;
  width: 100%;
  max-width: 134px !important;
  text-align: center;
`;

const SignUpBg = styled.div`
  background: #f7f7f7 !important;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center !important;
  justify-content: center;
  min-height: 100hv;

  &:before {
    content: "";
    position: absolute;
    background: url(${signbackground}) no-repeat center;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    pointer-events: none;
    background-size: cover;
    opacity: 0.04;
  }
`;

const SignForm = styled.div`
  position: relative;
  background: #fff;
  border-radius: 3px;
  padding: 50px 50px 30px;
  box-shadow: -0.083333333in 0.5pc 1.125pc -7px rgba(25, 42, 70, 0.13);
  width: 100%;
  margin-top: 0;
  max-width: 580px;
  text-align: center;

  h2 {
    font-size: 24px;
    margin-top: 0;
    font-weight: 600;
    color: #333;
    font-family: "Roboto", sans-serif;
  }

  p {
    margin-top: 25px;
    font-size: 14px;
    margin-bottom: 50px;
    font-weight: 400;
    color: #686768;
  }

  .form_italic a {
    color: #2522c1;
  }
`;

const LoginButton = styled.button`
  font-size: 14px;
  margin-top: 10px;
  font-weight: 500;
  color: #fff;
  background: #ed2a26;
  border-radius: 3px;
  text-align: center;
  border: 0;
  width: 100%;
  height: 40px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin-bottom: 10px;
  margin-left: 0;
  margin-right: 0;
  margin-top: 10px;
  padding: 0 30px;
  display: inline-block;

  &:hover {
    background: #333;
    color: #fff;
  }
`;

const FootForm = styled.p`
  padding: 37px 0 30px;
  border-bottom: 1px solid #efefef;
  margin-top: 0px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  color: #686f7a;
  text-align: center;

  a {
    color: #ed2a26;

    &:hover {
      color: #333 !important;
      text-decoration: underline !important;
    }
  }
`;

const SignFooter = styled.div`
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: #333;
  padding: 50px 0;
  width: 100%;

  img {
    width: 6%;
    margin-right: 10px;
    vertical-align: middle;
  }
`;

const InputWrapper = styled.div`
  .input {
    width: 100%;
    margin-bottom: 14px;
    input {
      width: 100%;
      padding-left: 1em;
      padding-right: 1em;
      height: 38px;
      font-size: 14px;
      font-weight: 400;
      font-family: "Roboto", sans-serif;
      border-radius: 1px;
      background: rgb(250, 249, 249) !important;
      color: #333;
      border: 1px solid rgb(241, 238, 238);
      margin-bottom: 1px !important;

      &:focus {
        border-color: #333;
        outline: none !important;
      }
      &:focus::placeholder {
        font-weight: 500;
        color: #333;
      }
    }
  }
`;

const CheckboxSign = styled.div`
  margin-top: 25px !important;
  text-align: left;
  color: #333;
  margin-top: 10px;
  margin-bottom: 10px;

  .checkbox_customer {
    display: flex;
    align-items: center;

    input[type="checkbox"] {
      display: none;
    }

    label {
      position: relative;
      padding-left: 25px;
      cursor: pointer;

      &::before {
        content: "";
        display: inline-block;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        background: #fff;
        border: 1.5px solid #2522c1;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }

      &::after {
        content: "\\2713";
        color: #ff0000;
        font-size: 16px;
        position: absolute;
        top: 51%;
        left: 9px;
        transform: translate(-50%, -55%);
        opacity: 0;
      }
    }

    input:checked + label::before {
      border-color: #ed2a26;
    }

    input:checked + label::after {
      opacity: 1;
    }
  }
`;

const SignUp = () => {
  return (
    <>
      <GlobalStyle />
      <SignUpBg>
        <div>
          <div>
            <MainLogo id="logo">
              <Link to="/">
                <img src={logo} alt="Cursus Logo" />
              </Link>
            </MainLogo>
          </div>
          <div>
            <SignForm>
              <h2>Welcome to Cursus</h2>
              <p>Sign Up and Start Learning!</p>
              <form>
                <InputWrapper>
                  <div className="input">
                    <input
                      className=" srch_explore"
                      type="text"
                      name="fullname"
                      id="id_fullname"
                      required
                      maxLength={64}
                      placeholder="Full Name"
                    />
                  </div>
                </InputWrapper>
                <InputWrapper>
                  <div className="input">
                    <input
                      className=" srch_explore"
                      type="email"
                      name="emailaddress"
                      id="id_email"
                      required
                      maxLength={64}
                      placeholder="Email Address"
                    />
                  </div>
                </InputWrapper>
                <InputWrapper>
                  <div className="input">
                    <input
                      className=" srch_explore"
                      type="password"
                      name="password"
                      id="id_password"
                      required
                      maxLength={64}
                      placeholder="Password"
                    />
                  </div>
                </InputWrapper>
                <CheckboxSign>
                  <div className="checkbox_customer">
                    <input
                      type="checkbox"
                      id="id_checkbox"
                      name="email_subscription"
                      tabIndex={0}
                      className="hidden"
                    />
                    <label htmlFor="id_checkbox">
                      I’m in for emails with exciting discounts and personalized
                      recommendations
                    </label>
                  </div>
                </CheckboxSign>
                <LoginButton type="submit">Next</LoginButton>
              </form>
              <FootForm>
                By signing up, you agree to our{" "}
                <Link to="/terms-of-use">Terms of Use</Link> and{" "}
                <Link to="/terms-of-use">Privacy Policy</Link>.
              </FootForm>
              <p className="form_italic">
                Already have an account? <Link to="/Login">Log In</Link>
              </p>
            </SignForm>
            <SignFooter>
              <img src={mainlogo} alt="Sign Logo" />© 2024{" "}
              <strong>Cursus</strong>. All Rights Reserved.
            </SignFooter>
          </div>
        </div>
      </SignUpBg>
    </>
  );
};

export default SignUp;
