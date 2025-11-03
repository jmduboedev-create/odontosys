import { DentalProcedurePriceCreateNestedManyWithoutHealthInsurancesInput } from "./DentalProcedurePriceCreateNestedManyWithoutHealthInsurancesInput";

export type HealthInsuranceCreateInput = {
  code: string;
  contact?: string | null;
  dentalProcedurePrice?: DentalProcedurePriceCreateNestedManyWithoutHealthInsurancesInput;
  name: string;
  observations?: string | null;
  phone?: string | null;
  updatedAt: Date;
};
