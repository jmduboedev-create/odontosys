import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RefreshTokenWhereInput = {
  createdAt?: DateTimeFilter;
  expiresAt?: DateTimeFilter;
  id?: IntFilter;
  token?: StringFilter;
  user?: UserWhereUniqueInput;
};
