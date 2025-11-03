import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { PatientTitle } from "../patient/PatientTitle";

export const MedicalRecordEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Allergies" source="allergies" />
        <TextInput label="Blood Type" source="bloodType" />
        <TextInput label="Conditions" source="conditions" />
        <TextInput label="Medicines" source="medicines" />
        <TextInput label="Observations" source="observations" />
        <ReferenceInput source="patient.id" reference="Patient" label="Patient">
          <SelectInput optionText={PatientTitle} />
        </ReferenceInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};
