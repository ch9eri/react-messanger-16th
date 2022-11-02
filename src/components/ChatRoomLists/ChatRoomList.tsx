import message from '../../data/message.json';
import ChatRoom from './ChatRoom';
import { IChatRoomList } from '../../interface';
import {Link} from 'react-router-dom';


function ChatRoomList() {
    return (
        <div>
            {message.map(({userid, text, name, roomid}:IChatRoomList)=>(
                <Link to ={`/chatroom/${name}`} style={{textDecoration:'none', color:'black'}}>
                    <ChatRoom key={userid} text={text} name={name} roomid={roomid} />
                </Link>
            ))}
        </div>
    );
};

export default ChatRoomList;