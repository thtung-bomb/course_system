import styled from "styled-components";
import background from "@assets/images/sign.svg"

export const SignIn = styled.div`
  background: #f7f7f7 !important;
  font-family: "Roboto", sans-serif;
  position: relative;
  width: 100%;
  display: flex !important;;
  align-items: center;
  justify-content: center;

  &:before {
    content: "";
    position: absolute;
    background: url(${background}) no-repeat center;
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

export const Container = styled.div`
  min-height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MainLogo = styled.div`
  margin: auto !important;
  padding: 50px 0;
  width: 100%;
  max-width: 134px !important;
  text-align: center !important;
`;

export const SignForm = styled.div`
  position: relative;
  background: #fff;
  border-radius: 3px;
  padding: 50px 50px 30px;
  box-shadow: -0.083333333in 0.5pc 1.125pc -7px rgba(25, 42, 70, .13);
  flex: 1;
  width: 100% ;
  text-align: center;
  max-width: 580px;
`;


export const CheckboxSign = styled.div`
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




export const LoginButton = styled.button`
  font-size: 14px;
  margin-top: 20px;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
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
  padding: 0 30px;
  display: inline-block;

  &:hover {
    color: #fff;
    background: #333;
  }
`;

export const LinkText = styled.p`
  padding: 47px 0 30px;
  margin-bottom: 0 !important;
  border-bottom: 1px solid #efefef;

  a {
    color: #ed2a26;

    &:hover {
      color: #333 !important;
      text-decoration: underline !important;
    }
  }
`;

export const SubText = styled.p`
  a {
    color: #ed2a26;

    &:hover {
      color: #333 !important;
      text-decoration: underline !important;
    }
  }
`;

export const SignFooter = styled.div`
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  color: #333;
  padding: 50px 0;
  display: block;
  width: 100%;

  img {
    width: 6%;
    margin-right: 10px;
    vertical-align: middle;
  }
`;

export const UiInput = styled.div`
  font-size: 14px !important;
  width: 100%;
  position: relative;
  margin-top: 10px;

  .email_icon, .key_icon {
    position: absolute;
    left: 20px;
    top: 46%;
    transform: translateY(-50%);
    color: gray;
    font-size: 20px;
  }

  &:focus-within .email_icon, &:focus-within .key_icon {
    color: #333;
    font-weight: bold;
  }

  input {
    width: 100%;
    padding-left: 4.2em !important;
    padding-right: 1em !important;
    height: 40px;
    font-size: 14px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    border-radius: 1px;
    background: rgb(250, 249, 249) !important;
    color: #333 !important;
    border: 1px solid rgb(241, 238, 238);

    &:focus {
      padding-left: 4.2em !important;
      padding-right: 1em !important;   
    }
    &:focus::placeholder {
        font-weight: 500;
        color: #333;
      }
    
  }
  textarea{
    width: 100%;
    padding: 1em !important;
    height: 78px;
    font-size: 14px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    border-radius: 1px;
    background: rgb(250, 249, 249) !important;
    color: #333 !important;
    border: 1px solid rgb(193, 191, 191);
    &:focus {
      padding: 1em !important;
      border: 1px solid rgb(226, 224, 224);
    }
    &:focus::placeholder {
        font-weight: 500;
        color: #333;
      }
  }
`;

export const SocialLinkButton = styled.button`
  font-size: 14px;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  color: #fff;
  background: #efefef;
  border-radius: 3px;
  text-align: center;
  border: 0;
  width: 100%;
  height: 40px;
  cursor: pointer;
  margin: 10px 0 0 0;


  i {
    margin-right: 10px;
    font-size: 100%;
    vertical-align: middle;
  }

  &.color_btn_fb {
    background: #3b5998 !important;
  }

  &.color_btn_tw {
    background: #1da1f2 !important;
  }

  &.color_btn_go {
    background: #34a853 !important;
  }
`;

export const SignFormHeading = styled.h2`
  font-size: 24px;
  margin-top: auto;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
  color: #333;
  text-align: center;
`;

export const SignFormParagraph = styled.p`
  font-size: 14px;
  margin-bottom: 42px;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  color: #686f7a;
  text-align: center;
  line-height: 26px;
`;

export const OrSeparator = styled.div`
  margin: 20px 0;
  text-align: center;
  position: relative;

  &:before {
    content: '';
    display: inline-block;
    background: #fff;
    position: relative;
    padding: 0 15px;
    z-index: 1;
  }

  &:after {
    content: '';
    display: block;
    background: #ccc;
    height: 1px;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    z-index: 0;
  }
`;
export const Textnote = styled.p`
  font-size: 12px;
  margin-bottom: 5px;
  margin-top: 5px;
  font-family: 'Roboto', sans-serif;
  color: #686f7a;
  text-align: left;
`;
