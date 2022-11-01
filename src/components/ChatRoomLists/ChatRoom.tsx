import React from 'react';
import styled from  'styled-components';
import {IChatRoomList} from '../../interface';
import {Link} from 'react-router-dom';

const ChatRoom = ({text,name,roomid}:IChatRoomList) => {
    return (
        <ChatRoomContainer>
            <LinkTo to ='/chatroom'>
                <ChatRoomImg src={`./img/${name}.png`} />
                <div>
                    <ChatRoomName>{name}</ChatRoomName>
                    <ChatRoomText></ChatRoomText>
                </div>
            </LinkTo>
        </ChatRoomContainer>
    );
};

const ChatRoomContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr;
    height: 50px;
    margin-bottom: 10px;
    margin-left: 10px;
`;

const LinkTo = styled(Link)`
    text-decoration: none;
    color: black;
    display: flex;
    flex-direction: row;
`;

const ChatRoomImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const ChatRoomName = styled.div``;

const ChatRoomText = styled.div``;

export default ChatRoom;