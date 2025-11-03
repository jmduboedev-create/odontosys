import { SortOrder } from "../../util/SortOrder";

export type InvoiceOrderByInput = {
  clinicId?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  notes?: SortOrder;
  patientId?: SortOrder;
  status?: SortOrder;
  totalAmount?: SortOrder;
  updatedAt?: SortOrder;
};
