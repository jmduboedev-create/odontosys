import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type AuditLog = {
  action?: "INSERT" | "UPDATE" | "DELETE";
  createdAt: Date;
  fieldField: string | null;
  id: number;
  newValue: JsonValue;
  oldValue: JsonValue;
  recordId: string;
  tableName: string;
  user?: User | null;
};
