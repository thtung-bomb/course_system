import styled, { css } from "styled-components";

export const ChatMessage = styled.div<{ isSelected: boolean }>`
  padding: 20px;
  display: block;
  cursor: pointer;
  float: left;
  width: 100%;
  transition:
    background 0.1s ease-in-out,
    border-left 0.1s ease-in-out;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 6px;
    background: ${({ isSelected }) => (isSelected ? "#ed2a26" : "transparent")};

    transition:
      width 0.1s ease-in-out,
      background 0.1s ease-in-out;
  }

  background: ${({ isSelected }) => (isSelected ? "#ffecec" : "transparent")};

  &:hover {
    background: #ffecec;

    &::before {
      background: #ed2a26;
    }
  }
`;

export const UserStatus = styled.div`
  display: flex;
  align-items: center;
`;

export const UserAvatar = styled.div`
  border: 2px solid white 50%;
  position: relative;
`;

export const AvatarImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const MsgBadge = styled.div`
  border: 2px solid white;
  position: absolute;
  bottom: 0;
  right: -8px;
  font-size: 12px;
  font-weight: bold;
  background-color: red;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserStatusTitle = styled.span`
  font-weight: bold;
`;

export const UserStatusText = styled.p`
  color: #686f7a;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 10px;
  margin-top: 10px;
`;

export const UserStatusTime = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 0;
  color: #afafaf;
  margin-left: auto;
`;
