import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import ChatInput from './components/ChatInput';
import ChatBoard from './components/ChatBoard';
import ChatUsers from './components/ChatUsers';
import { IUser, IUserChat } from './components/interface';
import {listAtom,userAtom} from './atoms';
import {useRecoilState} from 'recoil';

function App() {
  const [chatList, setChatList] = useRecoilState<IUserChat[]>(listAtom);
  const [currentUser, setCurrentUser] = useRecoilState<IUser>(userAtom);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <ChatUsers/>
          <ChatBoard/>
          <ChatInput
            chatList={chatList}
            setChatList={setChatList}
            currentUser={currentUser}
          />
        </Container>
      </Wrapper>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
    body {
        font-family: "Helvetica", "Arial", sans-serif;
        width: 100%;
        height: 100%;
        background-color: white;
    }

    button {
        background-color: transparent;
        font-size: 20px;
        cursor: pointer;
        border: none;
    }

`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  border-radius: 20px;
`;

const Container = styled.div`
  border-radius: 20px;
  width: 400px;
  height: 600px;
  box-shadow: 1px 1px 10px gray;
  display: grid;
  grid-template-rows: 1fr 5fr 1.5fr;
`;

export default App;
