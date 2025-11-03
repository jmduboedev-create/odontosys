import { DentalProcedureWhereInput } from "./DentalProcedureWhereInput";
import { DentalProcedureOrderByInput } from "./DentalProcedureOrderByInput";

export type DentalProcedureFindManyArgs = {
  where?: DentalProcedureWhereInput;
  orderBy?: Array<DentalProcedureOrderByInput>;
  skip?: number;
  take?: number;
};
