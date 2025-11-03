import { Clinic } from "../clinic/Clinic";
import { DentalProcedurePrice } from "../dentalProcedurePrice/DentalProcedurePrice";
import { InvoiceItem } from "../invoiceItem/InvoiceItem";

export type DentalProcedure = {
  active: boolean;
  basePrice: number;
  clinic?: Clinic;
  code: string;
  createdAt: Date;
  dentalProcedurePrice?: Array<DentalProcedurePrice>;
  description: string | null;
  id: number;
  invoiceItem?: Array<InvoiceItem>;
  name: string;
  updatedAt: Date;
};
