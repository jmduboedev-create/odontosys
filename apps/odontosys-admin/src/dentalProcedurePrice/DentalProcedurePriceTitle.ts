import { DentalProcedurePrice as TDentalProcedurePrice } from "../api/dentalProcedurePrice/DentalProcedurePrice";

export const DENTALPROCEDUREPRICE_TITLE_FIELD = "id";

export const DentalProcedurePriceTitle = (
  record: TDentalProcedurePrice
): string => {
  return record.id?.toString() || String(record.id);
};
