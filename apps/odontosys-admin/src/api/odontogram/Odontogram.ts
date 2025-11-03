import { OdontogramEntry } from "../odontogramEntry/OdontogramEntry";
import { Patient } from "../patient/Patient";

export type Odontogram = {
  createdAt: Date;
  id: number;
  odontogramEntry?: Array<OdontogramEntry>;
  patient?: Patient;
  updatedAt: Date;
};
