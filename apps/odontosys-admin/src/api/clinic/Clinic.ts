import { Appointment } from "../appointment/Appointment";
import { DentalProcedure } from "../dentalProcedure/DentalProcedure";
import { Invoice } from "../invoice/Invoice";
import { Patient } from "../patient/Patient";
import { Professional } from "../professional/Professional";
import { User } from "../user/User";

export type Clinic = {
  address: string | null;
  appointment?: Array<Appointment>;
  createdAt: Date;
  dentalProcedure?: Array<DentalProcedure>;
  email: string | null;
  id: number;
  invoice?: Array<Invoice>;
  logoUrl: string | null;
  name: string;
  patient?: Array<Patient>;
  phone: string | null;
  professional?: Array<Professional>;
  updatedAt: Date;
  user?: Array<User>;
};
