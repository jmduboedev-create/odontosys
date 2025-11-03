import { AuditLogUpdateManyWithoutUsersInput } from "./AuditLogUpdateManyWithoutUsersInput";
import { ClinicWhereUniqueInput } from "../clinic/ClinicWhereUniqueInput";
import { ProfessionalWhereUniqueInput } from "../professional/ProfessionalWhereUniqueInput";
import { RefreshTokenUpdateManyWithoutUsersInput } from "./RefreshTokenUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  active?: boolean;
  auditLog?: AuditLogUpdateManyWithoutUsersInput;
  clinic?: ClinicWhereUniqueInput | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  professional?: ProfessionalWhereUniqueInput | null;
  refreshToken?: RefreshTokenUpdateManyWithoutUsersInput;
  role?:
    | "ADMIN"
    | "PROFESSIONAL"
    | "RECEPTIONIST"
    | "VIEWER"
    | "DENTIST"
    | "ASSISTANT"
    | "DOCTOR"
    | "USER";
  updatedAt?: Date;
  username?: string;
};
