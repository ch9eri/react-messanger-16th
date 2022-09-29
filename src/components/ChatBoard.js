import React from 'react';
import Chat from './Chat';
import message from '../data/message.json';

const ChatBoard = ({ currentUser, chatList, setChatList }) => {
  return (
    <div>
      <ul>
        {message.map((chat) => (
          <Chat
            key={chat.msgId}
            text={chat.text}
            userId={chat.userId}
          />
        ))}
        {chatList.map((chat) => (
          <Chat
            key={chat.msgId}
            text={chat.text}
            userId={chat.userId}
          />
        ))}
      </ul>
    </div>
  );
};

export default ChatBoard;
