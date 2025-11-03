import { ClinicWhereUniqueInput } from "../clinic/ClinicWhereUniqueInput";
import { DentalProcedurePriceUpdateManyWithoutDentalProceduresInput } from "./DentalProcedurePriceUpdateManyWithoutDentalProceduresInput";
import { InvoiceItemUpdateManyWithoutDentalProceduresInput } from "./InvoiceItemUpdateManyWithoutDentalProceduresInput";

export type DentalProcedureUpdateInput = {
  active?: boolean;
  basePrice?: number;
  clinic?: ClinicWhereUniqueInput;
  code?: string;
  dentalProcedurePrice?: DentalProcedurePriceUpdateManyWithoutDentalProceduresInput;
  description?: string | null;
  invoiceItem?: InvoiceItemUpdateManyWithoutDentalProceduresInput;
  name?: string;
  updatedAt?: Date;
};
