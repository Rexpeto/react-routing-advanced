import { Roles } from ".";

export interface UserInfo {
  _id: string;
  name: string;
  email: string;
  avatarUrl: string;
  rol: Roles | string;
  accessToken: string;
}
