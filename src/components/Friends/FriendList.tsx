import user from '../../data/user.json';
import Friend from './Friend';
import { IFriendList } from '../../interface';
import { Link } from 'react-router-dom';

function FriendList() {
  return (
    
    <div>
      {user.map(({ userid, status, name }: IFriendList) => (
        <Link
          to={`/chatroom/${userid}`}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <Friend key={userid} status={status} name={name} />
        </Link>
      ))}
    </div>
  );
}

export default FriendList;
