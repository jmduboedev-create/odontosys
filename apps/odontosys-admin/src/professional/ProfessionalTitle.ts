import { Professional as TProfessional } from "../api/professional/Professional";

export const PROFESSIONAL_TITLE_FIELD = "fullName";

export const ProfessionalTitle = (record: TProfessional): string => {
  return record.fullName?.toString() || String(record.id);
};
