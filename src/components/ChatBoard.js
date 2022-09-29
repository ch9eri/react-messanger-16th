import React from 'react';
import Chat from './Chat';
import message from '../data/message.json';
import styled from 'styled-components';

const ChatBoard = ({ currentUser, chatList, setChatList }) => {
  return (
    <ChatBoardContainer>
      <UserChat>
        {message.map((chat) => (
          <Chat
            key={chat.msgid}
            text={chat.text}
            userid={chat.userid}
            name={chat.name}
          />
        ))}
        {chatList.map((chat) => (
          <Chat
            key={chat.msgid}
            text={chat.text}
            userid={chat.userid}
            name={chat.name}
          />
        ))}
      </UserChat>
    </ChatBoardContainer>
  );
};

const ChatBoardContainer = styled.div`
  background-color: #85c1e9;
`;

const UserChat = styled.ul`
  list-style: none;
`;

export default ChatBoard;
