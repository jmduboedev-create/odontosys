import { OdontogramEntryWhereInput } from "./OdontogramEntryWhereInput";
import { OdontogramEntryOrderByInput } from "./OdontogramEntryOrderByInput";

export type OdontogramEntryFindManyArgs = {
  where?: OdontogramEntryWhereInput;
  orderBy?: Array<OdontogramEntryOrderByInput>;
  skip?: number;
  take?: number;
};
