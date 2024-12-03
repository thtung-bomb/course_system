import React from "react";
import { IoIosMenu } from "react-icons/io";
import { IoCartOutline, IoCheckmarkCircleOutline } from "react-icons/io5";
import styled from "styled-components";
import { IoMdSearch } from "react-icons/io";
import MailPopup from "./HeaderComponent/MailPopup";
import NotificationPopup from "./HeaderComponent/NotificationPopup";
import Profile from "./HeaderComponent/Profile";
import { Link } from "react-router-dom";
import Toolbar from "./Toolbar";
import logo from "../assets/images/logo.svg";
import ProfileAboutUs from "@pages/AboutUs/components/ProfileAboutUs";

// Styled components
const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-bottom: 1px solid #ddd;
  width: 100%;
  height: 60px;
  position: fixed;
  z-index: 10;
`;

const HeaderAboutUsStyle = styled(HeaderStyle)`
  padding: 0 39px;
  top: 0;
  height: 60px;
  box-shadow: 0px 0.052083333in 11.25pt -9px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
`;

const WrapLogoLink = styled(Link)``;

const Logo = styled.img`
  width: 135px;
  height: 32px;
  margin-left: 20px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;

  position: relative;
`;

const SearchIcon = styled(IoMdSearch)`
  color: gray;
  position: absolute;
  left: 64px;
`;

const Search = styled.input`
  margin-left: 50px;
  border: none;
  outline: none;
  width: 350px;
  height: 33px;
  flex: 1;
  padding: 5px;
  font-size: 13px;
  padding-left: 35px;
  background-color: #f7f7f7;
  border-radius: 2px;
  color: #333;
  &::placeholder {
    color: #c6c6c6;
  }
  &:focus::placeholder {
    color: #686f7a;
  }
  &:focus ~ ${SearchIcon} {
    color: #333;
  }
`;

const MenuIcon = styled.button`
  width: 60px;
  height: 60px;
  text-align: center;
  display: block;
  padding: 0;
  background: #ed2a26;
  color: white;
  border: 0;
  &:hover {
    background-color: #9c0d0d;
  }
`;

const ButtonStyle = styled.a`
  display: inline-block;
  background-color: #ed2a26;
  text-decoration: none;
  cursor: pointer;
  padding: 9px 15px;
  margin-right: 10px;
  color: white;
  font-size: 14px;
  font-weight: 550;
  font-family: "Roboto", sans-serif;
  border-radius: 3px;
  height: 35px;
  padding-top: 11px;
  &:hover {
    background-color: black;
  }
`;

const IconList = styled.ul`
  display: flex;
  height: 58px;
`;
const IconLink = styled(Link)`
  text-decoration: none;
`;
const IconCard = styled.li`
  border: 0;
  cursor: pointer;
  justify-content: center;
  background-color: white;
  display: flex;
  align-items: center;
  &:before {
    content: "2";
    width: 16px;
    font-size: 8px;
    border-radius: 50%;
    display: flex;
    height: 16px;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: red;
    bottom: 10px;
    left: 28px;
    color: white;
    z-index: 1;
  }
`;

const IconMail = styled.li`
  border: 0;
  margin-left: -5px;
  padding: 0px;
  background-color: white;
  display: flex;
  align-items: center;
  &:before {
    content: "3";
    width: 16px;
    font-size: 8px;
    border-radius: 50%;
    display: flex;
    height: 16px;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: red;
    top: -10px;
    right: -42px;
    color: white;
    z-index: 1;
  }
`;

const IconNotification = styled.li`
  display: flex;
  align-items: center;
  margin-left: -15px;
  border: 0;
  background-color: white;
  &:before {
    content: "3";
    width: 16px;
    font-size: 8px;
    border-radius: 50%;
    display: flex;
    height: 16px;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: red;
    top: -10px;
    right: -42px;
    color: white;
    z-index: 1;
  }
`;

const IconProfile = styled.li`
  border: 0;
  background-color: white;
`;

const Header2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: 10px;
`;

const Card = styled(IoCartOutline)`
  font-size: 25px;
  width: 24px;
  height: 24px;
  position: relative;
  color: gray;
  &:hover {
    color: #333;
  }
`;

const IoIosMenuStyle = styled(IoIosMenu)`
  color: #fff;
  width: 22px;
  height: 22px;
  margin: 0px 4.4px;
`;

const BacktoCursus = styled.button`
  &:hover {
    color: #ffffff;
    background-color: #333333;
  }
  color: #333333;
  background-color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  border-radius: 20px;
  height: 38px;
  width: 140px;
  border: 1px solid #efefef;
`;

// Combined Header Component
const Header = ({ isToolbarOpen, toggleToolbar, type }) => {
  if (type === "custom") {
    return (
      <HeaderAboutUsStyle>
        <a href="/">
          <BacktoCursus>Back To Cursus</BacktoCursus>
        </a>
        <Link to="/">
          <Logo src={logo} />
        </Link>
        <ProfileAboutUs />
      </HeaderAboutUsStyle>
    );
  } else if (type === "main") {
    return (
      <HeaderStyle>
        <HeaderContent>
          <MenuIcon onClick={toggleToolbar}>
            <IoIosMenuStyle />
          </MenuIcon>
          <WrapLogoLink to="/">
            <Logo src={logo} alt="Logo" />
          </WrapLogoLink>
        </HeaderContent>

        <SearchContainer>
          <Search
            type="text"
            placeholder="Search for Tuts Videos, Tutors, Tests and more..."
          />
          <SearchIcon />
        </SearchContainer>
        <Header2>
          <ButtonStyle>Create New Course</ButtonStyle>
          <IconList>
            <IconCard>
              <IconLink to="/shopping-cart">
                <Card />
              </IconLink>
            </IconCard>

            <IconMail>
              <MailPopup />
            </IconMail>
            <IconNotification>
              <NotificationPopup />
            </IconNotification>
            <IconProfile>
              <Profile />
            </IconProfile>
          </IconList>
        </Header2>
        <Toolbar isToolbarOpen={isToolbarOpen} />
      </HeaderStyle>
    );
  }
};

export default Header;
