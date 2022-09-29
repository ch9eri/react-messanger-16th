import React from 'react';
import styled from 'styled-components';
import ch9eri from '../img/ch9eri.PNG';
import user from '../data/user.json';

const ChatUsers = ({ currentUser, setCurrentUser }) => {
  const onToggleUser = () => {
    currentUser === user[0] ? setCurrentUser(user[1]) : setCurrentUser(user[0]);
    console.log(currentUser);
  };

  return (
    <button onClick={onToggleUser}>
      <UserImg src={ch9eri} />
      <UserName>{currentUser.name}</UserName>
    </button>
  );
};

const UserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid gray;
`;

const UserName = styled.span`
  font-size: 10px;
  position: static;
`;

export default ChatUsers;
