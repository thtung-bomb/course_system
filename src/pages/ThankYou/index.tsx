import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import styled from "styled-components";
import logo from "@assets/images/ct_logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const StyledContainer = styled(Container)`
  background-image: -webkit-radial-gradient(
    center center,
    circle cover,
    #333333,
    #0d1218 100%
  );
  color: white;
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .logo {
    margin-top: 100px;
  }

  .textH1 {
    margin-top: 80px;
    font-size: 130px;
    font-weight: 700;
  }

  .ABE {
    color: #ff7675;
  }

  .clickHere {
    color: #ed2a26;
    text-decoration: none;
  }

  .clickHere:hover {
    color: #ed2a26;
    text-decoration: underline;
    font-weight: 700;
  }

  .Linknav {
    border-top: 1px solid rgb(77, 77, 77);
    margin: 0 30px;
    margin-top: 100px;
    padding: 30px 0;
  }

  .linkFooter,
  .coppy {
    font-size: 13px;
    color: white;
    font-weight: 500;
    text-decoration: none;
  }

  .linkFooter:hover {
    text-decoration: underline;
  }
`;

const ThankYou = () => {
  return (
    <StyledContainer fluid>
      <Row>
        <Col className="logo">
          <Image width="150px" src={logo} fluid />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 className="textH1">Thank You</h1>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h4 className="textH3">Your Order is Confirmed!</h4>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <p>
            Top Print Your Booking Order No.{" "}
            <span className="ABE">#ABE-ME-12345678 </span> (Invoice) -{" "}
            <NavLink className="clickHere" to={"/invoice"}>
              Click Here
            </NavLink>
          </p>
        </Col>
      </Row>
      <Row className="Linknav">
        <Col className="d-flex justify-content-start gap-4">
          <NavLink className="linkFooter" to={"/about"}>
            About
          </NavLink>
          <NavLink className="linkFooter" to={"/press"}>
            Press
          </NavLink>
          <NavLink className="linkFooter" to={"/contact"}>
            Contact Us
          </NavLink>
          <NavLink className="linkFooter" to={"#"}>
            Advertise
          </NavLink>
          <NavLink className="linkFooter" to={"#"}>
            Developers
          </NavLink>
          <NavLink className="linkFooter" to={"#"}>
            Copyright
          </NavLink>
          <NavLink className="linkFooter" to={"#"}>
            Privacy
          </NavLink>
          <NavLink className="linkFooter" to={"#"}>
            Terms
          </NavLink>
        </Col>
        <Col className="text-end">
          <p className="coppy">&copy;2024 . All Rights Reserved.</p>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default ThankYou;
