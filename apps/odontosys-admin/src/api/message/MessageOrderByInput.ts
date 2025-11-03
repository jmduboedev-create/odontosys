import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  appointmentId?: SortOrder;
  channel?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  errorField?: SortOrder;
  id?: SortOrder;
  patientId?: SortOrder;
  sentAt?: SortOrder;
  status?: SortOrder;
};
