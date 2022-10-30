import user from '../../data/user.json';
import Friend from './Friend';
import { IUserChat } from '../../interface';

function FriendList() {
    return (
        <div>
            {user.map(({text,name,userid}:IUserChat)=>(
                <Friend key={userid} text={text} name={name}/>
            ))}
        </div>
    );
};

export default FriendList;