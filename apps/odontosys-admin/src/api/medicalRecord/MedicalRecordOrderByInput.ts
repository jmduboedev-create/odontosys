import { SortOrder } from "../../util/SortOrder";

export type MedicalRecordOrderByInput = {
  allergies?: SortOrder;
  bloodType?: SortOrder;
  conditions?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  medicines?: SortOrder;
  observations?: SortOrder;
  patientId?: SortOrder;
  updatedAt?: SortOrder;
};
