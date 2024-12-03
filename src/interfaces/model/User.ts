export interface User {
  id: number | string;
  name: string;
  image: string;
  email: string;
}
export interface LoginPayload {
  username: string;
  password: string;
}
