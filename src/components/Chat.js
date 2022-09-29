import React from 'react';

const Chat = (chat) => {
  const { userId, text, msgId, name } = chat;
  return (
    <li>
      <span userId={userId}>{name}</span>
      <span userId={userId} msgId={msgId}>
        {text}
      </span>
    </li>
  );
};

export default Chat;
