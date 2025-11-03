import { DentalProcedureWhereUniqueInput } from "../dentalProcedure/DentalProcedureWhereUniqueInput";
import { InvoiceWhereUniqueInput } from "../invoice/InvoiceWhereUniqueInput";
import { TreatmentWhereUniqueInput } from "../treatment/TreatmentWhereUniqueInput";

export type InvoiceItemUpdateInput = {
  dentalProcedure?: DentalProcedureWhereUniqueInput | null;
  invoice?: InvoiceWhereUniqueInput;
  quantity?: number;
  total?: number;
  treatment?: TreatmentWhereUniqueInput | null;
  unitPrice?: number;
  updatedAt?: Date;
};
