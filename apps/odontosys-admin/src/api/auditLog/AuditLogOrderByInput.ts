import { SortOrder } from "../../util/SortOrder";

export type AuditLogOrderByInput = {
  action?: SortOrder;
  createdAt?: SortOrder;
  fieldField?: SortOrder;
  id?: SortOrder;
  newValue?: SortOrder;
  oldValue?: SortOrder;
  recordId?: SortOrder;
  tableName?: SortOrder;
  userId?: SortOrder;
};
