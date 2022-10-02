interface IChat {
  text: string;
  name: string;
}

interface IUserChat extends IUser{
  msgid: number;
  text: string;
}

interface IUser {
  userid: number;
  name: string;
}

export type { IChat, IUserChat, IUser };
