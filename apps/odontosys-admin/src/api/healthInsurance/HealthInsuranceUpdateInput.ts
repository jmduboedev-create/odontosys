import { DentalProcedurePriceUpdateManyWithoutHealthInsurancesInput } from "./DentalProcedurePriceUpdateManyWithoutHealthInsurancesInput";

export type HealthInsuranceUpdateInput = {
  code?: string;
  contact?: string | null;
  dentalProcedurePrice?: DentalProcedurePriceUpdateManyWithoutHealthInsurancesInput;
  name?: string;
  observations?: string | null;
  phone?: string | null;
  updatedAt?: Date;
};
