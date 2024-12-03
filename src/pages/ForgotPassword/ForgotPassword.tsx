//import React from 'react';
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import styled from "styled-components";
import logo from "@assets/images/logo.svg";
import mainlogo from "@assets/images/main_logo.svg";
import signbackground from "@assets/images/sign.svg";
const SignInUpBg = styled.div`
  background: #f7f7f7 !important;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  &:before {
    content: "";
    background: url(${signbackground}) no-repeat center;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: absolute;
    pointer-events: none;
    background-size: cover;
    opacity: 0.04;
  }
`;

const MainLogo = styled.div`
  margin: auto !important;
  padding: 50px 0;
  width: 100%;
  max-width: 134px;
  text-align: center !important;
`;

const SignForm = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  max-width: 100%;
  padding: 40px 30px 30px 30px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  z-index: 1;
  margin-top: -20px;

  h2 {
    font-size: 24px;
    margin-bottom: 17px;
    font-weight: 600;
    font-family: "Roboto", sans-serif;
    color: #333;
    text-align: center;
  }

  p {
    font-size: 14px;
    margin-bottom: 47px;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    color: #686f7a;
    text-align: center;
    line-height: 26px;
  }
`;

const LoginButton = styled.button`
  font-size: 14px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  color: #fff;
  background: #ed2a26;
  border: 0;
  text-align: center;
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  margin-top: 10px;
  display: inline-block;
  transition: background 0.3s ease;

  &:hover {
    color: #fff;
    background: #333;
  }
`;

const FootForm = styled.p`
  padding: 4px 0 10px;
  margin-bottom: 0 !important;

  a {
    color: #4183c4;
    text-decoration: none;
    margin-left: 2px;

    &:hover {
      color: #333 !important;
      text-decoration: underline !important;
    }
  }
`;

const SignFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px 0;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  color: #686f7a;
  z-index: 1;
  transition: all 0.3s ease;
  margin-bottom: 90px;

  img {
    width: 100%;
    margin-right: 10px;
    size: 21px !important;
    vertical-align: middle;
    max-width: 30px !important;
  }
`;

const UIInput = styled.div`
  font-size: 14px !important;
  width: 100%;
  overflow: visible;
  border-radius: 1px !important;
  position: relative;

  input {
    width: 100%;
    padding-left: 3.5em;
    margin-top: 30px !important;
    margin-bottom: 20px;
    height: 40px;
    font-size: 14px;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    border-radius: 1px !important;
    background: rgb(250, 249, 249) !important;
    border: 1px solid rgb(229, 220, 220) !important;
    color: #333;
    transition: font-weight 0.2s ease-in-out;

    &:focus {
      border: 1px solid #e5e5e5 !important;
      box-shadow: inset 0px 1px 4px rgba(0, 0, 0, 0.02) !important;
    }

    &::placeholder {
      color: #b0b3b8;
      font-size: 14px;
      font-weight: 400;
      font-family: "Roboto", sans-serif;
      transition: font-weight 0.2s ease-in-out;
    }

    &:focus::placeholder {
      font-weight: 500;
      color: #5d636b;
    }
  }

  .email_icon {
    position: absolute;
    left: 16px;
    top: 55%;
    transform: translateY(-50%);
    color: gray;
    font-size: 20px;
    vertical-align: middle;
    transition: all 0.2s ease-in-out;

    input:focus-within & {
      color: #333;
      font-weight: bold;
    }
  }
`;

const ForgotPassword = () => {
  return (
    <SignInUpBg>
      <div>
        <div>
          <MainLogo>
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </MainLogo>
        </div>
        <div>
          <SignForm>
            <h2>Request a Password Reset</h2>
            <form>
              <div>
                <UIInput>
                  <MdEmail className="email_icon" />
                  <input
                    type="email"
                    name="emailaddress"
                    id="id_email"
                    required
                    maxLength={64}
                    placeholder="Email Address"
                  />
                </UIInput>
              </div>
              <LoginButton type="submit">Reset Password</LoginButton>
            </form>
            <FootForm>
              Go Back
              <Link to="/login"> Sign In</Link>
            </FootForm>
          </SignForm>
          <SignFooter>
            <img src={mainlogo} alt="Footer Logo" />© 2024{" "}
            <strong>Cursus</strong>. All Rights Reserved.
          </SignFooter>
        </div>
      </div>
    </SignInUpBg>
  );
};

export default ForgotPassword;
