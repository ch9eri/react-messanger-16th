import React from 'react';

const Chat = ({id, text}) => {
    return (
        <li>
            <span id={id}>{text}</span>
        </li>
    );
};

export default Chat;