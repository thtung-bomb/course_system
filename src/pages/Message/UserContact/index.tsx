import React from "react";
import {
  ChatMessage,
  UserStatus,
  UserAvatar,
  AvatarImage,
  MsgBadge,
  UserStatusTitle,
  UserStatusTime,
  UserStatusText,
} from "./styled";

type ChatMessageProps = {
  text: string;
  isselected: boolean;
  name: string;
  avatar: string;
  onClick: () => void;
};

const UserMessage: React.FC<ChatMessageProps> = ({
  text,
  isselected,
  name,
  avatar,
  onClick,
}) => {
  return (
    <>
      <ChatMessage onClick={onClick} isSelected={isselected}>
        <UserStatus>
          <UserAvatar>
            <AvatarImage src={avatar} alt="Ronaldo" />
            <MsgBadge>2</MsgBadge>
          </UserAvatar>
          <div style={{ marginLeft: "30px", maxWidth: "calc(100% - 100px)" }}>
            <div style={{ display: "flex" }}>
              <UserStatusTitle>{name}</UserStatusTitle>
              <UserStatusTime>7 hours ago</UserStatusTime>
            </div>
            <UserStatusText>{text}</UserStatusText>
          </div>
        </UserStatus>
      </ChatMessage>
    </>
  );
};

export default UserMessage;
