import { AppointmentUpdateManyWithoutClinicsInput } from "./AppointmentUpdateManyWithoutClinicsInput";
import { DentalProcedureUpdateManyWithoutClinicsInput } from "./DentalProcedureUpdateManyWithoutClinicsInput";
import { InvoiceUpdateManyWithoutClinicsInput } from "./InvoiceUpdateManyWithoutClinicsInput";
import { PatientUpdateManyWithoutClinicsInput } from "./PatientUpdateManyWithoutClinicsInput";
import { ProfessionalUpdateManyWithoutClinicsInput } from "./ProfessionalUpdateManyWithoutClinicsInput";
import { UserUpdateManyWithoutClinicsInput } from "./UserUpdateManyWithoutClinicsInput";

export type ClinicUpdateInput = {
  address?: string | null;
  appointment?: AppointmentUpdateManyWithoutClinicsInput;
  dentalProcedure?: DentalProcedureUpdateManyWithoutClinicsInput;
  email?: string | null;
  invoice?: InvoiceUpdateManyWithoutClinicsInput;
  logoUrl?: string | null;
  name?: string;
  patient?: PatientUpdateManyWithoutClinicsInput;
  phone?: string | null;
  professional?: ProfessionalUpdateManyWithoutClinicsInput;
  updatedAt?: Date;
  user?: UserUpdateManyWithoutClinicsInput;
};
