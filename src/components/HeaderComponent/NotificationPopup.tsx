import React from "react";
import { DropdownToggle } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import styled from "styled-components";
import { FaRegBell } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const MessageContent = styled.div``;

const MessageHeader = styled.h1`
  font-size: 14px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  margin-bottom: 5px;
  color: #333;
  text-align: left;
  position: relative;
`;

const MessageText = styled.p`
  font-size: 13px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  margin-bottom: 8px;
  margin-top: 8px;
  color: #686f7a;
  text-align: left;
  line-height: 20px;
`;

const MessageTime = styled.span`
  display: inline-block;
  font-size: 12px;
  color: #afafaf;
  padding-top: 10px;
`;
const Menu = styled(Dropdown.Menu)`
  padding: 0;
  margin-top: 10px;

  width: 300px;
  background-color: white;
`;
const Item = styled(Dropdown.Item)`
  display: block;
  padding: 15px;
  border-bottom: 1px solid #efefef;
  white-space: unset;
  &:hover {
    background-color: #ffecec;
  }
`;
const Item1 = styled(Dropdown.Item)`
  display: block;
  text-align: center;
  color: #333;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 14px;
  padding: 15px 0px;
  background-color: #ffecec;
  width: 100%;
  &:hover {
    color: white;
    background-color: black;
  }
`;
const DropdownIcon = styled(Dropdown.Toggle)`
  display: flex;
  align-items: center;
  &::after {
    display: none;
  }
`;

const ProfileLink = styled.div`
  display: flex;
`;
const FaRegBell2 = styled(FaRegBell)`
  cursor: pointer;
  font-size: 24px;
  color: gray;
  &:hover {
    color: #333;
  }
`;
const NotificationPopup = () => {
  return (
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
        <FaRegBell2 />
      </DropdownIcon>
      <Menu>
        <Item>
          <ProfileLink>
            <Avatar src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg" />
            <MessageContent>
              <MessageHeader>Rock William</MessageHeader>
              <MessageText>
                Like Your Comment On Video <b>How to create sidebar menu.</b>
              </MessageText>
              <MessageTime>2 min ago</MessageTime>
            </MessageContent>
          </ProfileLink>
        </Item>

        <Item>
          <ProfileLink>
            <Avatar src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-2.jpg" />
            <MessageContent>
              <MessageHeader>Jassica Smith</MessageHeader>
              <MessageText>
                Add new review in Video <b>Full Stack PHP Developer</b>
              </MessageText>
              <MessageTime>12 min ago</MessageTime>
            </MessageContent>
          </ProfileLink>
        </Item>
        <Item>
          <ProfileLink>
            <Avatar src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-9.jpg" />
            <MessageContent>
              <MessageText>
                Your Membership Approved <b>Upload Video</b>
              </MessageText>
              <MessageTime>20 min ago</MessageTime>
            </MessageContent>
          </ProfileLink>
        </Item>
        <Item1>
          View All <GoArrowRight />
        </Item1>
      </Menu>
    </Dropdown>
  );
};

export default NotificationPopup;
