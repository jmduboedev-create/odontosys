import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RefreshTokenCreateInput = {
  expiresAt: Date;
  token: string;
  user: UserWhereUniqueInput;
};
