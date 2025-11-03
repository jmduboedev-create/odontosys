import { Odontogram } from "../odontogram/Odontogram";

export type OdontogramEntry = {
  color: string | null;
  conditionType: string;
  createdAt: Date;
  id: number;
  notes: string | null;
  odontogram?: Odontogram;
  surface: string | null;
  tooth: string;
  updatedAt: Date;
};
