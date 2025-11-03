import { DentalProcedure } from "../dentalProcedure/DentalProcedure";
import { Invoice } from "../invoice/Invoice";
import { Treatment } from "../treatment/Treatment";

export type InvoiceItem = {
  createdAt: Date;
  dentalProcedure?: DentalProcedure | null;
  id: number;
  invoice?: Invoice;
  quantity: number;
  total: number;
  treatment?: Treatment | null;
  unitPrice: number;
  updatedAt: Date;
};
