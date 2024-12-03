import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/ct_logo.svg";
import {
  Container,
  BgChildren,
  MainLogo,
  TitleError,
  MessageError,
  ReturnHomePage,
  FooterSimple,
  FooterLink,
  FooterText
} from "./404Style";

const NotFoundPage = () => {
  return (
    <Container>
      <BgChildren>
        <MainLogo>
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </MainLogo>
        <TitleError>404</TitleError>
        <MessageError>
          The page you were looking for could not be found.
        </MessageError>
        <Link to="/">
        <ReturnHomePage>Go to Homepage</ReturnHomePage>
        </Link>
      </BgChildren>
      <FooterSimple>
        <FooterLink href="/#">About</FooterLink>
        <FooterLink href="/#">Press</FooterLink>
        <FooterLink href="/#">Contact Us</FooterLink>
        <FooterLink href="/#">Advertise</FooterLink>
        <FooterLink href="/#s">Developers</FooterLink>
        <FooterLink href="/#">Copyright</FooterLink>
        <FooterLink href="/#">Privacy Policy</FooterLink>
        <FooterLink href="/#">Terms</FooterLink>
        <FooterText>© 2024 Cursus. All Rights Reserved.</FooterText>
      </FooterSimple>
    </Container>
  );
};

export default NotFoundPage;
