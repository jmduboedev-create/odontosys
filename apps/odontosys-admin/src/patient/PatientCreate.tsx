import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AppointmentTitle } from "../appointment/AppointmentTitle";
import { ClinicTitle } from "../clinic/ClinicTitle";
import { InvoiceTitle } from "../invoice/InvoiceTitle";
import { MedicalRecordTitle } from "../medicalRecord/MedicalRecordTitle";
import { MessageTitle } from "../message/MessageTitle";
import { OdontogramTitle } from "../odontogram/OdontogramTitle";

export const PatientCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <ReferenceArrayInput source="appointment" reference="Appointment">
          <SelectArrayInput
            optionText={AppointmentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <DateTimeInput label="Birth Date" source="birthDate" />
        <ReferenceInput source="clinic.id" reference="Clinic" label="Clinic">
          <SelectInput optionText={ClinicTitle} />
        </ReferenceInput>
        <TextInput label="Dni" source="dni" />
        <TextInput label="Email" source="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Gender" source="gender" />
        <ReferenceArrayInput source="invoice" reference="Invoice">
          <SelectArrayInput
            optionText={InvoiceTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Last Name" source="lastName" />
        <ReferenceInput
          source="medicalRecord.id"
          reference="MedicalRecord"
          label="Medical Record"
        >
          <SelectInput optionText={MedicalRecordTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="message" reference="Message">
          <SelectArrayInput
            optionText={MessageTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="odontogram.id"
          reference="Odontogram"
          label="Odontogram"
        >
          <SelectInput optionText={OdontogramTitle} />
        </ReferenceInput>
        <TextInput label="Phone" source="phone" />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
