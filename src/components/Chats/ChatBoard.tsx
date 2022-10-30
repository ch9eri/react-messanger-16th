import React, { useRef, useEffect } from 'react';
import Chat from './Chat';
import styled from 'styled-components';
import { IUserChat } from '../../interface';
import { listAtom } from '../../atoms';
import {useRecoilState} from 'recoil';

function ChatBoard() {
  const [chatList, ] = useRecoilState<IUserChat[]>(listAtom);
  const chatBoardRef = useRef<HTMLDivElement>(null);

  const scrollDown = () => {
    if (chatBoardRef.current) {
      chatBoardRef.current.scrollTop = chatBoardRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollDown();
  }, [chatList]);

  return (
    <ChatBoardContainer ref={chatBoardRef}>
      <UserChat>
        {chatList.map(({ text, name, msgid }: IUserChat) => (
          <Chat key={msgid} text={text} name={name} />
        ))}
      </UserChat>
    </ChatBoardContainer>
  );
};

const ChatBoardContainer = styled.div`
  background-color: #85c1e9;
  overflow: auto;
`;

const UserChat = styled.ul`
  list-style: none;
`;

export default ChatBoard;
