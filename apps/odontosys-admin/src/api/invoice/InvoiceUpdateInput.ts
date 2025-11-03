import { ClinicWhereUniqueInput } from "../clinic/ClinicWhereUniqueInput";
import { InvoiceItemUpdateManyWithoutInvoicesInput } from "./InvoiceItemUpdateManyWithoutInvoicesInput";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { PaymentUpdateManyWithoutInvoicesInput } from "./PaymentUpdateManyWithoutInvoicesInput";

export type InvoiceUpdateInput = {
  clinic?: ClinicWhereUniqueInput | null;
  invoiceItem?: InvoiceItemUpdateManyWithoutInvoicesInput;
  notes?: string | null;
  patient?: PatientWhereUniqueInput;
  payment?: PaymentUpdateManyWithoutInvoicesInput;
  status?: "PENDING" | "PAID" | "CANCELLED";
  totalAmount?: number;
  updatedAt?: Date;
};
