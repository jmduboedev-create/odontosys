import { Clinic } from "../clinic/Clinic";
import { Message } from "../message/Message";
import { Patient } from "../patient/Patient";
import { Professional } from "../professional/Professional";

export type Appointment = {
  clinic?: Clinic | null;
  createdAt: Date;
  endTime: Date;
  id: number;
  message?: Array<Message>;
  notes: string | null;
  patient?: Patient;
  professional?: Professional;
  reason: string | null;
  startTime: Date;
  status?: "SCHEDULED" | "CONFIRMED" | "CANCELLED" | "COMPLETED" | "NO_SHOW";
  updatedAt: Date;
};
