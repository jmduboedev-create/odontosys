import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AuditLogUpdateInput = {
  action?: "INSERT" | "UPDATE" | "DELETE";
  fieldField?: string | null;
  newValue?: InputJsonValue;
  oldValue?: InputJsonValue;
  recordId?: string;
  tableName?: string;
  user?: UserWhereUniqueInput | null;
};
