import { ClinicWhereUniqueInput } from "../clinic/ClinicWhereUniqueInput";
import { InvoiceItemCreateNestedManyWithoutInvoicesInput } from "./InvoiceItemCreateNestedManyWithoutInvoicesInput";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { PaymentCreateNestedManyWithoutInvoicesInput } from "./PaymentCreateNestedManyWithoutInvoicesInput";

export type InvoiceCreateInput = {
  clinic?: ClinicWhereUniqueInput | null;
  invoiceItem?: InvoiceItemCreateNestedManyWithoutInvoicesInput;
  notes?: string | null;
  patient: PatientWhereUniqueInput;
  payment?: PaymentCreateNestedManyWithoutInvoicesInput;
  status: "PENDING" | "PAID" | "CANCELLED";
  totalAmount: number;
  updatedAt: Date;
};
