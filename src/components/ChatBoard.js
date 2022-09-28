import React from 'react';
import Chat from './Chat';
import message from '../data/message.json';

const ChatBoard = ({ chatList, setChatList }) => {
  return (
    <div>
      <ul>
        {message.map((chat) => (
          <Chat
            key={chat.id}
            text={chat.text}
          />
        ))}
        {chatList.map((chat) => (
          <Chat
            key={chat.id}
            text={chat.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default ChatBoard;
