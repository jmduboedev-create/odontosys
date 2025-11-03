import { HealthInsuranceWhereInput } from "./HealthInsuranceWhereInput";
import { HealthInsuranceOrderByInput } from "./HealthInsuranceOrderByInput";

export type HealthInsuranceFindManyArgs = {
  where?: HealthInsuranceWhereInput;
  orderBy?: Array<HealthInsuranceOrderByInput>;
  skip?: number;
  take?: number;
};
