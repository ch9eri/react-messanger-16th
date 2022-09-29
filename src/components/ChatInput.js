import React, { useState } from 'react';

const ChatInput = ({currentUser, chatList, setChatList}) => {
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
    });
    setChatList(newChatList);
    setText('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={text}
          onChange={onChange}
          type="text"
          placeholder="메세지 입력창"
        />
        <button>📤</button>
      </form>
    </div>
  );
};

export default ChatInput;
