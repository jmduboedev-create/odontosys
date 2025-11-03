import { SortOrder } from "../../util/SortOrder";

export type OdontogramEntryOrderByInput = {
  color?: SortOrder;
  conditionType?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  notes?: SortOrder;
  odontogramId?: SortOrder;
  surface?: SortOrder;
  tooth?: SortOrder;
  updatedAt?: SortOrder;
};
