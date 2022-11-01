import React, { useState } from 'react';
import styled from 'styled-components';
import { IUser, IUserChat } from '../../interface';
import {listAtom,userAtom} from '../../atoms';
import {useRecoilState} from 'recoil';

const ChatInput = () => {
  const [chatList, setChatList] = useRecoilState<IUserChat[]>(listAtom);
  const [currentUser, ] = useRecoilState<IUser>(userAtom);
  const [text, setText] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newChatList = chatList.concat({
      msgid: Date.now(),
      text,
      name: currentUser.name,
    });
    setChatList(newChatList);
    setText('');
    console.log(currentUser.name);
  };

  return (
    <ChatInputContainer onSubmit={onSubmit}>
      <Input
        value={text}
        onChange={onChange}
        type="text"
        placeholder="메세지 입력창"
      />
      <SubmitBtn>📤</SubmitBtn>
    </ChatInputContainer>
  );
};

const ChatInputContainer = styled.form`
  display: grid;
  grid-template-columns: 4fr 1fr;
  padding: 10px;
`;

const Input = styled.input.attrs({ required: true })`
  border: none;
`;

const SubmitBtn = styled.button`
  padding: 10px;
  font-size: 30px;
  cursor: pointer;
  &:active {
    box-shadow: 1px 1px 1px 1px rgb(0, 0, 0, 0.5);
    border-radius: 10px;
  }
`;

export default ChatInput;
