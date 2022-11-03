import styled from 'styled-components';
import ChatUsers from '../components/Chats/ChatUsers';
import ChatInput from '../components/Chats/ChatInput';
import ChatBoard from '../components/Chats/ChatBoard';
import { IChatBoard } from '../interface';
import { listAtom } from '../atoms';
import {useRecoilState} from 'recoil';
import { useParams } from 'react-router-dom';

function ChatsPage() {
  const roomParams = useParams();
  const roomid = roomParams.roomid;

  const [chatList, ] = useRecoilState<IChatBoard[]>(listAtom);
  
  
  return (
    <ChatsPageContainer>
      <ChatUsers roomid={roomid} />
      <ChatBoard roomid={roomid} />
      <ChatInput />
    </ChatsPageContainer>
  );
}

const ChatsPageContainer = styled.div`
  display: grid;
  grid-template-rows: 90px 400px ;
`;

export default ChatsPage;
