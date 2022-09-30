import React from 'react';
import styled from 'styled-components';
//import ch9eri from '../img/ch9eri.png';
import user from '../data/user.json';

const ChatUsers = ({ currentUser, setCurrentUser }:any) => {
  const onToggleUser = () => {
    currentUser === user[0] ? setCurrentUser(user[1]) : setCurrentUser(user[0]);
  };

  return (
    <UserBtn onClick={onToggleUser}>
      {/* 엑박 뜸 */}
      <UserImg src={`./img/${currentUser.name}.png`} />
      <UserName>{currentUser.name}</UserName>
    </UserBtn>
  );
};

const UserBtn = styled.button``;

const UserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid gray;
  display: flex;
`;

const UserName = styled.span`
  font-size: 10px;
  display: flex;
  flex-direction: row;
`;

export default ChatUsers;
