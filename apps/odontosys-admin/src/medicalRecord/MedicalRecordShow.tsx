import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { PATIENT_TITLE_FIELD } from "../patient/PatientTitle";

export const MedicalRecordShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Allergies" source="allergies" />
        <TextField label="Blood Type" source="bloodType" />
        <TextField label="Conditions" source="conditions" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Medicines" source="medicines" />
        <TextField label="Observations" source="observations" />
        <ReferenceField label="Patient" source="patient.id" reference="Patient">
          <TextField source={PATIENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Updated At" source="updatedAt" />
      </SimpleShowLayout>
    </Show>
  );
};
