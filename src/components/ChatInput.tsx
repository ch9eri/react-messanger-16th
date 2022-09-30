import React, { useState } from 'react';
import styled from 'styled-components';

const ChatInput = ({ currentUser, chatList, setChatList }:any) => {
  const [text, setText] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //todoList에 input 값 추가
    const newChatList = chatList.concat({
      msgId: Date.now(),
      text,
      name: currentUser.name
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
`;

export default ChatInput;
