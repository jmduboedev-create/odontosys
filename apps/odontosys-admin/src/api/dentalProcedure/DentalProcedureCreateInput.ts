import { ClinicWhereUniqueInput } from "../clinic/ClinicWhereUniqueInput";
import { DentalProcedurePriceCreateNestedManyWithoutDentalProceduresInput } from "./DentalProcedurePriceCreateNestedManyWithoutDentalProceduresInput";
import { InvoiceItemCreateNestedManyWithoutDentalProceduresInput } from "./InvoiceItemCreateNestedManyWithoutDentalProceduresInput";

export type DentalProcedureCreateInput = {
  active: boolean;
  basePrice: number;
  clinic: ClinicWhereUniqueInput;
  code: string;
  dentalProcedurePrice?: DentalProcedurePriceCreateNestedManyWithoutDentalProceduresInput;
  description?: string | null;
  invoiceItem?: InvoiceItemCreateNestedManyWithoutDentalProceduresInput;
  name: string;
  updatedAt: Date;
};
