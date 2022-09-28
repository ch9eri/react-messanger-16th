import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import ChatInput from "./components/ChatInput";
import ChatBoard from './components/ChatBoard';
import ChatUsers from './components/ChatUsers';
import { useState } from 'react';

function App() {
  const [chatList, setChatList] = useState([]);

  return(
    <>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <ChatUsers />
          <ChatBoard chatList={chatList} setChatList={setChatList} />
          <ChatInput chatList={chatList} setChatList={setChatList} />
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
        border: none;
        font-size: 20px;
        cursor: pointer;
    }

`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

const Container = styled.div`
  background-color: #85C1E9;
  border-radius: 20px;
  width: 400px;
  height: 600px;
  box-shadow: 1px 1px 10px gray;
  padding: 30px;
  display: grid;
  grid-template-rows: 1fr 6fr 1fr;
`;

export default App;
