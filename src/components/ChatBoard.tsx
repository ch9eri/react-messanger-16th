import React, { useRef, useEffect } from 'react';
import Chat from './Chat';
import styled from 'styled-components';
import { IUserChat } from './interface';

const ChatBoard = ({ currentUser, chatList, setChatList }: any) => {
  const chatBoardRef = useRef<HTMLDivElement>(null);

  const scrollDown = () => {
    if (chatBoardRef.current) {
      // chatBoardRef.current.scrollTo(0, chatBoardRef.current.scrollHeight);
      chatBoardRef.current.scrollTop = chatBoardRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollDown();
  }, [chatList]);

  return (
    <ChatBoardContainer ref={chatBoardRef}>
      <UserChat>
        {chatList.map(({ text, name, msgid, userid }: IUserChat) => (
          <Chat key={msgid} text={text} name={name} currentUser={currentUser} />
        ))}
      </UserChat>
    </ChatBoardContainer>
  );
};

const ChatBoardContainer = styled.div`
  background-color: #85c1e9;
  overflow: auto;
`;

const UserChat = styled.ul`
  list-style: none;
`;

export default ChatBoard;
