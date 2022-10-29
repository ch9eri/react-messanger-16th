import { atom } from 'recoil';
import message from './data/message.json';
import user from './data/user.json';
import { IUserChat,IUser } from './components/interface';


export const listAtom = atom<IUserChat[]>({
    key: 'chatList',
    default: message
});

export const userAtom = atom<IUser>({
    key: 'user',
    default: user[0]
})