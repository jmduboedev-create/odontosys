import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DentalProcedureWhereUniqueInput } from "../dentalProcedure/DentalProcedureWhereUniqueInput";
import { HealthInsuranceWhereUniqueInput } from "../healthInsurance/HealthInsuranceWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { FloatFilter } from "../../util/FloatFilter";

export type DentalProcedurePriceWhereInput = {
  createdAt?: DateTimeFilter;
  dentalProcedure?: DentalProcedureWhereUniqueInput;
  healthInsurance?: HealthInsuranceWhereUniqueInput;
  id?: IntFilter;
  price?: FloatFilter;
  updatedAt?: DateTimeFilter;
};
