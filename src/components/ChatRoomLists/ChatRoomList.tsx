import message from '../../data/message.json';
import ChatRoom from './ChatRoom';
import {Link} from 'react-router-dom';


function ChatRoomList() {
    return (
        <div>
            {message.map((Msg)=>(
                <Link to ={`/chatroom/${Msg.name}`} style={{textDecoration:'none', color:'black'}}>
                    <ChatRoom key={Msg.userid} text={Msg.msg[Msg.msg.length-1].text} name={Msg.name} />
                </Link>
            ))}
        </div>
    );
};

export default ChatRoomList;