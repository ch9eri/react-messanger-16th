import React from 'react';
import styled from 'styled-components';
import { IUser,IChat } from '../../interface';
import { userAtom } from '../../atoms';
import {useRecoilState} from 'recoil';

const Friend = ({ text, name }: IChat) => {
  const [currentUser, ] = useRecoilState<IUser>(userAtom);
    return (
        <UserContainer>
            <UserImg src={`./img/${name}.png`} />
            <div>
                <UserName>{name}</UserName>
                <UserStatus>{text}</UserStatus>
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

const UserName = styled.span`


`;

const UserStatus = styled.span`

`;


export default Friend;