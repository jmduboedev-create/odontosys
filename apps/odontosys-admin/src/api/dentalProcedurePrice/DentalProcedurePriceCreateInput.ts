import { DentalProcedureWhereUniqueInput } from "../dentalProcedure/DentalProcedureWhereUniqueInput";
import { HealthInsuranceWhereUniqueInput } from "../healthInsurance/HealthInsuranceWhereUniqueInput";

export type DentalProcedurePriceCreateInput = {
  dentalProcedure: DentalProcedureWhereUniqueInput;
  healthInsurance: HealthInsuranceWhereUniqueInput;
  price: number;
  updatedAt: Date;
};
