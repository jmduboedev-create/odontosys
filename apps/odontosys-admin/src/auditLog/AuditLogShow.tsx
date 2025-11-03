import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const AuditLogShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Action" source="action" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Field Field" source="fieldField" />
        <TextField label="ID" source="id" />
        <TextField label="New Value" source="newValue" />
        <TextField label="Old Value" source="oldValue" />
        <TextField label="Record Id" source="recordId" />
        <TextField label="Table Name" source="tableName" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
