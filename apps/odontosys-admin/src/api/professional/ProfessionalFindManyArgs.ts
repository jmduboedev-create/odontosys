import { ProfessionalWhereInput } from "./ProfessionalWhereInput";
import { ProfessionalOrderByInput } from "./ProfessionalOrderByInput";

export type ProfessionalFindManyArgs = {
  where?: ProfessionalWhereInput;
  orderBy?: Array<ProfessionalOrderByInput>;
  skip?: number;
  take?: number;
};
