import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { IoSendSharp } from "react-icons/io5";

const ChatContainer = styled.div`
  width: 93%;
  height: 524px;
  border: 0.5px solid #efefef;
  display: flex;
  flex-direction: column;
`;
const ChatHeader = styled.div`
  background-color: white;
  color: #333;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 550;
  border-bottom: 1px solid #efefef;
  border-radius: 2px;
`;
const ChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  background-color: white;
  border-bottom: 1px solid #efefef;
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #dcdcdc;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #a9a9a9;
  }
`;

const MessageContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const MessageContent = styled.div`
  padding: 8px 12px;
  border-radius: 8px;
  max-width: 70%;
`;

const InputContainer = styled.div`
  display: flex;
  padding: 5px;
  border: none;
  background-color: white;
  outline: none;
  border-radius: 2px;
`;

const MessageInput = styled.input`
  width: 100%;
  flex: 1;
  background-color: white;
  font-size: 14px;
  border: none;
  outline: none;
`;
const ChatButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background-color: red;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    background-color: black;
  }
`;
// const [comment, setComment] = useState('');
// const { user } = useSelector((state: RootState) => state.chat);
// const dispatch = useDispatch();
const LiveChat: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const chatMessagesRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<
    { name: string; content: string; isUserMessage: boolean }[]
  >([]);

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages([
        ...messages,
        { name: "Admin", content: inputValue, isUserMessage: true },
      ]);
      setInputValue("");
    }
  };

  return (
    <ChatContainer>
      <ChatHeader>Live Chat</ChatHeader>
      <ChatMessages ref={chatMessagesRef}>
        {messages.map((message, index) => (
          <MessageContainer key={index} isUserMessage={message.isUserMessage}>
            <MessageContent isUserMessage={message.isUserMessage}>
              <strong>{message.name}</strong> {message.content}
            </MessageContent>
          </MessageContainer>
        ))}
      </ChatMessages>
      <InputContainer>
        <MessageInput
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
          placeholder="Say Something..."
        />
        <ChatButton onClick={handleSendMessage}>
          <IoSendSharp />
        </ChatButton>
      </InputContainer>
    </ChatContainer>
  );
};

export default LiveChat;
