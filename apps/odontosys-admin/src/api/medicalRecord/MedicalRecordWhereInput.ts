import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type MedicalRecordWhereInput = {
  allergies?: StringNullableFilter;
  bloodType?: StringNullableFilter;
  conditions?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  id?: IntFilter;
  medicines?: StringNullableFilter;
  observations?: StringNullableFilter;
  patient?: PatientWhereUniqueInput;
  updatedAt?: DateTimeFilter;
};
