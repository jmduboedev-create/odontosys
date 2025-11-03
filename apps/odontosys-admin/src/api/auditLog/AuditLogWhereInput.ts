import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AuditLogWhereInput = {
  action?: "INSERT" | "UPDATE" | "DELETE";
  createdAt?: DateTimeFilter;
  fieldField?: StringNullableFilter;
  id?: IntFilter;
  newValue?: JsonFilter;
  oldValue?: JsonFilter;
  recordId?: StringFilter;
  tableName?: StringFilter;
  user?: UserWhereUniqueInput;
};
