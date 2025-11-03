import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DentalProcedureListRelationFilter } from "../dentalProcedure/DentalProcedureListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { InvoiceListRelationFilter } from "../invoice/InvoiceListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { PatientListRelationFilter } from "../patient/PatientListRelationFilter";
import { ProfessionalListRelationFilter } from "../professional/ProfessionalListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type ClinicWhereInput = {
  address?: StringNullableFilter;
  appointment?: AppointmentListRelationFilter;
  createdAt?: DateTimeFilter;
  dentalProcedure?: DentalProcedureListRelationFilter;
  email?: StringNullableFilter;
  id?: IntFilter;
  invoice?: InvoiceListRelationFilter;
  logoUrl?: StringNullableFilter;
  name?: StringFilter;
  patient?: PatientListRelationFilter;
  phone?: StringNullableFilter;
  professional?: ProfessionalListRelationFilter;
  updatedAt?: DateTimeFilter;
  user?: UserListRelationFilter;
};
