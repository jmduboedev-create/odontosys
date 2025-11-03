import { DentalProcedurePriceWhereInput } from "./DentalProcedurePriceWhereInput";
import { DentalProcedurePriceOrderByInput } from "./DentalProcedurePriceOrderByInput";

export type DentalProcedurePriceFindManyArgs = {
  where?: DentalProcedurePriceWhereInput;
  orderBy?: Array<DentalProcedurePriceOrderByInput>;
  skip?: number;
  take?: number;
};
