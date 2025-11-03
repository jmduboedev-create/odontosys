import { DentalProcedure as TDentalProcedure } from "../api/dentalProcedure/DentalProcedure";

export const DENTALPROCEDURE_TITLE_FIELD = "name";

export const DentalProcedureTitle = (record: TDentalProcedure): string => {
  return record.name?.toString() || String(record.id);
};
