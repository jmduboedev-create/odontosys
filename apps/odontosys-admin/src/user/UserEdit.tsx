import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { AuditLogTitle } from "../auditLog/AuditLogTitle";
import { ClinicTitle } from "../clinic/ClinicTitle";
import { ProfessionalTitle } from "../professional/ProfessionalTitle";
import { RefreshTokenTitle } from "../refreshToken/RefreshTokenTitle";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Active" source="active" />
        <ReferenceArrayInput source="auditLog" reference="AuditLog">
          <SelectArrayInput
            optionText={AuditLogTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput source="clinic.id" reference="Clinic" label="Clinic">
          <SelectInput optionText={ClinicTitle} />
        </ReferenceInput>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Password" source="password" />
        <ReferenceInput
          source="professional.id"
          reference="Professional"
          label="Professional"
        >
          <SelectInput optionText={ProfessionalTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="refreshToken" reference="RefreshToken">
          <SelectArrayInput
            optionText={RefreshTokenTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <SelectInput
          source="role"
          label="Role"
          choices={[
            { label: "ADMIN", value: "ADMIN" },
            { label: "PROFESSIONAL", value: "PROFESSIONAL" },
            { label: "RECEPTIONIST", value: "RECEPTIONIST" },
            { label: "VIEWER", value: "VIEWER" },
            { label: "DENTIST", value: "DENTIST" },
            { label: "ASSISTANT", value: "ASSISTANT" },
            { label: "DOCTOR", value: "DOCTOR" },
            { label: "USER", value: "USER" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
