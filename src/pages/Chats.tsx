import styled from 'styled-components';
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
        <ChatRoom>
            <ChatUsers />
            <ChatBoard />
            <ChatInput 
            chatList={chatList}
            setChatList={setChatList}
            currentUser={currentUser}/>
        </ChatRoom>
    );
};

const ChatRoom = styled.div`
    display: grid;
    grid-template-rows: 1fr 5fr 3fr;
`;

export default Chats;