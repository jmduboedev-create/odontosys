import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
  ReferenceInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const AuditLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="action"
          label="Action"
          choices={[
            { label: "INSERT", value: "INSERT" },
            { label: "UPDATE", value: "UPDATE" },
            { label: "DELETE", value: "DELETE" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Field Field" source="fieldField" />
        <div />
        <div />
        <TextInput label="Record Id" source="recordId" />
        <TextInput label="Table Name" source="tableName" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
