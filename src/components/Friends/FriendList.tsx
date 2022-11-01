import user from '../../data/user.json';
import Friend from './Friend';
import { IFriendList } from '../../interface';

function FriendList() {
  return (
    <div>
      {user.map(({ userid, status, name }: IFriendList) => (
        <Friend key={userid} status={status} name={name} />
      ))}
    </div>
  );
}

export default FriendList;
