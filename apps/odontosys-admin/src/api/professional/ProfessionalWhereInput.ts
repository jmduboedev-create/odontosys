import { BooleanFilter } from "../../util/BooleanFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { ClinicWhereUniqueInput } from "../clinic/ClinicWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfessionalWhereInput = {
  active?: BooleanFilter;
  appointment?: AppointmentListRelationFilter;
  clinic?: ClinicWhereUniqueInput;
  createdAt?: DateTimeFilter;
  email?: StringNullableFilter;
  fullName?: StringFilter;
  id?: IntFilter;
  license?: StringNullableFilter;
  phone?: StringNullableFilter;
  speciality?: StringNullableFilter;
  updatedAt?: DateTimeFilter;
  user?: UserWhereUniqueInput;
};
