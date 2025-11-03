import { HealthInsurance as THealthInsurance } from "../api/healthInsurance/HealthInsurance";

export const HEALTHINSURANCE_TITLE_FIELD = "name";

export const HealthInsuranceTitle = (record: THealthInsurance): string => {
  return record.name?.toString() || String(record.id);
};
