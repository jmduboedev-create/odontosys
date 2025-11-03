import { AppointmentCreateNestedManyWithoutPatientsInput } from "./AppointmentCreateNestedManyWithoutPatientsInput";
import { ClinicWhereUniqueInput } from "../clinic/ClinicWhereUniqueInput";
import { InvoiceCreateNestedManyWithoutPatientsInput } from "./InvoiceCreateNestedManyWithoutPatientsInput";
import { MedicalRecordWhereUniqueInput } from "../medicalRecord/MedicalRecordWhereUniqueInput";
import { MessageCreateNestedManyWithoutPatientsInput } from "./MessageCreateNestedManyWithoutPatientsInput";
import { OdontogramWhereUniqueInput } from "../odontogram/OdontogramWhereUniqueInput";

export type PatientCreateInput = {
  address?: string | null;
  appointment?: AppointmentCreateNestedManyWithoutPatientsInput;
  birthDate?: Date | null;
  clinic?: ClinicWhereUniqueInput | null;
  dni?: string | null;
  email?: string | null;
  firstName: string;
  gender?: string | null;
  invoice?: InvoiceCreateNestedManyWithoutPatientsInput;
  lastName: string;
  medicalRecord?: MedicalRecordWhereUniqueInput | null;
  message?: MessageCreateNestedManyWithoutPatientsInput;
  odontogram?: OdontogramWhereUniqueInput | null;
  phone?: string | null;
  updatedAt: Date;
};
