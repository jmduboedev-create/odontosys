import { InvoiceItem } from "../invoiceItem/InvoiceItem";

export type Treatment = {
  appointmentId: number | null;
  clinicId: number | null;
  cost: number | null;
  createdAt: Date;
  date: Date | null;
  id: number;
  invoiceId: number | null;
  invoiceItem?: Array<InvoiceItem>;
  observations: string | null;
  patientId: number;
  procedureName: string;
  professionalId: number;
  status?: "PLANNED" | "IN_PROGRESS" | "DONE" | "CANCELLED";
  surface: string | null;
  tooth: string | null;
  updatedAt: Date;
};
