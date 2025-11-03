import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  amount?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  invoiceId?: SortOrder;
  method?: SortOrder;
  reference?: SortOrder;
};
