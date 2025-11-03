import { DentalProcedure } from "../dentalProcedure/DentalProcedure";
import { HealthInsurance } from "../healthInsurance/HealthInsurance";

export type DentalProcedurePrice = {
  createdAt: Date;
  dentalProcedure?: DentalProcedure;
  healthInsurance?: HealthInsurance;
  id: number;
  price: number;
  updatedAt: Date;
};
