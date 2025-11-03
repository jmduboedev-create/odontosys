import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  clinicId?: SortOrder;
  createdAt?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  notes?: SortOrder;
  patientId?: SortOrder;
  professionalId?: SortOrder;
  reason?: SortOrder;
  startTime?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
