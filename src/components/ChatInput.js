import React, { useState } from 'react';
import styled from 'styled-components';

const ChatInput = ({ currentUser, chatList, setChatList }) => {
  const [text, setText] = useState('');

  const onChange = (event) => {
    setText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    //todoList에 input 값 추가
    const newChatList = chatList.concat({
      msgId: Date.now(),
      text,
      name: currentUser.name
    });
    setChatList(newChatList);
    setText('');
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

const Input = styled.input`
  border: none;
`;

const SubmitBtn = styled.button`
  padding: 10px;
  font-size: 30px;
`;

export default ChatInput;
