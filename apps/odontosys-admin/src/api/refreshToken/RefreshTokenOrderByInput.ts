import { SortOrder } from "../../util/SortOrder";

export type RefreshTokenOrderByInput = {
  createdAt?: SortOrder;
  expiresAt?: SortOrder;
  id?: SortOrder;
  token?: SortOrder;
  userId?: SortOrder;
};
