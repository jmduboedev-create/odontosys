import { BooleanFilter } from "../../util/BooleanFilter";
import { AuditLogListRelationFilter } from "../auditLog/AuditLogListRelationFilter";
import { ClinicWhereUniqueInput } from "../clinic/ClinicWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProfessionalWhereUniqueInput } from "../professional/ProfessionalWhereUniqueInput";
import { RefreshTokenListRelationFilter } from "../refreshToken/RefreshTokenListRelationFilter";

export type UserWhereInput = {
  active?: BooleanFilter;
  auditLog?: AuditLogListRelationFilter;
  clinic?: ClinicWhereUniqueInput;
  createdAt?: DateTimeFilter;
  firstName?: StringNullableFilter;
  id?: IntFilter;
  lastName?: StringNullableFilter;
  password?: StringFilter;
  professional?: ProfessionalWhereUniqueInput;
  refreshToken?: RefreshTokenListRelationFilter;
  role?:
    | "ADMIN"
    | "PROFESSIONAL"
    | "RECEPTIONIST"
    | "VIEWER"
    | "DENTIST"
    | "ASSISTANT"
    | "DOCTOR"
    | "USER";
  updatedAt?: DateTimeFilter;
  username?: StringFilter;
};
