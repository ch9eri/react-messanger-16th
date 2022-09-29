import React from 'react';
import Chat from './Chat';
import message from '../data/message.json';
import styled from 'styled-components';

const ChatBoard = ({ currentUser, chatList, setChatList }) => {
  return (
    <ChatBoardContainer>
      <ul>
        {message.map((chat) => (
          <Chat
            key={chat.msgId}
            text={chat.text}
            userId={chat.userId}
            name={chat.name}
          />
        ))}
        {chatList.map((chat) => (
          <Chat
            key={chat.msgId}
            text={chat.text}
            userId={chat.userId}
            name={chat.name}
          />
        ))}
      </ul>
    </ChatBoardContainer>
  );
};

const ChatBoardContainer = styled.div`
  background-color: #85C1E9;
`;

export default ChatBoard;
