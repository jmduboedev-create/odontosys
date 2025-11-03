import { DentalProcedureWhereUniqueInput } from "../dentalProcedure/DentalProcedureWhereUniqueInput";
import { HealthInsuranceWhereUniqueInput } from "../healthInsurance/HealthInsuranceWhereUniqueInput";

export type DentalProcedurePriceUpdateInput = {
  dentalProcedure?: DentalProcedureWhereUniqueInput;
  healthInsurance?: HealthInsuranceWhereUniqueInput;
  price?: number;
  updatedAt?: Date;
};
