import { OdontogramEntryUpdateManyWithoutOdontogramsInput } from "./OdontogramEntryUpdateManyWithoutOdontogramsInput";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type OdontogramUpdateInput = {
  odontogramEntry?: OdontogramEntryUpdateManyWithoutOdontogramsInput;
  patient?: PatientWhereUniqueInput;
  updatedAt?: Date;
};
