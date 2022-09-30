import React from 'react';
import styled from 'styled-components';
//import ch9eri from '../img/ch9eri.png';
import user from '../data/user.json';

const ChatUsers = ({ currentUser, setCurrentUser }: any) => {
  const onToggleUser = () => {
    currentUser === user[0] ? setCurrentUser(user[1]) : setCurrentUser(user[0]);
  };

  return (
    <>
      <UserBtn onClick={onToggleUser}>
        <UserImg src={`./img/${currentUser.name}.png`} />
        <UserName>{currentUser.name}</UserName>
      </UserBtn>
    </>
  );
};

const UserBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;


const UserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid gray;
  display: flex;
  margin: 5px;

  &:hover {
    opacity: 0.5;
  }
`;

const UserName = styled.span`
  font-size: 15px;
  margin-top: 5px;
`;

export default ChatUsers;
