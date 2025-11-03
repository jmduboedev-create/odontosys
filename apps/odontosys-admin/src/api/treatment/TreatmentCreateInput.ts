import { InvoiceItemCreateNestedManyWithoutTreatmentsInput } from "./InvoiceItemCreateNestedManyWithoutTreatmentsInput";

export type TreatmentCreateInput = {
  appointmentId?: number | null;
  clinicId?: number | null;
  cost?: number | null;
  date?: Date | null;
  invoiceId?: number | null;
  invoiceItem?: InvoiceItemCreateNestedManyWithoutTreatmentsInput;
  observations?: string | null;
  patientId: number;
  procedureName: string;
  professionalId: number;
  status: "PLANNED" | "IN_PROGRESS" | "DONE" | "CANCELLED";
  surface?: string | null;
  tooth?: string | null;
  updatedAt: Date;
};
