import { MedicalRecord as TMedicalRecord } from "../api/medicalRecord/MedicalRecord";

export const MEDICALRECORD_TITLE_FIELD = "allergies";

export const MedicalRecordTitle = (record: TMedicalRecord): string => {
  return record.allergies?.toString() || String(record.id);
};
