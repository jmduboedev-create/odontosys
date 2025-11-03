import { AuditLogCreateNestedManyWithoutUsersInput } from "./AuditLogCreateNestedManyWithoutUsersInput";
import { ClinicWhereUniqueInput } from "../clinic/ClinicWhereUniqueInput";
import { ProfessionalWhereUniqueInput } from "../professional/ProfessionalWhereUniqueInput";
import { RefreshTokenCreateNestedManyWithoutUsersInput } from "./RefreshTokenCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  active: boolean;
  auditLog?: AuditLogCreateNestedManyWithoutUsersInput;
  clinic?: ClinicWhereUniqueInput | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  professional?: ProfessionalWhereUniqueInput | null;
  refreshToken?: RefreshTokenCreateNestedManyWithoutUsersInput;
  role:
    | "ADMIN"
    | "PROFESSIONAL"
    | "RECEPTIONIST"
    | "VIEWER"
    | "DENTIST"
    | "ASSISTANT"
    | "DOCTOR"
    | "USER";
  updatedAt: Date;
  username: string;
};
