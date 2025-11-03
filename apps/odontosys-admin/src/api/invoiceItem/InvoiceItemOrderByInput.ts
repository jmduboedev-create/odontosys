import { SortOrder } from "../../util/SortOrder";

export type InvoiceItemOrderByInput = {
  createdAt?: SortOrder;
  dentalProcedureId?: SortOrder;
  id?: SortOrder;
  invoiceId?: SortOrder;
  quantity?: SortOrder;
  total?: SortOrder;
  treatmentId?: SortOrder;
  unitPrice?: SortOrder;
  updatedAt?: SortOrder;
};
