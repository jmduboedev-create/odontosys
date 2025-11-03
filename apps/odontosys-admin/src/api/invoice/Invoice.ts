import { Clinic } from "../clinic/Clinic";
import { InvoiceItem } from "../invoiceItem/InvoiceItem";
import { Patient } from "../patient/Patient";
import { Payment } from "../payment/Payment";

export type Invoice = {
  clinic?: Clinic | null;
  createdAt: Date;
  date: Date;
  id: number;
  invoiceItem?: Array<InvoiceItem>;
  notes: string | null;
  patient?: Patient;
  payment?: Array<Payment>;
  status?: "PENDING" | "PAID" | "CANCELLED";
  totalAmount: number;
  updatedAt: Date;
};
