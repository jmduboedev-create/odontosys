import { AppointmentUpdateManyWithoutPatientsInput } from "./AppointmentUpdateManyWithoutPatientsInput";
import { ClinicWhereUniqueInput } from "../clinic/ClinicWhereUniqueInput";
import { InvoiceUpdateManyWithoutPatientsInput } from "./InvoiceUpdateManyWithoutPatientsInput";
import { MedicalRecordWhereUniqueInput } from "../medicalRecord/MedicalRecordWhereUniqueInput";
import { MessageUpdateManyWithoutPatientsInput } from "./MessageUpdateManyWithoutPatientsInput";
import { OdontogramWhereUniqueInput } from "../odontogram/OdontogramWhereUniqueInput";

export type PatientUpdateInput = {
  address?: string | null;
  appointment?: AppointmentUpdateManyWithoutPatientsInput;
  birthDate?: Date | null;
  clinic?: ClinicWhereUniqueInput | null;
  dni?: string | null;
  email?: string | null;
  firstName?: string;
  gender?: string | null;
  invoice?: InvoiceUpdateManyWithoutPatientsInput;
  lastName?: string;
  medicalRecord?: MedicalRecordWhereUniqueInput | null;
  message?: MessageUpdateManyWithoutPatientsInput;
  odontogram?: OdontogramWhereUniqueInput | null;
  phone?: string | null;
  updatedAt?: Date;
};
