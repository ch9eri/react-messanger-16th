import React from 'react';

const Chat = (chat) => {
  const { userid, text, msgid, name } = chat;
  return (
    <li>
      <span userid={userid}>{name}</span>
      <span userid={userid} msgid={msgid}>
        {text}
      </span>
    </li>
  );
};

export default Chat;
