import { ClinicWhereUniqueInput } from "../clinic/ClinicWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { ProfessionalWhereUniqueInput } from "../professional/ProfessionalWhereUniqueInput";

export type AppointmentWhereInput = {
  clinic?: ClinicWhereUniqueInput;
  createdAt?: DateTimeFilter;
  endTime?: DateTimeFilter;
  id?: IntFilter;
  message?: MessageListRelationFilter;
  notes?: StringNullableFilter;
  patient?: PatientWhereUniqueInput;
  professional?: ProfessionalWhereUniqueInput;
  reason?: StringNullableFilter;
  startTime?: DateTimeFilter;
  status?: "SCHEDULED" | "CONFIRMED" | "CANCELLED" | "COMPLETED" | "NO_SHOW";
  updatedAt?: DateTimeFilter;
};
