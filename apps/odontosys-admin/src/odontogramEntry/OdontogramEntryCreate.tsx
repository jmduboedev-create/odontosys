import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { OdontogramTitle } from "../odontogram/OdontogramTitle";

export const OdontogramEntryCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Color" source="color" />
        <TextInput label="Condition Type" source="conditionType" />
        <TextInput label="Notes" source="notes" />
        <ReferenceInput
          source="odontogram.id"
          reference="Odontogram"
          label="Odontogram"
        >
          <SelectInput optionText={OdontogramTitle} />
        </ReferenceInput>
        <TextInput label="Surface" source="surface" />
        <TextInput label="Tooth" source="tooth" />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
