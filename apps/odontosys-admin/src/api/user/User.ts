import { AuditLog } from "../auditLog/AuditLog";
import { Clinic } from "../clinic/Clinic";
import { Professional } from "../professional/Professional";
import { RefreshToken } from "../refreshToken/RefreshToken";

export type User = {
  active: boolean;
  auditLog?: Array<AuditLog>;
  clinic?: Clinic | null;
  createdAt: Date;
  firstName: string | null;
  id: number;
  lastName: string | null;
  password: string;
  professional?: Professional | null;
  refreshToken?: Array<RefreshToken>;
  role?:
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
