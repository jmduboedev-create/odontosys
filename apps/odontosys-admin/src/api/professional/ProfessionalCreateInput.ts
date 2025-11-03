import { AppointmentCreateNestedManyWithoutProfessionalsInput } from "./AppointmentCreateNestedManyWithoutProfessionalsInput";
import { ClinicWhereUniqueInput } from "../clinic/ClinicWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfessionalCreateInput = {
  active: boolean;
  appointment?: AppointmentCreateNestedManyWithoutProfessionalsInput;
  clinic?: ClinicWhereUniqueInput | null;
  email?: string | null;
  fullName: string;
  license?: string | null;
  phone?: string | null;
  speciality?: string | null;
  updatedAt: Date;
  user?: UserWhereUniqueInput | null;
};
