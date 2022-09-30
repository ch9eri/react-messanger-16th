import React from 'react';
import Chat from './Chat';
import message from '../data/message.json';
import styled from 'styled-components';

interface IUserChat {
  msgid: number;
  text: string;
  userid: number;
  name: string;
}

const ChatBoard = ({ currentUser, chatList, setChatList }:any) => {

  return (
    <ChatBoardContainer>
      <UserChat>
        {message.map(({ text, name, msgid, userid }:IUserChat) => (
          <Chat
            key={msgid}
            text={text}
            name={name}
          />
        ))}
        {chatList.map(({ text, name, msgid, userid }:IUserChat) => (
          <Chat
            key={msgid}
            text={text}
            name={name}
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
