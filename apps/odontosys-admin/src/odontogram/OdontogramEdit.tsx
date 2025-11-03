import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { OdontogramEntryTitle } from "../odontogramEntry/OdontogramEntryTitle";
import { PatientTitle } from "../patient/PatientTitle";

export const OdontogramEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="odontogramEntry"
          reference="OdontogramEntry"
        >
          <SelectArrayInput
            optionText={OdontogramEntryTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput source="patient.id" reference="Patient" label="Patient">
          <SelectInput optionText={PatientTitle} />
        </ReferenceInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};
