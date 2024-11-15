export interface IAuth {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
}

export interface ILoginVariable {
  username: string;
  password: string;
  expiresInMins: number;
}
