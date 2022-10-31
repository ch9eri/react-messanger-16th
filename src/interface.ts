interface IChat {
  text?: string;
  name?: string;
}

interface IUserChat extends IUser {
  msgid?: number;
  text?: string;
}

interface IUser {
  userid?: number;
  name?: string;
}

interface IFriendList extends IUser {
  status: string;
}

export type { IChat, IUserChat, IUser, IFriendList };
