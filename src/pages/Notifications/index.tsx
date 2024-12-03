import React from "react";
import styled from "styled-components";
import { TiBell } from "react-icons/ti";

const NotificationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
  height: 100vh;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
  width: 100%;

  h1 {
    font-size: 20px;
    font-weight: 500;
    padding-left: 10px;
    color: #333;
  }
`;

const NotiButton = styled.button`
  padding: 10px 20px;
  background-color: red;
  color: white;
  border-radius: 2px;
  border: none;
  font-size: 14px;
  font-weight: 500;
  margin: 20px;
  align-self: flex-start;

  &:hover {
    background-color: #333;
  }
`;

const NotificationsList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 20px 20px 20px;
`;

const NotificationItem = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 10px;
  background-color: #fff;
  width: 100%;
  border: 1px solid #efefef;

  &:hover {
    background-color: #ffecec;
  }

  &:first-child {
    border-top: 1px solid #efefef;
  }
  &:not(first-child) {
    border-top:none ;
  }


`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50% ;
  margin-right: 20px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
`;

const NotificationText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  span {
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 5px;
    color: #333;
  }

  small {
    color: #afafaf;
    font-size: 12px;
    font-weight: 400;
    padding-top: 8px;
  }

  p {
    font-size: 13px;
    font-weight: 400;
    color: #686f7a;
  }
`;

const Notifications = () => {
  return (
    <NotificationsContainer>
      <Header>
        <TiBell size={24} />
        <h1>Notifications</h1>
      </Header>
      <NotiButton>Notification Setting</NotiButton>
      <NotificationsList>
        <NotificationItem>
          <Avatar
            src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg"
            alt="Avatar"
          />
          <NotificationText>
            <span>Rock William</span>
            <p>
              Like Your Comment <strong>On Video How to create sidebar menu.</strong>
            </p>
            <small>2 min ago</small>
          </NotificationText>
        </NotificationItem>
        <NotificationItem>
          <Avatar
            src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-2.jpg"
            alt="Avatar"
          />
          <NotificationText>
            <span>Jassica Smith</span>
            <p>
              Added New Review In Video <strong>Full Stack PHP Developer.</strong>
            </p>
            <small>12 min ago</small>
          </NotificationText>
        </NotificationItem>
        <NotificationItem>
          <Avatar
            src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-9.jpg"
            alt="Avatar"
          />
          <NotificationText>
            <span>System</span>
            <p>Your Membership Activated.</p>
            <small>20 min ago</small>
          </NotificationText>
        </NotificationItem>
        <NotificationItem>
          <Avatar
            src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-9.jpg"
            alt="Avatar"
          />
          <NotificationText>
            <span>System</span>
            <p>
              Your Course Approved Now. <strong>How to create sidebar menu.</strong>
            </p>
            <small>20 min ago</small>
          </NotificationText>
        </NotificationItem>
      </NotificationsList>
    </NotificationsContainer>
  );
};

export default Notifications;
