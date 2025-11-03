import { ClinicWhereUniqueInput } from "../clinic/ClinicWhereUniqueInput";
import { MessageUpdateManyWithoutAppointmentsInput } from "./MessageUpdateManyWithoutAppointmentsInput";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { ProfessionalWhereUniqueInput } from "../professional/ProfessionalWhereUniqueInput";

export type AppointmentUpdateInput = {
  clinic?: ClinicWhereUniqueInput | null;
  endTime?: Date;
  message?: MessageUpdateManyWithoutAppointmentsInput;
  notes?: string | null;
  patient?: PatientWhereUniqueInput;
  professional?: ProfessionalWhereUniqueInput;
  reason?: string | null;
  startTime?: Date;
  status?: "SCHEDULED" | "CONFIRMED" | "CANCELLED" | "COMPLETED" | "NO_SHOW";
  updatedAt?: Date;
};
