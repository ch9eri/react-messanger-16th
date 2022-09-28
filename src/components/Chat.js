import React from 'react';

const Chat = (chat) => {
    const {userId, text, msgId} = chat;
    return (
        <li>
            <span userId={userId} msgId={msgId}>{text}</span>
        </li>
    );
};

export default Chat;