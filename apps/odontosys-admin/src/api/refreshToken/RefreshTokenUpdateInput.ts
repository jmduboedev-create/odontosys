import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RefreshTokenUpdateInput = {
  expiresAt?: Date;
  token?: string;
  user?: UserWhereUniqueInput;
};
