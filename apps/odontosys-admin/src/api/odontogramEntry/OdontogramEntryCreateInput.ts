import { OdontogramWhereUniqueInput } from "../odontogram/OdontogramWhereUniqueInput";

export type OdontogramEntryCreateInput = {
  color?: string | null;
  conditionType: string;
  notes?: string | null;
  odontogram: OdontogramWhereUniqueInput;
  surface?: string | null;
  tooth: string;
  updatedAt: Date;
};
