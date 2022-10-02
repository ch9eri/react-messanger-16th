import React from 'react';
import styled from 'styled-components';
import { IChat } from './interface';

const Chat = ({ text, name, currentUser }: any) => {
  return (
    <>
      {name === currentUser.name ? (
        <Li1>
          <UserImg src={`./img/${name}.png`} />
          <div>
            <UserName1>{name}</UserName1>
            <Text>{text}</Text>
          </div>
        </Li1>
      ) : (
        <Li2>
          <UserImg src={`./img/${name}.png`} />
          <div>
            <UserName2>{name}</UserName2>
            <Text>{text}</Text>
          </div>
        </Li2>
      )}
    </>
  );
};

const Li1 = styled.li`
  display: flex;
  flex-direction: row-reverse;
  margin-right: 20px;
`;

const Li2 = styled.li`
  display: flex;
  flex-direction: row;
`;

const UserImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const UserName1 = styled.span`
  display: flex;
  flex-direction: row-reverse;
  padding: 10px;
  margin-bottom: 5px;
`;

const UserName2 = styled.span`
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
