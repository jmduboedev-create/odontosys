import { SortOrder } from "../../util/SortOrder";

export type TreatmentOrderByInput = {
  appointmentId?: SortOrder;
  clinicId?: SortOrder;
  cost?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  invoiceId?: SortOrder;
  observations?: SortOrder;
  patientId?: SortOrder;
  procedureName?: SortOrder;
  professionalId?: SortOrder;
  status?: SortOrder;
  surface?: SortOrder;
  tooth?: SortOrder;
  updatedAt?: SortOrder;
};
