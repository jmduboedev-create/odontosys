import { AppointmentCreateNestedManyWithoutClinicsInput } from "./AppointmentCreateNestedManyWithoutClinicsInput";
import { DentalProcedureCreateNestedManyWithoutClinicsInput } from "./DentalProcedureCreateNestedManyWithoutClinicsInput";
import { InvoiceCreateNestedManyWithoutClinicsInput } from "./InvoiceCreateNestedManyWithoutClinicsInput";
import { PatientCreateNestedManyWithoutClinicsInput } from "./PatientCreateNestedManyWithoutClinicsInput";
import { ProfessionalCreateNestedManyWithoutClinicsInput } from "./ProfessionalCreateNestedManyWithoutClinicsInput";
import { UserCreateNestedManyWithoutClinicsInput } from "./UserCreateNestedManyWithoutClinicsInput";

export type ClinicCreateInput = {
  address?: string | null;
  appointment?: AppointmentCreateNestedManyWithoutClinicsInput;
  dentalProcedure?: DentalProcedureCreateNestedManyWithoutClinicsInput;
  email?: string | null;
  invoice?: InvoiceCreateNestedManyWithoutClinicsInput;
  logoUrl?: string | null;
  name: string;
  patient?: PatientCreateNestedManyWithoutClinicsInput;
  phone?: string | null;
  professional?: ProfessionalCreateNestedManyWithoutClinicsInput;
  updatedAt: Date;
  user?: UserCreateNestedManyWithoutClinicsInput;
};
