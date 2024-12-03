import React, { useEffect, useRef, useState } from "react";
import { FaRegComments } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import UserMessage from "../UserContact";
import { IoSend } from "react-icons/io5";
import { FaEllipsis, FaBan } from "react-icons/fa6";
import { CiTrash } from "react-icons/ci";
import { TbWindsock } from "react-icons/tb";
import { GoMute } from "react-icons/go";
import {
  Avatar,
  ChatContainer,
  ChatHeader,
  ContactListWrapper,
  DropdownContent,
  DropdownIcon,
  DropdownItem,
  InputContainer,
  InputField,
  ListContact,
  MainMessage,
  Message,
  MessageBubble,
  MessageContainer,
  MessageContainer1,
  MessageTime,
  MsTitle,
  Search,
  SearchContainer,
  SearchIconWrapper,
  SendButton,
  TitleCommentIcon,
  UserAvatar,
  UserStatus,
  UserStatusTag,
  UserStatusTime,
  UserStatusTitle,
} from "./styled";
import Alert from "../../../components/Modal/index";
import { useOutletContext } from "react-router-dom";

type User = {
  id: number;
  username: string;
  email: string;
  avatar: string;
};

type Contact = {
  id: number;
  userId: number;
  contactUserId: number;
};

type Conversation = {
  id: number;
  participants: number[];
  subject?: string;
};

type Notification = {
  id: number;
  userId: number;
  content: string;
  timestamp: string;
};

type MessageProps = {
  messageId: number;
  senderId: number;
  recipientId: number;
  content: string;
  timestamp: string;
  conversationId: number;
  isown: boolean;
  avatar: string;
  account_name: string;
};

const MesagePage: React.FC = () => {
  const isToolbarOpen = useOutletContext() as boolean;

  const [messages, setMessages] = useState<MessageProps[]>([
    {
      messageId: 1,
      senderId: 1,
      recipientId: 1,
      content:
        "It’s a feeling of sadness and joy at the same time, but the most important thing is progressing, the team deserved it.",
      timestamp: "13:30 Th 2, 1 thg 7",
      conversationId: 1,
      isown: false,
      avatar:
        "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/449522219_888596073313151_6614541979340584612_n.jpg?stp=dst-jpg_s640x640&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHRkv6BuOnpkaEbQIXkLf2MD102uwteLBMPXTa7C14sE9_e3ISJXHHFpO_vZauO_bDKjFiPtAAOFTOm9s18EVOC&_nc_ohc=qI0gBVw2Hm8Q7kNvgG4ucjH&_nc_ht=scontent.fsgn2-5.fna&oh=00_AYD-uZLtdGQvmIv6p0Zx0BUh4UOAwOJTPzaDc4S1iIbjCw&oe=668930B9",
      account_name: "Cê Rờ 7",
    },
    {
      messageId: 2,
      senderId: 2,
      recipientId: 2,
      content:
        "Tell Them All. Whoever Comes, Whoever It Is, I'll **** Them. I'll **** Them All.",
      timestamp: "13:30 Th 2, 1 thg 7",
      conversationId: 2,
      isown: false,
      avatar:
        "https://th.bing.com/th/id/OIP.Fvpwn9NjnWhVWCvskfzgbwAAAA?rs=1&pid=ImgDetMain",
      account_name: "Don Guyt",
    },
    {
      messageId: 3,
      senderId: 3,
      recipientId: 3,
      content: `You hear people talk a lot of rubbish and that it's nice that when you deliver, you can give them a little bit back`,
      timestamp: "13:30 Th 2, 1 thg 7",
      conversationId: 3,
      isown: false,
      avatar: "https://static.independent.co.uk/2023/10/18/08/newFile-1.jpg",
      account_name: "Uncle Be",
    },
  ]);

  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      username: "Cê Rờ 7",
      email: "cer7@example.com",
      avatar:
        "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/449522219_888596073313151_6614541979340584612_n.jpg?stp=dst-jpg_s640x640&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHRkv6BuOnpkaEbQIXkLf2MD102uwteLBMPXTa7C14sE9_e3ISJXHHFpO_vZauO_bDKjFiPtAAOFTOm9s18EVOC&_nc_ohc=qI0gBVw2Hm8Q7kNvgG4ucjH&_nc_ht=scontent.fsgn2-5.fna&oh=00_AYD-uZLtdGQvmIv6p0Zx0BUh4UOAwOJTPzaDc4S1iIbjCw&oe=668930B9",
    },
    {
      id: 2,
      username: "Gion Guyt",
      email: "donguyt@example.com",
      avatar:
        "https://th.bing.com/th/id/OIP.Fvpwn9NjnWhVWCvskfzgbwAAAA?rs=1&pid=ImgDetMain",
    },
    {
      id: 3,
      username: "Uncle Be",
      email: "unclebe@example.com",
      avatar: "https://static.independent.co.uk/2023/10/18/08/newFile-1.jpg",
    },
  ]);

  const [conversations] = useState<Conversation[]>([]);
  const [isShowAlert, setIsShowAlert] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [userInput, setUserInput] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users);

  const [newMessage, setNewMessage] = useState<string>("");
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return date.toLocaleDateString("vi-VN", options);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === "" || !selectedUser) return;

    const message: MessageProps = {
      messageId: messages.length + 1,
      senderId: selectedUser.id,
      recipientId: selectedUser.id,
      content: newMessage,
      timestamp: formatDate(new Date()),
      conversationId:
        conversations.find((conv) =>
          conv.participants.includes(selectedUser.id),
        )?.id ?? selectedUser.id,
      isown: true,
      avatar:
        "https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-1/448159529_1469551833682922_2230608807599522081_n.jpg?stp=dst-jpg_p100x100&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeFaHtLPNi002thCiTiyCIxQtTOihMTNMDC1M6KExM0wMMmMoLSmpZHIuOppgEJwSvRrGo1DDGg4bt7pWTrPCy3Z&_nc_ohc=gJ3BqthWGQ0Q7kNvgEisucU&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn8-3.fna&oh=00_AYDfghEqkqK5EMN8Nxz-PfEve7HS8_p3PrIi8LfD6d19CQ&oe=668228E0",
      account_name: "Thanh Tung",
    };

    setMessages([...messages, message]);
    setNewMessage("");
  };

  const handleOpenModal = () => {
    setIsShowAlert(true);
  };

  const handleConfirmDelete = () => {
    setMessages(
      messages.filter((message) => message.recipientId !== selectedUser?.id),
    );

    setFilteredUsers(
      filteredUsers.filter((user) => user.id !== selectedUser?.id),
    );

    setUsers(users.filter((user) => user.id !== selectedUser?.id));

    setIsShowAlert(false);
    setSelectedUser(null);
  };

  const handleCancel = () => {
    setIsShowAlert(false);
  };

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
  };

  const filteredMessages = selectedUser
    ? messages.filter(
        (message) =>
          message.senderId === selectedUser.id ||
          message.recipientId === selectedUser.id,
      )
    : [];

  const handleSearchUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value.toLowerCase();
    setUserInput(searchQuery);

    const filtered = users.filter((user) =>
      user.username.toLowerCase().includes(searchQuery),
    );
    setFilteredUsers(filtered);
  };

  return (
    <>
      {isShowAlert && (
        <Alert
          title="Delete chat"
          message="Once you delete your copy of this conversation, it cannot be undone."
          onCancel={handleCancel}
          onConfirm={handleConfirmDelete}
        />
      )}
      <MessageContainer>
        <MsTitle>
          <TitleCommentIcon>
            <FaRegComments />
          </TitleCommentIcon>
          Messages
        </MsTitle>

        <MainMessage toolbarRetracted={isToolbarOpen}>
          <ListContact>
            <SearchContainer>
              <SearchIconWrapper>
                <IoMdSearch />
              </SearchIconWrapper>
              <Search
                type="text"
                value={userInput}
                placeholder="Search Messages..."
                onChange={handleSearchUser}
              />
            </SearchContainer>
            <ContactListWrapper>
              {filteredUsers.map((user) => (
                <UserMessage
                  key={user.id}
                  text={
                    messages.find((message) => message.recipientId === user.id)
                      ?.content || "No messages"
                  }
                  name={user.username}
                  avatar={user.avatar}
                  isselected={selectedUser?.id === user.id}
                  onClick={() => handleUserClick(user)}
                />
              ))}
            </ContactListWrapper>
          </ListContact>
          <ChatContainer>
            {selectedUser && (
              <ChatHeader>
                <UserStatus>
                  <UserAvatar>
                    <img src={selectedUser.avatar} alt="Avatar" />
                  </UserAvatar>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                    }}
                  >
                    <UserStatusTitle>{selectedUser.username}</UserStatusTitle>
                    <UserStatusTag>Online</UserStatusTag>
                  </div>
                </UserStatus>
                <UserStatusTime>
                  <DropdownIcon>
                    <FaEllipsis />
                  </DropdownIcon>
                  <DropdownContent className="dropdown-content">
                    <DropdownItem onClick={handleOpenModal}>
                      <CiTrash /> Delete
                    </DropdownItem>
                    <DropdownItem>
                      <FaBan /> Block
                    </DropdownItem>
                    <DropdownItem>
                      <TbWindsock /> Report
                    </DropdownItem>
                    <DropdownItem>
                      <GoMute /> Mute
                    </DropdownItem>
                  </DropdownContent>
                </UserStatusTime>
              </ChatHeader>
            )}
            <MessageContainer1>
              {filteredMessages.map((message) => (
                <Message key={message.messageId} isown={message.isown}>
                  {!message.isown && (
                    <Avatar src={message.avatar} alt={message.account_name} />
                  )}
                  {message.isown && (
                    <MessageTime isown={message.isown}>
                      {message.timestamp}
                    </MessageTime>
                  )}
                  <MessageBubble isown={message.isown}>
                    <p>{message.content}</p>
                  </MessageBubble>
                  {!message.isown && (
                    <MessageTime isown={message.isown}>
                      {message.timestamp}
                    </MessageTime>
                  )}
                  {message.isown && (
                    <Avatar src={message.avatar} alt={message.account_name} />
                  )}
                </Message>
              ))}
            </MessageContainer1>
            {selectedUser && (
              <InputContainer>
                <InputField
                  type="text"
                  placeholder="Write a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") handleSendMessage();
                  }}
                />
                <SendButton onClick={handleSendMessage}>
                  <IoSend />
                </SendButton>
              </InputContainer>
            )}
          </ChatContainer>
        </MainMessage>
      </MessageContainer>
    </>
  );
};

export default MesagePage;
