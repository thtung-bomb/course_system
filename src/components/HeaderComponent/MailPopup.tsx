import React from "react";
import { DropdownToggle } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import styled from "styled-components";
import { MdMailOutline } from "react-icons/md";
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
  width: 300px;
  background-color: white;
  padding: 0;
  margin-top: 10px;
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
const CiMail2 = styled(MdMailOutline)`
  cursor: pointer;
  font-size: 24px;
  color: gray;
  &:hover {
    color: #333;
  }
`;
const ProfileLink = styled.div`
  display: flex;
`;
const MailPopup = () => {
  return (
    <Dropdown>
      <DropdownIcon
        id="dropdown-icon-toggle"
        style={{ backgroundColor: "white", fontSize: "25px", border: "none" }}
      >
        <CiMail2 />
      </DropdownIcon>
      <Menu>
        <Item href="#">
          <ProfileLink>
            <Avatar src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-6.jpg" />
            <MessageContent>
              <MessageHeader>Zoena Singh</MessageHeader>
              <MessageText>
                Hi! Sir, How are you. I ask you one thing please explain it this
                video price.
              </MessageText>
              <MessageTime>2 min ago</MessageTime>
            </MessageContent>
          </ProfileLink>
        </Item>

        <Item>
          <ProfileLink>
            <Avatar src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-5.jpg" />
            <MessageContent>
              <MessageHeader>Joy Dua</MessageHeader>
              <MessageText>
                Hello, I paid you video tutorial but did not play error 404.
              </MessageText>
              <MessageTime>10 min ago</MessageTime>
            </MessageContent>
          </ProfileLink>
        </Item>
        <Item>
          <ProfileLink>
            <Avatar src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-6.jpg" />
            <MessageContent>
              <MessageHeader>Jass</MessageHeader>
              <MessageText>Thanks Sir, Such a nice video</MessageText>
              <MessageTime>25 min ago</MessageTime>
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

export default MailPopup;
