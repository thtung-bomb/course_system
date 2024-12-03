import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdEmail, MdKey } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";
import Logo from "@assets/images/logo.svg";
import mainLogo from "@assets/images/main_logo.svg";
import {
  SignIn,
  Container,
  MainLogo,
  SignForm,
  LoginButton,
  LinkText,
  SubText,
  SignFooter,
  UiInput,
  SocialLinkButton,
  SignFormHeading,
  SignFormParagraph,
  // OrSeparator
  CheckboxSign,
  //  Mncheck,
  //  CheckboxInput,
  //  CheckboxLabel,

} from "./styled_login"; // Đảm bảo rằng đường dẫn chính xác đến nơi lưu trữ styled components
import { useAppDispatch } from "../../app/hooks";
import { authActions } from "../../features/auth/authSlice";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      authActions.login({
        username: email,
        password,
      }),
    );
    if (fLogin(email, password)) {
      navigate("/");
    } else {
      alert("Email or password is incorrect");
    }
  };

  const fLogin = (email: string, password: string) => {
    if (email === "admin@gmail.com" && password === "123") {
      return true;
    }
    return false;
  };

  return (
    <SignIn>
      <Container>
        <MainLogo id="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </MainLogo>
        <SignForm>
          <SignFormHeading>Welcome Back</SignFormHeading>
          <SignFormParagraph>Log In to Your Cursus Account!</SignFormParagraph>
          <SocialLinkButton className="color_btn_fb">
            <i>
              <FaFacebookF />
            </i>
            Continue with Facebook
          </SocialLinkButton>
          <SocialLinkButton className="color_btn_tw">
            <i>
              <FaTwitter />
            </i>
            Continue with Twitter
          </SocialLinkButton>
          <SocialLinkButton className="color_btn_go">
            <i>
              <FaGoogle />
            </i>
            Continue with Google
          </SocialLinkButton>
          {/* <OrSeparator /> */}
          <form onSubmit={handleSubmit} action="/signin" method="post">
            <UiInput>
              <MdEmail className="email_icon" />
              <input
                className="srch_explore"
                type="email"
                name="emailaddress"
                id="id_email"
                required
                maxLength={64}
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </UiInput>
            <UiInput>
              <MdKey className="key_icon" />
              <input
                className="srch_explore"
                type="password"
                name="password"
                id="id_password"
                required
                maxLength={64}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </UiInput>
            <CheckboxSign>
              <div className="checkbox_customer">
                <input
                  type="checkbox"
                  id="id_checkbox"
                  name="email_subscription"
                  tabIndex={0}
                  className="hidden"
                />
                <label htmlFor="id_checkbox">Remember me</label>
              </div>
            </CheckboxSign>
            <LoginButton type="submit">Sign In</LoginButton>
          </form>
          <LinkText>
            Or <Link to="/forgot-password">Forgot Password</Link>.
          </LinkText>
          <SubText>
            Don't have an account? <Link to="/sign-up">Sign Up</Link>
          </SubText>
        </SignForm>
        <SignFooter>
          <img src={mainLogo} alt="Footer Logo" />© 2024{" "}
          <strong>Cursus</strong>. All Rights Reserved.
        </SignFooter>
      </Container>
    </SignIn>
  );
}

export default Login;
