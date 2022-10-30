import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { RecoilRoot } from "recoil";
import Chats from './pages/Chats';
import Friends from './pages/Friends';
import Settings from './pages/Settings';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <RecoilRoot>
        <GlobalStyle />
        <Wrapper>
          <Container>
            <Routes>
              <Route path='/' element={<Friends />} />
              <Route path='/chats' element={<Chats />} />
              <Route path='/settings' element={<Settings />} />
            </Routes>
          </Container>
        </Wrapper>
      </RecoilRoot>
    </BrowserRouter>
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
