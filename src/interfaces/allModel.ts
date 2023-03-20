export type InputsRegister = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  location: string;
  occupation: string;
  picture: IPicture[];
};
export type InputsLogin = {
  email: string;
  password: string;
};

export type IPicture = {
  name: string;
  type: string;
};

export interface APIResponse {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  location: string;
  occupation: string;
  picture: IPicture[];
  friends: [];
  updatedAt: Date;
  viewedProfile: number;
  impressions: number;
  __v: number;
  _id: string | number;
}

export type IPosts = {
  userId: string;
  firstName: string;
  lastName: string;
  location: string;
  description: string;
  picturePath: string;
  userPicturePath: string;
  likes: string;
  comments: string;
};

export interface IAuth {
  mode: string;
  user: null;
  token: null;
  posts: null | Array<any>;
  status: null | string;
}
