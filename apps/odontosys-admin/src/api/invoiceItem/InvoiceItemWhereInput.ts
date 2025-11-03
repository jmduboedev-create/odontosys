import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DentalProcedureWhereUniqueInput } from "../dentalProcedure/DentalProcedureWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { InvoiceWhereUniqueInput } from "../invoice/InvoiceWhereUniqueInput";
import { FloatFilter } from "../../util/FloatFilter";
import { TreatmentWhereUniqueInput } from "../treatment/TreatmentWhereUniqueInput";

export type InvoiceItemWhereInput = {
  createdAt?: DateTimeFilter;
  dentalProcedure?: DentalProcedureWhereUniqueInput;
  id?: IntFilter;
  invoice?: InvoiceWhereUniqueInput;
  quantity?: IntFilter;
  total?: FloatFilter;
  treatment?: TreatmentWhereUniqueInput;
  unitPrice?: FloatFilter;
  updatedAt?: DateTimeFilter;
};
