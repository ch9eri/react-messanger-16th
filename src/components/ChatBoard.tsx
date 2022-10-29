import React, { useRef, useEffect } from 'react';
import Chat from './Chat';
import styled from 'styled-components';
import { IUser, IUserChat } from './interface';
import {listAtom,userAtom} from '../atoms';
import {useRecoilState} from 'recoil';

function ChatBoard() {
  const [chatList, setChatList] = useRecoilState<IUserChat[]>(listAtom);
  const [currentUser, setCurrentUser] = useRecoilState<IUser>(userAtom);
  const chatBoardRef = useRef<HTMLDivElement>(null);

  const scrollDown = () => {
    if (chatBoardRef.current) {
      // chatBoardRef.current.scrollTo(0, chatBoardRef.current.scrollHeight);
      chatBoardRef.current.scrollTop = chatBoardRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollDown();
  }, [chatList]);

  return (
    <ChatBoardContainer ref={chatBoardRef}>
      <UserChat>
        {chatList.map(({ text, name, msgid, userid }: IUserChat) => (
          <Chat key={msgid} text={text} name={name} currentUser={currentUser} />
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
