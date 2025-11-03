import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ODONTOGRAM_TITLE_FIELD } from "./OdontogramTitle";
import { PATIENT_TITLE_FIELD } from "../patient/PatientTitle";

export const OdontogramShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Patient" source="patient.id" reference="Patient">
          <TextField source={PATIENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceManyField
          reference="OdontogramEntry"
          target="odontogramId"
          label="OdontogramEntries"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Color" source="color" />
            <TextField label="Condition Type" source="conditionType" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Notes" source="notes" />
            <ReferenceField
              label="Odontogram"
              source="odontogram.id"
              reference="Odontogram"
            >
              <TextField source={ODONTOGRAM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Surface" source="surface" />
            <TextField label="Tooth" source="tooth" />
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
