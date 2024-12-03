import React, { useEffect, useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Dropdown from "react-bootstrap/Dropdown";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { BiMoon } from "react-icons/bi";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import ToggleSwitch from "@components/HeaderComponent/ToggleSwitch";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import { authActions } from "@features/auth/authSlice";

const lightTheme = {
  background: "white",
  color: "#333",
};

const darkTheme = {
  background: "#121212",
  color: "#e0e0e0",
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
  }
`;

const Avatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 10px;
  cursor: auto;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`;

const UserName = styled.h1`
  font-size: 14px;
  cursor: text;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  margin-bottom: 5px;
  color: #333;
  text-align: left;
  position: relative;
`;

const Email = styled.div`
  color: gray;
  font-size: 12px;
  cursor: text;
`;

const ProfileLink = styled(Link)`
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  padding: 0px 0px 30px 0px;
  text-decoration: none;
  color: #333;
  &:hover {
    color: red;
  }
`;

const ProfileButtonStyle = styled.img`
  width: 035px;
`;

const Menu = styled(Dropdown.Menu)`
  width: 230px;
`;

const Tick = styled(IoCheckmarkCircleOutline)`
  color: blue;
  border-radius: 1px;
  margin-bottom: 5px;
`;

// const Item1 = styled(Dropdown.Item)`
//   display: flex;
//   white-space: unset;
//   &:hover {
//     background-color: #ffecec;
//   }
// `;

const Item = styled(Dropdown.Item)`
  display: block;
  padding: 12px;
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  color: #686f7a;
  font-family: "Roboto", sans-serif;
  text-align: inherit;
  text-decoration: none;
  white-space: nowrap;
  border: 0;
  &:hover {
    background-color: #ffecec;
  }
`;

const Header = styled.div`
  cursor: auto;
  padding: 15px;
  border-bottom: 1px solid #e3dede;
  .Item1 {
    display: flex;
    white-space: unset;
  }
  &:hover {
    background-color: #ffecec;
  }
`;

const DropdownIcon = styled(Dropdown.Toggle)`
  margin-top: 5px;
  height: 50px;
  &::after {
    display: none;
  }
`;

const BiMoonStyle = styled(BiMoon)`
  width: 15px;
  position: absolute;
  height: 25px;
  left: 6px;
`;

const Border = styled.div`
  background-color: pink;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  position: relative;
  margin-right: 10px;
`;

const Body = styled(Dropdown.Item)`
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #e3dede;
  &:focus {
    background-color: white;
  }
  &:hover {
    background-color: white;
  }
  &:active {
    color: #333;
    background-color: white;
  }
  a {
    margin-left: auto;
  }
`;

const ProfileAboutUs = () => {
  const [isNightMode, setIsNightMode] = useState(false);
  const currentUser = useAppSelector(
    (state) => state.rootReducer.auth.currentUser,
  );

  const [id, setId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    if (currentUser) {
      setId(currentUser.id || "");
      setName(currentUser.name || "");
      setImage(currentUser.image || "");
      setEmail(currentUser.email || "");
    }
  }, [currentUser]);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };

  const dispatch = useAppDispatch();

  const handleSignOut = () => {
    dispatch(authActions.logout());
  };

  const handleItemClick = (event) => {
    event.preventDefault();
    console.log("Clicked on dropdown item");
    // Thêm các xử lý logic khác ở đây
  };

  return (
    <ThemeProvider theme={isNightMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Dropdown>
        <DropdownIcon
          id="dropdown-icon-toggle"
          style={{
            cursor: "pointer",
            backgroundColor: "white",
            color: "#333",
            border: "none",
            fontSize: "25px",
          }}
        >
          <ProfileButtonStyle src="https://gambolthemes.net/html-items/cursus-new-demo/images/hd_dp.jpg" />
        </DropdownIcon>
        <Menu>
          <Header>
            <div
              className="Item1"
              onClick={(event) => {
                event.stopPropagation();
                handleItemClick(event);
              }}
            >
              <Avatar
                src="https://gambolthemes.net/html-items/cursus-new-demo/images/hd_dp.jpg"
                alt="Avatar"
              />
              <UserInfo>
                <UserName>
                  {name} <Tick />
                </UserName>
                <Email>{email}</Email>
              </UserInfo>
            </div>
            <ProfileLink to="/profile-detail">
              View Instructor Profile
            </ProfileLink>
          </Header>
          <Body
            onClick={(event) => {
              event.stopPropagation();
              handleItemClick(event);
            }}
          >
            <Border>
              <BiMoonStyle />
            </Border>{" "}
            Night Mode
            <a>
              <ToggleSwitch />
            </a>
          </Body>
          <Item>Cursus dashboard</Item>
          <Item onClick={handleSignOut}>Sign Out</Item>
        </Menu>
      </Dropdown>
    </ThemeProvider>
  );
};

export default ProfileAboutUs;
