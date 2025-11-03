import { AppointmentUpdateManyWithoutProfessionalsInput } from "./AppointmentUpdateManyWithoutProfessionalsInput";
import { ClinicWhereUniqueInput } from "../clinic/ClinicWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfessionalUpdateInput = {
  active?: boolean;
  appointment?: AppointmentUpdateManyWithoutProfessionalsInput;
  clinic?: ClinicWhereUniqueInput | null;
  email?: string | null;
  fullName?: string;
  license?: string | null;
  phone?: string | null;
  speciality?: string | null;
  updatedAt?: Date;
  user?: UserWhereUniqueInput | null;
};
