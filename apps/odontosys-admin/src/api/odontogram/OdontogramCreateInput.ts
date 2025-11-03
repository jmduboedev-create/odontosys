import { OdontogramEntryCreateNestedManyWithoutOdontogramsInput } from "./OdontogramEntryCreateNestedManyWithoutOdontogramsInput";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type OdontogramCreateInput = {
  odontogramEntry?: OdontogramEntryCreateNestedManyWithoutOdontogramsInput;
  patient: PatientWhereUniqueInput;
  updatedAt: Date;
};
