import React from 'react';
import ChatUsers from '../components/Chats/ChatUsers';
import ChatInput from '../components/Chats/ChatInput';
import ChatBoard from '../components/Chats/ChatBoard';
import { IUser, IUserChat } from '../interface';
import {listAtom,userAtom} from '../atoms';
import {useRecoilState} from 'recoil';

function Chats() {
    const [chatList, setChatList] = useRecoilState<IUserChat[]>(listAtom);
    const [currentUser, ] = useRecoilState<IUser>(userAtom);
    return (
        <>
            <ChatUsers />
            <ChatBoard />
            <ChatInput 
            chatList={chatList}
            setChatList={setChatList}
            currentUser={currentUser}/>
        </>
    );
};

export default Chats;