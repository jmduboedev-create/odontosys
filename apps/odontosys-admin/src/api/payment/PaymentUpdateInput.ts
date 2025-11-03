import { InvoiceWhereUniqueInput } from "../invoice/InvoiceWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number;
  invoice?: InvoiceWhereUniqueInput;
  method?: string;
  reference?: string | null;
};
