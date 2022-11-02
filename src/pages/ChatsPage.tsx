import styled from 'styled-components';
import ChatUsers from '../components/Chats/ChatUsers';
import ChatInput from '../components/Chats/ChatInput';
import ChatBoard from '../components/Chats/ChatBoard';
import { IUserChat } from '../interface';
import { listAtom } from '../atoms';
import {useRecoilState} from 'recoil';

function ChatsPage() {
  const [chatList, ] = useRecoilState<IUserChat[]>(listAtom);
  
  return (
    <ChatsPageContainer>
      <ChatUsers />
      <ChatBoard />
      <ChatInput />
    </ChatsPageContainer>
  );
}

const ChatsPageContainer = styled.div`
  display: grid;
  grid-template-rows: 90px 400px ;
`;

export default ChatsPage;
