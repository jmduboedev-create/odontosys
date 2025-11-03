import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MessageWhereInput = {
  appointment?: AppointmentWhereUniqueInput;
  channel?: "WHATSAPP" | "EMAIL" | "SMS";
  content?: StringFilter;
  createdAt?: DateTimeFilter;
  errorField?: StringNullableFilter;
  id?: IntFilter;
  patient?: PatientWhereUniqueInput;
  sentAt?: DateTimeNullableFilter;
  status?: "PENDING" | "SENT" | "FAILED";
};
