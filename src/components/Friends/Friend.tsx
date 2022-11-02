import React from 'react';
import styled from 'styled-components';
import { IUser, IFriendList } from '../../interface';
import { userAtom } from '../../atoms';
import { useRecoilState } from 'recoil';

const Friend = ({ status, name }: IFriendList) => {
  const [currentUser] = useRecoilState<IUser>(userAtom);
  return (
    <UserContainer>
      <UserImg src={`./img/${name}.png`} />
      <div>
        <UserName>{name}</UserName>
        <UserStatus>{status}</UserStatus>
      </div>
    </UserContainer>
  );
};

const UserContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  height: 50px;
  margin-bottom: 10px;
  margin-left: 10px;
`;

const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const UserName = styled.div`
  font-size: 17px;
  font-weight: 500;
`;

const UserStatus = styled.div`
  color: gray;
  font-size: 13px;
  margin-top: 2px;
`;

export default Friend;
