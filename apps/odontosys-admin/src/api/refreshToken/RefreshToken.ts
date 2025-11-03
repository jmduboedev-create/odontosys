import { User } from "../user/User";

export type RefreshToken = {
  createdAt: Date;
  expiresAt: Date;
  id: number;
  token: string;
  user?: User;
};
