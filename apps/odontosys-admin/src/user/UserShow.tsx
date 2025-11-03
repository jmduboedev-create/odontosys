import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { CLINIC_TITLE_FIELD } from "../clinic/ClinicTitle";
import { PROFESSIONAL_TITLE_FIELD } from "../professional/ProfessionalTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="Active" source="active" />
        <ReferenceField label="Clinic" source="clinic.id" reference="Clinic">
          <TextField source={CLINIC_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Password" source="password" />
        <ReferenceField
          label="Professional"
          source="professional.id"
          reference="Professional"
        >
          <TextField source={PROFESSIONAL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Role" source="role" />
        <TextField label="Updated At" source="updatedAt" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="AuditLog"
          target="userId"
          label="AuditLogs"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="RefreshToken"
          target="userId"
          label="RefreshTokens"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Expires At" source="expiresAt" />
            <TextField label="ID" source="id" />
            <TextField label="Token" source="token" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
