import styled from "styled-components";

interface MainMessageProps {
  toolbarRetracted: boolean;
}

interface MessageProps {
  isown?: boolean;
}

export const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
`;

export const UserStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const UserStatusTitle = styled.p`
  font-size: 16px;
  color: #333;
  margin: 0;
  font-weight: 550;
`;

export const UserStatusTag = styled.p`
  background-color: rgb(64, 208, 79);
  display: inline-block;
  height: 20px;
  text-align: center;
  padding: 0 6px;
  border-radius: 3px;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 700;
  line-height: 20px;
  text-transform: uppercase;
`;

export const UserStatusTime = styled.div`
  position: relative;

  &:hover .dropdown-content {
    display: block;
  }
`;

export const DropdownIcon = styled.div`
  text-decoration: none;
  color: #afafaf;
  cursor: pointer;
  font-size: 22px;

  &:hover {
    color: #333;
  }
`;

export const DropdownContent = styled.div`
  position: absolute;
  display: none;
  top: 100%;
  right: 0;
  background-color: #fff;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  z-index: 1;
  min-width: 140px;
  color: #afafaf;
  border-radius: 4px;
  overflow: hidden;
  width: 160px;
`;

export const DropdownItem = styled.span`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 12px 16px;
  font-size: 16px;
  color: #686f7a;
  cursor: pointer;

  &:hover {
    color: #333;
    background-color: #ffecec;
  }
`;

export const MessageContainer = styled.div`
  width: 100vw;
  margin: 0;
  padding: 0;
`;

export const MsTitle = styled.h2`
  display: flex;
  gap: 8px;
  font-size: 20px;
  margin-top: 100px !important;
  margin-left: 50px;
  font-weight: 500;
  color: #333;
`;

export const TitleCommentIcon = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
`;

export const MainMessage = styled.div<MainMessageProps>`
  margin-left: 50px;
  ${({ toolbarRetracted }) =>
    toolbarRetracted &&
    `
  width: 80%;
`}

  ${({ toolbarRetracted }) =>
    !toolbarRetracted &&
    `
  width: 94%;
`}

  margin-top: 30px;
  margin-bottom: 50px;
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #efefef;
`;

export const ListContact = styled.div`
  @media (min-width: 1200px) {
    position: relative;
    width: 100%;
    width: 33.33333333%;
  }

  height: 600px;
  display: flex;
  flex-direction: column;
`;

export const ContactListWrapper = styled.div`
  flex: 1;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const SearchIconWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  padding: 0 0.5em;
  transition: color 0.3s ease;
  color: gray;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
  margin: 10px auto;
  background-color: transparent;
  border-radius: 2px;
  border: 2px solid rgba(0, 0, 0, 0.125);
  flex-shrink: 0;

  &:focus-within ${SearchIconWrapper} {
    color: #333;
  }
`;

export const Search = styled.input`
  border: none;
  outline: none;
  flex-grow: 1;
  padding: 0.6em;
  font-size: 12px;
  background-color: transparent;
  color: #101010;
  transition:
    color 0.3s ease,
    background-color 0.3s ease;
  overflow: visible;

  &::placeholder {
    color: #c1bfbf;
  }

  &:focus::placeholder {
    color: #a0a0a0;
  }
`;

export const ChatContainer = styled.div`
  flex: 1;
  margin: 0 0 0 15px;
  overflow: hidden;
  border-left: 1px solid #efefef;
`;

export const MessageContainer1 = styled.div`
  border: 2px sodlid #333;
  height: 480px;
  overflow-y: auto;

  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const MessageTime = styled.span<MessageProps>`
  opacity: 0;
  color: #fafafa;
  transition:
    opacity 0.3s ease,
    margin-left 0.3s ease;
`;

export const MessageBubble = styled.div<MessageProps>`
  background-color: ${(props) => (props.isown ? "#ed2a26" : "#ffecec")};
  color: ${(props) => (props.isown ? "#f1f1f1" : "#686f7a")};
  padding: 8px;
  border-radius: 10px;
  max-width: 46%;
  align-items: center;
`;

export const Message = styled.div<MessageProps>`
  display: flex;
  justify-content: ${(props) => (props.isown ? "flex-end" : "flex-start")};
  margin: 20px 10px;
  align-items: center;

  &:hover > ${MessageTime} {
    opacity: 1;
    background: #3b3939;
    padding: 5px 10px;
    margin: 10px;
    border-radius: 5px;
  }

  &:last-child {
    scroll-margin-bottom: 0;
  }
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 5px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  width: 100%;
  border-top: 1px solid #efefef;
`;

export const InputField = styled.input`
  flex: 1;
  padding: 8px;
  border-top: 1px solid #efefef;
  border: 1px solid #efefef;
  outline: none;

  &::placeholder {
    color: #dfdfdf;
  }

  &:focus::placeholder {
    color: #363636;
  }
`;

export const SendButton = styled.button`
  background-color: #ed2a26;
  color: #ffffff;
  border: none;
  font-size: 18px;
  border-radius: 2px;
  padding: 6px 16px;
  margin-left: 8px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;
