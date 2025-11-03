import { Patient } from "../patient/Patient";

export type MedicalRecord = {
  allergies: string | null;
  bloodType: string | null;
  conditions: string | null;
  createdAt: Date;
  id: number;
  medicines: string | null;
  observations: string | null;
  patient?: Patient;
  updatedAt: Date;
};
