import { RefreshToken as TRefreshToken } from "../api/refreshToken/RefreshToken";

export const REFRESHTOKEN_TITLE_FIELD = "token";

export const RefreshTokenTitle = (record: TRefreshToken): string => {
  return record.token?.toString() || String(record.id);
};
