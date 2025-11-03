import { Appointment } from "../appointment/Appointment";
import { Patient } from "../patient/Patient";

export type Message = {
  appointment?: Appointment | null;
  channel?: "WHATSAPP" | "EMAIL" | "SMS";
  content: string;
  createdAt: Date;
  errorField: string | null;
  id: number;
  patient?: Patient | null;
  sentAt: Date | null;
  status?: "PENDING" | "SENT" | "FAILED";
};
