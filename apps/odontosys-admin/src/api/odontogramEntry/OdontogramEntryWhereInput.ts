import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { OdontogramWhereUniqueInput } from "../odontogram/OdontogramWhereUniqueInput";

export type OdontogramEntryWhereInput = {
  color?: StringNullableFilter;
  conditionType?: StringFilter;
  createdAt?: DateTimeFilter;
  id?: IntFilter;
  notes?: StringNullableFilter;
  odontogram?: OdontogramWhereUniqueInput;
  surface?: StringNullableFilter;
  tooth?: StringFilter;
  updatedAt?: DateTimeFilter;
};
