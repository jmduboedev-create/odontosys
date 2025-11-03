import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type MessageCreateInput = {
  appointment?: AppointmentWhereUniqueInput | null;
  channel: "WHATSAPP" | "EMAIL" | "SMS";
  content: string;
  errorField?: string | null;
  patient?: PatientWhereUniqueInput | null;
  sentAt?: Date | null;
  status: "PENDING" | "SENT" | "FAILED";
};
