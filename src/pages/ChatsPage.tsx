import styled from 'styled-components';
import ChatUsers from '../components/Chats/ChatUsers';
import ChatInput from '../components/Chats/ChatInput';
import ChatBoard from '../components/Chats/ChatBoard';

function Chats() {

    return (
        <ChatRoom>
            <ChatUsers />
            <ChatBoard />
            <ChatInput />
        </ChatRoom>
    );
};

const ChatRoom = styled.div`
    display: grid;
    grid-template-rows: 1fr 5fr 3fr;
`;

export default Chats;