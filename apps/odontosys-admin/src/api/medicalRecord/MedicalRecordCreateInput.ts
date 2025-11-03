import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type MedicalRecordCreateInput = {
  allergies?: string | null;
  bloodType?: string | null;
  conditions?: string | null;
  medicines?: string | null;
  observations?: string | null;
  patient: PatientWhereUniqueInput;
  updatedAt: Date;
};
