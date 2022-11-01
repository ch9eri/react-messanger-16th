import message from '../../data/message.json';
import ChatRoom from './ChatRoom';
import { IChatRoomList } from '../../interface';


function ChatRoomList() {
    return (
        <div>
            {message.map(({userid, text, name, roomid}:IChatRoomList)=>(
                <ChatRoom key={userid} text={text} name={name} roomid={roomid} />
            ))}
        </div>
    );
};

export default ChatRoomList;