import { SortOrder } from "../../util/SortOrder";

export type PatientOrderByInput = {
  address?: SortOrder;
  birthDate?: SortOrder;
  clinicId?: SortOrder;
  createdAt?: SortOrder;
  dni?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  gender?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  medicalRecordId?: SortOrder;
  odontogramId?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
};
