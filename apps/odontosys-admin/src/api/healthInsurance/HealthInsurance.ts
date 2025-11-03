import { DentalProcedurePrice } from "../dentalProcedurePrice/DentalProcedurePrice";

export type HealthInsurance = {
  code: string;
  contact: string | null;
  createdAt: Date;
  dentalProcedurePrice?: Array<DentalProcedurePrice>;
  id: number;
  name: string;
  observations: string | null;
  phone: string | null;
  updatedAt: Date;
};
