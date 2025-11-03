import { ClinicWhereUniqueInput } from "../clinic/ClinicWhereUniqueInput";
import { MessageCreateNestedManyWithoutAppointmentsInput } from "./MessageCreateNestedManyWithoutAppointmentsInput";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { ProfessionalWhereUniqueInput } from "../professional/ProfessionalWhereUniqueInput";

export type AppointmentCreateInput = {
  clinic?: ClinicWhereUniqueInput | null;
  endTime: Date;
  message?: MessageCreateNestedManyWithoutAppointmentsInput;
  notes?: string | null;
  patient: PatientWhereUniqueInput;
  professional: ProfessionalWhereUniqueInput;
  reason?: string | null;
  startTime: Date;
  status: "SCHEDULED" | "CONFIRMED" | "CANCELLED" | "COMPLETED" | "NO_SHOW";
  updatedAt: Date;
};
