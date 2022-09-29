import React from 'react';
import styled from 'styled-components';

const Chat = (chat, currentUser) => {
  const { userid, text, msgid, name } = chat;
  return (
    <li>
      {/* 엑박 뜸 */}
      <UserImg src={`./img/${currentUser.name}.png`}></UserImg>
      <UserName userid={userid}>{name}</UserName>
      <Text userid={userid} msgid={msgid}>
        {text}
      </Text>
    </li>
  );
};

const UserImg = styled.img`
  width: 20px;
  height: 20px;
`;

const UserName = styled.span`
  display: flex;
  flex-direction: row;
`;

const Text = styled.span``;

export default Chat;
