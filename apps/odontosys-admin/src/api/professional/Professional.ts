import { Appointment } from "../appointment/Appointment";
import { Clinic } from "../clinic/Clinic";
import { User } from "../user/User";

export type Professional = {
  active: boolean;
  appointment?: Array<Appointment>;
  clinic?: Clinic | null;
  createdAt: Date;
  email: string | null;
  fullName: string;
  id: number;
  license: string | null;
  phone: string | null;
  speciality: string | null;
  updatedAt: Date;
  user?: User | null;
};
