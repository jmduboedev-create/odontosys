import { InvoiceWhereUniqueInput } from "../invoice/InvoiceWhereUniqueInput";

export type PaymentCreateInput = {
  amount: number;
  invoice: InvoiceWhereUniqueInput;
  method: string;
  reference?: string | null;
};
