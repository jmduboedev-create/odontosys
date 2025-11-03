import { Appointment } from "../appointment/Appointment";
import { Clinic } from "../clinic/Clinic";
import { Invoice } from "../invoice/Invoice";
import { MedicalRecord } from "../medicalRecord/MedicalRecord";
import { Message } from "../message/Message";
import { Odontogram } from "../odontogram/Odontogram";

export type Patient = {
  address: string | null;
  appointment?: Array<Appointment>;
  birthDate: Date | null;
  clinic?: Clinic | null;
  createdAt: Date;
  dni: string | null;
  email: string | null;
  firstName: string;
  gender: string | null;
  id: number;
  invoice?: Array<Invoice>;
  lastName: string;
  medicalRecord?: MedicalRecord | null;
  message?: Array<Message>;
  odontogram?: Odontogram | null;
  phone: string | null;
  updatedAt: Date;
};
