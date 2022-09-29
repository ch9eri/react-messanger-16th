import React from 'react';

const ChatUsers = ({currentUser}) => {
    return (
        <button>
            {currentUser.name}
        </button>
    );
};

export default ChatUsers;