import React from 'react';
import styled from 'styled-components';

interface IChat {
  text: string;
  name: string;
}

const Chat = ({ text, name }: IChat) => {
  return (
    <Li>
      <UserImg src={`./img/${name}.png`} />
      <div>
        <UserName>{name}</UserName>
        <Text>{text}</Text>
      </div>
    </Li>
  );
};

const Li = styled.li`
  display: flex;
  flex-direction: row;
`;

const UserImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const UserName = styled.span`
  display: flex;
  flex-direction: row;
  padding: 10px;
  margin-bottom: 5px;
`;

const Text = styled.span`
  background-color: white;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
`;

export default Chat;
