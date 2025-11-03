import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { OdontogramEntryListRelationFilter } from "../odontogramEntry/OdontogramEntryListRelationFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type OdontogramWhereInput = {
  createdAt?: DateTimeFilter;
  id?: IntFilter;
  odontogramEntry?: OdontogramEntryListRelationFilter;
  patient?: PatientWhereUniqueInput;
  updatedAt?: DateTimeFilter;
};
